// Appwrite configuration file that initializes the client and services
import { Client, Account, Databases, Storage, Functions, Avatars } from 'appwrite';

// Initialize Appwrite client
export const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

// Configure the client to use localStorage for cookies
// This helps with third-party cookie restrictions in modern browsers
// Removed call to setCookieFallback as it caused errors with Appwrite SDK v17.0.2

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const avatars = new Avatars(client);

// Helper function to reconnect the client
export const reconnectClient = () => {
    try {
        // Store the current configuration
        const endpoint = client.config.endpoint;
        const projectId = client.config.project;

        // Reinitialize the client with the same endpoint and project ID
        client.setEndpoint(endpoint);
        client.setProject(projectId);

        console.log('Reconnected Appwrite client');
        return true;
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
export const IMAGES_BUCKET_ID = 'banner'; // Using a single bucket for all images
export const BANNER_BUCKET_ID = 'banner'; // Explicitly set to 'banner' for compatibility
export const GALLERY_BUCKET_ID = 'banner'; // Explicitly set to 'banner' for compatibility
export const SCANNER_BUCKET_ID = 'banner'; // Explicitly set to 'banner' for compatibility

// Log bucket configuration on initialization
console.log('Appwrite bucket configuration:', {
  IMAGES_BUCKET_ID,
  BANNER_BUCKET_ID,
  GALLERY_BUCKET_ID,
  SCANNER_BUCKET_ID
});

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

        // Check if the single bucket exists
        try {
            // Try to list files in the bucket to see if it exists
            // Pass null for search parameter to avoid "Invalid search param" error
            await storage.listFiles(IMAGES_BUCKET_ID, [], null);
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
