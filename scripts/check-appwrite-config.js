/**
 * Script to check Appwrite configuration
 *
 * This script checks if the Appwrite configuration in .env is valid
 * and displays information about the project and database.
 */
import { Client, Account, Databases } from 'node-appwrite';
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

// Debug mode
const DEBUG = process.env.DEBUG === '1';

// Debug log function
function debugLog(...args) {
  if (DEBUG) {
    console.log('[DEBUG]', ...args);
  }
}

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
    const client = new Client();
    debugLog('Creating Appwrite client');

    // Set endpoint and project
    client
      .setEndpoint(endpoint)
      .setProject(projectId);
    debugLog('Set endpoint:', endpoint);
    debugLog('Set project ID:', projectId);

    // Try to use API key if available
    const apiKey = process.env.APPWRITE_API_KEY;
    if (apiKey) {
      client.setKey(apiKey);
      console.log('\n✅ Using API key for authentication');
      debugLog('API key set (masked):', apiKey.substring(0, 3) + '...' + apiKey.substring(apiKey.length - 3));
    } else {
      console.log('\n⚠️ No API key found. Some operations may fail.');
      console.log('   Add APPWRITE_API_KEY to your .env file for full access.');
      debugLog('No API key found');
    }

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
      debugLog('Attempting to list databases');

      // For node-appwrite, we need to list databases and find the one we want
      const databasesList = await databases.list();
      debugLog('Databases list response:', JSON.stringify(databasesList, null, 2));

      const database = databasesList.databases.find(db => db.$id === databaseId);
      debugLog('Looking for database with ID:', databaseId);

      if (database) {
        console.log('\n✅ Database found:', database.name);
        debugLog('Database details:', JSON.stringify(database, null, 2));

        // List collections
        debugLog('Attempting to list collections for database:', databaseId);
        const collections = await databases.listCollections(databaseId);
        debugLog('Collections response:', JSON.stringify(collections, null, 2));

        console.log('\nCollections:');
        collections.total > 0
          ? collections.collections.forEach(collection => {
              console.log(`- ${collection.name} (${collection.$id})`);
            })
          : console.log('  No collections found');
      } else {
        console.log(`\n❌ Database with ID "${databaseId}" not found`);
        console.log('Available databases:');
        databasesList.databases.forEach(db => {
          console.log(`- ${db.name} (${db.$id})`);
        });
        debugLog('Database not found in list of available databases');
        return false;
      }
    } catch (error) {
      console.log('\n❌ Error accessing database:', error.message);
      debugLog('Error details:', error);

      if (error.code === 401) {
        console.log('   This is likely due to missing or invalid API key.');
        console.log('   Make sure your APPWRITE_API_KEY has the necessary permissions.');
      } else if (error.code === 404) {
        console.log('   The database or collection does not exist.');
        console.log('   Make sure your VITE_APPWRITE_DATABASE_ID is correct.');
      }
      return false;
    }

    console.log('\n✅ Appwrite configuration is valid!');
    return true;
  } catch (error) {
    console.error('\n❌ Error checking Appwrite configuration:', error.message);

    // Provide more helpful error messages based on error code
    if (error.code) {
      switch (error.code) {
        case 401:
          console.error('Authentication error: Your API key may be invalid or missing required permissions.');
          break;
        case 404:
          console.error('Not found: The requested resource does not exist.');
          break;
        case 400:
          console.error('Bad request: The request was malformed or contains invalid parameters.');
          break;
        case 500:
          console.error('Server error: Something went wrong on the Appwrite server.');
          break;
        default:
          if (error.response) {
            console.error('Response:', error.response);
          }
      }
    }

    return false;
  }
}

// Run the function
checkAppwriteConfig()
  .then((valid) => {
    if (valid) {
      console.log('\nYour Appwrite configuration is correctly set up.');
      console.log('\nNext steps:');
      console.log('1. Run the application: npm run dev');
      console.log('2. Deploy to Netlify: npm run netlify:deploy');
    } else {
      console.log('\nPlease update your Appwrite configuration in the .env file.');
      console.log('Make sure you have the following variables set:');
      console.log('- VITE_APPWRITE_ENDPOINT (e.g., https://cloud.appwrite.io/v1)');
      console.log('- VITE_APPWRITE_PROJECT_ID (your project ID)');
      console.log('- VITE_APPWRITE_DATABASE_ID (your database ID)');
      console.log('- APPWRITE_API_KEY (your API key with appropriate permissions)');
      console.log('\nYou can run: node scripts/update-env.js to update these variables.');
    }
  })
  .catch((error) => {
    console.error('Unhandled error:', error);
    console.log('\nTroubleshooting tips:');
    console.log('1. Make sure your Appwrite project exists and is accessible');
    console.log('2. Check that your API key has the necessary permissions');
    console.log('3. Verify your network connection to the Appwrite server');
    console.log('4. Try running with DEBUG=1 for more detailed logs: DEBUG=1 npm run appwrite:check-config');
  });
