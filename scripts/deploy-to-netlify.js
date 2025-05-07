#!/usr/bin/env node
/**
 * Script to deploy the application to Netlify
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function deployToNetlify() {
  try {
    console.log('🔄 Deploying to Netlify...');

    // Check if Netlify CLI is installed
    try {
      execSync('netlify --version', { stdio: 'ignore' });
      console.log('✅ Netlify CLI is installed');
    } catch (error) {
      console.error('❌ Netlify CLI is not installed. Please install it with: npm install -g netlify-cli');
      return;
    }

    // Check if site is linked to Netlify
    try {
      execSync('netlify status', { stdio: 'ignore' });
      console.log('✅ Site is linked to Netlify');
    } catch (error) {
      console.log('⚠️ Site is not linked to Netlify. Linking now...');
      try {
        execSync('netlify link', { stdio: 'inherit' });
      } catch (linkError) {
        console.error('❌ Error linking site to Netlify:', linkError);
        console.log('⚠️ Please link the site manually with: netlify link');
        return;
      }
    }

    // Build the application
    console.log('🔄 Building the application...');
    try {
      execSync('npm run build', { stdio: 'inherit' });
      console.log('✅ Application built successfully');
    } catch (error) {
      console.error('❌ Error building the application:', error);
      return;
    }

    // Deploy to Netlify
    console.log('🔄 Deploying to Netlify...');
    try {
      execSync('netlify deploy --prod', { stdio: 'inherit' });
      console.log('✅ Deployed to Netlify successfully');
    } catch (error) {
      console.error('❌ Error deploying to Netlify:', error);
      return;
    }

    console.log('✅ Deployment complete');
  } catch (error) {
    console.error('❌ Error deploying to Netlify:', error);
  }
}

deployToNetlify();
