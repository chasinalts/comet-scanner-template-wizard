#!/usr/bin/env node

/**
 * This script sets up the Context7 MCP Server for the COMET Scanner project.
 * It pulls documentation for Auth0, Supabase, and other technologies used in the project.
 */

import { spawn } from 'child_process';
import { createInterface } from 'readline';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';

// Load environment variables
dotenv.config();

// Create readline interface for user input
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

// Function to check if a package is installed
const isPackageInstalled = (packageName) => {
  try {
    require.resolve(packageName);
    return true;
  } catch (e) {
    return false;
  }
};

// Function to install a package if not already installed
const installPackageIfNeeded = async (packageName) => {
  if (!isPackageInstalled(packageName)) {
    console.log(`Installing ${packageName}...`);
    return new Promise((resolve, reject) => {
      const install = spawn('npm', ['install', packageName], { stdio: 'inherit' });
      install.on('close', (code) => {
        if (code === 0) {
          console.log(`Successfully installed ${packageName}`);
          resolve();
        } else {
          console.error(`Failed to install ${packageName}`);
          reject();
        }
      });
    });
  }
};

// Function to create a directory if it doesn't exist
const createDirIfNotExists = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
};

// Function to fetch documentation from Context7
const fetchDocumentation = async (libraryId, topic = '') => {
  try {
    const url = `https://api.context7.ai/docs/${encodeURIComponent(libraryId)}${topic ? `?topic=${encodeURIComponent(topic)}` : ''}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${process.env.CONTEXT7_API_KEY || ''}`,
        'Content-Type': 'application/json'
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch documentation: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching documentation:', error);
    return null;
  }
};

// Main function to set up Context7 MCP Server
async function setupContext7() {
  console.log('Setting up Context7 MCP Server...');
  
  // Check for required packages
  await installPackageIfNeeded('@context7/mcp-server');
  await installPackageIfNeeded('node-fetch');
  
  // Create directories for documentation
  const docsDir = path.join(process.cwd(), 'context7-docs');
  createDirIfNotExists(docsDir);
  createDirIfNotExists(path.join(docsDir, 'auth0'));
  createDirIfNotExists(path.join(docsDir, 'supabase'));
  createDirIfNotExists(path.join(docsDir, 'react'));
  
  // Get Context7 API key if not already set
  let context7ApiKey = process.env.CONTEXT7_API_KEY;
  if (!context7ApiKey) {
    context7ApiKey = await prompt('Enter your Context7 API key: ');
    
    // Add to .env file
    const envContent = fs.existsSync('.env') 
      ? fs.readFileSync('.env', 'utf8') + `\nCONTEXT7_API_KEY=${context7ApiKey}\n`
      : `CONTEXT7_API_KEY=${context7ApiKey}\n`;
    
    fs.writeFileSync('.env', envContent);
    process.env.CONTEXT7_API_KEY = context7ApiKey;
  }
  
  // Fetch documentation for Auth0
  console.log('Fetching Auth0 documentation...');
  const auth0Docs = await fetchDocumentation('auth0/docs', 'react authentication');
  if (auth0Docs) {
    fs.writeFileSync(
      path.join(docsDir, 'auth0', 'react-authentication.json'), 
      JSON.stringify(auth0Docs, null, 2)
    );
    console.log('✅ Auth0 documentation saved');
  }
  
  // Fetch documentation for Supabase
  console.log('Fetching Supabase documentation...');
  const supabaseDocs = await fetchDocumentation('supabase/supabase', 'javascript storage');
  if (supabaseDocs) {
    fs.writeFileSync(
      path.join(docsDir, 'supabase', 'javascript-storage.json'), 
      JSON.stringify(supabaseDocs, null, 2)
    );
    console.log('✅ Supabase documentation saved');
  }
  
  // Create Context7 MCP Server configuration
  const configPath = path.join(process.cwd(), 'context7-config.json');
  const config = {
    name: "COMET Scanner Context7 MCP Server",
    description: "Context7 MCP Server for COMET Scanner Template Wizard",
    version: "1.0.0",
    documentationPaths: [docsDir],
    port: 3100,
    host: "localhost"
  };
  
  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log('✅ Context7 MCP Server configuration created');
  
  // Create start script
  const scriptPath = path.join(process.cwd(), 'start-context7.js');
  const scriptContent = `#!/usr/bin/env node

const { startServer } = require('@context7/mcp-server');
const path = require('path');

// Start the Context7 MCP Server
async function main() {
  try {
    const configPath = path.join(__dirname, 'context7-config.json');
    const server = await startServer(configPath);
    console.log(\`Context7 MCP Server running at \${server.url}\`);
  } catch (error) {
    console.error('Failed to start Context7 MCP Server:', error);
    process.exit(1);
  }
}

main();
`;
  
  fs.writeFileSync(scriptPath, scriptContent);
  fs.chmodSync(scriptPath, '755');
  console.log('✅ Context7 MCP Server start script created');
  
  // Update package.json with Context7 scripts
  try {
    const packageJsonPath = path.join(process.cwd(), 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    packageJson.scripts = packageJson.scripts || {};
    packageJson.scripts['context7:start'] = 'node start-context7.js';
    packageJson.scripts['context7:setup'] = 'node setup-context7.js';
    
    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ package.json updated with Context7 scripts');
  } catch (error) {
    console.error('Failed to update package.json:', error);
  }
  
  console.log('\nContext7 MCP Server setup complete!');
  console.log('\nTo start the Context7 MCP Server, run:');
  console.log('  npm run context7:start');
  
  rl.close();
}

// Run the setup
setupContext7().catch(err => {
  console.error('Error during setup:', err);
  rl.close();
  process.exit(1);
});
