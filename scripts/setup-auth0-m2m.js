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
  console.log('   - read:client_grants');
  console.log('   - update:client_grants');
  console.log('   - read:connections');
  console.log('   - update:connections');
  console.log('   - read:users');
  console.log('   - update:users');
  console.log('9. Click "Authorize"');
  console.log('10. Go to the "Settings" tab of your new application');
  console.log('11. Note down the "Client ID" and "Client Secret"');
  console.log('\nIMPORTANT: After creating the application, you may need to wait a few minutes');
  console.log('for the permissions to propagate before running this script again.');

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

    // Verify token permissions by making a simple API call
    console.log('Verifying token permissions...');
    const verifyResponse = await fetch(`https://${auth0Domain}/api/v2/clients`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${managementToken}`
      }
    });

    if (!verifyResponse.ok) {
      const errorData = await verifyResponse.json();
      console.log('⚠️ Token verification failed:', JSON.stringify(errorData));
      console.log('\nPossible issues:');
      console.log('1. The Machine-to-Machine application might not have the necessary permissions');
      console.log('2. The permissions might not have propagated yet (can take a few minutes)');
      console.log('3. The token might have expired or been revoked');

      const continueAnyway = await prompt('\nDo you want to continue anyway? (y/n): ');
      if (continueAnyway.toLowerCase() !== 'y') {
        console.log('Exiting script. Please check your permissions and try again later.');
        rl.close();
        return;
      }

      console.log('Continuing with the script, but some operations might fail...');
    } else {
      console.log('✅ Token permissions verified successfully');
    }
  } catch (tokenError) {
    console.error('❌ Failed to get Management API token:', tokenError.message);
    console.log('\nPossible issues:');
    console.log('1. The Machine-to-Machine application might not exist or have incorrect credentials');
    console.log('2. The Auth0 domain might be incorrect');
    console.log('3. There might be network connectivity issues');

    const retry = await prompt('\nDo you want to retry with different credentials? (y/n): ');
    if (retry.toLowerCase() === 'y') {
      m2mClientId = await prompt('Enter the Machine-to-Machine application client ID: ');
      m2mClientSecret = await prompt('Enter the Machine-to-Machine application client secret: ');

      // Recursive call to retry with new credentials
      return await main();
    }

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
    // First, get the current branding to understand the structure
    const getBrandingResponse = await fetch(`https://${auth0Domain}/api/v2/branding`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${managementToken}`
      }
    });

    if (getBrandingResponse.ok) {
      const currentBranding = await getBrandingResponse.json();
      console.log('Current branding structure:', JSON.stringify(currentBranding, null, 2));
    } else {
      console.log('Could not retrieve current branding, proceeding with update...');
    }

    // Update branding with the correct structure
    const brandingResponse = await fetch(`https://${auth0Domain}/api/v2/branding`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${managementToken}`
      },
      body: JSON.stringify({
        colors: {
          primary: "#0059d6",
          page_background: "#000000"
        }
      })
    });

    if (!brandingResponse.ok) {
      const errorData = await brandingResponse.json();
      throw new Error(`Failed to update branding: ${JSON.stringify(errorData)}`);
    }

    console.log('✅ Universal Login branding configured successfully');

    // Try to update font separately if needed
    try {
      const fontResponse = await fetch(`https://${auth0Domain}/api/v2/branding/theme`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${managementToken}`
        },
        body: JSON.stringify({
          fonts: {
            body: {
              url: "https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            }
          }
        })
      });

      if (fontResponse.ok) {
        console.log('✅ Font settings updated successfully');
      } else {
        const fontError = await fontResponse.json();
        console.log('⚠️ Could not update font settings:', JSON.stringify(fontError));
      }
    } catch (fontError) {
      console.log('⚠️ Could not update font settings:', fontError.message);
    }
  } catch (brandingError) {
    console.error('❌ Failed to configure Universal Login branding:', brandingError.message);
  }

  // Step 4: Configure application settings
  console.log('\nStep 4: Configuring application settings...');

  try {
    // First, get the current application settings to understand the structure
    const getAppResponse = await fetch(`https://${auth0Domain}/api/v2/clients/${spaClientId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${managementToken}`
      }
    });

    if (getAppResponse.ok) {
      const currentApp = await getAppResponse.json();
      console.log('Current application structure:', JSON.stringify(currentApp, null, 2));
    } else {
      console.log('Could not retrieve current application settings, proceeding with update...');
    }

    // Update application settings with the correct structure
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
          lifetime_in_seconds: 36000
        }
      })
    });

    if (!appResponse.ok) {
      const errorData = await appResponse.json();

      // If we still have issues, try a more minimal update
      if (errorData.statusCode === 400) {
        console.log('⚠️ Detailed update failed, trying minimal update...');

        const minimalAppResponse = await fetch(`https://${auth0Domain}/api/v2/clients/${spaClientId}`, {
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
            ]
          })
        });

        if (!minimalAppResponse.ok) {
          const minimalErrorData = await minimalAppResponse.json();
          throw new Error(`Failed to update minimal application settings: ${JSON.stringify(minimalErrorData)}`);
        }

        console.log('✅ Basic application URLs configured successfully');

        // Try to update OIDC settings separately
        try {
          const oidcResponse = await fetch(`https://${auth0Domain}/api/v2/clients/${spaClientId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${managementToken}`
            },
            body: JSON.stringify({
              oidc_conformant: true,
              token_endpoint_auth_method: "none",
              app_type: "spa"
            })
          });

          if (oidcResponse.ok) {
            console.log('✅ OIDC settings configured successfully');
          } else {
            const oidcError = await oidcResponse.json();
            console.log('⚠️ Could not update OIDC settings:', JSON.stringify(oidcError));
          }
        } catch (oidcError) {
          console.log('⚠️ Could not update OIDC settings:', oidcError.message);
        }
      } else {
        throw new Error(`Failed to update application settings: ${JSON.stringify(errorData)}`);
      }
    } else {
      console.log('✅ Application settings configured successfully');
    }
  } catch (appError) {
    console.error('❌ Failed to configure application settings:', appError.message);
    console.log('\nPlease configure the application settings manually in the Auth0 dashboard:');
    console.log('1. Go to Applications → Applications → Your SPA Application');
    console.log('2. Add the following URLs:');
    console.log(`   - Allowed Callback URLs: ${localUrl}/callback, ${appUrl}/callback`);
    console.log(`   - Allowed Logout URLs: ${localUrl}, ${appUrl}`);
    console.log(`   - Allowed Web Origins: ${localUrl}, ${appUrl}`);
    console.log('3. Under "Advanced Settings" → "Grant Types", enable:');
    console.log('   - Authorization Code');
    console.log('   - Implicit');
    console.log('   - Refresh Token');
    console.log('4. Under "Advanced Settings" → "OAuth", set:');
    console.log('   - JsonWebToken Signature Algorithm: RS256');
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

  // Step 6: Configure Prompt Settings (using the correct endpoint)
  console.log('\nStep 6: Configuring Prompt Settings...');

  try {
    // First, try to get the current prompt settings to check the correct structure
    const getPromptsResponse = await fetch(`https://${auth0Domain}/api/v2/prompts`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${managementToken}`
      }
    });

    if (!getPromptsResponse.ok) {
      const errorData = await getPromptsResponse.json();
      console.log('⚠️ Could not get current prompt settings:', JSON.stringify(errorData));
      console.log('Trying alternative approach...');
    } else {
      const promptsData = await getPromptsResponse.json();
      console.log('Current prompts configuration:', JSON.stringify(promptsData, null, 2));
    }

    // Try updating the prompt settings using the correct endpoint structure
    console.log('Updating prompt settings...');

    // Try first approach - direct prompt property
    try {
      const promptSettingsResponse = await fetch(`https://${auth0Domain}/api/v2/prompts`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${managementToken}`
        },
        body: JSON.stringify({
          prompt: {
            selection_prompt: {
              type: "none"
            }
          }
        })
      });

      if (!promptSettingsResponse.ok) {
        const errorData = await promptSettingsResponse.json();
        console.log('⚠️ First approach failed:', JSON.stringify(errorData));
        throw new Error('First approach failed');
      }

      console.log('✅ Prompt Settings configured successfully (first approach)');
    } catch (firstApproachError) {
      // Try second approach - universal_login property
      try {
        const secondApproachResponse = await fetch(`https://${auth0Domain}/api/v2/prompts`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${managementToken}`
          },
          body: JSON.stringify({
            universal_login_experience: "new"
          })
        });

        if (!secondApproachResponse.ok) {
          const errorData = await secondApproachResponse.json();
          throw new Error(`Second approach failed: ${JSON.stringify(errorData)}`);
        }

        console.log('✅ Universal Login experience configured successfully');
        console.log('Note: The specific "Prompt" setting may need to be configured manually in the Auth0 dashboard:');
        console.log('1. Go to Authentication → Authentication Profile');
        console.log('2. Under "Login Experience", set "Prompt" to "None"');
      } catch (secondApproachError) {
        console.error('❌ Failed to configure Prompt Settings:', secondApproachError.message);
        console.log('\nPlease configure the Prompt setting manually in the Auth0 dashboard:');
        console.log('1. Go to Authentication → Authentication Profile');
        console.log('2. Under "Login Experience", set "Prompt" to "None"');
      }
    }
  } catch (promptSettingsError) {
    console.error('❌ Failed to configure Prompt Settings:', promptSettingsError.message);
    console.log('\nPlease configure the Prompt setting manually in the Auth0 dashboard:');
    console.log('1. Go to Authentication → Authentication Profile');
    console.log('2. Under "Login Experience", set "Prompt" to "None"');
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
