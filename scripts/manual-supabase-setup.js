#!/usr/bin/env node

/**
 * Manual Supabase setup script with better error handling
 * 
 * This script:
 * 1. Installs Supabase CLI locally
 * 2. Logs in to Supabase (if needed)
 * 3. Shows available projects
 * 4. Lets you select a project
 * 5. Manually guides you through getting credentials
 * 6. Updates .env file
 * 7. Creates database tables
 * 8. Creates storage buckets
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

// Main function
async function manualSetupSupabase() {
  try {
    console.log('🚀 Manual Supabase Setup');
    console.log('----------------------');
    
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
    
    // Step 3: Show available projects
    console.log('\n📋 Available Supabase projects');
    console.log('----------------------------');
    
    const projectsOutput = execCommand('npx supabase projects list', true);
    
    if (!projectsOutput || projectsOutput.includes('not logged in')) {
      console.log('❌ Failed to list projects. Please log in manually:');
      console.log('npx supabase login');
      rl.close();
      return;
    }
    
    console.log(projectsOutput);
    
    // Step 4: Select a project
    const projectRef = await prompt('Enter the project reference ID from the list above: ');
    
    if (!projectRef) {
      console.log('❌ Project reference ID is required');
      rl.close();
      return;
    }
    
    // Step 5: Manually get credentials
    console.log('\n🔑 Getting project credentials');
    console.log('-----------------------------');
    console.log('We need to get the URL and API keys for your project');
    
    // Get project URL
    console.log('\nGetting project URL...');
    console.log('Run this command in a new terminal window:');
    console.log(`npx supabase projects show --project-ref ${projectRef}`);
    console.log('Look for the "API URL" in the output');
    
    const url = await prompt('Enter the API URL: ');
    
    if (!url) {
      console.log('❌ API URL is required');
      rl.close();
      return;
    }
    
    // Get API keys
    console.log('\nGetting API keys...');
    console.log('Run this command in a new terminal window:');
    console.log(`npx supabase projects api-keys --project-ref ${projectRef}`);
    console.log('Look for the "anon" and "service_role" keys in the output');
    
    const anonKey = await prompt('Enter the anon key: ');
    
    if (!anonKey) {
      console.log('❌ Anon key is required');
      rl.close();
      return;
    }
    
    const serviceKey = await prompt('Enter the service_role key: ');
    
    if (!serviceKey) {
      console.log('❌ Service role key is required');
      rl.close();
      return;
    }
    
    console.log('✅ Got project credentials');
    
    // Step 6: Update .env file
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
    
    // Step 7: Create database tables
    console.log('\n📊 Creating database tables');
    console.log('-------------------------');
    
    const createTables = await prompt('Create database tables? (y/n): ');
    
    if (createTables.toLowerCase() === 'y') {
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
    } else {
      console.log('Skipping database table creation');
    }
    
    // Step 8: Create storage buckets
    console.log('\n📁 Creating storage buckets');
    console.log('-------------------------');
    
    const createBuckets = await prompt('Create storage buckets? (y/n): ');
    
    if (createBuckets.toLowerCase() === 'y') {
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
    } else {
      console.log('Skipping storage bucket creation');
    }
    
    console.log('\n🎉 Supabase setup complete!');
    console.log('Your application is now configured to use:');
    console.log('- Your existing Appwrite setup for authentication and core database');
    console.log('- Supabase for extended storage and database needs');
    
    rl.close();
  } catch (error) {
    console.error('Error setting up Supabase:', error);
    rl.close();
  }
}

// Run the function
manualSetupSupabase();
