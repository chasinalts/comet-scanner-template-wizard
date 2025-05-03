#!/usr/bin/env node

/**
 * Script to set up Appwrite resources for COMET Scanner (Limited Version)
 *
 * This script works within the free tier limitations of Appwrite.
 * It uses the existing database and adapts to work with a single storage bucket.
 */
import { Client, Databases, Storage, ID, Permission, Role } from 'node-appwrite';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
const databases = new Databases(client);
const storage = new Storage(client);

// Database and collection IDs
const DATABASE_ID = process.env.VITE_APPWRITE_DATABASE_ID || 'cometscanner';
const USER_PROFILES_COLLECTION_ID = 'user_profiles';
const CONTENT_COLLECTION_ID = 'content';
const IMAGES_COLLECTION_ID = 'images';
const LOGS_COLLECTION_ID = 'logs';

// Storage bucket IDs - Using a single bucket for all images due to free tier limitations
const IMAGES_BUCKET_ID = 'banner'; // Using the existing 'banner' bucket for all images

// Main function to set up Appwrite resources
async function setupAppwrite() {
    console.log('🚀 Setting up Appwrite resources for COMET Scanner (Limited Version)');
    console.log('--------------------------------------------------------------------');

    // Check if database exists
    try {
        console.log('\nChecking database...');
        const database = await databases.get(DATABASE_ID);
        console.log(`✅ Database exists: ${database.name} (${database.$id})`);
    } catch (error) {
        console.error(`❌ Error accessing database: ${error.message}`);
        console.log('Please make sure the database exists and is correctly configured in your .env file.');
        throw error;
    }

    // Create or check collections
    const collectionsToCreate = [
        {
            id: USER_PROFILES_COLLECTION_ID,
            name: 'User Profiles',
            permissions: [
                Permission.read(Role.users()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
            ],
            attributes: [
                { type: 'email', name: 'email', required: true },
                { type: 'boolean', name: 'is_owner', required: true },
                { type: 'datetime', name: 'created_at', required: true },
                { type: 'string', name: 'permissions', size: 65535, required: true } // Using string instead of JSON
            ]
        },
        {
            id: CONTENT_COLLECTION_ID,
            name: 'Content',
            permissions: [
                Permission.read(Role.any()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
            ],
            attributes: [
                { type: 'string', name: 'title', size: 255, required: true },
                { type: 'string', name: 'content', size: 65535, required: true },
                { type: 'datetime', name: 'last_updated', required: true }
            ]
        },
        {
            id: IMAGES_COLLECTION_ID,
            name: 'Images',
            permissions: [
                Permission.read(Role.users()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
                Permission.delete(Role.users()),
            ],
            attributes: [
                { type: 'string', name: 'name', size: 255, required: true },
                { type: 'string', name: 'file_id', size: 255, required: true },
                { type: 'string', name: 'bucket_id', size: 255, required: true },
                { type: 'string', name: 'uploaded_by', size: 255, required: true },
                { type: 'datetime', name: 'uploaded_at', required: true },
                { type: 'string', name: 'image_type', size: 50, required: true } // 'banner', 'gallery', or 'scanner'
            ]
        },
        {
            id: LOGS_COLLECTION_ID,
            name: 'Logs',
            permissions: [
                Permission.read(Role.users()),
                Permission.create(Role.users()),
            ],
            attributes: [
                { type: 'string', name: 'level', size: 50, required: true },
                { type: 'string', name: 'message', size: 65535, required: true },
                { type: 'datetime', name: 'timestamp', required: true },
                { type: 'string', name: 'user_id', size: 255, required: false },
                { type: 'string', name: 'metadata', size: 65535, required: false } // Using string instead of JSON
            ]
        }
    ];

    // Process each collection
    for (const collection of collectionsToCreate) {
        try {
            console.log(`\nChecking collection: ${collection.name}...`);

            // Try to get the collection to see if it exists
            try {
                await databases.getCollection(DATABASE_ID, collection.id);
                console.log(`✅ Collection '${collection.name}' already exists, checking attributes...`);
            } catch (error) {
                // Collection doesn't exist, create it
                if (error.code === 404) {
                    console.log(`Creating collection: ${collection.name}...`);
                    await databases.createCollection(
                        DATABASE_ID,
                        collection.id,
                        collection.name,
                        collection.permissions
                    );
                    console.log(`✅ Collection created: ${collection.name}`);
                } else {
                    throw error;
                }
            }

            // Create attributes for the collection
            for (const attr of collection.attributes) {
                try {
                    console.log(`Creating ${attr.name} attribute...`);

                    switch (attr.type) {
                        case 'string':
                            await databases.createStringAttribute(
                                DATABASE_ID,
                                collection.id,
                                attr.name,
                                attr.size,
                                attr.required
                            );
                            break;
                        case 'email':
                            await databases.createEmailAttribute(
                                DATABASE_ID,
                                collection.id,
                                attr.name,
                                attr.required
                            );
                            break;
                        case 'boolean':
                            await databases.createBooleanAttribute(
                                DATABASE_ID,
                                collection.id,
                                attr.name,
                                attr.required
                            );
                            break;
                        case 'datetime':
                            await databases.createDatetimeAttribute(
                                DATABASE_ID,
                                collection.id,
                                attr.name,
                                attr.required
                            );
                            break;
                        case 'json':
                            await databases.createJsonAttribute(
                                DATABASE_ID,
                                collection.id,
                                attr.name,
                                attr.required
                            );
                            break;
                    }
                    console.log(`✅ Created ${attr.name} attribute`);
                } catch (error) {
                    if (error.code === 409) {
                        console.log(`${attr.name} attribute already exists`);
                    } else {
                        console.error(`❌ Error creating ${attr.name} attribute: ${error.message}`);
                    }
                }
            }
        } catch (error) {
            console.error(`❌ Error processing collection ${collection.name}: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    // Check if the banner bucket exists
    try {
        console.log('\nChecking storage bucket...');
        const bucket = await storage.getBucket(IMAGES_BUCKET_ID);
        console.log(`✅ Bucket exists: ${bucket.name} (${bucket.$id})`);
    } catch (error) {
        if (error.code === 404) {
            // Bucket doesn't exist, create it
            try {
                console.log('Creating images bucket...');
                const bucket = await storage.createBucket(
                    IMAGES_BUCKET_ID,
                    'All Images',
                    [
                        Permission.read(Role.any()),
                        Permission.create(Role.users()),
                        Permission.update(Role.users()),
                        Permission.delete(Role.users()),
                    ]
                );
                console.log(`✅ Bucket created: ${bucket.name} (${bucket.$id})`);
            } catch (error) {
                console.error(`❌ Error creating bucket: ${error.message}`);
                if (error.response) {
                    console.error('Response:', error.response);
                }
            }
        } else {
            console.error(`❌ Error checking bucket: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    console.log('\n🎉 Appwrite setup complete!');
    console.log('Your Appwrite resources have been created or verified:');
    console.log(`- Database: ${DATABASE_ID}`);
    console.log('- Collections: user_profiles, content, images, logs');
    console.log(`- Storage Bucket: ${IMAGES_BUCKET_ID} (used for all image types)`);
    console.log('\nNOTE: Due to free tier limitations, we are using a single bucket for all images.');
    console.log('The image_type attribute in the images collection will distinguish between banner, gallery, and scanner images.');
}

// Run the setup function
setupAppwrite()
    .then(() => {
        console.log('\nSetup completed successfully!');
        process.exit(0);
    })
    .catch((error) => {
        console.error('\nSetup failed:', error);
        process.exit(1);
    });
