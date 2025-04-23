import { createClient } from '@supabase/supabase-js';

// Supabase configuration
// Replace these with your actual Supabase URL and anon key
// You can find these in your Supabase project settings
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create Supabase client with auth configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Store session in local storage
    autoRefreshToken: true, // Auto refresh tokens
  }
});

// Storage bucket name
export const STORAGE_BUCKET = 'images';

/**
 * Get a proxied URL for a Supabase Storage image to avoid CORS issues
 * @param url The original Supabase Storage URL
 * @returns A URL that can be used to load the image without CORS issues
 */
export const getProxiedImageUrl = async (url: string): Promise<string> => {
  if (!url) return '';

  // If it's already a blob URL, return it as is
  if (url.startsWith('blob:')) return url;

  // If it's a Supabase Storage URL but not a signed URL, get a signed URL
  if (url.includes('supabase.co/storage') && !url.includes('token=')) {
    try {
      // Extract the path from the URL
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split('/');
      const bucketIndex = pathParts.findIndex(part => part === STORAGE_BUCKET);

      if (bucketIndex === -1 || bucketIndex === pathParts.length - 1) {
        console.error('Invalid Supabase Storage URL format:', url);
        return url;
      }

      // Get the path after the bucket name
      const path = pathParts.slice(bucketIndex + 1).join('/');

      // Get a signed URL
      const { data } = await supabase.storage
        .from(STORAGE_BUCKET)
        .createSignedUrl(path, 60 * 60); // 1 hour expiry

      if (data?.signedUrl) {
        return data.signedUrl;
      }
    } catch (error) {
      console.error('Error getting signed URL:', error);
    }
  }

  // If it's already a signed URL, add a cache-busting parameter
  if (url.includes('token=')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}t=${Date.now()}`;
  }

  return url;
};

/**
 * Get the current Supabase user ID
 * This is needed for our RLS policies
 */
export const getUserId = async () => {
  try {
    const { data: sessionData } = await supabase.auth.getSession();
    const { data: userData } = await supabase.auth.getUser();

    if (!userData || !userData.user) {
      console.warn('No user is logged in');
      return null;
    }

    return userData.user.id || null;
  } catch (error) {
    console.error('Error getting user ID:', error);
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
        public: false, // Make files private, accessible only through RLS policies
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
