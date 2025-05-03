/**
 * Script to set up Appwrite resources using the CLI
 *
 * This script creates all necessary databases, collections, attributes, and storage buckets
 * for the COMET Scanner application.
 */
import { exec } from 'child_process';
import { promisify } from 'util';
import readline from 'readline';
import fs from 'fs';
import path from 'path';

const execAsync = promisify(exec);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

// Function to execute CLI commands
async function runCommand(command) {
  try {
    console.log(`Running: ${command}`);
    const { stdout, stderr } = await execAsync(command);
    if (stderr) console.error(`stderr: ${stderr}`);
    return stdout.trim();
  } catch (error) {
    console.error(`Error executing command: ${error.message}`);
    if (error.stderr) console.error(`stderr: ${error.stderr}`);
    return null;
  }
}

// Main function to set up Appwrite resources
async function setupAppwrite() {
  try {
    console.log('🚀 Setting up Appwrite resources for COMET Scanner');
    console.log('------------------------------------------------');

    // Check if user is logged in
    console.log('Checking Appwrite CLI login status...');
    const loginCheck = await runCommand('appwrite client');

    if (!loginCheck) {
      console.log('You need to login to Appwrite CLI first.');
      console.log('Run the following command and follow the prompts:');
      console.log('appwrite login');
      rl.close();
      return;
    }

    console.log('✅ Logged in to Appwrite CLI');

    // Get project ID
    const projectId = await prompt('Enter your Appwrite Project ID: ');
    if (!projectId) {
      console.log('Project ID is required.');
      rl.close();
      return;
    }

    // Set project in CLI
    await runCommand(`appwrite client --project="${projectId}"`);
    console.log(`✅ Project set to: ${projectId}`);

    // Create database
    console.log('\nCreating database...');
    const databaseName = 'cometscanner';
    const databaseId = 'cometscanner';

    try {
      const createDbResult = await runCommand(`appwrite databases create --database-id="${databaseId}" --name="${databaseName}"`);
      console.log(`✅ Database created: ${databaseName}`);
    } catch (error) {
      console.log(`Database might already exist, continuing...`);
    }

    // Create collections
    console.log('\nCreating collections...');

    // 1. user_profiles collection
    try {
      await runCommand(`appwrite databases create-collection --database-id="${databaseId}" --collection-id="user_profiles" --name="User Profiles" --document-security=true`);
      console.log('✅ Created user_profiles collection');

      // Add attributes to user_profiles
      await runCommand(`appwrite databases create-email-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="email" --required=true`);
      await runCommand(`appwrite databases create-boolean-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="is_owner" --required=false --default=false`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="created_at" --required=false --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="last_sign_in_at" --required=false --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="username" --required=false --size=255`);

      // Create permissions object
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="permissions_content_management" --required=false --default="false" --size=10`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="permissions_user_management" --required=false --default="false" --size=10`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="permissions_system_configuration" --required=false --default="false" --size=10`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="permissions_media_uploads" --required=false --default="false" --size=10`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="permissions_security_settings" --required=false --default="false" --size=10`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="user_profiles" --key="permissions_site_customization" --required=false --default="false" --size=10`);

      console.log('✅ Added attributes to user_profiles collection');
    } catch (error) {
      console.log('user_profiles collection might already exist, continuing...');
    }

    // 2. content collection
    try {
      await runCommand(`appwrite databases create-collection --database-id="${databaseId}" --collection-id="content" --name="Content" --document-security=true`);
      console.log('✅ Created content collection');

      // Add attributes to content
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="content" --key="title" --required=true --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="content" --key="content" --required=true --size=65535`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="content" --key="section_id" --required=true --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="content" --key="last_updated" --required=false --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="content" --key="updated_by" --required=false --size=255`);

      console.log('✅ Added attributes to content collection');
    } catch (error) {
      console.log('content collection might already exist, continuing...');
    }

    // 3. images collection
    try {
      await runCommand(`appwrite databases create-collection --database-id="${databaseId}" --collection-id="images" --name="Images" --document-security=true`);
      console.log('✅ Created images collection');

      // Add attributes to images
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="images" --key="name" --required=true --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="images" --key="file_id" --required=true --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="images" --key="bucket_id" --required=true --size=255`);
      await runCommand(`appwrite databases create-integer-attribute --database-id="${databaseId}" --collection-id="images" --key="size" --required=false --min=0 --max=2147483647`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="images" --key="mime_type" --required=false --size=255`);
      await runCommand(`appwrite databases create-integer-attribute --database-id="${databaseId}" --collection-id="images" --key="width" --required=false --min=0 --max=10000`);
      await runCommand(`appwrite databases create-integer-attribute --database-id="${databaseId}" --collection-id="images" --key="height" --required=false --min=0 --max=10000`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="images" --key="uploaded_by" --required=false --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="images" --key="uploaded_at" --required=false --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="images" --key="description" --required=false --size=1024`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="images" --key="tags" --required=false --size=255 --array=true`);

      console.log('✅ Added attributes to images collection');
    } catch (error) {
      console.log('images collection might already exist, continuing...');
    }

    // 4. logs collection
    try {
      await runCommand(`appwrite databases create-collection --database-id="${databaseId}" --collection-id="logs" --name="Logs" --document-security=true`);
      console.log('✅ Created logs collection');

      // Add attributes to logs
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="logs" --key="event" --required=true --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="logs" --key="message" --required=true --size=1024`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="logs" --key="timestamp" --required=true --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="logs" --key="user_id" --required=false --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="logs" --key="level" --required=false --size=255`);
      await runCommand(`appwrite databases create-string-attribute --database-id="${databaseId}" --collection-id="logs" --key="details_json" --required=false --size=16384`);

      console.log('✅ Added attributes to logs collection');
    } catch (error) {
      console.log('logs collection might already exist, continuing...');
    }

    // Create storage buckets
    console.log('\nCreating storage buckets...');

    // 1. banner bucket
    try {
      await runCommand(`appwrite storage create-bucket --bucket-id="banner" --name="Banner Images" --file-security=true`);
      console.log('✅ Created banner bucket');
    } catch (error) {
      console.log('banner bucket might already exist, continuing...');
    }

    // 2. gallery bucket
    try {
      await runCommand(`appwrite storage create-bucket --bucket-id="gallery" --name="Gallery Images" --file-security=true`);
      console.log('✅ Created gallery bucket');
    } catch (error) {
      console.log('gallery bucket might already exist, continuing...');
    }

    // 3. scanner bucket
    try {
      await runCommand(`appwrite storage create-bucket --bucket-id="scanner" --name="Scanner Images" --file-security=true`);
      console.log('✅ Created scanner bucket');
    } catch (error) {
      console.log('scanner bucket might already exist, continuing...');
    }

    // Create indexes for faster queries
    console.log('\nCreating indexes...');

    // Index for user_profiles.email
    try {
      await runCommand(`appwrite databases create-index --database-id="${databaseId}" --collection-id="user_profiles" --key="email_index" --type="key" --attributes='["email"]'`);
      console.log('✅ Created index for user_profiles.email');
    } catch (error) {
      console.log('email_index might already exist, continuing...');
    }

    // Index for content.section_id
    try {
      await runCommand(`appwrite databases create-index --database-id="${databaseId}" --collection-id="content" --key="section_id_index" --type="key" --attributes='["section_id"]'`);
      console.log('✅ Created index for content.section_id');
    } catch (error) {
      console.log('section_id_index might already exist, continuing...');
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

      const initialContent = {
        title: 'What is COMET?',
        content: 'COMET (Comprehensive Operational Management and Evaluation Tool) is an advanced scanner configuration system designed to streamline the setup and management of scanning devices. It provides a user-friendly interface for configuring, monitoring, and optimizing scanner performance.',
        section_id: 'what-is-comet',
        last_updated: new Date().toISOString(),
        updated_by: 'system'
      };

      // Create a temporary JSON file
      const tempFilePath = path.join(process.cwd(), 'temp-content.json');
      fs.writeFileSync(tempFilePath, JSON.stringify(initialContent));

      try {
        await runCommand(`appwrite databases createDocument --databaseId="${databaseId}" --collectionId="content" --documentId="unique()" --data="@${tempFilePath}"`);
        console.log('✅ Created initial content for "What is COMET?" section');
      } catch (error) {
        console.log('Error creating initial content, you can add it later from the admin dashboard.');
      }

      // Remove temporary file
      fs.unlinkSync(tempFilePath);
    }

    console.log('\n📝 Next steps:');
    console.log('1. Update your appwriteConfig.ts file with the correct database ID');
    console.log('2. Set up permissions for your collections in the Appwrite Console');
    console.log('3. Create an owner account for yourself');

    rl.close();
  } catch (error) {
    console.error('Error setting up Appwrite resources:', error.message);
    rl.close();
  }
}

// Run the setup function
setupAppwrite();
