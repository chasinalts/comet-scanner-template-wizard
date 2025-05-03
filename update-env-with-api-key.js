#!/usr/bin/env node

/**
 * Script to update .env file with Appwrite API key instructions
 * 
 * This script adds instructions for adding the Appwrite API key to the .env file.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

async function updateEnvFile() {
  try {
    console.log('🔄 Updating .env file with API key instructions');
    console.log('---------------------------------------------');
    
    // Path to .env file
    const envPath = path.join(rootDir, '.env');
    
    // Check if .env file exists
    if (!fs.existsSync(envPath)) {
      console.log('❌ .env file not found. Please create one first.');
      return false;
    }
    
    // Read current .env file
    let envContent = fs.readFileSync(envPath, 'utf8');
    
    // Check if API key is already in the file
    if (envContent.includes('APPWRITE_API_KEY=') && !envContent.includes('APPWRITE_API_KEY=your-api-key-here')) {
      console.log('✅ API key already exists in .env file.');
      return true;
    }
    
    // Add API key instructions if not already present
    if (!envContent.includes('APPWRITE_API_KEY=')) {
      // Backup existing .env file
      const backupPath = path.join(rootDir, '.env.backup');
      fs.copyFileSync(envPath, backupPath);
      console.log(`✅ Backed up existing .env file to ${backupPath}`);
      
      // Add API key instructions
      const apiKeyInstructions = `
# MCP Server Configuration (not exposed to the client)
APPWRITE_ENDPOINT=${envContent.includes('VITE_APPWRITE_ENDPOINT=') ? envContent.match(/VITE_APPWRITE_ENDPOINT=(.*)/)[1] : 'https://cloud.appwrite.io/v1'}
APPWRITE_PROJECT_ID=${envContent.includes('VITE_APPWRITE_PROJECT_ID=') ? envContent.match(/VITE_APPWRITE_PROJECT_ID=(.*)/)[1] : 'your-project-id'}
# You need to add your Appwrite API key below
# APPWRITE_API_KEY=your-api-key-here
`;
      
      // Add API key instructions to .env file
      if (!envContent.includes('# MCP Server Configuration')) {
        envContent += apiKeyInstructions;
      } else {
        // Replace existing MCP Server Configuration section
        const mcpConfigRegex = /# MCP Server Configuration[\s\S]*?(?=\n\n|$)/;
        envContent = envContent.replace(mcpConfigRegex, apiKeyInstructions.trim());
      }
      
      // Write updated .env file
      fs.writeFileSync(envPath, envContent);
      console.log(`✅ Updated .env file with API key instructions at ${envPath}`);
    } else if (envContent.includes('APPWRITE_API_KEY=your-api-key-here')) {
      console.log('⚠️ API key placeholder already exists in .env file. Please replace it with your actual API key.');
    }
    
    // Display instructions for getting API key
    console.log('\nTo get an Appwrite API key:');
    console.log('1. Log in to your Appwrite Console: https://cloud.appwrite.io/console');
    console.log('2. Select your project');
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
    
    return true;
  } catch (error) {
    console.error('❌ Error updating .env file:', error.message);
    return false;
  } finally {
    // Close readline interface
    rl.close();
  }
}

// Run the function
updateEnvFile()
  .then((success) => {
    if (success) {
      console.log('\n✅ .env file updated successfully with API key instructions!');
    } else {
      console.log('\n❌ Failed to update .env file with API key instructions.');
    }
  })
  .catch((error) => {
    console.error('Unhandled error:', error);
  });
