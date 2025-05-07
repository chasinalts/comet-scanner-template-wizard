// Appwrite configuration file that initializes the client and services using the latest SDK
import { Client, Account, Databases, Storage, Functions, Avatars, ID, Query, Models } from 'appwrite';

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

// Export utility classes for easier access
export { ID, Query };
export type { Models };

/**
 * Helper function to reconnect the client and verify session
 * @returns Promise<boolean> True if reconnection was successful
 */
export const reconnectClient = async (): Promise<boolean> => {
    try {
        // Store the current configuration
        const endpoint = client.config.endpoint;
        const projectId = client.config.project;

        // Reinitialize the client with the same endpoint and project ID
        client.setEndpoint(endpoint);
        client.setProject(projectId);

        // Verify session is still valid
        try {
            // Try to get the current account - this will throw if no valid session exists
            await account.get();
            console.log('Reconnected Appwrite client with valid session');
            return true;
        } catch (sessionError) {
            console.log('Session invalid or expired');
            return false;
        }
    } catch (error) {
        console.error('Error reconnecting Appwrite client:', error);
        return false;
    }
};

// Database and collection IDs
export const DATABASE_ID = import.meta.env.VITE_APPWRITE_DATABASE_ID || '';
export const USER_PROFILES_COLLECTION_ID = 'user_profiles';
export const CONTENT_COLLECTION_ID = 'content';
export const IMAGES_COLLECTION_ID = 'images';

// Storage bucket IDs - Using a single bucket for all images due to free tier limitations
export const IMAGES_BUCKET_ID = 'images'; // Using a single bucket for all images
export const BANNER_BUCKET_ID = 'images'; // Using 'images' bucket for banner images
export const GALLERY_BUCKET_ID = 'images'; // Using 'images' bucket for gallery images
export const SCANNER_BUCKET_ID = 'images'; // Using 'images' bucket for scanner images

// Log bucket configuration on initialization
console.log('Appwrite bucket configuration:', {
  IMAGES_BUCKET_ID,
  BANNER_BUCKET_ID,
  GALLERY_BUCKET_ID,
  SCANNER_BUCKET_ID
});

/**
 * Helper function to get the current user ID
 * @returns Promise<string|null> User ID or null if not authenticated
 */
export const getUserId = async (): Promise<string | null> => {
    try {
        // Get the current account
        const user = await account.get();
        return user.$id;
    } catch (error) {
        console.error('Error getting user ID:', error);
        return null;
    }
};

/**
 * Initialize and verify storage buckets
 * @returns Promise<boolean> True if initialization was successful
 */
export const initializeStorage = async (): Promise<boolean> => {
    try {
        console.log('Initializing Appwrite storage...');

        // Check if the single bucket exists
        try {
            // Try to list files in the bucket to see if it exists
            await storage.listFiles(IMAGES_BUCKET_ID);
            console.log(`Bucket '${IMAGES_BUCKET_ID}' exists`);
        } catch (error) {
            console.log(`Bucket '${IMAGES_BUCKET_ID}' doesn't exist, will need to be created in Appwrite console`);
            // Note: Bucket creation typically requires admin privileges
            // In a production environment, buckets should be created through the Appwrite console
        }

        return true;
    } catch (error) {
        console.error('Error initializing Appwrite storage:', error);
        return false;
    }
};
