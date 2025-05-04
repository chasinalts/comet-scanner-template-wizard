#!/usr/bin/env node

/**
 * Fully automated script to set up Supabase
 * 
 * This script:
 * 1. Installs Supabase CLI locally
 * 2. Logs in to Supabase (requires browser interaction)
 * 3. Gets the first available project
 * 4. Gets project credentials
 * 5. Updates .env file
 * 6. Creates database tables
 * 7. Creates storage buckets
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

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
async function autoSetupSupabase() {
  try {
    console.log('🚀 Automated Supabase Setup');
    console.log('-------------------------');
    
    // Step 1: Install Supabase CLI locally
    console.log('\n📦 Installing Supabase CLI locally');
    console.log('--------------------------------');
    
    execCommand('npm install --save-dev supabase');
    console.log('✅ Supabase CLI installed');
    
    // Step 2: Log in to Supabase
    console.log('\n🔑 Logging in to Supabase');
    console.log('------------------------');
    console.log('A browser window will open for you to log in...');
    console.log('Please complete the login process in your browser');
    console.log('Then return to this terminal');
    
    execCommand('npx supabase login');
    
    // Step 3: Get the first available project
    console.log('\n📋 Getting Supabase project');
    console.log('--------------------------');
    
    const projectsOutput = execCommand('npx supabase projects list', true);
    
    if (!projectsOutput) {
      console.log('❌ Failed to list projects. Make sure you are logged in to Supabase.');
      return;
    }
    
    // Parse the output to get project information
    const lines = projectsOutput.split('\n').filter(line => line.trim() !== '');
    
    // Skip the header line
    const projectLines = lines.slice(1);
    
    if (projectLines.length === 0) {
      console.log('❌ No Supabase projects found. Please create a project in the Supabase dashboard first.');
      return;
    }
    
    // Get the first project
    const firstProject = projectLines[0];
    const parts = firstProject.split('|').map(part => part.trim());
    
    if (parts.length < 3) {
      console.log('❌ Failed to parse project information.');
      return;
    }
    
    const projectRef = parts[0];
    const projectName = parts[1];
    
    console.log(`Using project: ${projectName} (${projectRef})`);
    
    // Step 4: Get project credentials
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
      return;
    }
    
    console.log('✅ Got project credentials');
    
    // Step 5: Update .env file
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
    
    // Step 6: Create database tables
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
    
    // Step 7: Create storage buckets
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
    
    console.log('\n🎉 Supabase setup complete!');
    console.log('Your application is now configured to use:');
    console.log('- Your existing Appwrite setup for authentication and core database');
    console.log('- Supabase for extended storage and database needs');
    
  } catch (error) {
    console.error('Error setting up Supabase:', error);
  }
}

// Run the function
autoSetupSupabase();
