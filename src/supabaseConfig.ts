// Supabase configuration file that initializes the client and services
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with additional options
export const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    global: {
      headers: {
        'X-Client-Info': 'comet-scanner-template-wizard',
      },
    },
  }
);

// Database table names
export const EXTENDED_CONTENT_TABLE = 'extended_content';
export const IMAGES_TABLE = 'images';
export const LOGS_TABLE = 'logs';

// Storage bucket names - using 'images' bucket for all types since that's what exists in Supabase
export const BANNER_BUCKET = 'images';
export const GALLERY_BUCKET = 'images';
export const SCANNER_BUCKET = 'images';

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
