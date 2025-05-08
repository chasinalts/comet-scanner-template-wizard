#!/usr/bin/env node

/**
 * This script sets up Supabase resources for the COMET Scanner project.
 */

import { createClient } from '@supabase/supabase-js';
import { createInterface } from 'readline';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create readline interface for user input
const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt user for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

// Check if required environment variables are set
const requiredVars = ['VITE_SUPABASE_URL', 'VITE_SUPABASE_ANON_KEY'];
const missingVars = requiredVars.filter(varName => !process.env[varName]);

async function setupSupabase() {
  let supabaseUrl = process.env.VITE_SUPABASE_URL;
  let supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY;

  if (missingVars.length > 0) {
    console.log(`Missing required environment variables: ${missingVars.join(', ')}`);
    console.log('Please provide the following information:');

    if (!supabaseUrl) {
      supabaseUrl = await prompt('Supabase URL: ');
    }

    if (!supabaseAnonKey) {
      supabaseAnonKey = await prompt('Supabase Anon Key: ');
    }
  }

  // Initialize Supabase client
  const supabase = createClient(supabaseUrl, supabaseAnonKey);

  console.log('Connected to Supabase project');

  // Create tables
  console.log('Setting up database tables...');

  try {
    // Create user_profiles table
    const { error: userProfilesError } = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'user_profiles',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        auth0_id TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        name TEXT,
        is_owner BOOLEAN DEFAULT FALSE,
        permissions JSONB DEFAULT '{"content_management": false, "user_management": false, "system_configuration": false, "media_uploads": false, "security_settings": false, "site_customization": false}'::jsonb,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      `
    });

    if (userProfilesError) {
      console.error('Error creating user_profiles table:', userProfilesError);
    } else {
      console.log('✅ user_profiles table created or already exists');
    }

    // Create content table
    const { error: contentError } = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'content',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        content_type TEXT NOT NULL,
        content_key TEXT NOT NULL,
        content_value TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        created_by UUID REFERENCES user_profiles(id),
        UNIQUE(content_type, content_key)
      `
    });

    if (contentError) {
      console.error('Error creating content table:', contentError);
    } else {
      console.log('✅ content table created or already exists');
    }

    // Create images table
    const { error: imagesError } = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'images',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        file_path TEXT NOT NULL,
        file_name TEXT NOT NULL,
        bucket_id TEXT NOT NULL,
        image_type TEXT NOT NULL,
        user_id UUID REFERENCES user_profiles(id),
        size INTEGER,
        mime_type TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      `
    });

    if (imagesError) {
      console.error('Error creating images table:', imagesError);
    } else {
      console.log('✅ images table created or already exists');
    }

    // Create templates table
    const { error: templatesError } = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'templates',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id UUID REFERENCES user_profiles(id),
        template_name TEXT NOT NULL,
        template_data JSONB DEFAULT '{}'::jsonb,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      `
    });

    if (templatesError) {
      console.error('Error creating templates table:', templatesError);
    } else {
      console.log('✅ templates table created or already exists');
    }

    // Create logs table
    const { error: logsError } = await supabase.rpc('create_table_if_not_exists', {
      table_name: 'logs',
      columns: `
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        log_level TEXT NOT NULL,
        message TEXT NOT NULL,
        context JSONB DEFAULT '{}'::jsonb,
        user_id UUID REFERENCES user_profiles(id),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      `
    });

    if (logsError) {
      console.error('Error creating logs table:', logsError);
    } else {
      console.log('✅ logs table created or already exists');
    }
  } catch (error) {
    console.error('Error setting up database tables:', error);
  }

  // Create storage buckets
  console.log('Setting up storage buckets...');

  try {
    // Create banner bucket
    const { error: bannerError } = await supabase.storage.createBucket('banner', {
      public: true,
      fileSizeLimit: 10485760, // 10MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
    });

    if (bannerError && bannerError.message !== 'Bucket already exists') {
      console.error('Error creating banner bucket:', bannerError);
    } else {
      console.log('✅ banner bucket created or already exists');
    }

    // Create gallery bucket
    const { error: galleryError } = await supabase.storage.createBucket('gallery', {
      public: true,
      fileSizeLimit: 10485760, // 10MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
    });

    if (galleryError && galleryError.message !== 'Bucket already exists') {
      console.error('Error creating gallery bucket:', galleryError);
    } else {
      console.log('✅ gallery bucket created or already exists');
    }

    // Create scanner bucket
    const { error: scannerError } = await supabase.storage.createBucket('scanner', {
      public: true,
      fileSizeLimit: 10485760, // 10MB
      allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
    });

    if (scannerError && scannerError.message !== 'Bucket already exists') {
      console.error('Error creating scanner bucket:', scannerError);
    } else {
      console.log('✅ scanner bucket created or already exists');
    }
  } catch (error) {
    console.error('Error setting up storage buckets:', error);
  }

  // Create initial content
  console.log('Creating initial content...');

  try {
    const initialContent = [
      {
        content_type: 'site',
        content_key: 'about',
        content_value: 'COMET Scanner is a powerful tool for creating and managing scanner templates.'
      },
      {
        content_type: 'site',
        content_key: 'welcome_message',
        content_value: 'Welcome to COMET Scanner!'
      }
    ];

    for (const content of initialContent) {
      const { error } = await supabase
        .from('content')
        .upsert(content, { onConflict: 'content_type,content_key' });

      if (error) {
        console.error(`Error creating content ${content.content_key}:`, error);
      } else {
        console.log(`✅ Content "${content.content_key}" created or updated`);
      }
    }
  } catch (error) {
    console.error('Error creating initial content:', error);
  }

  // Update environment variables in the project
  const envContent = `
# Supabase Configuration
VITE_SUPABASE_URL=${supabaseUrl}
VITE_SUPABASE_ANON_KEY=${supabaseAnonKey}
`;

  fs.writeFileSync('.env.local', envContent);
  console.log('Updated .env.local with Supabase configuration');

  console.log('Setup complete!');
  rl.close();
}

// Run the setup
setupSupabase().catch(err => {
  console.error('Error during setup:', err);
  rl.close();
  process.exit(1);
});
