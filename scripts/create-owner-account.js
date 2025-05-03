/**
 * Script to create an owner account in Appwrite
 *
 * This script creates an owner account with full permissions
 * and sets up the necessary user profile in the database.
 */
import { Client, Account, Databases, ID, Query } from 'appwrite';
import readline from 'readline';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

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

// Function to prompt for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

async function createOwnerAccount() {
  try {
    console.log('🔑 Creating Owner Account');
    console.log('------------------------');

    // Get environment variables
    const endpoint = process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
    const projectId = process.env.VITE_APPWRITE_PROJECT_ID;
    const databaseId = process.env.VITE_APPWRITE_DATABASE_ID;

    if (!projectId || !databaseId) {
      console.log('❌ Missing environment variables. Please run appwrite:setup first.');
      rl.close();
      return;
    }

    console.log('Endpoint:', endpoint);
    console.log('Project ID:', projectId);
    console.log('Database ID:', databaseId);

    // Initialize Appwrite client
    const client = new Client()
      .setEndpoint(endpoint)
      .setProject(projectId);

    // Initialize Appwrite services
    const account = new Account(client);
    const databases = new Databases(client);

    // Get owner email and password
    const email = await prompt('Enter owner email: ');
    const password = await prompt('Enter owner password (min 8 characters): ');
    const name = await prompt('Enter owner name: ');

    if (!email || !password || !name) {
      console.log('❌ Email, password, and name are required.');
      rl.close();
      return;
    }

    if (password.length < 8) {
      console.log('❌ Password must be at least 8 characters long.');
      rl.close();
      return;
    }

    // Check if user already exists
    try {
      // Try to login with the provided credentials
      const session = await account.createEmailSession(email, password);
      console.log('✅ User already exists. Checking if they are an owner...');

      // Get the user account
      const user = await account.get();

      // Check if user profile exists
      try {
        const profile = await databases.listDocuments(
          databaseId,
          'user_profiles',
          [
            // Query for documents where email equals the provided email
            Query.equal('email', email)
          ]
        );

        if (profile.documents.length > 0) {
          const existingProfile = profile.documents[0];

          if (existingProfile.is_owner) {
            console.log('✅ User is already an owner.');
            rl.close();
            return;
          } else {
            console.log('⚠️ User exists but is not an owner. Updating profile...');

            // Update the profile to make the user an owner
            await databases.updateDocument(
              databaseId,
              'user_profiles',
              existingProfile.$id,
              {
                is_owner: true,
                permissions_content_management: 'true',
                permissions_user_management: 'true',
                permissions_system_configuration: 'true',
                permissions_media_uploads: 'true',
                permissions_security_settings: 'true',
                permissions_site_customization: 'true'
              }
            );

            console.log('✅ User profile updated. User is now an owner.');
            rl.close();
            return;
          }
        }
      } catch (error) {
        console.log('No existing profile found, will create one.');
      }

      // Logout from the session
      await account.deleteSession('current');
    } catch (error) {
      console.log('User does not exist, creating new account...');
    }

    // Create the user account
    try {
      const user = await account.create(
        ID.unique(),
        email,
        password,
        name
      );

      console.log('✅ User account created:', user.$id);

      // Login as the new user
      await account.createEmailSession(email, password);

      // Set user preferences
      await account.updatePrefs({
        is_owner: true
      });

      // Create user profile
      await databases.createDocument(
        databaseId,
        'user_profiles',
        user.$id,
        {
          email: email,
          is_owner: true,
          created_at: new Date().toISOString(),
          permissions_content_management: 'true',
          permissions_user_management: 'true',
          permissions_system_configuration: 'true',
          permissions_media_uploads: 'true',
          permissions_security_settings: 'true',
          permissions_site_customization: 'true'
        }
      );

      console.log('✅ User profile created with owner permissions.');

      // Logout from the session
      await account.deleteSession('current');

      console.log('\n🎉 Owner account created successfully!');
      console.log(`Email: ${email}`);
      console.log('You can now log in to the application with these credentials.');
    } catch (error) {
      console.error('❌ Error creating owner account:', error.message);
      if (error.response) {
        console.error('Response:', error.response);
      }
    }

    rl.close();
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
    rl.close();
  }
}

// Run the function
createOwnerAccount();
