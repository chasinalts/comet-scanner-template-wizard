// Script to set up CORS for Supabase
// Run with: node scripts/setup-supabase-cors.js

import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Supabase credentials - hardcoded for reliability
const supabaseUrl = 'https://hpbfipnhqakrhlnhluze.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Mjc0NDgsImV4cCI6MjA2MDQwMzQ0OH0.kPZLOf0rKMn-FjEFgLG_cefIaRaLDdIILSjHzYK-b1w';

// Allowed origins
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:5173',
  'https://cometscanner.netlify.app',
  'https://680f06902e429800091e81e5--cometscanner.netlify.app'
];

// Set up CORS
async function setupCORS() {
  try {
    console.log('Setting up CORS for Supabase...');
    
    // Unfortunately, Supabase doesn't provide a direct API to update CORS settings
    // You'll need to do this manually in the Supabase dashboard
    
    console.log('Please follow these steps to set up CORS in the Supabase dashboard:');
    console.log('1. Go to https://app.supabase.com/project/hpbfipnhqakrhlnhluze/settings/api');
    console.log('2. Scroll down to the "CORS" section');
    console.log('3. Add the following origins:');
    
    for (const origin of allowedOrigins) {
      console.log(`   - ${origin}`);
    }
    
    console.log('4. Click "Save"');
    
    console.log('\nCORS setup instructions completed.');
  } catch (error) {
    console.error('Error setting up CORS:', error);
  }
}

setupCORS();
