#!/usr/bin/env node

/**
 * Test script for Netlify MCP Server
 * This script helps verify that the MCP server is working correctly
 */

const { spawn } = require('child_process');
const readline = require('readline');

class MCPTester {
  constructor() {
    this.server = null;
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  async startServer() {
    console.log('🚀 Starting Netlify MCP Server...');
    
    this.server = spawn('node', ['mcp-server.js'], {
      stdio: ['pipe', 'pipe', 'pipe']
    });

    this.server.stderr.on('data', (data) => {
      console.log('📡 Server:', data.toString().trim());
    });

    this.server.on('error', (error) => {
      console.error('❌ Server error:', error.message);
    });

    // Wait a moment for server to start
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  async sendRequest(request) {
    return new Promise((resolve, reject) => {
      const requestStr = JSON.stringify(request) + '\n';
      
      let responseData = '';
      
      const onData = (data) => {
        responseData += data.toString();
        try {
          const response = JSON.parse(responseData.trim());
          this.server.stdout.removeListener('data', onData);
          resolve(response);
        } catch (e) {
          // Continue collecting data
        }
      };
      
      this.server.stdout.on('data', onData);
      
      this.server.stdin.write(requestStr);
      
      // Timeout after 10 seconds
      setTimeout(() => {
        this.server.stdout.removeListener('data', onData);
        reject(new Error('Request timeout'));
      }, 10000);
    });
  }

  async testInitialization() {
    console.log('\n🔍 Testing server initialization...');
    
    const initRequest = {
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {
          tools: {}
        },
        clientInfo: {
          name: 'mcp-tester',
          version: '1.0.0'
        }
      }
    };

    try {
      const response = await this.sendRequest(initRequest);
      console.log('✅ Initialization successful');
      console.log('📋 Server capabilities:', JSON.stringify(response.result?.capabilities, null, 2));
      return true;
    } catch (error) {
      console.error('❌ Initialization failed:', error.message);
      return false;
    }
  }

  async testListTools() {
    console.log('\n🛠️  Testing tool listing...');
    
    const listToolsRequest = {
      jsonrpc: '2.0',
      id: 2,
      method: 'tools/list',
      params: {}
    };

    try {
      const response = await this.sendRequest(listToolsRequest);
      const tools = response.result?.tools || [];
      console.log(`✅ Found ${tools.length} tools:`);
      tools.forEach(tool => {
        console.log(`   📌 ${tool.name}: ${tool.description}`);
      });
      return true;
    } catch (error) {
      console.error('❌ Tool listing failed:', error.message);
      return false;
    }
  }

  async testNetlifyStatus() {
    console.log('\n📊 Testing Netlify status check...');
    
    const statusRequest = {
      jsonrpc: '2.0',
      id: 3,
      method: 'tools/call',
      params: {
        name: 'netlify_status',
        arguments: {}
      }
    };

    try {
      const response = await this.sendRequest(statusRequest);
      if (response.result?.content) {
        console.log('✅ Netlify status check successful');
        console.log('📄 Response:', response.result.content[0]?.text?.substring(0, 200) + '...');
        return true;
      } else {
        console.log('⚠️  Status check returned no content');
        return false;
      }
    } catch (error) {
      console.error('❌ Status check failed:', error.message);
      console.log('💡 This might be expected if Netlify CLI is not authenticated');
      return false;
    }
  }

  async runTests() {
    console.log('🧪 Netlify MCP Server Test Suite');
    console.log('================================\n');

    try {
      await this.startServer();
      
      const tests = [
        () => this.testInitialization(),
        () => this.testListTools(),
        () => this.testNetlifyStatus()
      ];

      let passed = 0;
      let total = tests.length;

      for (const test of tests) {
        if (await test()) {
          passed++;
        }
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      console.log('\n📊 Test Results:');
      console.log('================');
      console.log(`✅ Passed: ${passed}/${total}`);
      console.log(`❌ Failed: ${total - passed}/${total}`);

      if (passed === total) {
        console.log('\n🎉 All tests passed! Your MCP server is ready to use.');
        console.log('\n📖 Next steps:');
        console.log('   1. Configure your MCP client (see NETLIFY_MCP_SETUP.md)');
        console.log('   2. Add your Netlify Personal Access Token');
        console.log('   3. Start using the server with your AI assistant!');
      } else {
        console.log('\n⚠️  Some tests failed. Check the setup:');
        console.log('   1. Ensure Node.js and npm are installed');
        console.log('   2. Install dependencies: npm install');
        console.log('   3. Install Netlify CLI: npm install -g netlify-cli');
        console.log('   4. Check NETLIFY_MCP_SETUP.md for troubleshooting');
      }

    } catch (error) {
      console.error('💥 Test suite failed:', error.message);
    } finally {
      this.cleanup();
    }
  }

  cleanup() {
    console.log('\n🧹 Cleaning up...');
    if (this.server) {
      this.server.kill();
    }
    this.rl.close();
  }
}

// Run tests if this script is executed directly
if (require.main === module) {
  const tester = new MCPTester();
  
  // Handle Ctrl+C gracefully
  process.on('SIGINT', () => {
    console.log('\n\n⏹️  Test interrupted by user');
    tester.cleanup();
    process.exit(0);
  });
  
  tester.runTests().catch(console.error);
}

module.exports = MCPTester;