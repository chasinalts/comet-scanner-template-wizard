#!/usr/bin/env node
/**
 * Script to configure Auth0 Universal Login using a Machine-to-Machine application
 *
 * This script uses the Auth0 Management API with a Machine-to-Machine application
 * to configure Universal Login settings and application settings.
 */
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import readline from 'readline';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Load environment variables
dotenv.config({ path: path.join(rootDir, '.env') });
dotenv.config({ path: path.join(rootDir, '.env.local') });

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Helper function to prompt user
const prompt = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Main function
async function main() {
  console.log('\n=== Configuring Auth0 Universal Login using Management API ===\n');

  // Get Auth0 credentials
  let auth0Domain = process.env.VITE_AUTH0_DOMAIN || process.env.AUTH0_DOMAIN;
  let spaClientId = process.env.VITE_AUTH0_CLIENT_ID || process.env.AUTH0_CLIENT_ID;
  let m2mClientId, m2mClientSecret;
  const appUrl = process.env.VITE_APP_URL || 'https://cometscanner.netlify.app';
  const localUrl = 'http://localhost:3000';

  if (!auth0Domain) {
    auth0Domain = await prompt('Enter your Auth0 domain (e.g., dev-mytcazei5krtbkqw.us.auth0.com): ');
  }

  if (!spaClientId) {
    spaClientId = await prompt('Enter your SPA application client ID (the one used in your app): ');
  }

  console.log('\nYou need to create a Machine-to-Machine application in Auth0 with Management API permissions.');
  console.log('Please follow these steps:');
  console.log('1. Log in to your Auth0 dashboard at https://manage.auth0.com/');
  console.log('2. Go to "Applications" → "Applications"');
  console.log('3. Click "Create Application"');
  console.log('4. Name it "COMET Scanner Management API"');
  console.log('5. Select "Machine to Machine Applications" as the application type');
  console.log('6. Click "Create"');
  console.log('7. In the next screen, select the "Auth0 Management API" from the dropdown');
  console.log('8. Select the following permissions:');
  console.log('   - read:clients');
  console.log('   - update:clients');
  console.log('   - read:tenant_settings');
  console.log('   - update:tenant_settings');
  console.log('   - read:branding');
  console.log('   - update:branding');
  console.log('   - read:prompts');
  console.log('   - update:prompts');
  console.log('9. Click "Authorize"');
  console.log('10. Go to the "Settings" tab of your new application');
  console.log('11. Note down the "Client ID" and "Client Secret"');

  const proceed = await prompt('\nHave you created the Machine-to-Machine application? (y/n): ');

  if (proceed.toLowerCase() !== 'y') {
    console.log('Please create the Machine-to-Machine application and run this script again.');
    rl.close();
    return;
  }

  m2mClientId = await prompt('Enter the Machine-to-Machine application client ID: ');
  m2mClientSecret = await prompt('Enter the Machine-to-Machine application client secret: ');

  // Step 1: Get Management API token
  console.log('\nStep 1: Getting Management API token...');

  let managementToken;
  try {
    const tokenResponse = await fetch(`https://${auth0Domain}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: m2mClientId,
        client_secret: m2mClientSecret,
        audience: `https://${auth0Domain}/api/v2/`,
        grant_type: 'client_credentials'
      })
    });

    const tokenData = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenData.access_token) {
      throw new Error(`Failed to get token: ${JSON.stringify(tokenData)}`);
    }

    managementToken = tokenData.access_token;
    console.log('✅ Got Management API token');
  } catch (tokenError) {
    console.error('❌ Failed to get Management API token:', tokenError.message);
    rl.close();
    return;
  }

  // Step 2: Configure tenant settings for Universal Login
  console.log('\nStep 2: Configuring tenant settings for Universal Login...');

  try {
    const tenantResponse = await fetch(`https://${auth0Domain}/api/v2/tenants/settings`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${managementToken}`
      },
      body: JSON.stringify({
        universal_login: {
          colors: {
            primary: "#0059d6",
            page_background: "#000000"
          }
        },
        default_redirection_uri: `${appUrl}/callback`,
        flags: {
          universal_login: true,
          disable_clickjack_protection_headers: false
        }
      })
    });

    if (!tenantResponse.ok) {
      const errorData = await tenantResponse.json();
      throw new Error(`Failed to update tenant settings: ${JSON.stringify(errorData)}`);
    }

    console.log('✅ Tenant settings configured successfully');
  } catch (tenantError) {
    console.error('❌ Failed to configure tenant settings:', tenantError.message);
  }

  // Step 3: Configure Universal Login branding
  console.log('\nStep 3: Configuring Universal Login branding...');

  try {
    const brandingResponse = await fetch(`https://${auth0Domain}/api/v2/branding`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${managementToken}`
      },
      body: JSON.stringify({
        universal_login: {
          body_font: {
            url: "https://fonts.googleapis.com/css?family=Roboto:400,500,700"
          },
          colors: {
            primary: "#0059d6",
            page_background: "#000000"
          }
        },
        templates: []
      })
    });

    if (!brandingResponse.ok) {
      const errorData = await brandingResponse.json();
      throw new Error(`Failed to update branding: ${JSON.stringify(errorData)}`);
    }

    console.log('✅ Universal Login branding configured successfully');
  } catch (brandingError) {
    console.error('❌ Failed to configure Universal Login branding:', brandingError.message);
  }

  // Step 4: Configure application settings
  console.log('\nStep 4: Configuring application settings...');

  try {
    const appResponse = await fetch(`https://${auth0Domain}/api/v2/clients/${spaClientId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${managementToken}`
      },
      body: JSON.stringify({
        callbacks: [
          `${localUrl}/callback`,
          `${appUrl}/callback`
        ],
        allowed_logout_urls: [
          localUrl,
          appUrl
        ],
        web_origins: [
          localUrl,
          appUrl
        ],
        allowed_origins: [
          localUrl,
          appUrl
        ],
        grant_types: [
          "authorization_code",
          "implicit",
          "refresh_token"
        ],
        token_endpoint_auth_method: "none",
        app_type: "spa",
        oidc_conformant: true,
        jwt_configuration: {
          alg: "RS256",
          lifetime_in_seconds: 36000,
          secret_encoded: false
        }
      })
    });

    if (!appResponse.ok) {
      const errorData = await appResponse.json();
      throw new Error(`Failed to update application settings: ${JSON.stringify(errorData)}`);
    }

    console.log('✅ Application settings configured successfully');
  } catch (appError) {
    console.error('❌ Failed to configure application settings:', appError.message);
  }

  // Step 5: Configure Universal Login experience
  console.log('\nStep 5: Configuring Universal Login experience...');

  try {
    const promptResponse = await fetch(`https://${auth0Domain}/api/v2/prompts`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${managementToken}`
      },
      body: JSON.stringify({
        universal_login_experience: "new"
      })
    });

    if (!promptResponse.ok) {
      const errorData = await promptResponse.json();
      throw new Error(`Failed to update Universal Login experience: ${JSON.stringify(errorData)}`);
    }

    console.log('✅ Universal Login experience configured successfully');
  } catch (promptError) {
    console.error('❌ Failed to configure Universal Login experience:', promptError.message);
  }

  // Step 6: Configure Prompt Settings
  console.log('\nStep 6: Configuring Prompt Settings...');

  try {
    const promptSettingsResponse = await fetch(`https://${auth0Domain}/api/v2/prompts/settings`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${managementToken}`
      },
      body: JSON.stringify({
        prompt: "none"
      })
    });

    if (!promptSettingsResponse.ok) {
      const errorData = await promptSettingsResponse.json();
      throw new Error(`Failed to update Prompt Settings: ${JSON.stringify(errorData)}`);
    }

    console.log('✅ Prompt Settings configured successfully');
    console.log('   - Set "Prompt" to "None" (default)');
    console.log('   - This allows your application to control when to show the login prompt');
  } catch (promptSettingsError) {
    console.error('❌ Failed to configure Prompt Settings:', promptSettingsError.message);
  }

  console.log('\n=== Auth0 Universal Login Configuration Complete ===');
  console.log('Your Auth0 tenant is now configured to use Universal Login.');
  console.log('This should resolve any Quirks Mode issues and provide a better authentication experience.');

  console.log('\nTo test the setup:');
  console.log('1. Log out of your application if you\'re currently logged in');
  console.log('2. Navigate to the login page of your application');
  console.log('3. You should be redirected to Auth0\'s Universal Login page');
  console.log('4. Check your browser\'s developer console (F12) for any Quirks Mode warnings');
  console.log('5. Complete the login process and verify you\'re redirected back to your application');

  rl.close();
}

main().catch(error => {
  console.error('An error occurred:', error);
  rl.close();
});
