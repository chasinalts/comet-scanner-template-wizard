#!/usr/bin/env node

/**
 * Script to update .env file with Supabase credentials
 */
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

// Main function to update .env file
async function updateEnvWithSupabase() {
  try {
    console.log('🔑 Updating .env file with Supabase credentials');
    console.log('---------------------------------------------');
    
    const envPath = path.join(process.cwd(), '.env');
    let envContent = '';
    
    try {
      envContent = fs.readFileSync(envPath, 'utf8');
    } catch (error) {
      console.log('No .env file found, creating one...');
      envContent = '';
    }
    
    // Check if Supabase credentials already exist
    const hasSupabaseUrl = envContent.includes('VITE_SUPABASE_URL=');
    const hasSupabaseKey = envContent.includes('VITE_SUPABASE_ANON_KEY=');
    
    if (hasSupabaseUrl && hasSupabaseKey) {
      console.log('\nSupabase credentials already exist in .env file.');
      const updateExisting = await prompt('Do you want to update them? (y/n): ');
      
      if (updateExisting.toLowerCase() !== 'y') {
        console.log('Keeping existing Supabase credentials.');
        rl.close();
        return;
      }
    }
    
    console.log('\nPlease enter your Supabase credentials:');
    console.log('(You can find these in your Supabase project settings)');
    
    const supabaseUrl = await prompt('Supabase URL: ');
    const supabaseKey = await prompt('Supabase Anon Key: ');
    const supabaseServiceKey = await prompt('Supabase Service Role Key (optional, for admin operations): ');
    
    if (!supabaseUrl || !supabaseKey) {
      console.log('Supabase URL and Anon Key are required.');
      rl.close();
      return;
    }
    
    // Update or add Supabase credentials
    if (hasSupabaseUrl) {
      envContent = envContent.replace(/VITE_SUPABASE_URL=.*/g, `VITE_SUPABASE_URL=${supabaseUrl}`);
    } else {
      envContent += `\n# Supabase Configuration\nVITE_SUPABASE_URL=${supabaseUrl}\n`;
    }
    
    if (hasSupabaseKey) {
      envContent = envContent.replace(/VITE_SUPABASE_ANON_KEY=.*/g, `VITE_SUPABASE_ANON_KEY=${supabaseKey}`);
    } else {
      envContent += `VITE_SUPABASE_ANON_KEY=${supabaseKey}\n`;
    }
    
    // Add service role key if provided
    if (supabaseServiceKey) {
      if (envContent.includes('SUPABASE_SERVICE_ROLE_KEY=')) {
        envContent = envContent.replace(/SUPABASE_SERVICE_ROLE_KEY=.*/g, `SUPABASE_SERVICE_ROLE_KEY=${supabaseServiceKey}`);
      } else {
        envContent += `SUPABASE_SERVICE_ROLE_KEY=${supabaseServiceKey}\n`;
      }
    }
    
    // Write updated content to .env file
    fs.writeFileSync(envPath, envContent);
    
    console.log('\n✅ .env file updated with Supabase credentials');
    
    rl.close();
  } catch (error) {
    console.error('Error updating .env file:', error);
    rl.close();
  }
}

// Run the function
updateEnvWithSupabase();
