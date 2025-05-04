#!/usr/bin/env node

/**
 * Script to set up an existing Supabase project
 * 
 * This script:
 * 1. Takes a project reference ID directly
 * 2. Gets project credentials
 * 3. Updates .env file
 * 4. Creates all necessary database tables
 * 5. Creates all necessary storage buckets
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
async function setupExistingProject() {
  try {
    console.log('🚀 Setting Up Existing Supabase Project');
    console.log('------------------------------------');
    
    // Step 1: Get project reference ID
    console.log('\n🔍 Enter project reference ID');
    console.log('---------------------------');
    
    // Use the project ID from the command line output
    const projectRef = await prompt('Enter the project reference ID (e.g., oomnadogzgpoaouireog): ');
    
    if (!projectRef) {
      console.log('❌ Project reference ID is required');
      rl.close();
      return;
    }
    
    console.log(`Using project reference ID: ${projectRef}`);
    
    // Step 2: Get project credentials
    console.log('\n🔑 Getting project credentials');
    console.log('-----------------------------');
    
    // Get project URL
    console.log('Getting project URL...');
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
    
    if (!url) {
      console.log('❌ Failed to get project URL');
      console.log('Please enter it manually:');
      url = await prompt('Enter the project API URL (e.g., https://oomnadogzgpoaouireog.supabase.co): ');
      
      if (!url) {
        console.log('❌ Project URL is required');
        rl.close();
        return;
      }
    }
    
    // Get API keys
    console.log('Getting API keys...');
    const apiKeys = execCommand(`npx supabase projects api-keys --project-ref ${projectRef}`, true);
    let anonKey = '';
    let serviceKey = '';
    
    if (apiKeys) {
      const lines = apiKeys.split('\n');
      for (const line of lines) {
        if (line.includes('anon')) {
          const parts = line.split('|');
          if (parts.length >= 2) {
            anonKey = parts[1].trim();
          }
        } else if (line.includes('service_role')) {
          const parts = line.split('|');
          if (parts.length >= 2) {
            serviceKey = parts[1].trim();
          }
        }
      }
    }
    
    if (!anonKey) {
      console.log('❌ Failed to get anon key');
      console.log('Please enter it manually:');
      anonKey = await prompt('Enter the anon key: ');
      
      if (!anonKey) {
        console.log('❌ Anon key is required');
        rl.close();
        return;
      }
    }
    
    if (!serviceKey) {
      console.log('❌ Failed to get service role key');
      console.log('Please enter it manually:');
      serviceKey = await prompt('Enter the service role key: ');
      
      if (!serviceKey) {
        console.log('❌ Service role key is required');
        rl.close();
        return;
      }
    }
    
    console.log('✅ Got project credentials');
    
    // Step 3: Update .env file
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
    
    // Step 4: Create database tables
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
    
    // Step 5: Create storage buckets
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
    
    console.log('\n🎉 Supabase project setup complete!');
    console.log('Your application is now configured to use:');
    console.log('- Your existing Appwrite setup for authentication and core database');
    console.log('- Supabase for extended storage and database needs');
    
    rl.close();
  } catch (error) {
    console.error('Error setting up Supabase project:', error);
    rl.close();
  }
}

// Run the function
setupExistingProject();
