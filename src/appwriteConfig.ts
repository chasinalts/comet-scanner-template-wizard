// Appwrite configuration file that initializes the client and services
import { Client, Account, Databases, Storage, Functions, Avatars } from 'appwrite';

// Initialize Appwrite client
export const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const avatars = new Avatars(client);

// Database and collection IDs
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || '';
export const USER_PROFILES_COLLECTION_ID = 'user_profiles';
export const CONTENT_COLLECTION_ID = 'content';
export const IMAGES_COLLECTION_ID = 'images';

// Storage bucket IDs
export const BANNER_BUCKET_ID = 'banner';
export const GALLERY_BUCKET_ID = 'gallery';
export const SCANNER_BUCKET_ID = 'scanner';

// Helper function to get user ID
export const getUserId = async () => {
    try {
        const session = await account.getSession('current');
        return session.$id;
    } catch (error) {
        console.error('Error getting user ID:', error);
        return null;
    }
};

// Initialize storage buckets
export const initializeStorage = async () => {
    try {
        console.log('Initializing Appwrite storage...');

        // Check if buckets exist
        const buckets = [BANNER_BUCKET_ID, GALLERY_BUCKET_ID, SCANNER_BUCKET_ID];

        for (const bucketId of buckets) {
            try {
                // Try to list files in the bucket to see if it exists
                await storage.listFiles(bucketId, [], '', 1);
                console.log(`Bucket '${bucketId}' exists`);
            } catch (error) {
                console.log(`Bucket '${bucketId}' doesn't exist, will need to be created in Appwrite console`);
                // Note: Bucket creation typically requires admin privileges
                // In a production environment, buckets should be created through the Appwrite console
            }
        }

        return true;
    } catch (error) {
        console.error('Error initializing Appwrite storage:', error);
        return false;
    }
};
