#!/usr/bin/env node
/**
 * Script to set up Auth0 Deploy CLI
 * 
 * This script installs and configures the Auth0 Deploy CLI for your project.
 * It creates the necessary configuration files and sets up environment variables.
 */
import { execSync } from 'child_process';
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
  console.log('\n=== Setting up Auth0 Deploy CLI ===\n');
  
  // Step 1: Install Auth0 Deploy CLI
  console.log('Step 1: Installing Auth0 Deploy CLI...');
  
  try {
    // Check if Auth0 Deploy CLI is already installed
    try {
      execSync('a0deploy --version', { stdio: 'ignore' });
      console.log('✅ Auth0 Deploy CLI is already installed');
    } catch (error) {
      console.log('Installing Auth0 Deploy CLI...');
      execSync('npm install -g auth0-deploy-cli', { stdio: 'inherit' });
      console.log('✅ Auth0 Deploy CLI installed successfully');
    }
  } catch (installError) {
    console.error('❌ Failed to install Auth0 Deploy CLI:', installError.message);
    console.log('Please install Auth0 Deploy CLI manually with: npm install -g auth0-deploy-cli');
    rl.close();
    return;
  }
  
  // Step 2: Get Auth0 credentials
  console.log('\nStep 2: Gathering Auth0 credentials...');
  
  let auth0Domain = process.env.VITE_AUTH0_DOMAIN || process.env.AUTH0_DOMAIN;
  let auth0ClientId = process.env.VITE_AUTH0_CLIENT_ID || process.env.AUTH0_CLIENT_ID;
  let auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;
  
  if (!auth0Domain) {
    auth0Domain = await prompt('Enter your Auth0 domain (e.g., dev-mytcazei5krtbkqw.us.auth0.com): ');
  }
  
  if (!auth0ClientId) {
    auth0ClientId = await prompt('Enter your Auth0 client ID: ');
  }
  
  if (!auth0ClientSecret) {
    auth0ClientSecret = await prompt('Enter your Auth0 client secret: ');
  }
  
  // Step 3: Create config.json file
  console.log('\nStep 3: Creating config.json file...');
  
  const configPath = path.join(rootDir, 'config.json');
  const configContent = {
    AUTH0_DOMAIN: auth0Domain,
    AUTH0_CLIENT_ID: auth0ClientId,
    AUTH0_ALLOW_DELETE: false,
    EXCLUDED_PROPS: {
      connections: ["options.twilio_token"]
    },
    AUTH0_EXCLUDED: ["organizations", "migrations"]
  };
  
  fs.writeFileSync(configPath, JSON.stringify(configContent, null, 2));
  console.log(`✅ Created config.json file at ${configPath}`);
  
  // Step 4: Create .env file with Auth0 credentials
  console.log('\nStep 4: Updating .env file with Auth0 Deploy CLI credentials...');
  
  const envPath = path.join(rootDir, '.env');
  let envContent = '';
  
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8');
  }
  
  // Add or update AUTH0_DOMAIN
  if (envContent.includes('AUTH0_DOMAIN=')) {
    envContent = envContent.replace(/AUTH0_DOMAIN=.+/g, `AUTH0_DOMAIN=${auth0Domain}`);
  } else {
    envContent += `\nAUTH0_DOMAIN=${auth0Domain}`;
  }
  
  // Add or update AUTH0_CLIENT_ID
  if (envContent.includes('AUTH0_CLIENT_ID=')) {
    envContent = envContent.replace(/AUTH0_CLIENT_ID=.+/g, `AUTH0_CLIENT_ID=${auth0ClientId}`);
  } else {
    envContent += `\nAUTH0_CLIENT_ID=${auth0ClientId}`;
  }
  
  // Add or update AUTH0_CLIENT_SECRET
  if (envContent.includes('AUTH0_CLIENT_SECRET=')) {
    envContent = envContent.replace(/AUTH0_CLIENT_SECRET=.+/g, `AUTH0_CLIENT_SECRET=${auth0ClientSecret}`);
  } else {
    envContent += `\nAUTH0_CLIENT_SECRET=${auth0ClientSecret}`;
  }
  
  fs.writeFileSync(envPath, envContent);
  console.log(`✅ Updated .env file at ${envPath}`);
  
  // Step 5: Create tenant.yaml template
  console.log('\nStep 5: Creating tenant.yaml template...');
  
  const tenantDirPath = path.join(rootDir, 'tenant');
  if (!fs.existsSync(tenantDirPath)) {
    fs.mkdirSync(tenantDirPath);
  }
  
  const tenantYamlPath = path.join(tenantDirPath, 'tenant.yaml');
  const tenantYamlContent = `tenant:
  friendly_name: 'COMET Scanner Template Wizard'
  enabled_locales:
    - en
  flags:
    universal_login: true
    disable_clickjack_protection_headers: false
  universal_login:
    colors:
      primary: '#0059d6'
      page_background: '#000000'
    
clients:
  - name: 'COMET Scanner Template Wizard'
    app_type: 'spa'
    callbacks:
      - 'http://localhost:3000/callback'
      - 'https://cometscanner.netlify.app/callback'
    allowed_logout_urls:
      - 'http://localhost:3000'
      - 'https://cometscanner.netlify.app'
    web_origins:
      - 'http://localhost:3000'
      - 'https://cometscanner.netlify.app'
    grant_types:
      - 'authorization_code'
      - 'implicit'
      - 'refresh_token'
    token_endpoint_auth_method: 'none'
    oidc_conformant: true
    jwt_configuration:
      alg: 'RS256'
      lifetime_in_seconds: 36000
`;
  
  fs.writeFileSync(tenantYamlPath, tenantYamlContent);
  console.log(`✅ Created tenant.yaml template at ${tenantYamlPath}`);
  
  // Step 6: Create npm scripts for Auth0 Deploy CLI
  console.log('\nStep 6: Adding npm scripts for Auth0 Deploy CLI...');
  
  const packageJsonPath = path.join(rootDir, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
  
  packageJson.scripts = packageJson.scripts || {};
  packageJson.scripts['auth0:export'] = 'a0deploy export --format=yaml --output_folder=tenant';
  packageJson.scripts['auth0:import'] = 'a0deploy import --input_file=tenant/tenant.yaml';
  
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('✅ Added Auth0 Deploy CLI scripts to package.json');
  
  // Step 7: Create a README file for Auth0 Deploy CLI
  console.log('\nStep 7: Creating README file for Auth0 Deploy CLI...');
  
  const readmePath = path.join(rootDir, 'AUTH0-DEPLOY-CLI.md');
  const readmeContent = `# Auth0 Deploy CLI Setup

This document explains how to use the Auth0 Deploy CLI with your COMET Scanner Template Wizard project.

## Prerequisites

- Node.js v18+
- Auth0 account with appropriate permissions
- Auth0 Deploy CLI installed globally: \`npm install -g auth0-deploy-cli\`

## Configuration

The Auth0 Deploy CLI is configured using:

1. \`config.json\` file in the root directory
2. Environment variables in your \`.env\` file

## Available Commands

### Export Auth0 Configuration

To export your current Auth0 tenant configuration:

\`\`\`bash
npm run auth0:export
\`\`\`

This will export your Auth0 configuration to the \`tenant\` directory in YAML format.

### Import Auth0 Configuration

To import Auth0 configuration from your local files:

\`\`\`bash
npm run auth0:import
\`\`\`

This will import the configuration from \`tenant/tenant.yaml\` to your Auth0 tenant.

## Security Considerations

- Never commit your \`.env\` file or \`config.json\` file to version control
- Use environment variables for sensitive information when possible
- The \`AUTH0_ALLOW_DELETE\` setting is set to \`false\` by default for safety

## Excluded Resources

The following resource types are excluded from management:

- organizations
- migrations

## Additional Configuration

You can modify the \`config.json\` file to:

- Include or exclude specific resource types
- Set keyword replacement mappings
- Configure other Auth0 Deploy CLI options

For more information, see the [Auth0 Deploy CLI documentation](https://auth0.com/docs/deploy-monitor/deploy-cli-tool/configure-the-deploy-cli).
`;
  
  fs.writeFileSync(readmePath, readmeContent);
  console.log(`✅ Created README file at ${readmePath}`);
  
  console.log('\n=== Auth0 Deploy CLI Setup Complete ===');
  console.log('You can now use the following commands:');
  console.log('- npm run auth0:export - Export Auth0 configuration');
  console.log('- npm run auth0:import - Import Auth0 configuration');
  console.log('\nFor more information, see the AUTH0-DEPLOY-CLI.md file.');
  
  rl.close();
}

main().catch(error => {
  console.error('An error occurred:', error);
  rl.close();
});
