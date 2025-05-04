#!/usr/bin/env node

/**
 * Script to set up the hybrid Appwrite/Supabase environment
 *
 * This script:
 * 1. Sets up Appwrite for authentication and core database
 * 2. Sets up Supabase for extended storage and database needs
 * 3. Updates environment variables
 */
import dotenv from 'dotenv';
import { execSync } from 'child_process';
import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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

// Main function to set up the hybrid environment
async function setupHybridEnvironment() {
  try {
    console.log('🚀 Setting up Hybrid Appwrite/Supabase Environment');
    console.log('------------------------------------------------');

    // Step 1: Check if .env file exists
    const envPath = path.join(process.cwd(), '.env');
    let envExists = false;

    try {
      fs.accessSync(envPath, fs.constants.F_OK);
      envExists = true;
    } catch (error) {
      console.log('No .env file found, creating one...');
    }

    // Step 2: Set up Appwrite
    console.log('\n📦 Setting up Appwrite for authentication and core database');
    console.log('--------------------------------------------------------');

    const setupAppwrite = await prompt('Do you want to set up Appwrite now? (y/n): ');

    if (setupAppwrite.toLowerCase() === 'y') {
      // Update Appwrite environment variables
      console.log('\nUpdating Appwrite environment variables...');
      execCommand('node scripts/update-env.js');

      // Set up Appwrite resources (limited to free tier)
      console.log('\nSetting up Appwrite resources (limited to free tier)...');
      execCommand('node setup-appwrite-resources-limited.js');

      // Create initial content
      console.log('\nCreating initial content...');
      execCommand('node scripts/create-initial-content.js');
    } else {
      console.log('Skipping Appwrite setup.');
    }

    // Step 3: Set up Supabase
    console.log('\n📦 Setting up Supabase for extended storage and database');
    console.log('-----------------------------------------------------');

    const setupSupabase = await prompt('Do you want to set up Supabase now? (y/n): ');

    if (setupSupabase.toLowerCase() === 'y') {
      // Get Supabase credentials using CLI
      console.log('\nGetting Supabase credentials using CLI...');
      execCommand('node scripts/get-supabase-credentials.js');

      // Set up Supabase resources
      console.log('\nSetting up Supabase resources...');
      execCommand('node scripts/setup-supabase.js');
    } else {
      console.log('Skipping Supabase setup.');
    }

    // Step 4: Create owner account
    console.log('\n👤 Setting up owner account');
    console.log('-------------------------');

    const setupOwner = await prompt('Do you want to set up an owner account now? (y/n): ');

    if (setupOwner.toLowerCase() === 'y') {
      console.log('\nCreating owner account...');
      execCommand('node scripts/create-owner-account.js');
    } else {
      console.log('Skipping owner account setup.');
    }

    console.log('\n🎉 Hybrid environment setup complete!');
    console.log('Your application is now configured to use:');
    console.log('- Appwrite for authentication and core database');
    console.log('- Supabase for extended storage and database needs');

    rl.close();
  } catch (error) {
    console.error('Error setting up hybrid environment:', error);
    rl.close();
  }
}

// Run the function
setupHybridEnvironment();
