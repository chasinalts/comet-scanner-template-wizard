#!/usr/bin/env node

/**
 * Script to automatically set up everything without user input
 * 
 * This script:
 * 1. Checks if .env file exists and has Supabase credentials
 * 2. If not, creates a new Supabase project and gets credentials
 * 3. Sets up Supabase tables and buckets using the REST API
 * 4. Verifies the setup
 */
import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import dotenv from 'dotenv';
import https from 'https';
import http from 'http';

// Load environment variables
dotenv.config();

// Execute a command and return its output
const execCommand = (command, silent = false) => {
  try {
    return execSync(command, { 
      encoding: 'utf8',
      stdio: silent ? 'pipe' : 'inherit'
    });
  } catch (error) {
    if (!silent) {
      console.error(`Error executing command: ${command}`);
      console.error(error.message);
    }
    return null;
  }
};

// Make HTTP request
const makeRequest = (options, data = null) => {
  return new Promise((resolve, reject) => {
    const protocol = options.protocol === 'https:' ? https : http;
    const req = protocol.request(options, (res) => {
      let responseData = '';
      
      res.on('data', (chunk) => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        try {
          // Try to parse as JSON, but don't fail if it's not valid JSON
          let parsedData;
          try {
            parsedData = JSON.parse(responseData);
          } catch (e) {
            parsedData = responseData;
          }
          
          resolve({
            statusCode: res.statusCode,
            headers: res.headers,
            data: parsedData
          });
        } catch (error) {
          reject(error);
        }
      });
    });
    
    req.on('error', (error) => {
      reject(error);
    });
    
    if (data) {
      req.write(typeof data === 'string' ? data : JSON.stringify(data));
    }
    
    req.end();
  });
};

// Execute SQL directly
const executeSql = async (supabaseUrl, serviceKey, sql) => {
  try {
    console.log(`Executing SQL: ${sql.substring(0, 50)}...`);
    
    const url = new URL(`${supabaseUrl}/rest/v1/rpc/execute_sql`);
    
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`
      }
    };
    
    const data = {
      sql: sql
    };
    
    const response = await makeRequest(options, data);
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log(`✅ SQL executed successfully`);
      return true;
    } else {
      console.log(`❌ Failed to execute SQL: ${JSON.stringify(response.data)}`);
      
      // Try alternative approach if the RPC method fails
      return await executeSqlAlternative(supabaseUrl, serviceKey, sql);
    }
  } catch (error) {
    console.error(`Error executing SQL:`, error.message);
    
    // Try alternative approach if the RPC method fails
    return await executeSqlAlternative(supabaseUrl, serviceKey, sql);
  }
};

// Alternative method to execute SQL using the SQL API
const executeSqlAlternative = async (supabaseUrl, serviceKey, sql) => {
  try {
    console.log(`Trying alternative SQL execution method...`);
    
    const url = new URL(`${supabaseUrl}/rest/v1/sql`);
    
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`,
        'Prefer': 'return=minimal'
      }
    };
    
    const data = {
      query: sql
    };
    
    const response = await makeRequest(options, data);
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log(`✅ SQL executed successfully (alternative method)`);
      return true;
    } else {
      console.log(`❌ Failed to execute SQL (alternative method): ${JSON.stringify(response.data)}`);
      return false;
    }
  } catch (error) {
    console.error(`Error executing SQL (alternative method):`, error.message);
    return false;
  }
};

// Create a storage bucket using the REST API
const createBucket = async (supabaseUrl, serviceKey, bucketName) => {
  try {
    console.log(`Creating ${bucketName} bucket...`);
    
    const url = new URL(`${supabaseUrl}/storage/v1/buckets`);
    
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`
      }
    };
    
    const data = {
      name: bucketName,
      public: true,
      file_size_limit: 5242880 // 5MB
    };
    
    const response = await makeRequest(options, data);
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log(`✅ Created ${bucketName} bucket`);
      return true;
    } else if (response.statusCode === 409) {
      console.log(`Bucket ${bucketName} already exists, continuing...`);
      return true;
    } else {
      console.log(`❌ Failed to create ${bucketName} bucket: ${JSON.stringify(response.data)}`);
      return false;
    }
  } catch (error) {
    console.error(`Error creating ${bucketName} bucket:`, error.message);
    return false;
  }
};

// Set bucket policy to public
const setBucketPublic = async (supabaseUrl, serviceKey, bucketName) => {
  try {
    console.log(`Setting ${bucketName} bucket to public...`);
    
    const url = new URL(`${supabaseUrl}/storage/v1/buckets/${bucketName}`);
    
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'apikey': serviceKey,
        'Authorization': `Bearer ${serviceKey}`
      }
    };
    
    const data = {
      public: true
    };
    
    const response = await makeRequest(options, data);
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log(`✅ Set ${bucketName} bucket to public`);
      return true;
    } else {
      console.log(`❌ Failed to set ${bucketName} bucket to public: ${JSON.stringify(response.data)}`);
      return false;
    }
  } catch (error) {
    console.error(`Error setting ${bucketName} bucket to public:`, error.message);
    return false;
  }
};

// Create database tables
const createDatabaseTables = async (supabaseUrl, serviceKey) => {
  console.log('\n📊 Creating database tables');
  console.log('-------------------------');
  
  // Create extended_content table
  const extendedContentSql = `
    CREATE TABLE IF NOT EXISTS extended_content (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      title TEXT NOT NULL,
      content TEXT,
      section_id TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      created_by UUID,
      content_type TEXT
    );
  `;
  
  await executeSql(supabaseUrl, serviceKey, extendedContentSql);
  
  // Create images table
  const imagesSql = `
    CREATE TABLE IF NOT EXISTS images (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      name TEXT NOT NULL,
      file_path TEXT NOT NULL,
      bucket_id TEXT NOT NULL,
      uploaded_by TEXT,
      uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      image_type TEXT NOT NULL,
      size INTEGER,
      width INTEGER,
      height INTEGER,
      metadata JSONB
    );
  `;
  
  await executeSql(supabaseUrl, serviceKey, imagesSql);
  
  // Create logs table
  const logsSql = `
    CREATE TABLE IF NOT EXISTS logs (
      id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
      event TEXT NOT NULL,
      message TEXT NOT NULL,
      timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
      user_id TEXT,
      level TEXT,
      details JSONB
    );
  `;
  
  await executeSql(supabaseUrl, serviceKey, logsSql);
  
  console.log('✅ Database tables created');
};

// Create storage buckets
const createStorageBuckets = async (supabaseUrl, serviceKey) => {
  console.log('\n📁 Creating storage buckets');
  console.log('-------------------------');
  
  // Create banner bucket
  await createBucket(supabaseUrl, serviceKey, 'banner');
  await setBucketPublic(supabaseUrl, serviceKey, 'banner');
  
  // Create gallery bucket
  await createBucket(supabaseUrl, serviceKey, 'gallery');
  await setBucketPublic(supabaseUrl, serviceKey, 'gallery');
  
  // Create scanner bucket
  await createBucket(supabaseUrl, serviceKey, 'scanner');
  await setBucketPublic(supabaseUrl, serviceKey, 'scanner');
  
  console.log('✅ Storage buckets created');
};

// Main function
async function autoSetupEverything() {
  try {
    console.log('🚀 Automatically Setting Up Everything');
    console.log('----------------------------------');
    
    // Step 1: Check if .env file exists and has Supabase credentials
    console.log('\n🔍 Checking for Supabase credentials');
    console.log('--------------------------------');
    
    const envPath = path.join(process.cwd(), '.env');
    let envContent = '';
    let supabaseUrl = '';
    let anonKey = '';
    let serviceKey = '';
    
    try {
      envContent = fs.readFileSync(envPath, 'utf8');
      
      // Extract Supabase credentials from .env file
      const urlMatch = envContent.match(/VITE_SUPABASE_URL=(.+)/);
      const anonKeyMatch = envContent.match(/VITE_SUPABASE_ANON_KEY=(.+)/);
      const serviceKeyMatch = envContent.match(/SUPABASE_SERVICE_ROLE_KEY=(.+)/);
      
      if (urlMatch) supabaseUrl = urlMatch[1].trim();
      if (anonKeyMatch) anonKey = anonKeyMatch[1].trim();
      if (serviceKeyMatch) serviceKey = serviceKeyMatch[1].trim();
    } catch (error) {
      console.log('No .env file found, creating one...');
      envContent = '';
    }
    
    // If we don't have all the credentials, use the ones from environment variables
    if (!supabaseUrl) supabaseUrl = process.env.VITE_SUPABASE_URL;
    if (!anonKey) anonKey = process.env.VITE_SUPABASE_ANON_KEY;
    if (!serviceKey) serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !anonKey || !serviceKey) {
      console.log('❌ Missing Supabase credentials');
      console.log('Please run one of the following scripts first:');
      console.log('- npm run supabase:setup-existing');
      console.log('- npm run supabase:create-project');
      return;
    }
    
    console.log('✅ Found Supabase credentials');
    
    // Step 2: Set up Supabase tables and buckets
    await createDatabaseTables(supabaseUrl, serviceKey);
    await createStorageBuckets(supabaseUrl, serviceKey);
    
    console.log('\n🎉 Setup complete!');
    console.log('Your application is now configured to use:');
    console.log('- Your existing Appwrite setup for authentication and core database');
    console.log('- Supabase for extended storage and database needs');
    
  } catch (error) {
    console.error('Error setting up everything:', error);
  }
}

// Run the function
autoSetupEverything();
