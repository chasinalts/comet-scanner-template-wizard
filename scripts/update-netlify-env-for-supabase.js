#!/usr/bin/env node

/**
 * This script updates Netlify environment variables to use Supabase instead of Appwrite
 * It adds the Supabase URL and anon key to Netlify
 * It also removes any Appwrite-related environment variables
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

// Function to check if Netlify CLI is installed
const checkNetlifyCLI = () => {
  try {
    execSync('netlify --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
};

// Function to check if user is logged in to Netlify
const checkNetlifyLogin = () => {
  try {
    const output = execSync('netlify status', { encoding: 'utf8' });
    return output.includes('Logged in');
  } catch (error) {
    return false;
  }
};

// Function to get environment variables from .env file
const getEnvVars = () => {
  try {
    const envPath = path.join(process.cwd(), '.env');
    if (!fs.existsSync(envPath)) {
      console.error('Error: .env file not found');
      return null;
    }

    const envContent = fs.readFileSync(envPath, 'utf8');
    const envVars = {};

    envContent.split('\n').forEach(line => {
      // Skip comments and empty lines
      if (line.startsWith('#') || !line.trim()) return;

      const [key, ...valueParts] = line.split('=');
      const value = valueParts.join('='); // Handle values that might contain = characters
      
      if (key && value) {
        envVars[key.trim()] = value.trim();
      }
    });

    return envVars;
  } catch (error) {
    console.error('Error reading .env file:', error);
    return null;
  }
};

// Function to update Netlify environment variables
const updateNetlifyEnv = async (envVars) => {
  try {
    // Get site ID
    const siteId = await getSiteId();
    if (!siteId) {
      console.error('Error: Could not determine Netlify site ID');
      return false;
    }

    console.log('Updating Netlify environment variables...');

    // Add Supabase environment variables
    if (envVars.VITE_SUPABASE_URL) {
      execSync(`netlify env:set VITE_SUPABASE_URL ${envVars.VITE_SUPABASE_URL}`, { stdio: 'inherit' });
      console.log('✅ Added VITE_SUPABASE_URL to Netlify');
    } else {
      console.warn('⚠️ VITE_SUPABASE_URL not found in .env file');
    }

    if (envVars.VITE_SUPABASE_ANON_KEY) {
      execSync(`netlify env:set VITE_SUPABASE_ANON_KEY ${envVars.VITE_SUPABASE_ANON_KEY}`, { stdio: 'inherit' });
      console.log('✅ Added VITE_SUPABASE_ANON_KEY to Netlify');
    } else {
      console.warn('⚠️ VITE_SUPABASE_ANON_KEY not found in .env file');
    }

    // Remove Appwrite environment variables
    try {
      execSync(`netlify env:unset VITE_APPWRITE_ENDPOINT`, { stdio: 'ignore' });
      console.log('✅ Removed VITE_APPWRITE_ENDPOINT from Netlify');
    } catch (error) {
      console.log('ℹ️ VITE_APPWRITE_ENDPOINT not found in Netlify');
    }

    try {
      execSync(`netlify env:unset VITE_APPWRITE_PROJECT_ID`, { stdio: 'ignore' });
      console.log('✅ Removed VITE_APPWRITE_PROJECT_ID from Netlify');
    } catch (error) {
      console.log('ℹ️ VITE_APPWRITE_PROJECT_ID not found in Netlify');
    }

    try {
      execSync(`netlify env:unset VITE_APPWRITE_DATABASE_ID`, { stdio: 'ignore' });
      console.log('✅ Removed VITE_APPWRITE_DATABASE_ID from Netlify');
    } catch (error) {
      console.log('ℹ️ VITE_APPWRITE_DATABASE_ID not found in Netlify');
    }

    try {
      execSync(`netlify env:unset APPWRITE_API_KEY`, { stdio: 'ignore' });
      console.log('✅ Removed APPWRITE_API_KEY from Netlify');
    } catch (error) {
      console.log('ℹ️ APPWRITE_API_KEY not found in Netlify');
    }

    console.log('✅ Netlify environment variables updated successfully');
    return true;
  } catch (error) {
    console.error('Error updating Netlify environment variables:', error);
    return false;
  }
};

// Function to get Netlify site ID
const getSiteId = async () => {
  try {
    // Try to get site ID from netlify.toml
    const netlifyTomlPath = path.join(process.cwd(), 'netlify.toml');
    if (fs.existsSync(netlifyTomlPath)) {
      const netlifyToml = fs.readFileSync(netlifyTomlPath, 'utf8');
      const siteIdMatch = netlifyToml.match(/site_id\s*=\s*["']([^"']+)["']/);
      if (siteIdMatch && siteIdMatch[1]) {
        return siteIdMatch[1];
      }
    }

    // Try to get site ID from .netlify/state.json
    const stateJsonPath = path.join(process.cwd(), '.netlify', 'state.json');
    if (fs.existsSync(stateJsonPath)) {
      const stateJson = JSON.parse(fs.readFileSync(stateJsonPath, 'utf8'));
      if (stateJson.siteId) {
        return stateJson.siteId;
      }
    }

    // Ask user for site ID
    console.log('Could not determine Netlify site ID automatically.');
    const siteId = await prompt('Please enter your Netlify site ID: ');
    return siteId.trim();
  } catch (error) {
    console.error('Error getting Netlify site ID:', error);
    return null;
  }
};

// Main function
const main = async () => {
  try {
    console.log('🔄 Updating Netlify environment variables for Supabase...');

    // Check if Netlify CLI is installed
    if (!checkNetlifyCLI()) {
      console.error('Error: Netlify CLI is not installed. Please install it with: npm install -g netlify-cli');
      process.exit(1);
    }

    // Check if user is logged in to Netlify
    if (!checkNetlifyLogin()) {
      console.log('You are not logged in to Netlify. Please log in:');
      execSync('netlify login', { stdio: 'inherit' });
    }

    // Get environment variables from .env file
    const envVars = getEnvVars();
    if (!envVars) {
      process.exit(1);
    }

    // Update Netlify environment variables
    const success = await updateNetlifyEnv(envVars);
    if (!success) {
      process.exit(1);
    }

    console.log('✅ Netlify environment variables updated successfully');
    rl.close();
  } catch (error) {
    console.error('Error:', error);
    rl.close();
    process.exit(1);
  }
};

// Run the main function
main();
