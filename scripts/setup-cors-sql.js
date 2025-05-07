// Script to set up CORS in Supabase using SQL
// Run with: node scripts/setup-cors-sql.js

import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Supabase credentials - hardcoded for reliability
const supabaseUrl = 'https://hpbfipnhqakrhlnhluze.supabase.co';
// Using service role key for admin operations
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDgyNzQ0OCwiZXhwIjoyMDYwNDAzNDQ4fQ.Rl-4xWVuTm3vfzQF6QHRhN0yzVrNzJQTmF_tl31AjQw';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://cometscanner.netlify.app',
  'https://680f06902e429800091e81e5--cometscanner.netlify.app'
];

// SQL to set up CORS
const corsSQL = `
-- Update CORS configuration in auth.config
UPDATE auth.config
SET 
  cors_allowed_origins = ARRAY[${allowedOrigins.map(origin => `'${origin}'`).join(', ')}]::text[],
  cors_allowed_methods = ARRAY['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']::text[],
  cors_allowed_headers = ARRAY['Content-Type', 'Authorization', 'X-Client-Info', 'apikey']::text[];
`;

// Function to execute SQL
async function setupCORS() {
  try {
    console.log('Setting up CORS in Supabase...');
    
    // Try to execute the SQL using the REST API
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        },
        body: JSON.stringify({
          sql: corsSQL
        })
      });
      
      if (response.ok) {
        console.log('CORS settings updated successfully using REST API');
      } else {
        const errorData = await response.json();
        console.error('Error updating CORS settings using REST API:', errorData);
        
        // Try using the Supabase client
        console.log('Trying to update CORS settings using Supabase client...');
        const { error } = await supabase.rpc('exec_sql', { sql: corsSQL });
        
        if (error) {
          console.error('Error updating CORS settings using Supabase client:', error.message);
          
          // Provide manual instructions
          console.log('\nPlease set up CORS manually in the Supabase dashboard:');
          console.log('1. Go to https://app.supabase.com/project/hpbfipnhqakrhlnhluze/settings');
          console.log('2. Click on "API" in the submenu');
          console.log('3. Scroll down to find the "CORS" section');
          console.log('4. Add the following origins:');
          for (const origin of allowedOrigins) {
            console.log(`   - ${origin}`);
          }
          console.log('5. Click "Save"');
          
          console.log('\nIf you cannot find the CORS section, please try the following:');
          console.log('1. Go to https://app.supabase.com/project/hpbfipnhqakrhlnhluze/settings/general');
          console.log('2. Look for "API Settings" or "CORS Configuration"');
          console.log('3. If you still cannot find it, please contact Supabase support');
        } else {
          console.log('CORS settings updated successfully using Supabase client');
        }
      }
    } catch (error) {
      console.error('Error updating CORS settings:', error.message);
      
      // Provide manual instructions
      console.log('\nPlease set up CORS manually in the Supabase dashboard:');
      console.log('1. Go to https://app.supabase.com/project/hpbfipnhqakrhlnhluze/settings');
      console.log('2. Click on "API" in the submenu');
      console.log('3. Scroll down to find the "CORS" section');
      console.log('4. Add the following origins:');
      for (const origin of allowedOrigins) {
        console.log(`   - ${origin}`);
      }
      console.log('5. Click "Save"');
    }
    
    // Also update the storage CORS settings
    console.log('\nUpdating storage CORS settings...');
    
    const storageCorsSQL = `
    -- Update storage CORS configuration
    INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types, cors_origins)
    VALUES 
      ('banner', 'banner', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'], ARRAY[${allowedOrigins.map(origin => `'${origin}'`).join(', ')}]::text[]),
      ('gallery', 'gallery', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'], ARRAY[${allowedOrigins.map(origin => `'${origin}'`).join(', ')}]::text[]),
      ('scanner', 'scanner', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'], ARRAY[${allowedOrigins.map(origin => `'${origin}'`).join(', ')}]::text[])
    ON CONFLICT (id) DO UPDATE SET
      public = true,
      file_size_limit = 5242880,
      allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
      cors_origins = ARRAY[${allowedOrigins.map(origin => `'${origin}'`).join(', ')}]::text[];
    `;
    
    try {
      const { error } = await supabase.rpc('exec_sql', { sql: storageCorsSQL });
      
      if (error) {
        console.error('Error updating storage CORS settings:', error.message);
      } else {
        console.log('Storage CORS settings updated successfully');
      }
    } catch (error) {
      console.error('Error updating storage CORS settings:', error.message);
    }
    
    console.log('\nCORS setup completed.');
  } catch (error) {
    console.error('Error setting up CORS:', error.message);
  }
}

setupCORS();
