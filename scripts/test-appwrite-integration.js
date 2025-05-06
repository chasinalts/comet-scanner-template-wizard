#!/usr/bin/env node

/**
 * Script to test the Appwrite integration
 * 
 * This script tests the connection to Appwrite, database operations, and storage operations
 */
import dotenv from 'dotenv';
import { Client, Account, Databases, Storage, ID, Query } from 'node-appwrite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Load environment variables
dotenv.config();

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function
const prompt = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Initialize Appwrite client
const client = new Client();

// Set API key
let apiKey = process.env.APPWRITE_API_KEY;

// Database and collection IDs
const DATABASE_ID = process.env.VITE_APPWRITE_DATABASE_ID || 'cometscanner';
const USER_PROFILES_COLLECTION_ID = 'user_profiles';
const CONTENT_COLLECTION_ID = 'content';
const IMAGES_COLLECTION_ID = 'images';

// Storage bucket IDs
const IMAGES_BUCKET_ID = 'banner';

// Test user credentials
const TEST_USER_EMAIL = 'test-user@example.com';
const TEST_USER_PASSWORD = 'Test@123456';
const TEST_USER_NAME = 'Test User';

// Main function to test Appwrite integration
async function testAppwriteIntegration() {
  try {
    console.log('🚀 Testing Appwrite Integration');
    console.log('------------------------------');
    
    // Get Appwrite credentials
    let endpoint = process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
    let projectId = process.env.VITE_APPWRITE_PROJECT_ID;
    
    if (!projectId) {
      projectId = await prompt('Enter your Appwrite Project ID: ');
      if (!projectId) {
        console.log('❌ Project ID is required.');
        rl.close();
        return;
      }
    } else {
      console.log(`Using Project ID from .env: ${projectId}`);
    }
    
    if (!apiKey) {
      apiKey = await prompt('Enter your Appwrite API Key: ');
      if (!apiKey) {
        console.log('❌ API Key is required.');
        rl.close();
        return;
      }
    } else {
      console.log('Using API Key from .env file');
    }
    
    // Set up client
    client
      .setEndpoint(endpoint)
      .setProject(projectId)
      .setKey(apiKey);
    
    // Initialize Appwrite services
    const databases = new Databases(client);
    const storage = new Storage(client);
    const account = new Account(client);
    
    // Test connection
    console.log('\n📡 Testing connection to Appwrite...');
    try {
      const health = await client.get('/health');
      console.log('✅ Connection successful:', health.status);
    } catch (error) {
      console.error('❌ Connection failed:', error);
      rl.close();
      return;
    }
    
    // Test database operations
    console.log('\n📊 Testing database operations...');
    
    // Test database exists
    try {
      const db = await databases.get(DATABASE_ID);
      console.log(`✅ Database '${DATABASE_ID}' exists:`, db.name);
    } catch (error) {
      console.error(`❌ Database '${DATABASE_ID}' does not exist:`, error);
      rl.close();
      return;
    }
    
    // Test collections exist
    try {
      const collections = [
        { id: USER_PROFILES_COLLECTION_ID, name: 'User Profiles' },
        { id: CONTENT_COLLECTION_ID, name: 'Content' },
        { id: IMAGES_COLLECTION_ID, name: 'Images' }
      ];
      
      for (const collection of collections) {
        try {
          const col = await databases.getCollection(DATABASE_ID, collection.id);
          console.log(`✅ Collection '${collection.name}' exists:`, col.name);
        } catch (error) {
          console.error(`❌ Collection '${collection.name}' does not exist:`, error);
        }
      }
    } catch (error) {
      console.error('❌ Error checking collections:', error);
    }
    
    // Test storage operations
    console.log('\n📦 Testing storage operations...');
    
    // Test bucket exists
    try {
      const bucket = await storage.getBucket(IMAGES_BUCKET_ID);
      console.log(`✅ Bucket '${IMAGES_BUCKET_ID}' exists:`, bucket.name);
      
      // List files in bucket
      const files = await storage.listFiles(IMAGES_BUCKET_ID);
      console.log(`✅ Found ${files.total} files in bucket '${IMAGES_BUCKET_ID}'`);
    } catch (error) {
      console.error(`❌ Bucket '${IMAGES_BUCKET_ID}' does not exist:`, error);
    }
    
    // Test file upload and download
    console.log('\n📤 Testing file upload and download...');
    
    // Create a test file
    const testFilePath = path.join(__dirname, 'test-image.txt');
    fs.writeFileSync(testFilePath, 'This is a test file for Appwrite storage.');
    
    try {
      // Upload the file
      const fileId = ID.unique();
      const file = await storage.createFile(
        IMAGES_BUCKET_ID,
        fileId,
        fs.createReadStream(testFilePath)
      );
      console.log(`✅ File uploaded successfully:`, file.name);
      
      // Get the file
      const downloadedFile = await storage.getFile(IMAGES_BUCKET_ID, fileId);
      console.log(`✅ File retrieved successfully:`, downloadedFile.name);
      
      // Delete the file
      await storage.deleteFile(IMAGES_BUCKET_ID, fileId);
      console.log(`✅ File deleted successfully`);
    } catch (error) {
      console.error('❌ Error testing file operations:', error);
    } finally {
      // Clean up the test file
      if (fs.existsSync(testFilePath)) {
        fs.unlinkSync(testFilePath);
      }
    }
    
    // Test user operations
    console.log('\n👤 Testing user operations...');
    
    let userId = null;
    
    try {
      // Create a test user
      try {
        const user = await account.create(
          ID.unique(),
          TEST_USER_EMAIL,
          TEST_USER_PASSWORD,
          TEST_USER_NAME
        );
        userId = user.$id;
        console.log(`✅ Test user created successfully:`, user.email);
      } catch (error) {
        if (error.code === 409) {
          console.log('⚠️ Test user already exists, trying to get user by email...');
          
          // Try to get the user by email
          const users = await client.call('get', '/users', {
            'queries': [
              `email=${TEST_USER_EMAIL}`
            ]
          });
          
          if (users.total > 0) {
            userId = users.users[0].$id;
            console.log(`✅ Found existing test user:`, users.users[0].email);
          } else {
            console.error('❌ Could not find test user');
          }
        } else {
          console.error('❌ Error creating test user:', error);
        }
      }
      
      if (userId) {
        // Create a user profile
        try {
          const profile = await databases.createDocument(
            DATABASE_ID,
            USER_PROFILES_COLLECTION_ID,
            userId,
            {
              email: TEST_USER_EMAIL,
              is_owner: false,
              created_at: new Date().toISOString(),
              permissions: JSON.stringify({
                content_management: false,
                user_management: false,
                system_configuration: false,
                media_uploads: false,
                security_settings: false,
                site_customization: false,
              })
            }
          );
          console.log(`✅ User profile created successfully:`, profile.email);
        } catch (error) {
          if (error.code === 409) {
            console.log('⚠️ User profile already exists');
            
            // Get the user profile
            try {
              const profile = await databases.getDocument(
                DATABASE_ID,
                USER_PROFILES_COLLECTION_ID,
                userId
              );
              console.log(`✅ Retrieved user profile:`, profile.email);
            } catch (profileError) {
              console.error('❌ Error getting user profile:', profileError);
            }
          } else {
            console.error('❌ Error creating user profile:', error);
          }
        }
        
        // Clean up - delete the test user
        const shouldDelete = await prompt('Do you want to delete the test user? (y/n): ');
        if (shouldDelete.toLowerCase() === 'y') {
          try {
            await client.call('delete', `/users/${userId}`);
            console.log(`✅ Test user deleted successfully`);
          } catch (error) {
            console.error('❌ Error deleting test user:', error);
          }
        }
      }
    } catch (error) {
      console.error('❌ Error testing user operations:', error);
    }
    
    console.log('\n🎉 Appwrite integration test completed!');
    rl.close();
  } catch (error) {
    console.error('❌ Error testing Appwrite integration:', error);
    rl.close();
  }
}

// Run the test function
testAppwriteIntegration();
