#!/usr/bin/env node
/**
 * Script to create the user_profiles table in Supabase using the JavaScript client
 */
import { createClient } from '@supabase/supabase-js';

// Supabase credentials
const SUPABASE_URL = 'https://hpbfipnhqakrhlnhluze.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Mjc0NDgsImV4cCI6MjA2MDQwMzQ0OH0.kPZLOf0rKMn-FjEFgLG_cefIaRaLDdIILSjHzYK-b1w';

// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function createUserProfilesTable() {
  try {
    console.log('🔄 Creating user_profiles table in Supabase...');

    // Check if the table already exists
    const { data: existingData, error: existingError } = await supabase
      .from('user_profiles')
      .select('id')
      .limit(1);

    if (!existingError) {
      console.log('✅ user_profiles table already exists');
      return;
    }

    // Create the table by inserting a sample record
    const { data, error } = await supabase
      .from('user_profiles')
      .insert([
        {
          auth0_id: 'sample-auth0-id',
          email: 'sample@example.com',
          role: 'user',
          is_owner: false,
          permissions: {
            content_management: false,
            user_management: false,
            system_configuration: false,
            media_uploads: false,
            security_settings: false,
            site_customization: false
          }
        }
      ]);

    if (error) {
      if (error.code === '42P01') {
        console.error('❌ Table does not exist and could not be created automatically');
        console.log('⚠️ Please create the user_profiles table manually using the SQL in scripts/create-user-profiles-table.sql');
      } else {
        console.error('❌ Error creating table:', error);
      }
      return;
    }

    console.log('✅ user_profiles table created successfully');

    // Delete the sample record
    const { error: deleteError } = await supabase
      .from('user_profiles')
      .delete()
      .eq('auth0_id', 'sample-auth0-id');

    if (deleteError) {
      console.error('❌ Error deleting sample record:', deleteError);
    } else {
      console.log('✅ Sample record deleted');
    }

    console.log('✅ User profiles table setup complete');
  } catch (error) {
    console.error('❌ Error creating user_profiles table:', error);
  }
}

createUserProfilesTable();
