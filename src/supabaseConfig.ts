import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// Replace these with your actual Supabase URL and anon key
// You can find these in your Supabase project settings
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Storage bucket name
export const STORAGE_BUCKET = 'images';

/**
 * Initialize Supabase storage
 * Creates the images bucket if it doesn't exist
 */
export const initializeStorage = async () => {
  try {
    // Check if the bucket exists
    const { data: buckets } = await supabase.storage.listBuckets();
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
