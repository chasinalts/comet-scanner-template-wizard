#!/usr/bin/env node

/**
 * This script uses the MCP Appwrite server to set up Appwrite resources for the COMET Scanner project.
 */

import { spawn } from 'child_process';
import { createInterface } from 'readline';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Check if required environment variables are set
const requiredVars = ['APPWRITE_ENDPOINT', 'APPWRITE_PROJECT_ID', 'APPWRITE_API_KEY'];
const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error(`Missing required environment variables: ${missingVars.join(', ')}`);
  console.error('Please set these variables in your .env file or environment');

  // If API key is missing, provide instructions on how to get it
  if (missingVars.includes('APPWRITE_API_KEY')) {
    console.log('\nTo get an Appwrite API key:');
    console.log('1. Log in to your Appwrite Console: https://cloud.appwrite.io/console');
    console.log('2. Select your project (cstw)');
    console.log('3. Go to "API Keys" in the left sidebar');
    console.log('4. Create a new API key with the following permissions:');
    console.log('   - databases.read');
    console.log('   - databases.write');
    console.log('   - storage.read');
    console.log('   - storage.write');
    console.log('   - users.read');
    console.log('   - users.write');
    console.log('5. Add the API key to your .env file:');
    console.log('   APPWRITE_API_KEY=your-api-key-here');
  }

  process.exit(1);
}

// Path to the MCP server
const MCP_SERVER_PATH = '/Users/chasecambre/Documents/Cline/MCP/appwrite-server/build/index.js';

// Function to run the MCP server and communicate with it
async function runMcpServer() {
  // Start the MCP server process
  const mcpProcess = spawn('node', [MCP_SERVER_PATH], {
    env: {
      ...process.env,
      APPWRITE_ENDPOINT: process.env.APPWRITE_ENDPOINT,
      APPWRITE_PROJECT_ID: process.env.APPWRITE_PROJECT_ID,
      APPWRITE_API_KEY: process.env.APPWRITE_API_KEY
    },
    stdio: ['pipe', 'pipe', 'inherit']
  });

  // Create readline interface for reading from the process
  const rl = createInterface({
    input: mcpProcess.stdout,
    terminal: false
  });

  // Function to send a request to the MCP server
  function sendRequest(request) {
    return new Promise((resolve, reject) => {
      const requestId = Math.random().toString(36).substring(2, 15);
      const requestObj = {
        jsonrpc: '2.0',
        id: requestId,
        ...request
      };

      const requestStr = JSON.stringify(requestObj) + '\n';
      mcpProcess.stdin.write(requestStr);

      const responseHandler = (line) => {
        try {
          const response = JSON.parse(line);
          if (response.id === requestId) {
            rl.removeListener('line', responseHandler);
            if (response.error) {
              reject(new Error(response.error.message));
            } else {
              resolve(response.result);
            }
          }
        } catch (err) {
          // Ignore non-JSON lines
        }
      };

      rl.on('line', responseHandler);
    });
  }

  // List available tools
  const listToolsResult = await sendRequest({
    method: 'mcp.list_tools',
    params: {}
  });

  console.log('Available tools:', listToolsResult.tools.map(tool => tool.name).join(', '));

  // List existing databases
  const listDatabasesResult = await sendRequest({
    method: 'mcp.call_tool',
    params: {
      name: 'list_databases',
      arguments: {}
    }
  });

  console.log('Existing databases:');
  console.log(listDatabasesResult.content[0].text);

  // Create a new database if needed
  let databaseId;
  const existingDatabases = JSON.parse(listDatabasesResult.content[0].text);
  const existingDatabase = existingDatabases.find(db => db.name === 'cometscanner');

  if (existingDatabase) {
    console.log(`Using existing database: ${existingDatabase.name} (${existingDatabase.$id})`);
    databaseId = existingDatabase.$id;
  } else {
    const createDatabaseResult = await sendRequest({
      method: 'mcp.call_tool',
      params: {
        name: 'create_database',
        arguments: {
          name: 'cometscanner'
        }
      }
    });
    console.log(createDatabaseResult.content[0].text);
    databaseId = createDatabaseResult.content[0].text.match(/ID: ([a-zA-Z0-9]+)/)[1];
  }

  // Setup collections
  const setupCollectionsResult = await sendRequest({
    method: 'mcp.call_tool',
    params: {
      name: 'setup_collections',
      arguments: {
        databaseId
      }
    }
  });
  console.log(setupCollectionsResult.content[0].text);

  // Setup storage buckets
  const setupStorageResult = await sendRequest({
    method: 'mcp.call_tool',
    params: {
      name: 'setup_storage',
      arguments: {}
    }
  });
  console.log(setupStorageResult.content[0].text);

  // Create initial content
  const createContentResult = await sendRequest({
    method: 'mcp.call_tool',
    params: {
      name: 'create_initial_content',
      arguments: {
        databaseId
      }
    }
  });
  console.log(createContentResult.content[0].text);

  // Create owner account
  const createOwnerResult = await sendRequest({
    method: 'mcp.call_tool',
    params: {
      name: 'create_owner_account',
      arguments: {
        databaseId,
        email: 'chasinalts@gmail.com',
        password: 'TemporaryPassword123!',  // This should be changed immediately after setup
        name: 'Chase Cambre'
      }
    }
  });
  console.log(createOwnerResult.content[0].text);

  // Update environment variables in the project
  const envContent = `
# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=${process.env.APPWRITE_ENDPOINT}
VITE_APPWRITE_PROJECT_ID=${process.env.APPWRITE_PROJECT_ID}
VITE_APPWRITE_DATABASE_ID=${databaseId}
`;

  fs.writeFileSync('.env.local', envContent);
  console.log('Updated .env.local with Appwrite configuration');

  // Clean up
  mcpProcess.stdin.end();
  mcpProcess.kill();
  console.log('Setup complete!');
}

// Run the setup
runMcpServer().catch(err => {
  console.error('Error during setup:', err);
  process.exit(1);
});
