#!/usr/bin/env node
/**
 * Script to set up Auth0 environment variables in Netlify
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import readline from 'readline';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Promisify readline.question
const prompt = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

async function setupAuth0Env() {
  try {
    console.log('🔄 Setting up Auth0 environment variables in Netlify...');

    // Check if .env file exists
    const envPath = path.join(__dirname, '..', '.env');
    let envContent = '';
    let auth0Domain = '';
    let auth0ClientId = '';
    let auth0ClientSecret = '';
    let auth0Audience = '';

    // Check if .env file exists
    if (fs.existsSync(envPath)) {
      console.log('📝 Found .env file, checking for Auth0 variables...');
      envContent = fs.readFileSync(envPath, 'utf8');

      // Extract Auth0 variables from .env file
      const domainMatch = envContent.match(/VITE_AUTH0_DOMAIN=(.+)/);
      const clientIdMatch = envContent.match(/VITE_AUTH0_CLIENT_ID=(.+)/);
      const clientSecretMatch = envContent.match(/AUTH0_CLIENT_SECRET=(.+)/);
      const audienceMatch = envContent.match(/VITE_AUTH0_AUDIENCE=(.+)/);

      if (domainMatch) auth0Domain = domainMatch[1].trim();
      if (clientIdMatch) auth0ClientId = clientIdMatch[1].trim();
      if (clientSecretMatch) auth0ClientSecret = clientSecretMatch[1].trim();
      if (audienceMatch) auth0Audience = audienceMatch[1].trim();
    }

    // Prompt for Auth0 variables if not found in .env file
    if (!auth0Domain) {
      auth0Domain = await prompt('Enter your Auth0 domain (e.g., your-tenant.auth0.com): ');
    }

    if (!auth0ClientId) {
      auth0ClientId = await prompt('Enter your Auth0 client ID: ');
    }

    if (!auth0ClientSecret) {
      auth0ClientSecret = await prompt('Enter your Auth0 client secret: ');
    }

    if (!auth0Audience) {
      auth0Audience = `https://${auth0Domain}/api/v2/`;
      console.log(`Using default audience: ${auth0Audience}`);
    }

    // Check if Netlify CLI is installed
    try {
      execSync('netlify --version', { stdio: 'ignore' });
      console.log('✅ Netlify CLI is installed');
    } catch (error) {
      console.error('❌ Netlify CLI is not installed. Please install it with: npm install -g netlify-cli');
      rl.close();
      return;
    }

    // Check if site is linked to Netlify
    try {
      execSync('netlify status', { stdio: 'ignore' });
      console.log('✅ Site is linked to Netlify');
    } catch (error) {
      console.log('⚠️ Error checking site link status. Linking now...');
      execSync('netlify link', { stdio: 'inherit' });
    }

    // Set Auth0 environment variables in Netlify
    console.log('\n📝 Setting Auth0 environment variables in Netlify...');
    
    const envVars = {
      'VITE_AUTH0_DOMAIN': auth0Domain,
      'VITE_AUTH0_CLIENT_ID': auth0ClientId,
      'VITE_AUTH0_AUDIENCE': auth0Audience,
      'AUTH0_DOMAIN': auth0Domain,
      'AUTH0_CLIENT_ID': auth0ClientId,
      'AUTH0_CLIENT_SECRET': auth0ClientSecret
    };

    // Set environment variables in Netlify
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

    // Update .env file with Auth0 variables
    if (envContent) {
      // Update existing variables
      if (envContent.includes('VITE_AUTH0_DOMAIN=')) {
        envContent = envContent.replace(/VITE_AUTH0_DOMAIN=.+/g, `VITE_AUTH0_DOMAIN=${auth0Domain}`);
      } else {
        envContent += `\nVITE_AUTH0_DOMAIN=${auth0Domain}`;
      }

      if (envContent.includes('VITE_AUTH0_CLIENT_ID=')) {
        envContent = envContent.replace(/VITE_AUTH0_CLIENT_ID=.+/g, `VITE_AUTH0_CLIENT_ID=${auth0ClientId}`);
      } else {
        envContent += `\nVITE_AUTH0_CLIENT_ID=${auth0ClientId}`;
      }

      if (envContent.includes('VITE_AUTH0_AUDIENCE=')) {
        envContent = envContent.replace(/VITE_AUTH0_AUDIENCE=.+/g, `VITE_AUTH0_AUDIENCE=${auth0Audience}`);
      } else {
        envContent += `\nVITE_AUTH0_AUDIENCE=${auth0Audience}`;
      }

      if (envContent.includes('AUTH0_DOMAIN=')) {
        envContent = envContent.replace(/AUTH0_DOMAIN=.+/g, `AUTH0_DOMAIN=${auth0Domain}`);
      } else {
        envContent += `\nAUTH0_DOMAIN=${auth0Domain}`;
      }

      if (envContent.includes('AUTH0_CLIENT_ID=')) {
        envContent = envContent.replace(/AUTH0_CLIENT_ID=.+/g, `AUTH0_CLIENT_ID=${auth0ClientId}`);
      } else {
        envContent += `\nAUTH0_CLIENT_ID=${auth0ClientId}`;
      }

      if (envContent.includes('AUTH0_CLIENT_SECRET=')) {
        envContent = envContent.replace(/AUTH0_CLIENT_SECRET=.+/g, `AUTH0_CLIENT_SECRET=${auth0ClientSecret}`);
      } else {
        envContent += `\nAUTH0_CLIENT_SECRET=${auth0ClientSecret}`;
      }

      // Write updated content to .env file
      fs.writeFileSync(envPath, envContent);
      console.log('\n✅ Updated .env file with Auth0 variables');
    } else {
      // Create new .env file
      const newEnvContent = `# Auth0 Configuration
VITE_AUTH0_DOMAIN=${auth0Domain}
VITE_AUTH0_CLIENT_ID=${auth0ClientId}
VITE_AUTH0_AUDIENCE=${auth0Audience}
AUTH0_DOMAIN=${auth0Domain}
AUTH0_CLIENT_ID=${auth0ClientId}
AUTH0_CLIENT_SECRET=${auth0ClientSecret}

# Supabase Configuration
VITE_SUPABASE_URL=https://hpbfipnhqakrhlnhluze.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Mjc0NDgsImV4cCI6MjA2MDQwMzQ0OH0.kPZLOf0rKMn-FjEFgLG_cefIaRaLDdIILSjHzYK-b1w

# Application URLs
VITE_APP_URL=https://cometscanner.netlify.app
VITE_RESET_PASSWORD_URL=https://cometscanner.netlify.app/reset-password
`;

      fs.writeFileSync(envPath, newEnvContent);
      console.log('\n✅ Created new .env file with Auth0 variables');
    }

    console.log('\n✅ Auth0 environment variables set up successfully');
    rl.close();
  } catch (error) {
    console.error('❌ Error setting up Auth0 environment variables:', error);
    rl.close();
  }
}

setupAuth0Env();
