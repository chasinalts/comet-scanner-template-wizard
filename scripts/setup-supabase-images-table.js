// Script to create the images table in Supabase
// Run with: node scripts/setup-supabase-images-table.js

import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Supabase credentials - hardcoded for reliability
const supabaseUrl = 'https://hpbfipnhqakrhlnhluze.supabase.co';
// Using service role key instead of anon key for admin operations
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDgyNzQ0OCwiZXhwIjoyMDYwNDAzNDQ4fQ.Rl-4xWVuTm3vfzQF6QHRhN0yzVrNzJQTmF_tl31AjQw';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Read the SQL file
const sqlFilePath = path.join(__dirname, 'create-images-table.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

// Execute the SQL
async function runSQL() {
  try {
    console.log('Creating images table in Supabase...');

    // First, try to execute the SQL directly using the REST API
    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          query: sql
        })
      });

      if (response.ok) {
        console.log('SQL executed successfully using REST API');
        console.log('Images table setup completed.');
        return;
      } else {
        console.log('Could not execute SQL using REST API, falling back to RPC method');
      }
    } catch (restError) {
      console.log('Error using REST API, falling back to RPC method:', restError.message);
    }

    // Split the SQL into individual statements
    const statements = sql.split(';').filter(stmt => stmt.trim() !== '');

    for (const statement of statements) {
      try {
        // Skip empty statements
        if (!statement.trim()) continue;

        console.log('Executing SQL statement:', statement.substring(0, 50) + (statement.length > 50 ? '...' : ''));

        const { data, error } = await supabase.rpc('exec_sql', { sql: statement });

        if (error) {
          // If the error is about the function not existing, we need to create it
          if (error.message.includes('function') && error.message.includes('does not exist')) {
            console.log('Creating exec_sql function...');

            // Create the exec_sql function
            const createFunctionSQL = `
              CREATE OR REPLACE FUNCTION exec_sql(sql text)
              RETURNS void
              LANGUAGE plpgsql
              SECURITY DEFINER
              AS $$
              BEGIN
                EXECUTE sql;
              END;
              $$;
            `;

            const { error: functionError } = await supabase.rpc('exec_sql', { sql: createFunctionSQL });

            if (functionError) {
              console.error('Error creating exec_sql function:', functionError.message);

              // Try to execute the statement directly
              console.log('Trying to execute statement directly...');
              const { error: directError } = await supabase.from('_sql').rpc('query', { query: statement });

              if (directError) {
                console.error('Error executing statement directly:', directError.message);
              } else {
                console.log('Statement executed directly successfully');
              }
            } else {
              // Try the original statement again
              const { error: retryError } = await supabase.rpc('exec_sql', { sql: statement });

              if (retryError) {
                console.error('Error executing SQL after creating function:', retryError.message);
              } else {
                console.log('SQL executed successfully after creating function');
              }
            }
          } else {
            console.error(`Error executing SQL: ${error.message}`);
            console.error('Statement:', statement);
          }
        } else {
          console.log('SQL executed successfully');
        }
      } catch (err) {
        console.error('Error executing statement:', err.message);
      }
    }

    console.log('Images table setup completed.');
  } catch (error) {
    console.error('Error running SQL:', error.message);
  }
}

runSQL();
