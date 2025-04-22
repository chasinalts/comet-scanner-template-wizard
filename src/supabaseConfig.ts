import { createClient } from '@supabase/supabase-js';
import { auth } from './firebaseConfig';

// Supabase configuration
// Replace these with your actual Supabase URL and anon key
// You can find these in your Supabase project settings
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client with custom auth configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Don't persist Supabase auth session since we use Firebase
    autoRefreshToken: false, // Don't auto-refresh tokens
  },
  global: {
    headers: {
      // This will be updated dynamically when needed
    },
  },
});

// Storage bucket name
export const STORAGE_BUCKET = 'images';

/**
 * Get the current Firebase auth token for use with Supabase
 * This is needed because we're using Firebase Auth with Supabase Storage
 */
export const getFirebaseAuthToken = async () => {
  try {
    const currentUser = auth.currentUser;
    if (!currentUser) {
      console.warn('No Firebase user is logged in');
      return null;
    }

    const token = await currentUser.getIdToken();
    return token;
  } catch (error) {
    console.error('Error getting Firebase auth token:', error);
    return null;
  }
};

/**
 * Set the Firebase auth token in the Supabase client headers
 * This allows authenticated requests to Supabase
 */
export const setSupabaseAuthToken = async () => {
  try {
    const token = await getFirebaseAuthToken();
    if (token) {
      // Set the Authorization header with the Firebase token
      supabase.functions.setAuth(token);
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error setting Supabase auth token:', error);
    return false;
  }
};

/**
 * Initialize Supabase storage
 * Creates the images bucket if it doesn't exist
 */
export const initializeStorage = async () => {
  try {
    // Set the Firebase auth token in Supabase client
    await setSupabaseAuthToken();

    // Check if the bucket exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();

    if (listError) {
      console.error('Error listing buckets:', listError);
      // If we get a 401/403 error, it might be an auth issue
      if (listError.status === 401 || listError.status === 403) {
        console.warn('Authentication error. Make sure you are signed in.');
      }
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
