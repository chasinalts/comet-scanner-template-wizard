#!/usr/bin/env node

/**
 * Script to set up Appwrite API key
 * 
 * This script helps users set up their Appwrite API key in the .env file
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import readline from 'readline';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Load environment variables
dotenv.config({ path: path.join(rootDir, '.env') });

// Create readline interface
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

// Main function
async function setupApiKey() {
  try {
    console.log('🔑 Appwrite API Key Setup');
    console.log('------------------------');
    
    // Check if API key already exists
    const existingApiKey = process.env.APPWRITE_API_KEY;
    if (existingApiKey) {
      console.log(`An API key is already set in your .env file.`);
      const masked = existingApiKey.substring(0, 3) + '...' + existingApiKey.substring(existingApiKey.length - 3);
      console.log(`Current API key: ${masked}`);
      
      const shouldUpdate = await prompt('Do you want to update it? (y/n): ');
      if (shouldUpdate.toLowerCase() !== 'y') {
        console.log('Keeping existing API key.');
        rl.close();
        return;
      }
    }
    
    console.log('\nTo create an API key in Appwrite:');
    console.log('1. Go to your Appwrite Console: https://cloud.appwrite.io/console');
    console.log('2. Select your project');
    console.log('3. Go to "API Keys" in the left sidebar');
    console.log('4. Click "Create API Key"');
    console.log('5. Give it a name (e.g., "COMET Scanner CLI")');
    console.log('6. Add the following permissions:');
    console.log('   - databases.read');
    console.log('   - databases.write');
    console.log('   - users.read');
    console.log('   - storage.read');
    console.log('   - storage.write');
    console.log('7. Click "Create"');
    console.log('8. Copy the API key');
    
    const apiKey = await prompt('\nEnter your Appwrite API key: ');
    if (!apiKey) {
      console.log('❌ API key is required.');
      rl.close();
      return;
    }
    
    // Read .env file
    const envPath = path.join(rootDir, '.env');
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
    
    // Write to .env file
    fs.writeFileSync(envPath, envContent);
    
    console.log('\n✅ API key saved to .env file.');
    console.log('\nNext steps:');
    console.log('1. Run: npm run appwrite:check-config');
    console.log('2. If everything is working, you can proceed with development or deployment.');
    
    rl.close();
  } catch (error) {
    console.error('❌ Error setting up API key:', error);
    rl.close();
  }
}

// Run the function
setupApiKey();
