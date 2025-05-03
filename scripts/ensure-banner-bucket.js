#!/usr/bin/env node

/**
 * Script to ensure the banner bucket exists
 * 
 * This script checks if the banner bucket exists and creates it if it doesn't.
 */
import { Client, Storage, Permission, Role } from 'node-appwrite';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Appwrite client
const client = new Client()
    .setEndpoint(process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(process.env.VITE_APPWRITE_PROJECT_ID);

// Check if API key is provided
if (!process.env.APPWRITE_API_KEY) {
    console.error('❌ Error: APPWRITE_API_KEY is not set in your .env file');
    console.log('Please add your Appwrite API key to your .env file:');
    console.log('APPWRITE_API_KEY=your-api-key-here');
    process.exit(1);
}

// Set API key
client.setKey(process.env.APPWRITE_API_KEY);

// Initialize Appwrite services
const storage = new Storage(client);

// Banner bucket ID
const BANNER_BUCKET_ID = 'banner';

// Main function to ensure the banner bucket exists
async function ensureBannerBucket() {
    try {
        console.log('🔍 Checking if banner bucket exists...');
        
        try {
            // Try to get the bucket to see if it exists
            const bucket = await storage.getBucket(BANNER_BUCKET_ID);
            console.log(`✅ Banner bucket exists: ${bucket.name} (${bucket.$id})`);
            return true;
        } catch (error) {
            // If the bucket doesn't exist, create it
            if (error.code === 404) {
                console.log('Banner bucket does not exist, creating it...');
                
                try {
                    const bucket = await storage.createBucket(
                        BANNER_BUCKET_ID,
                        'All Images',
                        [
                            Permission.read(Role.any()),
                            Permission.create(Role.users()),
                            Permission.update(Role.users()),
                            Permission.delete(Role.users()),
                        ]
                    );
                    
                    console.log(`✅ Banner bucket created: ${bucket.name} (${bucket.$id})`);
                    return true;
                } catch (createError) {
                    console.error(`❌ Error creating banner bucket: ${createError.message}`);
                    if (createError.response) {
                        console.error('Response:', createError.response);
                    }
                    return false;
                }
            } else {
                console.error(`❌ Error checking banner bucket: ${error.message}`);
                if (error.response) {
                    console.error('Response:', error.response);
                }
                return false;
            }
        }
    } catch (error) {
        console.error(`❌ Error ensuring banner bucket: ${error.message}`);
        return false;
    }
}

// Run the function
ensureBannerBucket()
    .then((success) => {
        if (success) {
            console.log('\n✅ Banner bucket check completed successfully!');
        } else {
            console.log('\n❌ Failed to ensure banner bucket exists.');
        }
        process.exit(success ? 0 : 1);
    })
    .catch((error) => {
        console.error('\nUnhandled error:', error);
        process.exit(1);
    });
