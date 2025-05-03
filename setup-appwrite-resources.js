#!/usr/bin/env node

/**
 * Script to set up Appwrite resources for COMET Scanner
 * 
 * This script creates the database, collections, and storage buckets needed for the application.
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

// Storage bucket IDs
const BANNER_BUCKET_ID = 'banner';
const GALLERY_BUCKET_ID = 'gallery';
const SCANNER_BUCKET_ID = 'scanner';

// Main function to set up Appwrite resources
async function setupAppwrite() {
    console.log('🚀 Setting up Appwrite resources for COMET Scanner');
    console.log('------------------------------------------------');
    
    // Create database
    try {
        console.log('\nCreating database...');
        const database = await databases.create(DATABASE_ID, 'COMET Scanner');
        console.log(`✅ Database created: ${database.name} (${database.$id})`);
    } catch (error) {
        if (error.code === 409) {
            console.log(`Database '${DATABASE_ID}' already exists, continuing...`);
        } else {
            console.error(`❌ Error creating database: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
            throw error;
        }
    }

    // Create user_profiles collection
    try {
        console.log('\nCreating user_profiles collection...');
        const userProfilesCollection = await databases.createCollection(
            DATABASE_ID,
            USER_PROFILES_COLLECTION_ID,
            'User Profiles',
            [
                Permission.read(Role.users()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
            ]
        );
        console.log(`✅ Collection created: ${userProfilesCollection.name} (${userProfilesCollection.$id})`);

        // Create attributes for user_profiles collection
        console.log('Creating attributes for user_profiles collection...');
        
        // Email attribute
        try {
            await databases.createEmailAttribute(
                DATABASE_ID,
                USER_PROFILES_COLLECTION_ID,
                'email',
                true
            );
            console.log('✅ Created email attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('Email attribute already exists');
            } else {
                console.error(`❌ Error creating email attribute: ${error.message}`);
            }
        }

        // is_owner attribute
        try {
            await databases.createBooleanAttribute(
                DATABASE_ID,
                USER_PROFILES_COLLECTION_ID,
                'is_owner',
                true
            );
            console.log('✅ Created is_owner attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('is_owner attribute already exists');
            } else {
                console.error(`❌ Error creating is_owner attribute: ${error.message}`);
            }
        }

        // created_at attribute
        try {
            await databases.createDatetimeAttribute(
                DATABASE_ID,
                USER_PROFILES_COLLECTION_ID,
                'created_at',
                true
            );
            console.log('✅ Created created_at attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('created_at attribute already exists');
            } else {
                console.error(`❌ Error creating created_at attribute: ${error.message}`);
            }
        }

        // permissions object attribute
        try {
            await databases.createJsonAttribute(
                DATABASE_ID,
                USER_PROFILES_COLLECTION_ID,
                'permissions',
                true
            );
            console.log('✅ Created permissions attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('permissions attribute already exists');
            } else {
                console.error(`❌ Error creating permissions attribute: ${error.message}`);
            }
        }
    } catch (error) {
        if (error.code === 409) {
            console.log(`Collection '${USER_PROFILES_COLLECTION_ID}' already exists, continuing...`);
        } else {
            console.error(`❌ Error creating collection: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    // Create content collection
    try {
        console.log('\nCreating content collection...');
        const contentCollection = await databases.createCollection(
            DATABASE_ID,
            CONTENT_COLLECTION_ID,
            'Content',
            [
                Permission.read(Role.any()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
            ]
        );
        console.log(`✅ Collection created: ${contentCollection.name} (${contentCollection.$id})`);

        // Create attributes for content collection
        console.log('Creating attributes for content collection...');
        
        // title attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                CONTENT_COLLECTION_ID,
                'title',
                255,
                true
            );
            console.log('✅ Created title attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('title attribute already exists');
            } else {
                console.error(`❌ Error creating title attribute: ${error.message}`);
            }
        }

        // content attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                CONTENT_COLLECTION_ID,
                'content',
                65535,
                true
            );
            console.log('✅ Created content attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('content attribute already exists');
            } else {
                console.error(`❌ Error creating content attribute: ${error.message}`);
            }
        }

        // last_updated attribute
        try {
            await databases.createDatetimeAttribute(
                DATABASE_ID,
                CONTENT_COLLECTION_ID,
                'last_updated',
                true
            );
            console.log('✅ Created last_updated attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('last_updated attribute already exists');
            } else {
                console.error(`❌ Error creating last_updated attribute: ${error.message}`);
            }
        }
    } catch (error) {
        if (error.code === 409) {
            console.log(`Collection '${CONTENT_COLLECTION_ID}' already exists, continuing...`);
        } else {
            console.error(`❌ Error creating collection: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    // Create images collection
    try {
        console.log('\nCreating images collection...');
        const imagesCollection = await databases.createCollection(
            DATABASE_ID,
            IMAGES_COLLECTION_ID,
            'Images',
            [
                Permission.read(Role.users()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
                Permission.delete(Role.users()),
            ]
        );
        console.log(`✅ Collection created: ${imagesCollection.name} (${imagesCollection.$id})`);

        // Create attributes for images collection
        console.log('Creating attributes for images collection...');
        
        // name attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                IMAGES_COLLECTION_ID,
                'name',
                255,
                true
            );
            console.log('✅ Created name attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('name attribute already exists');
            } else {
                console.error(`❌ Error creating name attribute: ${error.message}`);
            }
        }

        // file_id attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                IMAGES_COLLECTION_ID,
                'file_id',
                255,
                true
            );
            console.log('✅ Created file_id attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('file_id attribute already exists');
            } else {
                console.error(`❌ Error creating file_id attribute: ${error.message}`);
            }
        }

        // bucket_id attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                IMAGES_COLLECTION_ID,
                'bucket_id',
                255,
                true
            );
            console.log('✅ Created bucket_id attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('bucket_id attribute already exists');
            } else {
                console.error(`❌ Error creating bucket_id attribute: ${error.message}`);
            }
        }

        // uploaded_by attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                IMAGES_COLLECTION_ID,
                'uploaded_by',
                255,
                true
            );
            console.log('✅ Created uploaded_by attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('uploaded_by attribute already exists');
            } else {
                console.error(`❌ Error creating uploaded_by attribute: ${error.message}`);
            }
        }

        // uploaded_at attribute
        try {
            await databases.createDatetimeAttribute(
                DATABASE_ID,
                IMAGES_COLLECTION_ID,
                'uploaded_at',
                true
            );
            console.log('✅ Created uploaded_at attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('uploaded_at attribute already exists');
            } else {
                console.error(`❌ Error creating uploaded_at attribute: ${error.message}`);
            }
        }
    } catch (error) {
        if (error.code === 409) {
            console.log(`Collection '${IMAGES_COLLECTION_ID}' already exists, continuing...`);
        } else {
            console.error(`❌ Error creating collection: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    // Create logs collection
    try {
        console.log('\nCreating logs collection...');
        const logsCollection = await databases.createCollection(
            DATABASE_ID,
            LOGS_COLLECTION_ID,
            'Logs',
            [
                Permission.read(Role.users()),
                Permission.create(Role.users()),
            ]
        );
        console.log(`✅ Collection created: ${logsCollection.name} (${logsCollection.$id})`);

        // Create attributes for logs collection
        console.log('Creating attributes for logs collection...');
        
        // level attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                LOGS_COLLECTION_ID,
                'level',
                50,
                true
            );
            console.log('✅ Created level attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('level attribute already exists');
            } else {
                console.error(`❌ Error creating level attribute: ${error.message}`);
            }
        }

        // message attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                LOGS_COLLECTION_ID,
                'message',
                65535,
                true
            );
            console.log('✅ Created message attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('message attribute already exists');
            } else {
                console.error(`❌ Error creating message attribute: ${error.message}`);
            }
        }

        // timestamp attribute
        try {
            await databases.createDatetimeAttribute(
                DATABASE_ID,
                LOGS_COLLECTION_ID,
                'timestamp',
                true
            );
            console.log('✅ Created timestamp attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('timestamp attribute already exists');
            } else {
                console.error(`❌ Error creating timestamp attribute: ${error.message}`);
            }
        }

        // user_id attribute
        try {
            await databases.createStringAttribute(
                DATABASE_ID,
                LOGS_COLLECTION_ID,
                'user_id',
                255,
                false
            );
            console.log('✅ Created user_id attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('user_id attribute already exists');
            } else {
                console.error(`❌ Error creating user_id attribute: ${error.message}`);
            }
        }

        // metadata attribute
        try {
            await databases.createJsonAttribute(
                DATABASE_ID,
                LOGS_COLLECTION_ID,
                'metadata',
                false
            );
            console.log('✅ Created metadata attribute');
        } catch (error) {
            if (error.code === 409) {
                console.log('metadata attribute already exists');
            } else {
                console.error(`❌ Error creating metadata attribute: ${error.message}`);
            }
        }
    } catch (error) {
        if (error.code === 409) {
            console.log(`Collection '${LOGS_COLLECTION_ID}' already exists, continuing...`);
        } else {
            console.error(`❌ Error creating collection: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    // Create storage buckets
    console.log('\nCreating storage buckets...');

    // Banner bucket
    try {
        const bannerBucket = await storage.createBucket(
            BANNER_BUCKET_ID,
            'Banner Images',
            [
                Permission.read(Role.any()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
                Permission.delete(Role.users()),
            ]
        );
        console.log(`✅ Bucket created: ${bannerBucket.name} (${bannerBucket.$id})`);
    } catch (error) {
        if (error.code === 409) {
            console.log(`Bucket '${BANNER_BUCKET_ID}' already exists, continuing...`);
        } else {
            console.error(`❌ Error creating bucket: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    // Gallery bucket
    try {
        const galleryBucket = await storage.createBucket(
            GALLERY_BUCKET_ID,
            'Gallery Images',
            [
                Permission.read(Role.users()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
                Permission.delete(Role.users()),
            ]
        );
        console.log(`✅ Bucket created: ${galleryBucket.name} (${galleryBucket.$id})`);
    } catch (error) {
        if (error.code === 409) {
            console.log(`Bucket '${GALLERY_BUCKET_ID}' already exists, continuing...`);
        } else {
            console.error(`❌ Error creating bucket: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    // Scanner bucket
    try {
        const scannerBucket = await storage.createBucket(
            SCANNER_BUCKET_ID,
            'Scanner Images',
            [
                Permission.read(Role.users()),
                Permission.create(Role.users()),
                Permission.update(Role.users()),
                Permission.delete(Role.users()),
            ]
        );
        console.log(`✅ Bucket created: ${scannerBucket.name} (${scannerBucket.$id})`);
    } catch (error) {
        if (error.code === 409) {
            console.log(`Bucket '${SCANNER_BUCKET_ID}' already exists, continuing...`);
        } else {
            console.error(`❌ Error creating bucket: ${error.message}`);
            if (error.response) {
                console.error('Response:', error.response);
            }
        }
    }

    console.log('\n🎉 Appwrite setup complete!');
    console.log('Your Appwrite resources have been created:');
    console.log(`- Database: ${DATABASE_ID}`);
    console.log('- Collections: user_profiles, content, images, logs');
    console.log('- Storage Buckets: banner, gallery, scanner');
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
