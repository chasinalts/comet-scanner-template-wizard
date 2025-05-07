#!/usr/bin/env node
/**
 * Non-interactive script to set up the user_profiles table in Supabase for Auth0 integration
 */
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { execSync } from 'child_process';

// Load environment variables
dotenv.config();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// SQL for creating user_profiles table
const createUserProfilesTableSQL = `
-- Create user_profiles table for Auth0 integration
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth0_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  username TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  is_owner BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_sign_in_at TIMESTAMP WITH TIME ZONE,
  permissions JSONB DEFAULT '{
    "content_management": false,
    "user_management": false,
    "system_configuration": false,
    "media_uploads": false,
    "security_settings": false,
    "site_customization": false
  }'::jsonb
);

-- Create index on auth0_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_auth0_id ON user_profiles(auth0_id);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to read their own profile
CREATE POLICY IF NOT EXISTS user_profiles_select_own ON user_profiles
  FOR SELECT
  USING (auth.uid()::text = auth0_id);

-- Create policy to allow users to update their own profile
CREATE POLICY IF NOT EXISTS user_profiles_update_own ON user_profiles
  FOR UPDATE
  USING (auth.uid()::text = auth0_id);

-- Create policy to allow admins and owners to read all profiles
CREATE POLICY IF NOT EXISTS user_profiles_select_admin ON user_profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE auth0_id = auth.uid()::text
      AND (role = 'admin' OR is_owner = true)
    )
  );

-- Create policy to allow owners to update all profiles
CREATE POLICY IF NOT EXISTS user_profiles_update_owner ON user_profiles
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE auth0_id = auth.uid()::text
      AND is_owner = true
    )
  );

-- Create policy to allow owners to insert new profiles
CREATE POLICY IF NOT EXISTS user_profiles_insert_owner ON user_profiles
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE auth0_id = auth.uid()::text
      AND is_owner = true
    )
  );

-- Create policy to allow service role to manage all profiles
CREATE POLICY IF NOT EXISTS user_profiles_service_role ON user_profiles
  FOR ALL
  USING (auth.jwt() ? 'service_role');

-- Create policy to allow anonymous users to create their own profile
CREATE POLICY IF NOT EXISTS user_profiles_insert_self ON user_profiles
  FOR INSERT
  WITH CHECK (auth0_id = auth.uid()::text);

-- Grant permissions to authenticated users
GRANT SELECT, UPDATE ON user_profiles TO authenticated;

-- Grant permissions to anon users (for initial profile creation)
GRANT INSERT ON user_profiles TO anon;
`;

async function setupUserProfilesTable() {
  try {
    console.log('🔄 Setting up user_profiles table in Supabase...');

    // Get Supabase credentials from environment variables
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl) {
      console.error('❌ Supabase URL is missing');
      console.log('Using default Supabase URL from previous setup');
      process.env.VITE_SUPABASE_URL = 'https://hpbfipnhqakrhlnhluze.supabase.co';
    }

    if (!supabaseServiceKey) {
      console.error('❌ Supabase service role key is missing');
      console.log('⚠️ Will attempt to use Supabase CLI instead');
      
      // Save SQL to a file
      const sqlFilePath = path.join(__dirname, 'create-user-profiles-table.sql');
      fs.writeFileSync(sqlFilePath, createUserProfilesTableSQL);
      console.log('✅ Created SQL file for user_profiles table');
      
      try {
        // Try to use Supabase CLI to execute the SQL
        console.log('🔄 Attempting to use Supabase CLI to execute SQL...');
        
        // Check if Supabase project is linked
        try {
          execSync('supabase status', { stdio: 'ignore' });
          console.log('✅ Supabase project is linked');
          
          // Execute the SQL using Supabase CLI
          execSync(`supabase db execute --file ${sqlFilePath}`, { stdio: 'inherit' });
          console.log('✅ User profiles table set up successfully using Supabase CLI');
          return;
        } catch (error) {
          console.log('⚠️ Supabase project is not linked or Supabase CLI failed');
          console.log('⚠️ Please run the following commands manually:');
          console.log(`supabase link --project-ref <your-project-ref>`);
          console.log(`supabase db execute --file ${sqlFilePath}`);
        }
      } catch (error) {
        console.error('❌ Error using Supabase CLI:', error);
      }
      
      console.log('\n⚠️ Could not set up user_profiles table automatically');
      console.log('⚠️ Please set up the user_profiles table manually using the SQL in:');
      console.log(sqlFilePath);
      return;
    }

    // Create Supabase client with service role key
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      supabaseServiceKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    );

    // Execute the SQL script
    console.log('🔄 Executing SQL to create user_profiles table...');
    const { error } = await supabase.rpc('exec_sql', { sql: createUserProfilesTableSQL });

    if (error) {
      console.error('❌ Error executing SQL script:', error);
      
      // Save SQL to a file for manual execution
      const sqlFilePath = path.join(__dirname, 'create-user-profiles-table.sql');
      fs.writeFileSync(sqlFilePath, createUserProfilesTableSQL);
      
      console.log('\n⚠️ Could not set up user_profiles table automatically');
      console.log('⚠️ Please set up the user_profiles table manually using the SQL in:');
      console.log(sqlFilePath);
    } else {
      console.log('✅ User profiles table set up successfully');
      
      // Verify the table was created
      const { data, error: verifyError } = await supabase
        .from('user_profiles')
        .select('id')
        .limit(1);

      if (verifyError) {
        console.error('❌ Error verifying user_profiles table:', verifyError);
      } else {
        console.log('✅ Verified user_profiles table exists');
      }
    }
  } catch (error) {
    console.error('❌ Error setting up user profiles table:', error);
  }
}

setupUserProfilesTable();
