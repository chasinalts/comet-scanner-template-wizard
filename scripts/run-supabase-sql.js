// Script to run SQL commands in Supabase
// Requires: Node.js 18+, SUPABASE_SERVICE_ROLE_KEY, VITE_SUPABASE_URL in .env

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

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

// Read the SQL file
const sqlFilePath = path.join(__dirname, 'create-buckets.sql');
const sql = fs.readFileSync(sqlFilePath, 'utf8');

// Execute the SQL
async function runSQL() {
  try {
    console.log('Running SQL commands...');
    
    // Split the SQL into individual statements
    const statements = sql.split(';').filter(stmt => stmt.trim() !== '');
    
    for (const statement of statements) {
      try {
        const { data, error } = await supabase.rpc('exec_sql', { sql: statement });
        
        if (error) {
          console.error(`Error executing SQL: ${error.message}`);
          console.error('Statement:', statement);
        } else {
          console.log('SQL executed successfully:', statement.substring(0, 50) + '...');
        }
      } catch (err) {
        console.error('Error executing statement:', err);
        console.error('Statement:', statement);
      }
    }
    
    console.log('SQL execution completed.');
  } catch (error) {
    console.error('Error running SQL:', error);
  }
}

runSQL();
