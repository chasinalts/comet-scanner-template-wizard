/**
 * Script to create initial content in Appwrite
 * 
 * This script creates the "What is COMET?" section and other
 * initial content needed for the application.
 */
import { Client, Databases, ID } from 'appwrite';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createInitialContent() {
  try {
    console.log('📝 Creating Initial Content');
    console.log('--------------------------');
    
    // Get environment variables
    const endpoint = process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1';
    const projectId = process.env.VITE_APPWRITE_PROJECT_ID;
    const databaseId = process.env.VITE_APPWRITE_DATABASE_ID;
    
    if (!projectId || !databaseId) {
      console.log('❌ Missing environment variables. Please run appwrite:setup first.');
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
    const databases = new Databases(client);
    
    // Create "What is COMET?" section
    console.log('\nCreating "What is COMET?" section...');
    
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
      console.log('✅ Created "What is COMET?" section');
    } catch (error) {
      console.error('❌ Error creating "What is COMET?" section:', error.message);
    }
    
    // Create welcome message
    console.log('\nCreating welcome message...');
    
    const welcomeContent = {
      title: 'Welcome to COMET Scanner',
      content: `
# Welcome to COMET Scanner!

Thank you for choosing COMET Scanner for your scanning needs. This platform provides you with powerful tools to configure and manage your scanning devices.

## Getting Started

1. **Explore the Home Screen**: View uploaded images and access key features
2. **Use the Template Wizard**: Configure your scanner with our step-by-step guide
3. **Check the Dashboard**: If you're an owner or admin, manage users and content

If you have any questions, please contact the system administrator.
      `,
      section_id: 'welcome-message',
      last_updated: new Date().toISOString(),
      updated_by: 'system'
    };
    
    try {
      await databases.createDocument(
        databaseId,
        'content',
        ID.unique(),
        welcomeContent
      );
      console.log('✅ Created welcome message');
    } catch (error) {
      console.error('❌ Error creating welcome message:', error.message);
    }
    
    console.log('\n🎉 Initial content created successfully!');
  } catch (error) {
    console.error('❌ Unexpected error:', error.message);
  }
}

// Run the function
createInitialContent();
