#!/usr/bin/env node
/**
 * Script to create the user_profiles table in Supabase using the JavaScript client
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Supabase credentials
const SUPABASE_URL = 'https://hpbfipnhqakrhlnhluze.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Mjc0NDgsImV4cCI6MjA2MDQwMzQ0OH0.kPZLOf0rKMn-FjEFgLG_cefIaRaLDdIILSjHzYK-b1w';

// Create Supabase client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Read the SQL file
const sqlFilePath = path.join(__dirname, 'create-user-profiles-table.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

// Split the SQL into individual statements
const statements = sql.split(';').filter(stmt => stmt.trim());

async function createUserProfilesTable() {
  try {
    console.log('🔄 Creating user_profiles table in Supabase...');

    // Check if the table already exists
    const { data: tables, error: tablesError } = await supabase
      .from('information_schema.tables')
      .select('table_name')
      .eq('table_schema', 'public')
      .eq('table_name', 'user_profiles');

    if (tablesError) {
      console.error('❌ Error checking if table exists:', tablesError);
      return;
    }

    if (tables && tables.length > 0) {
      console.log('✅ user_profiles table already exists');
      return;
    }

    // Execute each SQL statement
    for (const statement of statements) {
      if (statement.trim()) {
        const { error } = await supabase.rpc('exec_sql', { 
          sql: statement.trim() + ';' 
        });
        
        if (error) {
          console.error(`❌ Error executing statement: ${statement.trim()}`);
          console.error(error);
        }
      }
    }

    console.log('✅ user_profiles table created successfully');
  } catch (error) {
    console.error('❌ Error creating user_profiles table:', error);
  }
}

createUserProfilesTable();
