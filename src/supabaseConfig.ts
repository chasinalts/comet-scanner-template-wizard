// Supabase configuration file that initializes the client and services
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
export const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || ''
);

// Database table names
export const EXTENDED_CONTENT_TABLE = 'extended_content';
export const IMAGES_TABLE = 'images';
export const LOGS_TABLE = 'logs';

// Storage bucket names
export const BANNER_BUCKET = 'banner';
export const GALLERY_BUCKET = 'gallery';
export const SCANNER_BUCKET = 'scanner';

// Import from appwriteConfig directly
import { account } from './appwriteConfig';

// Helper function to get user ID from Appwrite session
export const getUserIdFromAppwrite = async () => {
  try {
    const session = await account.getSession('current');
    return session.$id;
  } catch (error) {
    console.error('Error getting Appwrite session:', error);
    return null;
  }
};
