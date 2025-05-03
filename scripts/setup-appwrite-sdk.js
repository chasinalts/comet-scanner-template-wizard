/**
 * Script to set up Appwrite resources using the SDK directly
 * 
 * This script creates all necessary databases, collections, attributes, and storage buckets
 * for the COMET Scanner application using the Appwrite SDK instead of the CLI.
 */
import { Client, Databases, Storage, ID, Permission, Role } from 'appwrite';
import readline from 'readline';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

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

// Main function to set up Appwrite resources
async function setupAppwrite() {
  try {
    console.log('🚀 Setting up Appwrite resources for COMET Scanner');
    console.log('------------------------------------------------');
    
    // Get credentials from user
    const endpoint = process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
    let projectId = process.env.VITE_APPWRITE_PROJECT_ID;
    
    if (!projectId) {
      projectId = await prompt('Enter your Appwrite Project ID: ');
      if (!projectId) {
        console.log('Project ID is required.');
        rl.close();
        return;
      }
    } else {
      console.log(`Using Project ID from .env: ${projectId}`);
    }
    
    // Initialize Appwrite client
    const client = new Client()
      .setEndpoint(endpoint)
      .setProject(projectId);
    
    // Initialize Appwrite services
    const databases = new Databases(client);
    const storage = new Storage(client);
    
    // Create database
    console.log('\nCreating database...');
    const databaseName = 'cometscanner';
    const databaseId = 'cometscanner';
    
    try {
      const database = await databases.create(databaseId, databaseName);
      console.log(`✅ Database created: ${databaseName} (${database.$id})`);
    } catch (error) {
      if (error.code === 409) {
        console.log(`Database '${databaseName}' already exists, continuing...`);
      } else {
        console.error(`❌ Error creating database: ${error.message}`);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    // Create collections
    console.log('\nCreating collections...');
    
    // 1. user_profiles collection
    try {
      const userProfilesCollection = await databases.createCollection(
        databaseId,
        'user_profiles',
        'User Profiles',
        [
          Permission.read(Role.users()),
          Permission.create(Role.users()),
          Permission.update(Role.user('${document.userId}')),
          Permission.delete(Role.user('${document.userId}'))
        ],
        true
      );
      
      console.log('✅ Created user_profiles collection');
      
      // Add attributes to user_profiles
      await databases.createEmailAttribute(
        databaseId,
        'user_profiles',
        'email',
        true
      );
      
      await databases.createBooleanAttribute(
        databaseId,
        'user_profiles',
        'is_owner',
        false,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'created_at',
        255,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'last_sign_in_at',
        255,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'username',
        255,
        false
      );
      
      // Create permissions attributes
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'permissions_content_management',
        10,
        false,
        'false'
      );
      
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'permissions_user_management',
        10,
        false,
        'false'
      );
      
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'permissions_system_configuration',
        10,
        false,
        'false'
      );
      
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'permissions_media_uploads',
        10,
        false,
        'false'
      );
      
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'permissions_security_settings',
        10,
        false,
        'false'
      );
      
      await databases.createStringAttribute(
        databaseId,
        'user_profiles',
        'permissions_site_customization',
        10,
        false,
        'false'
      );
      
      // Create index for email
      await databases.createIndex(
        databaseId,
        'user_profiles',
        'email_index',
        'key',
        ['email'],
        false
      );
      
      console.log('✅ Added attributes and index to user_profiles collection');
    } catch (error) {
      if (error.code === 409) {
        console.log('user_profiles collection already exists, continuing...');
      } else {
        console.error(`❌ Error creating user_profiles collection: ${error.message}`);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    // 2. content collection
    try {
      const contentCollection = await databases.createCollection(
        databaseId,
        'content',
        'Content',
        [
          Permission.read(Role.any()),
          Permission.create(Role.users()),
          Permission.update(Role.users()),
          Permission.delete(Role.users())
        ],
        true
      );
      
      console.log('✅ Created content collection');
      
      // Add attributes to content
      await databases.createStringAttribute(
        databaseId,
        'content',
        'title',
        255,
        true
      );
      
      await databases.createStringAttribute(
        databaseId,
        'content',
        'content',
        65535,
        true
      );
      
      await databases.createStringAttribute(
        databaseId,
        'content',
        'section_id',
        255,
        true
      );
      
      await databases.createStringAttribute(
        databaseId,
        'content',
        'last_updated',
        255,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'content',
        'updated_by',
        255,
        false
      );
      
      // Create index for section_id
      await databases.createIndex(
        databaseId,
        'content',
        'section_id_index',
        'key',
        ['section_id'],
        false
      );
      
      console.log('✅ Added attributes and index to content collection');
    } catch (error) {
      if (error.code === 409) {
        console.log('content collection already exists, continuing...');
      } else {
        console.error(`❌ Error creating content collection: ${error.message}`);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    // 3. images collection
    try {
      const imagesCollection = await databases.createCollection(
        databaseId,
        'images',
        'Images',
        [
          Permission.read(Role.users()),
          Permission.create(Role.users()),
          Permission.update(Role.user('${document.userId}')),
          Permission.delete(Role.user('${document.userId}'))
        ],
        true
      );
      
      console.log('✅ Created images collection');
      
      // Add attributes to images
      await databases.createStringAttribute(
        databaseId,
        'images',
        'name',
        255,
        true
      );
      
      await databases.createStringAttribute(
        databaseId,
        'images',
        'file_id',
        255,
        true
      );
      
      await databases.createStringAttribute(
        databaseId,
        'images',
        'bucket_id',
        255,
        true
      );
      
      await databases.createIntegerAttribute(
        databaseId,
        'images',
        'size',
        false,
        0,
        2147483647
      );
      
      await databases.createStringAttribute(
        databaseId,
        'images',
        'mime_type',
        255,
        false
      );
      
      await databases.createIntegerAttribute(
        databaseId,
        'images',
        'width',
        false,
        0,
        10000
      );
      
      await databases.createIntegerAttribute(
        databaseId,
        'images',
        'height',
        false,
        0,
        10000
      );
      
      await databases.createStringAttribute(
        databaseId,
        'images',
        'uploaded_by',
        255,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'images',
        'uploaded_at',
        255,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'images',
        'description',
        1024,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'images',
        'tags',
        255,
        false,
        null,
        true
      );
      
      console.log('✅ Added attributes to images collection');
    } catch (error) {
      if (error.code === 409) {
        console.log('images collection already exists, continuing...');
      } else {
        console.error(`❌ Error creating images collection: ${error.message}`);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    // 4. logs collection
    try {
      const logsCollection = await databases.createCollection(
        databaseId,
        'logs',
        'Logs',
        [
          Permission.read(Role.users()),
          Permission.create(Role.users()),
          Permission.update(Role.users()),
          Permission.delete(Role.users())
        ],
        true
      );
      
      console.log('✅ Created logs collection');
      
      // Add attributes to logs
      await databases.createStringAttribute(
        databaseId,
        'logs',
        'event',
        255,
        true
      );
      
      await databases.createStringAttribute(
        databaseId,
        'logs',
        'message',
        1024,
        true
      );
      
      await databases.createStringAttribute(
        databaseId,
        'logs',
        'timestamp',
        255,
        true
      );
      
      await databases.createStringAttribute(
        databaseId,
        'logs',
        'user_id',
        255,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'logs',
        'level',
        255,
        false
      );
      
      await databases.createStringAttribute(
        databaseId,
        'logs',
        'details_json',
        16384,
        false
      );
      
      console.log('✅ Added attributes to logs collection');
    } catch (error) {
      if (error.code === 409) {
        console.log('logs collection already exists, continuing...');
      } else {
        console.error(`❌ Error creating logs collection: ${error.message}`);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    // Create storage buckets
    console.log('\nCreating storage buckets...');
    
    // 1. banner bucket
    try {
      const bannerBucket = await storage.createBucket(
        'banner',
        'Banner Images',
        [
          Permission.read(Role.any()),
          Permission.create(Role.users()),
          Permission.update(Role.users()),
          Permission.delete(Role.users())
        ],
        true,
        false,
        false,
        ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
      );
      
      console.log('✅ Created banner bucket');
    } catch (error) {
      if (error.code === 409) {
        console.log('banner bucket already exists, continuing...');
      } else {
        console.error(`❌ Error creating banner bucket: ${error.message}`);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    // 2. gallery bucket
    try {
      const galleryBucket = await storage.createBucket(
        'gallery',
        'Gallery Images',
        [
          Permission.read(Role.users()),
          Permission.create(Role.users()),
          Permission.update(Role.users()),
          Permission.delete(Role.users())
        ],
        true,
        false,
        false,
        ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
      );
      
      console.log('✅ Created gallery bucket');
    } catch (error) {
      if (error.code === 409) {
        console.log('gallery bucket already exists, continuing...');
      } else {
        console.error(`❌ Error creating gallery bucket: ${error.message}`);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    // 3. scanner bucket
    try {
      const scannerBucket = await storage.createBucket(
        'scanner',
        'Scanner Images',
        [
          Permission.read(Role.users()),
          Permission.create(Role.users()),
          Permission.update(Role.users()),
          Permission.delete(Role.users())
        ],
        true,
        false,
        false,
        ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
      );
      
      console.log('✅ Created scanner bucket');
    } catch (error) {
      if (error.code === 409) {
        console.log('scanner bucket already exists, continuing...');
      } else {
        console.error(`❌ Error creating scanner bucket: ${error.message}`);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    // Update .env file with database ID
    console.log('\nUpdating .env file with database ID...');
    
    try {
      const envPath = path.join(process.cwd(), '.env');
      let envContent = '';
      
      if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
        
        // Replace or add database ID
        if (envContent.includes('VITE_APPWRITE_DATABASE_ID=')) {
          envContent = envContent.replace(/VITE_APPWRITE_DATABASE_ID=.*/, `VITE_APPWRITE_DATABASE_ID=${databaseId}`);
        } else {
          envContent += `\nVITE_APPWRITE_DATABASE_ID=${databaseId}`;
        }
        
        // Replace or add project ID
        if (envContent.includes('VITE_APPWRITE_PROJECT_ID=')) {
          envContent = envContent.replace(/VITE_APPWRITE_PROJECT_ID=.*/, `VITE_APPWRITE_PROJECT_ID=${projectId}`);
        } else {
          envContent += `\nVITE_APPWRITE_PROJECT_ID=${projectId}`;
        }
        
        // Replace or add endpoint
        if (!envContent.includes('VITE_APPWRITE_ENDPOINT=')) {
          envContent += `\nVITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1`;
        }
        
        fs.writeFileSync(envPath, envContent);
        console.log('✅ Updated .env file with database ID and project ID');
      } else {
        // Create new .env file
        envContent = `VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=${projectId}
VITE_APPWRITE_DATABASE_ID=${databaseId}`;
        
        fs.writeFileSync(envPath, envContent);
        console.log('✅ Created .env file with database ID and project ID');
      }
    } catch (error) {
      console.error('Error updating .env file:', error.message);
    }
    
    console.log('\n🎉 Appwrite setup complete!');
    console.log('Your Appwrite resources have been created:');
    console.log(`- Database: ${databaseName}`);
    console.log('- Collections: user_profiles, content, images, logs');
    console.log('- Storage Buckets: banner, gallery, scanner');
    console.log('\nYour .env file has been updated with the necessary configuration.');
    
    // Create initial content
    console.log('\nWould you like to create initial content for the "What is COMET?" section?');
    const createInitialContent = await prompt('Enter y/n: ');
    
    if (createInitialContent.toLowerCase() === 'y') {
      console.log('\nCreating initial content...');
      
      const whatIsCometContent = {
        title: 'What is COMET?',
        content: `
# COMET Scanner

COMET (Comprehensive Operational Management and Evaluation Tool) is an advanced scanner configuration system designed to streamline the setup and management of scanning devices.

## Key Features

- **User-friendly Interface**: Intuitive controls for configuring scanner settings
- **Template Wizard**: Step-by-step guidance for optimal scanner configuration
- **Image Management**: Upload, view, and organize scanned images
- **Role-based Access**: Owner, admin, and user permission levels
- **Customizable Settings**: Tailor the scanner to your specific needs

COMET Scanner makes complex configuration simple, allowing you to focus on what matters most - getting high-quality scans efficiently.
        `,
        section_id: 'what-is-comet',
        last_updated: new Date().toISOString(),
        updated_by: 'system'
      };
      
      try {
        await databases.createDocument(
          databaseId,
          'content',
          ID.unique(),
          whatIsCometContent
        );
        console.log('✅ Created initial content for "What is COMET?" section');
      } catch (error) {
        console.error('❌ Error creating initial content:', error.message);
        if (error.response) {
          console.error('Response:', error.response);
        }
      }
    }
    
    console.log('\n📝 Next steps:');
    console.log('1. Update your appwriteConfig.ts file with the correct database ID');
    console.log('2. Create an owner account using: npm run appwrite:create-owner');
    
    rl.close();
  } catch (error) {
    console.error('Error setting up Appwrite resources:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
    rl.close();
  }
}

// Run the setup function
setupAppwrite();
