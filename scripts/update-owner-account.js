#!/usr/bin/env node

/**
 * Script to update an existing account to have owner permissions
 * 
 * This script updates an existing user account to have owner permissions
 * in the COMET Scanner application.
 */
import { Client, Databases, Users, ID, Query } from 'node-appwrite';
import readline from 'readline';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

async function updateOwnerAccount() {
  try {
    console.log('🔑 Updating Owner Account');
    console.log('------------------------');
    
    // Get environment variables
    const endpoint = process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
    const projectId = process.env.VITE_APPWRITE_PROJECT_ID;
    const databaseId = process.env.VITE_APPWRITE_DATABASE_ID;
    
    console.log('Endpoint:', endpoint);
    console.log('Project ID:', projectId);
    console.log('Database ID:', databaseId);
    
    if (!process.env.APPWRITE_API_KEY) {
      console.error('❌ Error: APPWRITE_API_KEY is not set in your .env file');
      console.log('Please add your Appwrite API key to your .env file:');
      console.log('APPWRITE_API_KEY=your-api-key-here');
      return false;
    }
    
    // Initialize Appwrite client
    const client = new Client()
      .setEndpoint(endpoint)
      .setProject(projectId)
      .setKey(process.env.APPWRITE_API_KEY);
    
    // Initialize Appwrite services
    const databases = new Databases(client);
    const users = new Users(client);
    
    // Get email of existing account to update
    const email = await prompt('Enter email of account to update: ');
    
    // Find user by email
    try {
      const usersList = await users.list([
        Query.equal('email', email)
      ]);
      
      if (usersList.total === 0) {
        console.log(`❌ No user found with email ${email}`);
        return false;
      }
      
      const user = usersList.users[0];
      console.log(`✅ Found user: ${user.name} (${user.$id})`);
      
      // Update user preferences to set as owner
      await users.updatePrefs(user.$id, {
        is_owner: true,
        permissions: {
          content_management: true,
          user_management: true,
          system_configuration: true,
          media_uploads: true,
          security_settings: true,
          site_customization: true,
        }
      });
      
      console.log('✅ Updated user preferences to owner');
      
      // Check if user profile exists in database
      try {
        const profile = await databases.getDocument(databaseId, 'user_profiles', user.$id);
        console.log('✅ User profile exists, updating...');
        
        // Update user profile to set as owner
        await databases.updateDocument(databaseId, 'user_profiles', user.$id, {
          is_owner: true,
          permissions: JSON.stringify({
            content_management: true,
            user_management: true,
            system_configuration: true,
            media_uploads: true,
            security_settings: true,
            site_customization: true,
          })
        });
        
        console.log('✅ Updated user profile to owner');
      } catch (error) {
        if (error.code === 404) {
          console.log('User profile does not exist, creating...');
          
          // Create user profile
          await databases.createDocument(databaseId, 'user_profiles', user.$id, {
            email: email,
            is_owner: true,
            created_at: new Date().toISOString(),
            permissions: JSON.stringify({
              content_management: true,
              user_management: true,
              system_configuration: true,
              media_uploads: true,
              security_settings: true,
              site_customization: true,
            })
          });
          
          console.log('✅ Created user profile with owner permissions');
        } else {
          throw error;
        }
      }
      
      console.log(`\n✅ Successfully updated ${email} to owner!`);
      return true;
    } catch (error) {
      console.error('❌ Error updating owner account:', error.message);
      if (error.response) {
        console.error('Response:', error.response);
      }
      return false;
    }
  } catch (error) {
    console.error('❌ Error:', error.message);
    return false;
  } finally {
    rl.close();
  }
}

// Run the function
updateOwnerAccount()
  .then((success) => {
    if (success) {
      console.log('\n✅ Owner account updated successfully!');
    } else {
      console.log('\n❌ Failed to update owner account.');
    }
    process.exit(0);
  })
  .catch((error) => {
    console.error('\nUnhandled error:', error);
    process.exit(1);
  });
