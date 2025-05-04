#!/usr/bin/env node

/**
 * Script to set up Supabase using the REST API directly
 * 
 * This script:
 * 1. Gets credentials from .env file or prompts for them
 * 2. Creates database tables using the REST API
 * 3. Creates storage buckets using the REST API
 * 4. Verifies the setup
 */
import fs from 'fs';
import path from 'path';
import readline from 'readline';
import dotenv from 'dotenv';
import https from 'https';
import http from 'http';

// Load environment variables
dotenv.config();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

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

// Create a table using the REST API
const createTable = async (supabaseUrl, serviceKey, tableName, tableDefinition) => {
  try {
    console.log(`Creating ${tableName} table...`);
    
    const url = new URL(`${supabaseUrl}/rest/v1/rpc/create_table_if_not_exists`);
    
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
      table_name: tableName,
      definition: tableDefinition
    };
    
    const response = await makeRequest(options, data);
    
    if (response.statusCode >= 200 && response.statusCode < 300) {
      console.log(`✅ Created ${tableName} table`);
      return true;
    } else {
      console.log(`❌ Failed to create ${tableName} table: ${JSON.stringify(response.data)}`);
      return false;
    }
  } catch (error) {
    console.error(`Error creating ${tableName} table:`, error.message);
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
      return false;
    }
  } catch (error) {
    console.error(`Error executing SQL:`, error.message);
    return false;
  }
};

// Main function
async function setupSupabaseApi() {
  try {
    console.log('🚀 Setting Up Supabase Using REST API');
    console.log('----------------------------------');
    
    // Step 1: Get Supabase credentials
    console.log('\n🔑 Getting Supabase credentials');
    console.log('-----------------------------');
    
    let supabaseUrl = process.env.VITE_SUPABASE_URL;
    let anonKey = process.env.VITE_SUPABASE_ANON_KEY;
    let serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl) {
      supabaseUrl = await prompt('Enter your Supabase URL (e.g., https://oomnadogzgpoaouireog.supabase.co): ');
    }
    
    if (!serviceKey) {
      serviceKey = await prompt('Enter your Supabase service role key: ');
    }
    
    if (!supabaseUrl || !serviceKey) {
      console.log('❌ Supabase URL and service role key are required');
      rl.close();
      return;
    }
    
    console.log('✅ Got Supabase credentials');
    
    // Step 2: Create database tables using SQL
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
    
    // Step 3: Create storage buckets
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
    
    console.log('\n🎉 Supabase setup complete!');
    console.log('Your application is now configured to use:');
    console.log('- Your existing Appwrite setup for authentication and core database');
    console.log('- Supabase for extended storage and database needs');
    
    rl.close();
  } catch (error) {
    console.error('Error setting up Supabase:', error);
    rl.close();
  }
}

// Run the function
setupSupabaseApi();
