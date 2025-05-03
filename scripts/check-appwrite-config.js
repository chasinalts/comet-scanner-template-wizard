/**
 * Script to check Appwrite configuration
 * 
 * This script checks if the Appwrite configuration in .env is valid
 * and displays information about the project and database.
 */
import { Client, Account, Databases } from 'appwrite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Load environment variables
dotenv.config({ path: path.join(rootDir, '.env') });

async function checkAppwriteConfig() {
  try {
    console.log('🔍 Checking Appwrite Configuration');
    console.log('--------------------------------');
    
    // Get environment variables
    const endpoint = process.env.VITE_APPWRITE_ENDPOINT;
    const projectId = process.env.VITE_APPWRITE_PROJECT_ID;
    const databaseId = process.env.VITE_APPWRITE_DATABASE_ID;
    
    console.log('Endpoint:', endpoint);
    console.log('Project ID:', projectId);
    console.log('Database ID:', databaseId);
    
    if (!endpoint || !projectId || !databaseId) {
      console.log('\n❌ Missing environment variables. Please update your .env file.');
      return false;
    }
    
    // Initialize Appwrite client
    const client = new Client()
      .setEndpoint(endpoint)
      .setProject(projectId);
    
    // Create account and databases instances
    const account = new Account(client);
    const databases = new Databases(client);
    
    // Check if we can get account information (if logged in)
    try {
      const accountInfo = await account.get();
      console.log('\n✅ Logged in as:', accountInfo.name, `(${accountInfo.email})`);
    } catch (error) {
      console.log('\n⚠️ Not logged in. Some checks will be skipped.');
    }
    
    // Check if we can access the database
    try {
      const database = await databases.get(databaseId);
      console.log('\n✅ Database found:', database.name);
      
      // List collections
      const collections = await databases.listCollections(databaseId);
      console.log('\nCollections:');
      collections.collections.forEach(collection => {
        console.log(`- ${collection.name} (${collection.$id})`);
      });
    } catch (error) {
      console.log('\n❌ Error accessing database:', error.message);
      return false;
    }
    
    console.log('\n✅ Appwrite configuration is valid!');
    return true;
  } catch (error) {
    console.error('\n❌ Error checking Appwrite configuration:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
    return false;
  }
}

// Run the function
checkAppwriteConfig()
  .then((valid) => {
    if (valid) {
      console.log('\nYour Appwrite configuration is correctly set up.');
    } else {
      console.log('\nPlease update your Appwrite configuration in the .env file.');
      console.log('You can run: node scripts/update-env.js to update it.');
    }
  })
  .catch((error) => {
    console.error('Unhandled error:', error);
  });
