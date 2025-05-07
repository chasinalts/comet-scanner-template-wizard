#!/usr/bin/env node
/**
 * Non-interactive script to set up Auth0 environment variables
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Sample Auth0 values - these would be replaced with real values in production
const auth0Values = {
  domain: 'cometscanner.us.auth0.com',
  clientId: 'sample123456789clientId',
  clientSecret: 'sample123456789clientSecret',
  audience: 'https://cometscanner.us.auth0.com/api/v2/'
};

async function setupAuth0Env() {
  try {
    console.log('🔄 Setting up Auth0 environment variables...');

    // Check if .env file exists
    const envPath = path.join(__dirname, '..', '.env');
    let envContent = '';

    // Check if .env file exists
    if (fs.existsSync(envPath)) {
      console.log('📝 Found .env file, updating Auth0 variables...');
      envContent = fs.readFileSync(envPath, 'utf8');

      // Update existing variables
      if (envContent.includes('VITE_AUTH0_DOMAIN=')) {
        envContent = envContent.replace(/VITE_AUTH0_DOMAIN=.+/g, `VITE_AUTH0_DOMAIN=${auth0Values.domain}`);
      } else {
        envContent += `\nVITE_AUTH0_DOMAIN=${auth0Values.domain}`;
      }

      if (envContent.includes('VITE_AUTH0_CLIENT_ID=')) {
        envContent = envContent.replace(/VITE_AUTH0_CLIENT_ID=.+/g, `VITE_AUTH0_CLIENT_ID=${auth0Values.clientId}`);
      } else {
        envContent += `\nVITE_AUTH0_CLIENT_ID=${auth0Values.clientId}`;
      }

      if (envContent.includes('VITE_AUTH0_AUDIENCE=')) {
        envContent = envContent.replace(/VITE_AUTH0_AUDIENCE=.+/g, `VITE_AUTH0_AUDIENCE=${auth0Values.audience}`);
      } else {
        envContent += `\nVITE_AUTH0_AUDIENCE=${auth0Values.audience}`;
      }

      if (envContent.includes('AUTH0_DOMAIN=')) {
        envContent = envContent.replace(/AUTH0_DOMAIN=.+/g, `AUTH0_DOMAIN=${auth0Values.domain}`);
      } else {
        envContent += `\nAUTH0_DOMAIN=${auth0Values.domain}`;
      }

      if (envContent.includes('AUTH0_CLIENT_ID=')) {
        envContent = envContent.replace(/AUTH0_CLIENT_ID=.+/g, `AUTH0_CLIENT_ID=${auth0Values.clientId}`);
      } else {
        envContent += `\nAUTH0_CLIENT_ID=${auth0Values.clientId}`;
      }

      if (envContent.includes('AUTH0_CLIENT_SECRET=')) {
        envContent = envContent.replace(/AUTH0_CLIENT_SECRET=.+/g, `AUTH0_CLIENT_SECRET=${auth0Values.clientSecret}`);
      } else {
        envContent += `\nAUTH0_CLIENT_SECRET=${auth0Values.clientSecret}`;
      }

      // Write updated content to .env file
      fs.writeFileSync(envPath, envContent);
      console.log('\n✅ Updated .env file with Auth0 variables');
    } else {
      // Create new .env file
      const newEnvContent = `# Auth0 Configuration
VITE_AUTH0_DOMAIN=${auth0Values.domain}
VITE_AUTH0_CLIENT_ID=${auth0Values.clientId}
VITE_AUTH0_AUDIENCE=${auth0Values.audience}
AUTH0_DOMAIN=${auth0Values.domain}
AUTH0_CLIENT_ID=${auth0Values.clientId}
AUTH0_CLIENT_SECRET=${auth0Values.clientSecret}

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

    // Create .env.local file with the same values
    const envLocalPath = path.join(__dirname, '..', '.env.local');
    const envLocalContent = `# Auth0 Configuration
VITE_AUTH0_DOMAIN=${auth0Values.domain}
VITE_AUTH0_CLIENT_ID=${auth0Values.clientId}
VITE_AUTH0_AUDIENCE=${auth0Values.audience}
AUTH0_DOMAIN=${auth0Values.domain}
AUTH0_CLIENT_ID=${auth0Values.clientId}
AUTH0_CLIENT_SECRET=${auth0Values.clientSecret}

# Supabase Configuration
VITE_SUPABASE_URL=https://hpbfipnhqakrhlnhluze.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Mjc0NDgsImV4cCI6MjA2MDQwMzQ0OH0.kPZLOf0rKMn-FjEFgLG_cefIaRaLDdIILSjHzYK-b1w

# Application URLs
VITE_APP_URL=https://cometscanner.netlify.app
VITE_RESET_PASSWORD_URL=https://cometscanner.netlify.app/reset-password
`;

    fs.writeFileSync(envLocalPath, envLocalContent);
    console.log('✅ Created .env.local file with Auth0 variables');

    // Try to set Netlify environment variables if netlify CLI is available
    try {
      console.log('\n📝 Setting Auth0 environment variables in Netlify...');
      
      const envVars = {
        'VITE_AUTH0_DOMAIN': auth0Values.domain,
        'VITE_AUTH0_CLIENT_ID': auth0Values.clientId,
        'VITE_AUTH0_AUDIENCE': auth0Values.audience,
        'AUTH0_DOMAIN': auth0Values.domain,
        'AUTH0_CLIENT_ID': auth0Values.clientId,
        'AUTH0_CLIENT_SECRET': auth0Values.clientSecret
      };

      // Check if site is linked to Netlify
      try {
        execSync('netlify status', { stdio: 'ignore' });
        console.log('✅ Site is linked to Netlify');
        
        // Set environment variables in Netlify
        for (const [key, value] of Object.entries(envVars)) {
          try {
            execSync(`netlify env:set ${key} "${value}"`, { stdio: 'ignore' });
            console.log(`✅ Set ${key} in Netlify`);
          } catch (error) {
            console.error(`❌ Error setting ${key} in Netlify`);
          }
        }
      } catch (error) {
        console.log('⚠️ Site is not linked to Netlify or Netlify CLI is not installed');
      }
    } catch (error) {
      console.log('⚠️ Netlify CLI not available, skipping Netlify environment variables setup');
    }

    console.log('\n✅ Auth0 environment variables set up successfully');
  } catch (error) {
    console.error('❌ Error setting up Auth0 environment variables:', error);
  }
}

setupAuth0Env();
