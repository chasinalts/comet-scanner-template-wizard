#!/usr/bin/env node

/**
 * Script to verify that everything is set up correctly
 * 
 * This script:
 * 1. Checks Appwrite configuration
 * 2. Checks Supabase configuration
 * 3. Verifies database tables in Supabase
 * 4. Verifies storage buckets in Supabase
 * 5. Provides a summary of what's set up and what's missing
 */
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import https from 'https';
import http from 'http';
import { execSync } from 'child_process';

// Load environment variables
dotenv.config();

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

// Check if a table exists in Supabase
const checkTableExists = async (supabaseUrl, anonKey, tableName) => {
  try {
    console.log(`Checking if ${tableName} table exists...`);
    
    const url = new URL(`${supabaseUrl}/rest/v1/${tableName}?limit=1`);
    
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method: 'GET',
      headers: {
        'apikey': anonKey,
        'Authorization': `Bearer ${anonKey}`
      }
    };
    
    const response = await makeRequest(options);
    
    if (response.statusCode === 200) {
      console.log(`✅ ${tableName} table exists`);
      return true;
    } else if (response.statusCode === 404) {
      console.log(`❌ ${tableName} table does not exist`);
      return false;
    } else {
      console.log(`❓ Unexpected response when checking ${tableName} table: ${response.statusCode}`);
      return false;
    }
  } catch (error) {
    console.error(`Error checking if ${tableName} table exists:`, error.message);
    return false;
  }
};

// Check if a bucket exists in Supabase
const checkBucketExists = async (supabaseUrl, anonKey, bucketName) => {
  try {
    console.log(`Checking if ${bucketName} bucket exists...`);
    
    const url = new URL(`${supabaseUrl}/storage/v1/object/list/${bucketName}`);
    
    const options = {
      protocol: url.protocol,
      hostname: url.hostname,
      port: url.port || (url.protocol === 'https:' ? 443 : 80),
      path: url.pathname + url.search,
      method: 'GET',
      headers: {
        'apikey': anonKey,
        'Authorization': `Bearer ${anonKey}`
      }
    };
    
    const response = await makeRequest(options);
    
    if (response.statusCode === 200) {
      console.log(`✅ ${bucketName} bucket exists`);
      return true;
    } else if (response.statusCode === 404) {
      console.log(`❌ ${bucketName} bucket does not exist`);
      return false;
    } else {
      console.log(`❓ Unexpected response when checking ${bucketName} bucket: ${response.statusCode}`);
      return false;
    }
  } catch (error) {
    console.error(`Error checking if ${bucketName} bucket exists:`, error.message);
    return false;
  }
};

// Check Appwrite configuration
const checkAppwriteConfig = () => {
  console.log('\n🔍 Checking Appwrite Configuration');
  console.log('-------------------------------');
  
  const endpoint = process.env.VITE_APPWRITE_ENDPOINT;
  const projectId = process.env.VITE_APPWRITE_PROJECT_ID;
  const databaseId = process.env.VITE_APPWRITE_DATABASE_ID;
  const apiKey = process.env.APPWRITE_API_KEY;
  
  const results = {
    endpoint: !!endpoint,
    projectId: !!projectId,
    databaseId: !!databaseId,
    apiKey: !!apiKey
  };
  
  console.log(`Endpoint: ${results.endpoint ? '✅' : '❌'}`);
  console.log(`Project ID: ${results.projectId ? '✅' : '❌'}`);
  console.log(`Database ID: ${results.databaseId ? '✅' : '❌'}`);
  console.log(`API Key: ${results.apiKey ? '✅' : '❌'}`);
  
  return results;
};

// Check Supabase configuration
const checkSupabaseConfig = () => {
  console.log('\n🔍 Checking Supabase Configuration');
  console.log('-------------------------------');
  
  const url = process.env.VITE_SUPABASE_URL;
  const anonKey = process.env.VITE_SUPABASE_ANON_KEY;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  
  const results = {
    url: !!url,
    anonKey: !!anonKey,
    serviceKey: !!serviceKey
  };
  
  console.log(`URL: ${results.url ? '✅' : '❌'}`);
  console.log(`Anon Key: ${results.anonKey ? '✅' : '❌'}`);
  console.log(`Service Key: ${results.serviceKey ? '✅' : '❌'}`);
  
  return results;
};

// Main function
async function verifySetup() {
  try {
    console.log('🔍 Verifying Hybrid Appwrite/Supabase Setup');
    console.log('----------------------------------------');
    
    // Step 1: Check environment variables
    const appwriteConfig = checkAppwriteConfig();
    const supabaseConfig = checkSupabaseConfig();
    
    // If any configuration is missing, exit
    if (!appwriteConfig.endpoint || !appwriteConfig.projectId || !appwriteConfig.databaseId ||
        !supabaseConfig.url || !supabaseConfig.anonKey) {
      console.log('\n❌ Missing required configuration');
      return;
    }
    
    // Step 2: Check Supabase database tables
    console.log('\n🔍 Checking Supabase Database Tables');
    console.log('--------------------------------');
    
    const extendedContentExists = await checkTableExists(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY,
      'extended_content'
    );
    
    const imagesExists = await checkTableExists(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY,
      'images'
    );
    
    const logsExists = await checkTableExists(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY,
      'logs'
    );
    
    // Step 3: Check Supabase storage buckets
    console.log('\n🔍 Checking Supabase Storage Buckets');
    console.log('---------------------------------');
    
    const bannerBucketExists = await checkBucketExists(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY,
      'banner'
    );
    
    const galleryBucketExists = await checkBucketExists(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY,
      'gallery'
    );
    
    const scannerBucketExists = await checkBucketExists(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY,
      'scanner'
    );
    
    // Step 4: Provide a summary
    console.log('\n📋 Setup Summary');
    console.log('-------------');
    
    console.log('\nAppwrite Configuration:');
    console.log(`- Endpoint: ${appwriteConfig.endpoint ? '✅' : '❌'}`);
    console.log(`- Project ID: ${appwriteConfig.projectId ? '✅' : '❌'}`);
    console.log(`- Database ID: ${appwriteConfig.databaseId ? '✅' : '❌'}`);
    console.log(`- API Key: ${appwriteConfig.apiKey ? '✅' : '❌'}`);
    
    console.log('\nSupabase Configuration:');
    console.log(`- URL: ${supabaseConfig.url ? '✅' : '❌'}`);
    console.log(`- Anon Key: ${supabaseConfig.anonKey ? '✅' : '❌'}`);
    console.log(`- Service Key: ${supabaseConfig.serviceKey ? '✅' : '❌'}`);
    
    console.log('\nSupabase Database Tables:');
    console.log(`- extended_content: ${extendedContentExists ? '✅' : '❌'}`);
    console.log(`- images: ${imagesExists ? '✅' : '❌'}`);
    console.log(`- logs: ${logsExists ? '✅' : '❌'}`);
    
    console.log('\nSupabase Storage Buckets:');
    console.log(`- banner: ${bannerBucketExists ? '✅' : '❌'}`);
    console.log(`- gallery: ${galleryBucketExists ? '✅' : '❌'}`);
    console.log(`- scanner: ${scannerBucketExists ? '✅' : '❌'}`);
    
    // Check if everything is set up correctly
    const allConfigured = appwriteConfig.endpoint && appwriteConfig.projectId && appwriteConfig.databaseId && appwriteConfig.apiKey &&
                          supabaseConfig.url && supabaseConfig.anonKey && supabaseConfig.serviceKey;
    
    const allTablesExist = extendedContentExists && imagesExists && logsExists;
    
    const allBucketsExist = bannerBucketExists && galleryBucketExists && scannerBucketExists;
    
    console.log('\n🎯 Overall Status:');
    if (allConfigured && allTablesExist && allBucketsExist) {
      console.log('✅ Everything is set up correctly!');
      console.log('Your application is ready to use the hybrid Appwrite/Supabase setup.');
    } else {
      console.log('❌ Some components are missing or not configured correctly.');
      console.log('Please check the summary above and fix any issues.');
      
      // Provide specific instructions for missing components
      if (!allTablesExist) {
        console.log('\nTo create missing database tables, run the following SQL in the Supabase SQL Editor:');
        console.log('https://app.supabase.com/project/oomnadogzgpoaouireog/editor');
        
        if (!extendedContentExists) {
          console.log(`
CREATE TABLE IF NOT EXISTS extended_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  content TEXT,
  section_id TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  created_by UUID,
  content_type TEXT
);`);
        }
        
        if (!imagesExists) {
          console.log(`
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
);`);
        }
        
        if (!logsExists) {
          console.log(`
CREATE TABLE IF NOT EXISTS logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event TEXT NOT NULL,
  message TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_id TEXT,
  level TEXT,
  details JSONB
);`);
        }
      }
      
      if (!allBucketsExist) {
        console.log('\nTo create missing storage buckets, go to:');
        console.log('https://app.supabase.com/project/oomnadogzgpoaouireog/storage/buckets');
        console.log('Click "Create Bucket" and create the following buckets (set them to public):');
        if (!bannerBucketExists) console.log('- banner');
        if (!galleryBucketExists) console.log('- gallery');
        if (!scannerBucketExists) console.log('- scanner');
      }
    }
    
  } catch (error) {
    console.error('Error verifying setup:', error);
  }
}

// Run the function
verifySetup();
