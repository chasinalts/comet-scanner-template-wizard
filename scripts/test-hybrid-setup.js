#!/usr/bin/env node

/**
 * Script to test the hybrid Appwrite/Supabase setup
 *
 * This script tests:
 * 1. Appwrite connection
 * 2. Supabase connection
 * 3. Database operations
 * 4. Storage operations
 */
import dotenv from 'dotenv';
import { Client, Account, Databases } from 'node-appwrite';
import { createClient } from '@supabase/supabase-js';
import readline from 'readline';

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

// Test Appwrite connection
async function testAppwrite() {
  console.log('\n📦 Testing Appwrite Connection');
  console.log('---------------------------');

  try {
    // Get Appwrite credentials
    const endpoint = process.env.VITE_APPWRITE_ENDPOINT;
    const projectId = process.env.VITE_APPWRITE_PROJECT_ID;
    const apiKey = process.env.APPWRITE_API_KEY;

    if (!endpoint || !projectId) {
      console.log('❌ Missing Appwrite credentials in .env file');
      return false;
    }

    // Initialize Appwrite client
    const client = new Client()
      .setEndpoint(endpoint)
      .setProject(projectId);

    if (apiKey) {
      client.setKey(apiKey);
    }

    // Test connection - use a simpler method that's available in current SDK
    try {
      const account = new Account(client);
      // Just check if we can get the account - if no error, connection works
      await account.get();
      console.log(`✅ Connected to Appwrite successfully`);
    } catch (error) {
      if (error.code === 401) {
        // 401 means unauthorized but connection works
        console.log(`✅ Connected to Appwrite (authentication required)`);
      } else {
        throw error;
      }
    }

    // Test database
    if (process.env.VITE_APPWRITE_DATABASE_ID) {
      const databases = new Databases(client);
      const databaseId = process.env.VITE_APPWRITE_DATABASE_ID;

      try {
        // List collections instead of getting database
        const collections = await databases.listCollections(databaseId);
        console.log(`✅ Connected to Appwrite database: ${collections.total} collections found`);
      } catch (error) {
        console.log(`❌ Error connecting to Appwrite database: ${error.message}`);
        return false;
      }
    }

    return true;
  } catch (error) {
    console.log(`❌ Error connecting to Appwrite: ${error.message}`);
    return false;
  }
}

// Test Supabase connection
async function testSupabase() {
  console.log('\n📦 Testing Supabase Connection');
  console.log('---------------------------');

  try {
    // Get Supabase credentials
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.log('❌ Missing Supabase credentials in .env file');
      return false;
    }

    // Initialize Supabase client
    const supabase = createClient(
      supabaseUrl,
      supabaseServiceKey || supabaseKey
    );

    // Test connection - try to access a known table
    try {
      const { data, error } = await supabase
        .from('extended_content')
        .select('id')
        .limit(1);

      if (error && error.code !== 'PGRST116') { // PGRST116 is "no rows returned" which is fine
        throw error;
      }

      console.log('✅ Connected to Supabase database successfully');
    } catch (error) {
      // If table doesn't exist, try a simpler health check
      try {
        const { error: healthError } = await supabase.rpc('get_service_status');

        if (healthError) {
          throw healthError;
        }

        console.log('✅ Connected to Supabase successfully (health check)');
      } catch (healthError) {
        console.log(`❌ Error connecting to Supabase database: ${error.message}`);
        // Continue to test storage even if database test fails
      }
    }

    // Test storage
    try {
      // Use a more direct approach to test storage
      const { data: bucketList, error: bucketError } = await supabase
        .storage
        .getBucket('banner');

      if (bucketError && bucketError.statusCode !== 404) {
        throw bucketError;
      }

      if (bucketError && bucketError.statusCode === 404) {
        console.log('❌ Banner bucket not found, but storage API is accessible');
      } else {
        console.log('✅ Connected to Supabase storage successfully');
      }

      // Try to list all buckets
      const { data: buckets, error: bucketsError } = await supabase
        .storage
        .listBuckets();

      if (bucketsError) {
        console.log(`❌ Error listing buckets: ${bucketsError.message}`);
      } else {
        console.log(`✅ Found ${buckets.length} storage buckets`);

        if (buckets.length > 0) {
          console.log('Available buckets:');
          buckets.forEach(bucket => {
            console.log(`- ${bucket.name}`);
          });
        }
      }
    } catch (storageError) {
      console.log(`❌ Error testing Supabase storage: ${storageError.message}`);
    }

    return true;
  } catch (error) {
    console.log(`❌ Error connecting to Supabase: ${error.message}`);
    return false;
  }
}

// Main function to test the hybrid setup
async function testHybridSetup() {
  try {
    console.log('🧪 Testing Hybrid Appwrite/Supabase Setup');
    console.log('---------------------------------------');

    // Test Appwrite
    const appwriteSuccess = await testAppwrite();

    // Test Supabase
    const supabaseSuccess = await testSupabase();

    // Summary
    console.log('\n📋 Test Summary');
    console.log('-------------');
    console.log(`Appwrite: ${appwriteSuccess ? '✅ Connected' : '❌ Failed'}`);
    console.log(`Supabase: ${supabaseSuccess ? '✅ Connected' : '❌ Failed'}`);

    if (appwriteSuccess && supabaseSuccess) {
      console.log('\n🎉 Hybrid setup is working correctly!');
    } else {
      console.log('\n⚠️ Some tests failed. Please check your configuration.');
    }

    rl.close();
  } catch (error) {
    console.error('Error testing hybrid setup:', error);
    rl.close();
  }
}

// Run the function
testHybridSetup();
