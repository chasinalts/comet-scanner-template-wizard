#!/usr/bin/env node

/**
 * Script to set up Netlify environment variables
 *
 * This script sets up the necessary environment variables for Netlify deployment
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

// Main function to set up Netlify environment variables
async function setupNetlifyEnv() {
  try {
    console.log('🚀 Setting up Netlify environment variables');
    console.log('------------------------------------------');

    // Check if netlify CLI is installed
    try {
      execSync('netlify --version', { stdio: 'ignore' });
      console.log('✅ Netlify CLI is already installed');
    } catch (error) {
      console.log('⚠️ Netlify CLI is not installed. Installing now...');
      execSync('npm install -g netlify-cli', { stdio: 'inherit' });
      console.log('✅ Netlify CLI installed successfully');
    }

    // Check if user is logged in to Netlify
    try {
      const statusOutput = execSync('netlify status', { encoding: 'utf8' });
      if (statusOutput.includes('Logged in')) {
        console.log('✅ Already logged in to Netlify');
      } else {
        console.log('⚠️ Not logged in to Netlify. Please log in:');
        execSync('netlify login', { stdio: 'inherit' });
      }
    } catch (error) {
      console.log('⚠️ Error checking Netlify status. Please log in:');
      execSync('netlify login', { stdio: 'inherit' });
    }

    // Check if site is linked
    let siteId = '';
    try {
      const statusOutput = execSync('netlify status', { encoding: 'utf8' });
      const siteIdMatch = statusOutput.match(/Site ID:\s+([a-zA-Z0-9-]+)/);
      if (siteIdMatch && siteIdMatch[1]) {
        siteId = siteIdMatch[1];
        console.log(`✅ Site is already linked (Site ID: ${siteId})`);
      } else {
        console.log('⚠️ Site is not linked. Linking now...');
        execSync('netlify link', { stdio: 'inherit' });

        // Get the site ID after linking
        const newStatusOutput = execSync('netlify status', { encoding: 'utf8' });
        const newSiteIdMatch = newStatusOutput.match(/Site ID:\s+([a-zA-Z0-9-]+)/);
        if (newSiteIdMatch && newSiteIdMatch[1]) {
          siteId = newSiteIdMatch[1];
        }
      }
    } catch (error) {
      console.log('⚠️ Error checking site link status. Linking now...');
      execSync('netlify link', { stdio: 'inherit' });
    }

    // Get environment variables from .env file or prompt user
    const envVars = {
      'VITE_APPWRITE_ENDPOINT': process.env.VITE_APPWRITE_ENDPOINT || await prompt('Enter your Appwrite endpoint (e.g., https://cloud.appwrite.io/v1): '),
      'VITE_APPWRITE_PROJECT_ID': process.env.VITE_APPWRITE_PROJECT_ID || await prompt('Enter your Appwrite project ID: '),
      'VITE_APPWRITE_DATABASE_ID': process.env.VITE_APPWRITE_DATABASE_ID || await prompt('Enter your Appwrite database ID: '),
      'VITE_SUPABASE_URL': process.env.VITE_SUPABASE_URL || 'https://hpbfipnhqakrhlnhluze.supabase.co',
      'VITE_SUPABASE_ANON_KEY': process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Mjc0NDgsImV4cCI6MjA2MDQwMzQ0OH0.kPZLOf0rKMn-FjEFgLG_cefIaRaLDdIILSjHzYK-b1w'
    };

    // Set environment variables in Netlify
    console.log('\n📝 Setting environment variables in Netlify...');
    for (const [key, value] of Object.entries(envVars)) {
      if (value) {
        try {
          execSync(`netlify env:set ${key} "${value}"`, { stdio: 'inherit' });
          console.log(`✅ Set ${key}`);
        } catch (error) {
          console.error(`❌ Error setting ${key}:`, error.message);
        }
      } else {
        console.log(`⚠️ Skipping ${key} (no value provided)`);
      }
    }

    // Ask if user wants to deploy now
    const shouldDeploy = await prompt('\nDo you want to deploy to Netlify now? (y/n): ');
    if (shouldDeploy.toLowerCase() === 'y') {
      console.log('\n🚀 Deploying to Netlify...');
      execSync('netlify deploy --prod', { stdio: 'inherit' });
    } else {
      console.log('\nSkipping deployment. You can deploy later with:');
      console.log('netlify deploy --prod');
    }

    console.log('\n✅ Netlify environment setup complete!');
    rl.close();
  } catch (error) {
    console.error('❌ Error setting up Netlify environment:', error);
    rl.close();
    process.exit(1);
  }
}

// Run the setup function
setupNetlifyEnv();
