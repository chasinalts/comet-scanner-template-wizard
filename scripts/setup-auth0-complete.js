#!/usr/bin/env node
/**
 * Master script to run all the Auth0 setup steps
 */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function setupAuth0Complete() {
  try {
    console.log('🔄 Setting up Auth0 integration...');
    console.log('------------------------------------------');

    // Step 1: Set up Auth0 environment variables
    console.log('\n🔄 Step 1: Setting up Auth0 environment variables...');
    try {
      execSync('node scripts/setup-auth0-env-noninteractive.js', { stdio: 'inherit' });
      console.log('✅ Auth0 environment variables set up successfully');
    } catch (error) {
      console.error('❌ Error setting up Auth0 environment variables:', error);
      console.log('⚠️ Continuing with the next step...');
    }

    // Step 2: Set up user profiles table in Supabase
    console.log('\n🔄 Step 2: Setting up user profiles table in Supabase...');
    try {
      execSync('node scripts/create-user-profiles-direct.js', { stdio: 'inherit' });
      console.log('✅ User profiles table set up successfully');
    } catch (error) {
      console.error('❌ Error setting up user profiles table:', error);
      console.log('⚠️ Continuing with the next step...');
    }

    // Step 3: Set up Auth0 rules
    console.log('\n🔄 Step 3: Setting up Auth0 rules...');
    try {
      execSync('node scripts/setup-auth0-rules.js', { stdio: 'inherit' });
      console.log('✅ Auth0 rules set up successfully');
    } catch (error) {
      console.error('❌ Error setting up Auth0 rules:', error);
      console.log('⚠️ Continuing with the next step...');
    }

    // Step 4: Commit and push changes to GitHub
    console.log('\n🔄 Step 4: Committing and pushing changes to GitHub...');
    try {
      execSync('node scripts/commit-and-push-noninteractive.js', { stdio: 'inherit' });
      console.log('✅ Changes committed and pushed successfully');
    } catch (error) {
      console.error('❌ Error committing and pushing changes:', error);
      console.log('⚠️ Continuing with the next step...');
    }

    // Step 5: Deploy to Netlify
    console.log('\n🔄 Step 5: Deploying to Netlify...');
    try {
      execSync('node scripts/deploy-to-netlify.js', { stdio: 'inherit' });
      console.log('✅ Deployed to Netlify successfully');
    } catch (error) {
      console.error('❌ Error deploying to Netlify:', error);
      console.log('⚠️ Continuing with the next step...');
    }

    console.log('\n✅ Auth0 integration setup complete');
    console.log('------------------------------------------');
    console.log('Next steps:');
    console.log('1. Set up the Auth0 application in the Auth0 dashboard');
    console.log('2. Add the Auth0 rule to the Auth0 dashboard');
    console.log('3. Set up an owner account in Auth0');
    console.log('4. Test the authentication flow');
  } catch (error) {
    console.error('❌ Error setting up Auth0 integration:', error);
  }
}

setupAuth0Complete();
