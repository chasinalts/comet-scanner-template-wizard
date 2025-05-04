#!/usr/bin/env node

/**
 * Script to create a new Supabase project and set up everything automatically
 * 
 * This script:
 * 1. Installs Supabase CLI locally
 * 2. Logs in to Supabase (if needed)
 * 3. Creates a new Supabase project
 * 4. Gets project credentials
 * 5. Updates .env file
 * 6. Creates all necessary database tables
 * 7. Creates all necessary storage buckets
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

// Execute a command and return its output
const execCommand = (command, silent = false) => {
  try {
    return execSync(command, { 
      encoding: 'utf8',
      stdio: silent ? 'pipe' : 'inherit'
    });
  } catch (error) {
    if (!silent) {
      console.error(`Error executing command: ${command}`);
      console.error(error.message);
    }
    return null;
  }
};

// Sleep function
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Main function
async function createSupabaseProject() {
  try {
    console.log('🚀 Creating New Supabase Project');
    console.log('------------------------------');
    
    // Step 1: Install Supabase CLI locally
    console.log('\n📦 Installing Supabase CLI locally');
    console.log('--------------------------------');
    
    execCommand('npm install --save-dev supabase');
    console.log('✅ Supabase CLI installed');
    
    // Step 2: Log in to Supabase
    console.log('\n🔑 Checking Supabase login');
    console.log('------------------------');
    
    // Check if already logged in
    const loginCheck = execCommand('npx supabase projects list', true);
    
    if (!loginCheck || loginCheck.includes('not logged in')) {
      console.log('You need to log in to Supabase');
      console.log('A browser window will open for you to log in...');
      
      execCommand('npx supabase login');
    } else {
      console.log('✅ Already logged in to Supabase');
    }
    
    // Step 3: Get organization ID
    console.log('\n🏢 Getting organization ID');
    console.log('------------------------');
    
    const orgsOutput = execCommand('npx supabase orgs list', true);
    
    if (!orgsOutput) {
      console.log('❌ Failed to list organizations');
      rl.close();
      return;
    }
    
    console.log('Your Supabase organizations:');
    console.log(orgsOutput);
    
    const orgId = await prompt('Enter your organization ID from the list above: ');
    
    if (!orgId) {
      console.log('❌ Organization ID is required');
      rl.close();
      return;
    }
    
    // Step 4: Create a new project
    console.log('\n🆕 Creating a new Supabase project');
    console.log('-------------------------------');
    
    const projectName = 'comet-scanner-' + Math.floor(Date.now() / 1000);
    const dbPassword = 'Password' + Math.floor(Math.random() * 1000000);
    const region = 'us-east-1'; // Default to US East (N. Virginia)
    
    console.log(`Creating project "${projectName}" in region ${region}`);
    console.log('This may take a few minutes...');
    
    execCommand(`npx supabase projects create "${projectName}" --org-id ${orgId} --db-password "${dbPassword}" --region ${region}`);
    
    console.log('✅ Project created');
    console.log('Waiting for project to be ready...');
    
    // Wait for the project to be ready
    await sleep(10000); // Wait 10 seconds
    
    // Step 5: Get the project reference ID
    console.log('\n🔍 Getting project reference ID');
    console.log('-----------------------------');
    
    const projectsOutput = execCommand('npx supabase projects list', true);
    
    if (!projectsOutput) {
      console.log('❌ Failed to list projects');
      rl.close();
      return;
    }
    
    // Parse the output to find the new project
    const lines = projectsOutput.split('\n').filter(line => line.trim() !== '');
    let projectRef = '';
    
    for (const line of lines) {
      if (line.includes(projectName)) {
        const parts = line.split('|').map(part => part.trim());
        if (parts.length >= 2) {
          projectRef = parts[0];
          break;
        }
      }
    }
    
    if (!projectRef) {
      console.log('❌ Failed to find the new project');
      console.log('Please check your projects manually:');
      console.log('npx supabase projects list');
      rl.close();
      return;
    }
    
    console.log(`Found project reference ID: ${projectRef}`);
    
    // Step 6: Wait for the project to be fully ready
    console.log('\n⏳ Waiting for project to be fully ready');
    console.log('------------------------------------');
    console.log('This may take a few minutes...');
    
    await sleep(30000); // Wait 30 seconds
    
    // Step 7: Get project credentials
    console.log('\n🔑 Getting project credentials');
    console.log('-----------------------------');
    
    // Get project URL
    const projectInfo = execCommand(`npx supabase projects show --project-ref ${projectRef}`, true);
    let url = '';
    
    if (projectInfo) {
      const lines = projectInfo.split('\n');
      for (const line of lines) {
        if (line.includes('API URL')) {
          url = line.split(':')[1].trim();
          break;
        }
      }
    }
    
    // Get API keys
    const apiKeys = execCommand(`npx supabase projects api-keys --project-ref ${projectRef}`, true);
    let anonKey = '';
    let serviceKey = '';
    
    if (apiKeys) {
      const lines = apiKeys.split('\n');
      for (const line of lines) {
        if (line.includes('anon')) {
          anonKey = line.split('|')[1].trim();
        } else if (line.includes('service_role')) {
          serviceKey = line.split('|')[1].trim();
        }
      }
    }
    
    if (!url || !anonKey || !serviceKey) {
      console.log('❌ Failed to get complete credentials');
      console.log('Please get them manually:');
      console.log(`npx supabase projects show --project-ref ${projectRef}`);
      console.log(`npx supabase projects api-keys --project-ref ${projectRef}`);
      rl.close();
      return;
    }
    
    console.log('✅ Got project credentials');
    
    // Step 8: Update .env file
    console.log('\n📝 Updating .env file');
    console.log('--------------------');
    
    const envPath = path.join(process.cwd(), '.env');
    let envContent = '';
    
    try {
      envContent = fs.readFileSync(envPath, 'utf8');
    } catch (error) {
      console.log('No .env file found, creating one...');
      envContent = '';
    }
    
    // Update or add Supabase credentials
    if (envContent.includes('VITE_SUPABASE_URL=')) {
      envContent = envContent.replace(/VITE_SUPABASE_URL=.*/g, `VITE_SUPABASE_URL=${url}`);
    } else {
      envContent += `\n# Supabase Configuration\nVITE_SUPABASE_URL=${url}\n`;
    }
    
    if (envContent.includes('VITE_SUPABASE_ANON_KEY=')) {
      envContent = envContent.replace(/VITE_SUPABASE_ANON_KEY=.*/g, `VITE_SUPABASE_ANON_KEY=${anonKey}`);
    } else {
      envContent += `VITE_SUPABASE_ANON_KEY=${anonKey}\n`;
    }
    
    if (envContent.includes('SUPABASE_SERVICE_ROLE_KEY=')) {
      envContent = envContent.replace(/SUPABASE_SERVICE_ROLE_KEY=.*/g, `SUPABASE_SERVICE_ROLE_KEY=${serviceKey}`);
    } else {
      envContent += `SUPABASE_SERVICE_ROLE_KEY=${serviceKey}\n`;
    }
    
    fs.writeFileSync(envPath, envContent);
    console.log('✅ Updated .env file with Supabase credentials');
    
    // Step 9: Create database tables
    console.log('\n📊 Creating database tables');
    console.log('-------------------------');
    
    // Create extended_content table
    console.log('Creating extended_content table...');
    execCommand(`npx supabase db execute --project-ref ${projectRef} "CREATE TABLE IF NOT EXISTS extended_content (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), title TEXT NOT NULL, content TEXT, section_id TEXT, created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(), updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(), created_by UUID, content_type TEXT)"`);
    
    // Create images table
    console.log('Creating images table...');
    execCommand(`npx supabase db execute --project-ref ${projectRef} "CREATE TABLE IF NOT EXISTS images (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), name TEXT NOT NULL, file_path TEXT NOT NULL, bucket_id TEXT NOT NULL, uploaded_by TEXT, uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(), image_type TEXT NOT NULL, size INTEGER, width INTEGER, height INTEGER, metadata JSONB)"`);
    
    // Create logs table
    console.log('Creating logs table...');
    execCommand(`npx supabase db execute --project-ref ${projectRef} "CREATE TABLE IF NOT EXISTS logs (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), event TEXT NOT NULL, message TEXT NOT NULL, timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(), user_id TEXT, level TEXT, details JSONB)"`);
    
    console.log('✅ Database tables created');
    
    // Step 10: Create storage buckets
    console.log('\n📁 Creating storage buckets');
    console.log('-------------------------');
    
    // Create banner bucket
    console.log('Creating banner bucket...');
    execCommand(`npx supabase storage create-bucket --project-ref ${projectRef} banner --public`);
    
    // Create gallery bucket
    console.log('Creating gallery bucket...');
    execCommand(`npx supabase storage create-bucket --project-ref ${projectRef} gallery --public`);
    
    // Create scanner bucket
    console.log('Creating scanner bucket...');
    execCommand(`npx supabase storage create-bucket --project-ref ${projectRef} scanner --public`);
    
    console.log('✅ Storage buckets created');
    
    console.log('\n🎉 Supabase project created and set up!');
    console.log('Project details:');
    console.log(`- Name: ${projectName}`);
    console.log(`- Reference ID: ${projectRef}`);
    console.log(`- URL: ${url}`);
    console.log(`- Database password: ${dbPassword} (save this somewhere secure)`);
    console.log('\nYour application is now configured to use:');
    console.log('- Your existing Appwrite setup for authentication and core database');
    console.log('- Supabase for extended storage and database needs');
    
    rl.close();
  } catch (error) {
    console.error('Error creating Supabase project:', error);
    rl.close();
  }
}

// Run the function
createSupabaseProject();
