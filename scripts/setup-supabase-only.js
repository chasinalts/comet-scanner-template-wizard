#!/usr/bin/env node

/**
 * Script to set up Supabase while preserving existing Appwrite setup
 *
 * This script:
 * 1. Ensures Node.js v18 is used (required for this app)
 * 2. Gets Supabase credentials using the CLI
 * 3. Sets up Supabase resources
 * 4. Tests the hybrid setup
 */
import { execSync } from 'child_process';
import readline from 'readline';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

// Execute a command and return its output
const execCommand = (command) => {
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    return null;
  }
};

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Main function to set up Supabase only
async function setupSupabaseOnly() {
  try {
    console.log('🚀 Setting up Supabase (Preserving Existing Appwrite)');
    console.log('--------------------------------------------------');

    // Step 0: Check Node.js version
    console.log('\n🔍 Checking Node.js version (required: v18)');
    console.log('------------------------------------------');

    // Get current Node.js version directly
    const nodeVersion = process.version;
    console.log(`Current Node.js version: ${nodeVersion}`);

    if (!nodeVersion.startsWith('v18.')) {
      console.log('❌ This app requires Node.js v18. Please switch to Node.js v18 manually.');
      console.log('You can use: source scripts/use-node18.sh');
      return;
    }

    console.log('✅ Using Node.js v18 as required')

    // Step 1: Install Supabase CLI locally (instead of globally)
    console.log('\n📦 Installing Supabase CLI locally');
    console.log('--------------------------------');

    const installSupabase = await prompt('Do you want to install Supabase CLI locally? (y/n): ');

    if (installSupabase.toLowerCase() === 'y') {
      console.log('Installing Supabase CLI as a dev dependency...');
      execCommand('npm install --save-dev supabase');
      console.log('✅ Supabase CLI installed locally');
    } else {
      console.log('Skipping Supabase CLI installation.');
    }

    // Step 2: Get Supabase credentials
    console.log('\n📦 Getting Supabase credentials');
    console.log('-----------------------------');

    const getCredentials = await prompt('Do you want to set up Supabase credentials now? (y/n): ');

    if (getCredentials.toLowerCase() === 'y') {
      // Use npx to run the local Supabase CLI
      execCommand('node scripts/get-supabase-credentials.js');
    } else {
      console.log('Skipping Supabase credentials setup.');
    }

    // Step 2: Set up Supabase resources
    console.log('\n📦 Setting up Supabase resources');
    console.log('-----------------------------');

    const setupResources = await prompt('Do you want to set up Supabase resources now? (y/n): ');

    if (setupResources.toLowerCase() === 'y') {
      execCommand('node scripts/setup-supabase.js');
    } else {
      console.log('Skipping Supabase resource setup.');
    }

    // Step 3: Test the hybrid setup
    console.log('\n🧪 Testing the hybrid setup');
    console.log('-------------------------');

    const testSetup = await prompt('Do you want to test the hybrid setup now? (y/n): ');

    if (testSetup.toLowerCase() === 'y') {
      execCommand('node scripts/test-hybrid-setup.js');
    } else {
      console.log('Skipping hybrid setup test.');
    }

    console.log('\n🎉 Supabase setup complete!');
    console.log('Your application is now configured to use:');
    console.log('- Your existing Appwrite setup for authentication and core database');
    console.log('- Supabase for extended storage and database needs');

    rl.close();
  } catch (error) {
    console.error('Error setting up Supabase:', error);
    rl.close();
  }
}

// Run the function
setupSupabaseOnly();
