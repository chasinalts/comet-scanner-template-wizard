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

  console.log('Getting proxied URL for:', url);

  // If it's already a blob URL, return it as is
  if (url.startsWith('blob:')) {
    console.log('URL is already a blob URL, returning as is');
    return url;
  }

  // If it's a Supabase Storage URL but not a signed URL, get a public URL
  if (url.includes('supabase.co/storage') && !url.includes('token=')) {
    try {
      console.log('URL is a Supabase Storage URL without token, getting public URL');

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
      console.log('Extracted path:', path);

      // First try to get a public URL (this works if the bucket is public)
      const { data: publicUrlData } = await supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(path);

      if (publicUrlData?.publicUrl) {
        console.log('Got public URL:', publicUrlData.publicUrl);

        // Add a cache-busting parameter
        const separator = publicUrlData.publicUrl.includes('?') ? '&' : '?';
        const publicUrlWithCacheBuster = `${publicUrlData.publicUrl}${separator}t=${Date.now()}`;
        console.log('Public URL with cache buster:', publicUrlWithCacheBuster);

        return publicUrlWithCacheBuster;
      }

      // If public URL fails, try to get a signed URL
      console.log('Public URL failed, trying signed URL');
      const { data: signedUrlData } = await supabase.storage
        .from(STORAGE_BUCKET)
        .createSignedUrl(path, 60 * 60); // 1 hour expiry

      if (signedUrlData?.signedUrl) {
        console.log('Got signed URL:', signedUrlData.signedUrl);
        return signedUrlData.signedUrl;
      }

      console.error('Failed to get public or signed URL');
      return url;
    } catch (error) {
      console.error('Error getting URL:', error);
      return url;
    }
  }

  // If it's already a signed URL, add a cache-busting parameter
  if (url.includes('token=')) {
    console.log('URL is already a signed URL, adding cache-busting parameter');
    const separator = url.includes('?') ? '&' : '?';
    const urlWithCacheBuster = `${url}${separator}t=${Date.now()}`;
    console.log('URL with cache buster:', urlWithCacheBuster);
    return urlWithCacheBuster;
  }

  console.log('URL is not a Supabase Storage URL, returning as is');
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
 * Creates the images bucket and required folders if they don't exist
 */
export const initializeStorage = async () => {
  try {
    console.log('Initializing Supabase storage...');

    // Check if the bucket exists
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();

    if (listError) {
      console.error('Error listing buckets:', listError);
      return false;
    }

    const bucketExists = buckets?.some(bucket => bucket.name === STORAGE_BUCKET);

    // Create the bucket if it doesn't exist
    if (!bucketExists) {
      console.log(`Creating storage bucket '${STORAGE_BUCKET}'...`);
      const { error } = await supabase.storage.createBucket(STORAGE_BUCKET, {
        public: true, // Make bucket public but use RLS for fine-grained control
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

    // Update bucket to be public (in case it was created with different settings)
    const { error: updateError } = await supabase.storage.updateBucket(STORAGE_BUCKET, {
      public: true,
      fileSizeLimit: 5242880, // 5MB limit
    });

    if (updateError) {
      console.error('Error updating bucket settings:', updateError);
    } else {
      console.log(`Updated bucket '${STORAGE_BUCKET}' settings`);
    }

    // Create required folders if they don't exist
    const requiredFolders = ['banner', 'gallery', 'scanner'];

    for (const folder of requiredFolders) {
      console.log(`Checking if folder '${folder}' exists...`);

      // Try to list files in the folder to check if it exists
      const { data, error } = await supabase.storage.from(STORAGE_BUCKET).list(folder);

      if (error && error.message.includes('not found')) {
        // Folder doesn't exist, create it by uploading an empty placeholder file
        console.log(`Creating folder '${folder}'...`);

        // Create a small placeholder file
        const placeholderFile = new Blob([''], { type: 'text/plain' });

        // Upload the placeholder file to create the folder
        const { error: uploadError } = await supabase.storage
          .from(STORAGE_BUCKET)
          .upload(`${folder}/.placeholder`, placeholderFile);

        if (uploadError) {
          console.error(`Error creating folder '${folder}':`, uploadError);
        } else {
          console.log(`Folder '${folder}' created successfully`);
        }
      } else if (error) {
        console.error(`Error checking folder '${folder}':`, error);
      } else {
        console.log(`Folder '${folder}' already exists with ${data?.length || 0} files`);
      }
    }

    // Set up public access policy for the bucket
    console.log('Setting up storage policies...');

    // This is just for logging - we can't actually set policies from the client
    // Policies need to be set up in the Supabase dashboard
    console.log(`
    Storage policies should be set up in the Supabase dashboard:

    1. Allow public read access to all files:
       - Policy name: "Allow public read access"
       - Operations: SELECT
       - Expression: true

    2. Allow authenticated users to upload files:
       - Policy name: "Allow authenticated uploads"
       - Operations: INSERT
       - Expression: auth.role() = 'authenticated'

    3. Allow owners to manage files:
       - Policy name: "Allow owners to manage files"
       - Operations: INSERT, UPDATE, DELETE
       - Expression: auth.uid() IN (SELECT id FROM auth.users WHERE raw_user_meta_data->>'is_owner' = 'true')
    `);

    return true;
  } catch (error) {
    console.error('Error initializing Supabase storage:', error);
    return false;
  }
};

export default supabase;
