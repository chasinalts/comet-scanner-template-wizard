#!/usr/bin/env node
/**
 * Script to set up the user_profiles table in Supabase for Auth0 integration
 */
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Load environment variables
dotenv.config();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Read the SQL file
const sqlFilePath = path.join(__dirname, 'create-user-profiles-table.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

async function setupUserProfilesTable() {
  try {
    console.log('🔄 Setting up user_profiles table in Supabase...');

    // Get Supabase credentials from environment variables
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('❌ Supabase URL or service role key is missing');
      console.log('Please set the following environment variables:');
      console.log('- VITE_SUPABASE_URL');
      console.log('- SUPABASE_SERVICE_ROLE_KEY');
      process.exit(1);
    }

    // Create Supabase client with service role key
    const supabase = createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    });

    // Execute the SQL script
    const { error } = await supabase.rpc('exec_sql', { sql });

    if (error) {
      console.error('❌ Error executing SQL script:', error);
      
      // Try executing the SQL directly
      console.log('🔄 Trying to execute SQL directly...');
      
      // Split the SQL script into individual statements
      const statements = sql.split(';').filter(stmt => stmt.trim());
      
      for (const statement of statements) {
        if (statement.trim()) {
          const { error: stmtError } = await supabase.rpc('exec_sql', { 
            sql: statement.trim() + ';' 
          });
          
          if (stmtError) {
            console.error(`❌ Error executing statement: ${statement.trim()}`);
            console.error(stmtError);
          }
        }
      }
    } else {
      console.log('✅ User profiles table set up successfully');
    }

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

    console.log('✅ Setup complete');
  } catch (error) {
    console.error('❌ Error setting up user profiles table:', error);
    process.exit(1);
  }
}

setupUserProfilesTable();
