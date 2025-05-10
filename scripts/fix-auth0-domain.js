#!/usr/bin/env node
/**
 * Script to fix Auth0 domain issues
 * This script ensures all Auth0 domain references are consistent
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = path.join(__dirname, '..');

// The correct Auth0 domain
const CORRECT_AUTH0_DOMAIN = 'dev-mytcazei5krtbkqw.us.auth0.com';

console.log('🔧 Fixing Auth0 domain references...');

// Update .env file
const envPath = path.join(rootDir, '.env');
if (fs.existsSync(envPath)) {
  console.log('📝 Updating .env file...');
  let envContent = fs.readFileSync(envPath, 'utf8');
  
  // Update Auth0 domain
  if (envContent.includes('VITE_AUTH0_DOMAIN=')) {
    envContent = envContent.replace(/VITE_AUTH0_DOMAIN=.+/g, `VITE_AUTH0_DOMAIN=${CORRECT_AUTH0_DOMAIN}`);
  } else {
    envContent += `\nVITE_AUTH0_DOMAIN=${CORRECT_AUTH0_DOMAIN}`;
  }
  
  // Update Auth0 domain (server-side)
  if (envContent.includes('AUTH0_DOMAIN=')) {
    envContent = envContent.replace(/AUTH0_DOMAIN=.+/g, `AUTH0_DOMAIN=${CORRECT_AUTH0_DOMAIN}`);
  } else {
    envContent += `\nAUTH0_DOMAIN=${CORRECT_AUTH0_DOMAIN}`;
  }
  
  fs.writeFileSync(envPath, envContent);
  console.log('✅ Updated .env file');
}

// Update .env.local file
const envLocalPath = path.join(rootDir, '.env.local');
if (fs.existsSync(envLocalPath)) {
  console.log('📝 Updating .env.local file...');
  let envLocalContent = fs.readFileSync(envLocalPath, 'utf8');
  
  // Update Auth0 domain
  if (envLocalContent.includes('VITE_AUTH0_DOMAIN=')) {
    envLocalContent = envLocalContent.replace(/VITE_AUTH0_DOMAIN=.+/g, `VITE_AUTH0_DOMAIN=${CORRECT_AUTH0_DOMAIN}`);
  } else {
    envLocalContent += `\nVITE_AUTH0_DOMAIN=${CORRECT_AUTH0_DOMAIN}`;
  }
  
  // Update Auth0 domain (server-side)
  if (envLocalContent.includes('AUTH0_DOMAIN=')) {
    envLocalContent = envLocalContent.replace(/AUTH0_DOMAIN=.+/g, `AUTH0_DOMAIN=${CORRECT_AUTH0_DOMAIN}`);
  } else {
    envLocalContent += `\nAUTH0_DOMAIN=${CORRECT_AUTH0_DOMAIN}`;
  }
  
  fs.writeFileSync(envLocalPath, envLocalContent);
  console.log('✅ Updated .env.local file');
}

// Update App.tsx
const appTsxPath = path.join(rootDir, 'src', 'App.tsx');
if (fs.existsSync(appTsxPath)) {
  console.log('📝 Updating App.tsx file...');
  let appTsxContent = fs.readFileSync(appTsxPath, 'utf8');
  
  // Replace any domain in Auth0Provider
  appTsxContent = appTsxContent.replace(
    /domain=\{[^}]*\}|domain="[^"]*"/g, 
    `domain="${CORRECT_AUTH0_DOMAIN}"`
  );
  
  fs.writeFileSync(appTsxPath, appTsxContent);
  console.log('✅ Updated App.tsx file');
}

// Update auth0Config.ts
const auth0ConfigPath = path.join(rootDir, 'src', 'auth0Config.ts');
if (fs.existsSync(auth0ConfigPath)) {
  console.log('📝 Updating auth0Config.ts file...');
  let auth0ConfigContent = fs.readFileSync(auth0ConfigPath, 'utf8');
  
  // Replace any domain in auth0Config
  auth0ConfigContent = auth0ConfigContent.replace(
    /domain: [^,}]*/g, 
    `domain: '${CORRECT_AUTH0_DOMAIN}'`
  );
  
  fs.writeFileSync(auth0ConfigPath, auth0ConfigContent);
  console.log('✅ Updated auth0Config.ts file');
}

// Try to update Netlify environment variables if netlify CLI is available
try {
  console.log('📝 Checking if Netlify CLI is available...');
  execSync('netlify --version', { stdio: 'ignore' });
  
  console.log('📝 Setting Auth0 environment variables in Netlify...');
  execSync(`netlify env:set VITE_AUTH0_DOMAIN ${CORRECT_AUTH0_DOMAIN}`, { stdio: 'inherit' });
  execSync(`netlify env:set AUTH0_DOMAIN ${CORRECT_AUTH0_DOMAIN}`, { stdio: 'inherit' });
  
  console.log('✅ Updated Netlify environment variables');
} catch (error) {
  console.log('⚠️ Netlify CLI not available or not logged in. Skipping Netlify environment update.');
  console.log('   You may need to manually update your Netlify environment variables.');
}

console.log('\n✅ All Auth0 domain references have been updated to:', CORRECT_AUTH0_DOMAIN);
console.log('\n🔍 Next steps:');
console.log('1. Restart your development server');
console.log('2. Clear your browser cache');
console.log('3. Try logging in again');
console.log('\nIf you still encounter issues, check your Auth0 dashboard to ensure the domain is correct.');
