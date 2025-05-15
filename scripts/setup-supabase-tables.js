#!/usr/bin/env node
/**
 * Script to set up Supabase tables for COMET Scanner Template Wizard
 */
import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config();

// Supabase credentials
const supabaseUrl = process.env.VITE_SUPABASE_URL || 'https://hpbfipnhqakrhlnhluze.supabase.co';
// Using service role key for admin operations
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseKey) {
  console.error('Error: SUPABASE_SERVICE_ROLE_KEY is required');
  console.error('Please add it to your .env file');
  process.exit(1);
}

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Read the SQL file
const sqlFilePath = path.join(__dirname, 'setup-supabase-tables.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

// Split SQL into individual statements
const statements = sql
  .split(';')
  .map(statement => statement.trim())
  .filter(statement => statement.length > 0 && !statement.startsWith('--'));

// Execute the SQL statements
async function runSQL() {
  try {
    console.log('Setting up Supabase tables...');

    for (const statement of statements) {
      try {
        const { error } = await supabase.rpc('exec_sql', { query: statement });
        
        if (error) {
          console.error(`Error executing SQL: ${error.message}`);
          console.error('Statement:', statement);
        } else {
          console.log('Successfully executed SQL statement');
        }
      } catch (err) {
        console.error(`Error executing SQL: ${err.message}`);
        console.error('Statement:', statement);
      }
    }

    console.log('Setting up storage buckets...');
    
    // Create storage buckets
    const buckets = ['banner', 'gallery', 'scanner'];
    
    for (const bucket of buckets) {
      try {
        const { data, error } = await supabase.storage.createBucket(bucket, {
          public: true,
          fileSizeLimit: 10485760, // 10MB
          allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
        });
        
        if (error) {
          if (error.message.includes('already exists')) {
            console.log(`Bucket '${bucket}' already exists`);
          } else {
            console.error(`Error creating bucket '${bucket}': ${error.message}`);
          }
        } else {
          console.log(`Successfully created bucket '${bucket}'`);
        }
      } catch (err) {
        console.error(`Error creating bucket '${bucket}': ${err.message}`);
      }
    }

    console.log('Supabase setup complete!');
  } catch (error) {
    console.error('Error setting up Supabase:', error.message);
  }
}

runSQL();
