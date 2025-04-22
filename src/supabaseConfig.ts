import { createClient } from '@supabase/supabase-js';
import { auth } from './firebaseConfig';

// Supabase configuration
// Replace these with your actual Supabase URL and anon key
// You can find these in your Supabase project settings
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client with minimal configuration
// We'll use anonymous access for storage with RLS policies
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Don't persist Supabase auth session since we use Firebase
    autoRefreshToken: false, // Don't auto-refresh tokens
  }
});

// Storage bucket name
export const STORAGE_BUCKET = 'images';

/**
 * Get the current Firebase user ID
 * This is needed for our RLS policies
 */
export const getFirebaseUserId = () => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.warn('No Firebase user is logged in');
      return null;
    }

    return currentUser.uid;
  } catch (error) {
    console.error('Error getting Firebase user ID:', error);
    return null;
  }
};

/**
 * Initialize Supabase storage
 * Creates the images bucket if it doesn't exist
 */
export const initializeStorage = async () => {
  try {
    // Check if the bucket exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();

    if (listError) {
      console.error('Error listing buckets:', listError);
      return false;
    }

    const bucketExists = buckets?.some(bucket => bucket.name === STORAGE_BUCKET);

    // Create the bucket if it doesn't exist
    if (!bucketExists) {
      const { error } = await supabase.storage.createBucket(STORAGE_BUCKET, {
        public: true, // Make files publicly accessible
        fileSizeLimit: 5242880, // 5MB limit
      });

      if (error) {
        console.error('Error creating storage bucket:', error);
        return false;
      }

      console.log(`Storage bucket '${STORAGE_BUCKET}' created successfully`);
    } else {
      console.log(`Storage bucket '${STORAGE_BUCKET}' already exists`);
    }

    return true;
  } catch (error) {
    console.error('Error initializing Supabase storage:', error);
    return false;
  }
};

export default supabase;
