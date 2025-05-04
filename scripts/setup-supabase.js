#!/usr/bin/env node

/**
 * Script to set up Supabase resources for COMET Scanner
 * 
 * This script creates the database tables and storage buckets needed for the application.
 */
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import readline from 'readline';
import fs from 'fs';
import path from 'path';
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

// Main function to set up Supabase resources
async function setupSupabase() {
  try {
    console.log('🚀 Setting up Supabase resources for COMET Scanner');
    console.log('------------------------------------------------');
    
    // Get Supabase credentials
    let supabaseUrl = process.env.VITE_SUPABASE_URL;
    let supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
    let supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !supabaseKey) {
      console.log('\nSupabase credentials not found in .env file.');
      console.log('Please enter your Supabase credentials:');
      
      supabaseUrl = await prompt('Supabase URL: ');
      supabaseKey = await prompt('Supabase Anon Key: ');
      supabaseServiceKey = await prompt('Supabase Service Role Key (for admin operations): ');
      
      if (!supabaseUrl || !supabaseKey) {
        console.log('Supabase URL and Anon Key are required.');
        rl.close();
        return;
      }
    } else {
      console.log('Using Supabase credentials from .env file.');
    }
    
    // Initialize Supabase client with service role key for admin operations
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey || supabaseKey
    );
    
    console.log('\nConnecting to Supabase...');
    
    // Test connection
    const { data: connectionTest, error: connectionError } = await supabase.from('_test').select('*').limit(1).catch(() => ({ data: null, error: { message: 'Connection failed' } }));
    
    if (connectionError) {
      console.log(`❌ Connection to Supabase failed: ${connectionError.message}`);
      if (connectionError.message.includes('authentication')) {
        console.log('Please check your Supabase credentials.');
      }
      rl.close();
      return;
    }
    
    console.log('✅ Connected to Supabase successfully!');
    
    // Create tables
    console.log('\nCreating database tables...');
    
    // --- IMPORTANT: Combined SQL for full Supabase setup ---
    const combinedSql = `
-- 1. Create Tables
CREATE TABLE IF NOT EXISTS extended_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  section_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  owner_id UUID NOT NULL,
  content_type TEXT
);

CREATE TABLE IF NOT EXISTS images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  bucket_id TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  owner_id UUID NOT NULL,
  image_type TEXT NOT NULL,
  size INTEGER,
  width INTEGER,
  height INTEGER,
  metadata JSONB
);

CREATE TABLE IF NOT EXISTS logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event TEXT NOT NULL,
  message TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  owner_id UUID NOT NULL,
  level TEXT,
  details JSONB
);

-- 2. Enable RLS and Owner Policies
ALTER TABLE extended_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner full access" ON extended_content
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

ALTER TABLE images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner full access" ON images
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

ALTER TABLE logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner full access" ON logs
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);

-- 3. Storage Bucket Object Policies
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Owner can manage" ON storage.objects
  USING (auth.uid() = owner_id)
  WITH CHECK (auth.uid() = owner_id);
-- (Optional) Allow public read access to storage objects:
CREATE POLICY "Public read" ON storage.objects
  FOR SELECT USING (true);
`;

    // Output SQL for user to run in Supabase SQL editor
    console.log('\n⚠️  Please copy and run the following single SQL script in the Supabase SQL Editor after setup:');
    console.log(combinedSql);
    // 1. Extended Content table
    const { error: extendedContentError } = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'extended_content',
      columns: `
        id uuid primary key default uuid_generate_v4(),
        title text not null,
        content text,
        section_id text,
        created_at timestamp with time zone default now(),
        updated_at timestamp with time zone default now(),
        owner_id uuid not null,
        content_type text
      `
    }).catch(err => ({ error: err }));
    
    if (extendedContentError) {
      console.log(`❌ Error creating extended_content table: ${extendedContentError.message}`);
    } else {
      console.log('✅ Created extended_content table');
    }
    
    // 2. Images table
    const { error: imagesError } = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'images',
      columns: `
        id uuid primary key default uuid_generate_v4(),
        name text not null,
        file_path text not null,
        bucket_id text not null,
        uploaded_at timestamp with time zone default now(),
        owner_id uuid not null,
        image_type text not null,
        size integer,
        width integer,
        height integer,
        metadata jsonb
      `
    }).catch(err => ({ error: err }));
    
    if (imagesError) {
      console.log(`❌ Error creating images table: ${imagesError.message}`);
    } else {
      console.log('✅ Created images table');
    }
    
    // 3. Logs table
    const { error: logsError } = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'logs',
      columns: `
        id uuid primary key default uuid_generate_v4(),
        event text not null,
        message text not null,
        timestamp timestamp with time zone default now(),
        owner_id uuid not null,
        level text,
        details jsonb
      `
    }).catch(err => ({ error: err }));
    
    if (logsError) {
      console.log(`❌ Error creating logs table: ${logsError.message}`);
    } else {
      console.log('✅ Created logs table');
    }
    
    // Create storage buckets
    console.log('\nCreating storage buckets...');
    
    // 1. Banner bucket
    const { data: bannerBucket, error: bannerError } = await supabase
      .storage
      .createBucket('banner', {
        public: true,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
      })
      .catch(err => ({ data: null, error: err }));
    
    if (bannerError) {
      if (bannerError.message.includes('already exists')) {
        console.log('Banner bucket already exists, continuing...');
      } else {
        console.log(`❌ Error creating banner bucket: ${bannerError.message}`);
      }
    } else {
      console.log('✅ Created banner bucket');
    }
    
    // 2. Gallery bucket
    const { data: galleryBucket, error: galleryError } = await supabase
      .storage
      .createBucket('gallery', {
        public: true,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
      })
      .catch(err => ({ data: null, error: err }));
    
    if (galleryError) {
      if (galleryError.message.includes('already exists')) {
        console.log('Gallery bucket already exists, continuing...');
      } else {
        console.log(`❌ Error creating gallery bucket: ${galleryError.message}`);
      }
    } else {
      console.log('✅ Created gallery bucket');
    }
    
    // 3. Scanner bucket
    const { data: scannerBucket, error: scannerError } = await supabase
      .storage
      .createBucket('scanner', {
        public: true,
        fileSizeLimit: 5242880, // 5MB
        allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
      })
      .catch(err => ({ data: null, error: err }));
    
    if (scannerError) {
      if (scannerError.message.includes('already exists')) {
        console.log('Scanner bucket already exists, continuing...');
      } else {
        console.log(`❌ Error creating scanner bucket: ${scannerError.message}`);
      }
    } else {
      console.log('✅ Created scanner bucket');
    }
    
    // Update .env file with Supabase credentials if they weren't there
    if (!process.env.VITE_SUPABASE_URL || !process.env.VITE_SUPABASE_ANON_KEY) {
      console.log('\nUpdating .env file with Supabase credentials...');
      
      const envPath = path.join(process.cwd(), '.env');
      let envContent = '';
      
      try {
        envContent = fs.readFileSync(envPath, 'utf8');
      } catch (error) {
        console.log('No .env file found, creating one...');
        envContent = '';
      }
      
      // Add Supabase credentials if they don't exist
      if (!envContent.includes('VITE_SUPABASE_URL=')) {
        envContent += `\n# Supabase Configuration\nVITE_SUPABASE_URL=${supabaseUrl}\n`;
      }
      
      if (!envContent.includes('VITE_SUPABASE_ANON_KEY=')) {
        envContent += `VITE_SUPABASE_ANON_KEY=${supabaseKey}\n`;
      }
      
      if (supabaseServiceKey && !envContent.includes('SUPABASE_SERVICE_ROLE_KEY=')) {
        envContent += `SUPABASE_SERVICE_ROLE_KEY=${supabaseServiceKey}\n`;
      }
      
      fs.writeFileSync(envPath, envContent);
      console.log('✅ Updated .env file with Supabase credentials');
    }
    
    console.log('\n🎉 Supabase setup complete!');
    console.log('Your Supabase resources have been created:');
    console.log('- Tables: extended_content, images, logs');
    console.log('- Storage Buckets: banner, gallery, scanner');
    
    rl.close();
  } catch (error) {
    console.error('Unhandled error:', error);
    rl.close();
  }
}

// Run the setup function
setupSupabase();
