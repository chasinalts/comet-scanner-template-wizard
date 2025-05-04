#!/usr/bin/env node

/**
 * Simple script to set up Supabase
 * 
 * This script:
 * 1. Installs Supabase CLI locally
 * 2. Logs in to Supabase
 * 3. Lists Supabase projects
 * 4. Gets project credentials
 * 5. Updates .env file
 */
import { execSync } from 'child_process';
import readline from 'readline';
import fs from 'fs';
import path from 'path';
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

// Main function
async function setupSupabase() {
  try {
    console.log('🚀 Simple Supabase Setup');
    console.log('----------------------');
    
    // Check Node.js version
    const nodeVersion = process.version;
    console.log(`Using Node.js ${nodeVersion}`);
    
    if (!nodeVersion.startsWith('v18.')) {
      console.log('⚠️ Warning: This app is designed for Node.js v18');
      console.log('You may encounter issues with other versions');
      
      const proceed = await prompt('Continue anyway? (y/n): ');
      if (proceed.toLowerCase() !== 'y') {
        console.log('Exiting. Please switch to Node.js v18 and try again.');
        rl.close();
        return;
      }
    }
    
    // Step 1: Install Supabase CLI locally
    console.log('\n📦 Installing Supabase CLI locally');
    console.log('--------------------------------');
    
    const installCLI = await prompt('Install Supabase CLI as a dev dependency? (y/n): ');
    
    if (installCLI.toLowerCase() === 'y') {
      console.log('Installing...');
      execCommand('npm install --save-dev supabase');
      console.log('✅ Supabase CLI installed');
    }
    
    // Step 2: Log in to Supabase
    console.log('\n🔑 Logging in to Supabase');
    console.log('------------------------');
    
    const login = await prompt('Log in to Supabase? (y/n): ');
    
    if (login.toLowerCase() === 'y') {
      console.log('A browser window will open for you to log in...');
      execCommand('npx supabase login');
    }
    
    // Step 3: List projects
    console.log('\n📋 Listing Supabase projects');
    console.log('---------------------------');
    
    const listProjects = await prompt('List your Supabase projects? (y/n): ');
    
    if (listProjects.toLowerCase() === 'y') {
      console.log('Your Supabase projects:');
      execCommand('npx supabase projects list');
    }
    
    // Step 4: Get project credentials
    console.log('\n🔑 Getting project credentials');
    console.log('-----------------------------');
    
    const getCredentials = await prompt('Get credentials for a project? (y/n): ');
    
    if (getCredentials.toLowerCase() === 'y') {
      const projectRef = await prompt('Enter the project reference ID: ');
      
      if (!projectRef) {
        console.log('Project reference ID is required');
        rl.close();
        return;
      }
      
      console.log(`Getting credentials for project ${projectRef}...`);
      
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
      
      if (url && anonKey && serviceKey) {
        console.log('✅ Got project credentials');
        
        // Update .env file
        const updateEnv = await prompt('Update .env file with these credentials? (y/n): ');
        
        if (updateEnv.toLowerCase() === 'y') {
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
        }
      } else {
        console.log('❌ Failed to get complete credentials');
      }
    }
    
    // Step 5: Create database tables
    console.log('\n📊 Creating database tables');
    console.log('-------------------------');
    
    const createTables = await prompt('Create database tables? (y/n): ');
    
    if (createTables.toLowerCase() === 'y') {
      // Get project reference
      const projectRef = await prompt('Enter the project reference ID: ');
      
      if (!projectRef) {
        console.log('Project reference ID is required');
        rl.close();
        return;
      }
      
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
    }
    
    // Step 6: Create storage buckets
    console.log('\n📁 Creating storage buckets');
    console.log('-------------------------');
    
    const createBuckets = await prompt('Create storage buckets? (y/n): ');
    
    if (createBuckets.toLowerCase() === 'y') {
      // Get project reference
      const projectRef = await prompt('Enter the project reference ID: ');
      
      if (!projectRef) {
        console.log('Project reference ID is required');
        rl.close();
        return;
      }
      
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
    }
    
    console.log('\n🎉 Supabase setup complete!');
    rl.close();
  } catch (error) {
    console.error('Error setting up Supabase:', error);
    rl.close();
  }
}

// Run the function
setupSupabase();
