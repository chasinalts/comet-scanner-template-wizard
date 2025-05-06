#!/usr/bin/env node

/**
 * Script to set up the Appwrite MCP server
 * 
 * This script installs and configures the Appwrite MCP server for use with AI assistants
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function
const prompt = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Main function to set up MCP server
async function setupMCPServer() {
  try {
    console.log('🚀 Setting up Appwrite MCP server');
    console.log('--------------------------------');
    
    // Check if uv is installed
    try {
      execSync('uv --version', { stdio: 'ignore' });
      console.log('✅ uv is already installed');
    } catch (error) {
      console.log('⚠️ uv is not installed. Installing now...');
      
      // Detect OS
      const isWindows = process.platform === 'win32';
      
      if (isWindows) {
        console.log('Installing uv for Windows...');
        execSync('powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"', { stdio: 'inherit' });
      } else {
        console.log('Installing uv for Unix-based system...');
        execSync('curl -LsSf https://astral.sh/uv/install.sh | sh', { stdio: 'inherit' });
      }
      
      console.log('✅ uv installed successfully');
    }
    
    // Get Appwrite credentials
    let projectId = process.env.VITE_APPWRITE_PROJECT_ID;
    let apiKey = process.env.APPWRITE_API_KEY;
    
    if (!projectId) {
      projectId = await prompt('Enter your Appwrite Project ID: ');
      if (!projectId) {
        console.log('❌ Project ID is required.');
        rl.close();
        return;
      }
    } else {
      console.log(`Using Project ID from .env: ${projectId}`);
    }
    
    if (!apiKey) {
      console.log('⚠️ No API key found in environment variables.');
      console.log('Please create an API key in the Appwrite console with the following permissions:');
      console.log('- databases.read');
      console.log('- databases.write');
      console.log('- users.read');
      console.log('- users.write');
      console.log('- storage.read');
      console.log('- storage.write');
      
      apiKey = await prompt('Enter your Appwrite API Key: ');
      if (!apiKey) {
        console.log('❌ API Key is required.');
        rl.close();
        return;
      }
      
      // Save API key to .env file
      const envPath = path.join(process.cwd(), '.env');
      let envContent = '';
      
      if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
        
        // Check if APPWRITE_API_KEY already exists
        if (envContent.includes('APPWRITE_API_KEY=')) {
          // Replace existing API key
          envContent = envContent.replace(/APPWRITE_API_KEY=.*(\r?\n|$)/g, `APPWRITE_API_KEY=${apiKey}$1`);
        } else {
          // Add API key to the end
          envContent += `\nAPPWRITE_API_KEY=${apiKey}\n`;
        }
      } else {
        envContent = `APPWRITE_API_KEY=${apiKey}\n`;
      }
      
      fs.writeFileSync(envPath, envContent);
      console.log('✅ API Key saved to .env file');
    } else {
      console.log('Using API Key from .env file');
    }
    
    // Install MCP server
    console.log('Installing Appwrite MCP server...');
    execSync('pip install mcp-server-appwrite', { stdio: 'inherit' });
    
    // Create MCP server configuration
    console.log('Creating MCP server configuration...');
    
    // Create cursor-mcp-config.json
    const cursorConfig = {
      name: "Appwrite",
      type: "command",
      command: process.platform === 'win32'
        ? `cmd /c SET APPWRITE_PROJECT_ID=${projectId} && SET APPWRITE_API_KEY=${apiKey} && uvx mcp-server-appwrite --databases --users --storage`
        : `env APPWRITE_API_KEY=${apiKey} env APPWRITE_PROJECT_ID=${projectId} uvx mcp-server-appwrite --databases --users --storage`
    };
    
    const cursorConfigPath = path.join(process.cwd(), 'cursor-mcp-config.json');
    fs.writeFileSync(cursorConfigPath, JSON.stringify(cursorConfig, null, 2));
    
    // Create claude-desktop-config.json
    const claudeConfig = {
      mcpServers: {
        appwrite: {
          command: "uvx",
          args: [
            "mcp-server-appwrite",
            "--databases",
            "--users",
            "--storage"
          ],
          env: {
            APPWRITE_PROJECT_ID: projectId,
            APPWRITE_API_KEY: apiKey,
            APPWRITE_ENDPOINT: process.env.VITE_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1"
          }
        }
      }
    };
    
    const claudeConfigPath = path.join(process.cwd(), 'claude-desktop-config.json');
    fs.writeFileSync(claudeConfigPath, JSON.stringify(claudeConfig, null, 2));
    
    // Create windsurf-mcp-config.json
    const windsurfConfig = {
      mcpServers: {
        appwrite: {
          command: "uvx",
          args: [
            "mcp-server-appwrite",
            "--databases",
            "--users",
            "--storage"
          ],
          env: {
            APPWRITE_PROJECT_ID: projectId,
            APPWRITE_API_KEY: apiKey,
            APPWRITE_ENDPOINT: process.env.VITE_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1"
          }
        }
      }
    };
    
    const windsurfConfigPath = path.join(process.cwd(), 'windsurf-mcp-config.json');
    fs.writeFileSync(windsurfConfigPath, JSON.stringify(windsurfConfig, null, 2));
    
    console.log('✅ MCP server configuration files created:');
    console.log(`- ${cursorConfigPath}`);
    console.log(`- ${claudeConfigPath}`);
    console.log(`- ${windsurfConfigPath}`);
    
    console.log('\n🎉 Appwrite MCP server setup complete!');
    console.log('\nTo use the MCP server with Cursor:');
    console.log('1. Open Cursor Settings > MCP');
    console.log('2. Click "Add new MCP server"');
    console.log('3. Copy the configuration from cursor-mcp-config.json');
    
    console.log('\nTo use the MCP server with Claude Desktop:');
    console.log('1. Open Claude Desktop Settings > Developer');
    console.log('2. Click "Edit Config"');
    console.log('3. Copy the configuration from claude-desktop-config.json');
    
    console.log('\nTo use the MCP server with Windsurf Editor:');
    console.log('1. Open Windsurf Settings > Cascade > Model Context Protocol (MCP) Servers');
    console.log('2. Click "View raw config"');
    console.log('3. Copy the configuration from windsurf-mcp-config.json');
    
    rl.close();
  } catch (error) {
    console.error('Error setting up MCP server:', error);
    rl.close();
    process.exit(1);
  }
}

// Run the setup function
setupMCPServer();
