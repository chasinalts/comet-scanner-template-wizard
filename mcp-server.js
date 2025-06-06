#!/usr/bin/env node

/**
 * Netlify MCP Server
 * A Model Context Protocol server for managing Netlify sites and deployments
 * Compatible with MCP clients like Claude, Cursor, Windsurf, etc.
 */

const { Server } = require('@modelcontextprotocol/sdk/server/index.js');
const { StdioServerTransport } = require('@modelcontextprotocol/sdk/server/stdio.js');
const { CallToolRequestSchema, ListToolsRequestSchema } = require('@modelcontextprotocol/sdk/types.js');
const { exec } = require('child_process');
const { promisify } = require('util');
const fs = require('fs').promises;
const path = require('path');

const execAsync = promisify(exec);

class NetlifyMCPServer {
  constructor() {
    this.server = new Server(
      {
        name: 'netlify-mcp-server',
        version: '1.0.0',
      },
      {
        capabilities: {
          tools: {},
        },
      }
    );

    this.setupToolHandlers();
    this.setupErrorHandling();
  }

  setupErrorHandling() {
    this.server.onerror = (error) => {
      console.error('[MCP Error]', error);
    };

    process.on('SIGINT', async () => {
      await this.server.close();
      process.exit(0);
    });
  }

  setupToolHandlers() {
    // List available tools
    this.server.setRequestHandler(ListToolsRequestSchema, async () => {
      return {
        tools: [
          {
            name: 'netlify_deploy',
            description: 'Deploy the current project to Netlify',
            inputSchema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  description: 'Deployment message',
                  default: 'Deploy from MCP'
                },
                prod: {
                  type: 'boolean',
                  description: 'Deploy to production (default: false for draft)',
                  default: false
                },
                dir: {
                  type: 'string',
                  description: 'Directory to deploy (default: out)',
                  default: 'out'
                }
              }
            }
          },
          {
            name: 'netlify_status',
            description: 'Get Netlify account and site status',
            inputSchema: {
              type: 'object',
              properties: {}
            }
          },
          {
            name: 'netlify_sites_list',
            description: 'List all Netlify sites in your account',
            inputSchema: {
              type: 'object',
              properties: {
                filter: {
                  type: 'string',
                  description: 'Filter sites by name or URL',
                  default: ''
                }
              }
            }
          },
          {
            name: 'netlify_site_info',
            description: 'Get detailed information about a specific site',
            inputSchema: {
              type: 'object',
              properties: {
                siteId: {
                  type: 'string',
                  description: 'Site ID or site name'
                }
              },
              required: ['siteId']
            }
          },
          {
            name: 'netlify_build',
            description: 'Build the project locally using Netlify build environment',
            inputSchema: {
              type: 'object',
              properties: {
                context: {
                  type: 'string',
                  description: 'Build context (production, deploy-preview, branch-deploy)',
                  default: 'production'
                }
              }
            }
          },
          {
            name: 'netlify_env_set',
            description: 'Set environment variables for a Netlify site',
            inputSchema: {
              type: 'object',
              properties: {
                key: {
                  type: 'string',
                  description: 'Environment variable key'
                },
                value: {
                  type: 'string',
                  description: 'Environment variable value'
                },
                context: {
                  type: 'string',
                  description: 'Context for the variable (all, production, deploy-preview, branch-deploy)',
                  default: 'all'
                }
              },
              required: ['key', 'value']
            }
          },
          {
            name: 'netlify_env_list',
            description: 'List environment variables for the current site',
            inputSchema: {
              type: 'object',
              properties: {
                context: {
                  type: 'string',
                  description: 'Context to filter variables (all, production, deploy-preview, branch-deploy)',
                  default: 'all'
                }
              }
            }
          },
          {
            name: 'netlify_functions_list',
            description: 'List Netlify functions for the current site',
            inputSchema: {
              type: 'object',
              properties: {}
            }
          },
          {
            name: 'netlify_logs',
            description: 'Get function logs from Netlify',
            inputSchema: {
              type: 'object',
              properties: {
                functionName: {
                  type: 'string',
                  description: 'Name of the function to get logs for'
                },
                lines: {
                  type: 'number',
                  description: 'Number of log lines to retrieve',
                  default: 100
                }
              }
            }
          }
        ]
      };
    });

    // Handle tool calls
    this.server.setRequestHandler(CallToolRequestSchema, async (request) => {
      const { name, arguments: args } = request.params;

      try {
        switch (name) {
          case 'netlify_deploy':
            return await this.handleDeploy(args);
          case 'netlify_status':
            return await this.handleStatus(args);
          case 'netlify_sites_list':
            return await this.handleSitesList(args);
          case 'netlify_site_info':
            return await this.handleSiteInfo(args);
          case 'netlify_build':
            return await this.handleBuild(args);
          case 'netlify_env_set':
            return await this.handleEnvSet(args);
          case 'netlify_env_list':
            return await this.handleEnvList(args);
          case 'netlify_functions_list':
            return await this.handleFunctionsList(args);
          case 'netlify_logs':
            return await this.handleLogs(args);
          default:
            throw new Error(`Unknown tool: ${name}`);
        }
      } catch (error) {
        return {
          content: [
            {
              type: 'text',
              text: `Error executing ${name}: ${error.message}`
            }
          ],
          isError: true
        };
      }
    });
  }

  async executeNetlifyCommand(command, args = []) {
    const fullCommand = `netlify ${command} ${args.join(' ')}`;
    console.log(`[MCP] Executing: ${fullCommand}`);
    
    try {
      const { stdout, stderr } = await execAsync(fullCommand, {
        cwd: process.cwd(),
        env: { ...process.env }
      });
      
      if (stderr && !stderr.includes('Warning')) {
        console.warn(`[MCP] Warning: ${stderr}`);
      }
      
      return stdout;
    } catch (error) {
      throw new Error(`Netlify CLI error: ${error.message}`);
    }
  }

  async handleDeploy(args) {
    const { message = 'Deploy from MCP', prod = false, dir = 'out' } = args;
    
    // Check if build directory exists
    try {
      await fs.access(path.join(process.cwd(), dir));
    } catch {
      throw new Error(`Build directory '${dir}' not found. Please run 'npm run build' first.`);
    }

    const deployArgs = [
      '--dir', dir,
      '--message', `"${message}"`
    ];
    
    if (prod) {
      deployArgs.push('--prod');
    }

    const output = await this.executeNetlifyCommand('deploy', deployArgs);
    
    return {
      content: [
        {
          type: 'text',
          text: `✅ Deployment ${prod ? 'to production' : 'draft'} completed successfully!\n\n${output}`
        }
      ]
    };
  }

  async handleStatus(args) {
    const output = await this.executeNetlifyCommand('status');
    
    return {
      content: [
        {
          type: 'text',
          text: `📊 Netlify Status:\n\n${output}`
        }
      ]
    };
  }

  async handleSitesList(args) {
    const { filter = '' } = args;
    const output = await this.executeNetlifyCommand('sites:list');
    
    let result = output;
    if (filter) {
      const lines = output.split('\n');
      const filteredLines = lines.filter(line => 
        line.toLowerCase().includes(filter.toLowerCase())
      );
      result = filteredLines.join('\n');
    }
    
    return {
      content: [
        {
          type: 'text',
          text: `🌐 Netlify Sites:\n\n${result}`
        }
      ]
    };
  }

  async handleSiteInfo(args) {
    const { siteId } = args;
    const output = await this.executeNetlifyCommand('api', ['getSite', '--data', `{"site_id":"${siteId}"}`]);
    
    return {
      content: [
        {
          type: 'text',
          text: `ℹ️ Site Information:\n\n${output}`
        }
      ]
    };
  }

  async handleBuild(args) {
    const { context = 'production' } = args;
    const buildArgs = ['--context', context];
    
    const output = await this.executeNetlifyCommand('build', buildArgs);
    
    return {
      content: [
        {
          type: 'text',
          text: `🔨 Build completed for context '${context}':\n\n${output}`
        }
      ]
    };
  }

  async handleEnvSet(args) {
    const { key, value, context = 'all' } = args;
    const envArgs = ['env:set', key, value, '--context', context];
    
    const output = await this.executeNetlifyCommand('', envArgs);
    
    return {
      content: [
        {
          type: 'text',
          text: `🔧 Environment variable '${key}' set for context '${context}':\n\n${output}`
        }
      ]
    };
  }

  async handleEnvList(args) {
    const { context = 'all' } = args;
    const envArgs = ['env:list'];
    
    if (context !== 'all') {
      envArgs.push('--context', context);
    }
    
    const output = await this.executeNetlifyCommand('', envArgs);
    
    return {
      content: [
        {
          type: 'text',
          text: `📋 Environment Variables (${context}):\n\n${output}`
        }
      ]
    };
  }

  async handleFunctionsList(args) {
    const output = await this.executeNetlifyCommand('functions:list');
    
    return {
      content: [
        {
          type: 'text',
          text: `⚡ Netlify Functions:\n\n${output}`
        }
      ]
    };
  }

  async handleLogs(args) {
    const { functionName, lines = 100 } = args;
    const logArgs = ['logs:function', functionName, '--lines', lines.toString()];
    
    const output = await this.executeNetlifyCommand('', logArgs);
    
    return {
      content: [
        {
          type: 'text',
          text: `📜 Function Logs (${functionName}):\n\n${output}`
        }
      ]
    };
  }

  async run() {
    const transport = new StdioServerTransport();
    await this.server.connect(transport);
    console.error('Netlify MCP Server running on stdio');
  }
}

// Start the server
if (require.main === module) {
  const server = new NetlifyMCPServer();
  server.run().catch(console.error);
}

module.exports = NetlifyMCPServer;