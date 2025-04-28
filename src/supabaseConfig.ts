// Supabase configuration file that initializes the client, handles storage setup, and provides utility functions
import { createClient } from '@supabase/supabase-js';
// Support for both Netlify environment variables and local .env variables
// Netlify integration will set SUPABASE_URL and SUPABASE_ANON_KEY
// Local development will use VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
const supabaseUrl =
  import.meta.env.SUPABASE_URL ||
  import.meta.env.VITE_SUPABASE_URL ||
  '';

const supabaseAnonKey =
  import.meta.env.SUPABASE_ANON_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  '';

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

  // If it's a data URL, return it as is
  if (url.startsWith('data:')) {
    console.log('URL is a data URL, returning as is');
    return url;
  }

  // Add a cache-busting parameter to all URLs to prevent caching issues
  const addCacheBuster = (inputUrl: string): string => {
    const separator = inputUrl.includes('?') ? '&' : '?';
    return `${inputUrl}${separator}t=${Date.now()}`;
  };

  try {
    // If it's a Supabase Storage URL but not a signed URL, get a public URL
    if (url.includes('supabase.co/storage')) {
      console.log('URL is a Supabase Storage URL');

      // If it already has a token, it's a signed URL - just add a cache buster
      if (url.includes('token=')) {
        console.log('URL is already a signed URL, adding cache buster');
        return addCacheBuster(url);
      }

      // Extract the bucket and path from the URL
      let bucket = STORAGE_BUCKET;
      let path = '';

      try {
        const urlObj = new URL(url);
        const pathParts = urlObj.pathname.split('/');

        // Find the bucket name in the path
        const bucketIndex = pathParts.findIndex(part => part === 'object' || part === STORAGE_BUCKET);

        if (bucketIndex !== -1 && bucketIndex < pathParts.length - 1) {
          // The bucket name is the next part after 'object' or the bucket name itself
          bucket = pathParts[bucketIndex === -1 ? bucketIndex : bucketIndex + 1];

          // Get the path after the bucket name
          path = pathParts.slice(bucketIndex + 2).join('/');
          console.log('Extracted bucket:', bucket);
          console.log('Extracted path:', path);
        } else {
          // Try to extract path using a different method
          const objectMatch = url.match(/\/storage\/v1\/object\/([^/]+)\/(.+)/);
          if (objectMatch && objectMatch.length >= 3) {
            bucket = objectMatch[1];
            path = objectMatch[2];
            console.log('Extracted bucket using regex:', bucket);
            console.log('Extracted path using regex:', path);
          } else {
            console.error('Could not extract bucket and path from URL:', url);
            return addCacheBuster(url); // Return the original URL with a cache buster
          }
        }
      } catch (error) {
        console.error('Error parsing URL:', error);
        return addCacheBuster(url); // Return the original URL with a cache buster
      }

      // Try to get a public URL first
      try {
        console.log('Getting public URL for bucket:', bucket, 'path:', path);
        // getPublicUrl is synchronous, no need for await
        const { data: publicUrlData } = supabase.storage
          .from(bucket)
          .getPublicUrl(path);

        if (publicUrlData?.publicUrl) {
          console.log('Got public URL:', publicUrlData.publicUrl);
          return addCacheBuster(publicUrlData.publicUrl);
        }
      } catch (error) {
        console.error('Error getting public URL:', error);
      }

      // If public URL fails, try to get a signed URL
      try {
        console.log('Getting signed URL for bucket:', bucket, 'path:', path);
        const { data: signedUrlData } = await supabase.storage
          .from(bucket)
          .createSignedUrl(path, 60 * 60); // 1 hour expiry

        if (signedUrlData?.signedUrl) {
          console.log('Got signed URL:', signedUrlData.signedUrl);
          return signedUrlData.signedUrl; // Signed URLs already have a token parameter
        }
      } catch (error) {
        console.error('Error getting signed URL:', error);
      }

      console.warn('Failed to get public or signed URL, returning original URL with cache buster');
      return addCacheBuster(url);
    }

    // For all other URLs, just add a cache buster
    console.log('URL is not a Supabase Storage URL, adding cache buster');
    return addCacheBuster(url);
  } catch (error) {
    console.error('Error in getProxiedImageUrl:', error);
    return addCacheBuster(url); // Return the original URL with a cache buster as a fallback
  }
};

/**
 * Get the current Supabase user ID
 * This is needed for our RLS policies
 */
export const getUserId = async () => {
  try {
    // Get session (not used directly but ensures we have the latest auth state)
    await supabase.auth.getSession();
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
 * Checks if the images bucket exists and creates required folders
 */
export const initializeStorage = async () => {
  try {
    console.log('Initializing Supabase storage...');

    // Check if we can access the bucket
    // We won't try to create it from the client side as this requires admin privileges
    // The bucket should be created manually in the Supabase dashboard
    const { error: listError } = await supabase.storage
      .from(STORAGE_BUCKET)
      .list();

    if (listError) {
      console.error('Error accessing storage bucket:', listError);

      // If the error is about the bucket not existing, show a helpful message
      if (listError.message.includes('The resource was not found') ||
          listError.message.includes('not found')) {
        console.error(`
          The storage bucket '${STORAGE_BUCKET}' does not exist.
          Please create it manually in the Supabase dashboard:
          1. Go to Storage in your Supabase dashboard
          2. Click "New Bucket"
          3. Name it "${STORAGE_BUCKET}"
          4. Check "Public bucket" (we'll use RLS for access control)
          5. Click "Create bucket"
        `);
      }

      return false;
    }

    console.log(`Storage bucket '${STORAGE_BUCKET}' exists and is accessible`);

    // We won't try to update bucket settings from the client side
    // as this requires admin privileges

    // Create required folders if they don't exist
    const requiredFolders = ['banner', 'gallery', 'scanner'];

    for (const folder of requiredFolders) {
      console.log(`Checking if folder '${folder}' exists...`);

      try {
        // Try to list files in the folder to check if it exists
        const { data, error } = await supabase.storage.from(STORAGE_BUCKET).list(folder);

        if (error) {
          if (error.message.includes('not found')) {
            // Folder doesn't exist, try to create it
            console.log(`Folder '${folder}' doesn't exist, attempting to create it...`);
          } else if (error.message.includes('violates row-level security policy') ||
                    error.message.includes('permission denied')) {
            // RLS policy violation - this is expected if the user doesn't have permission
            console.log(`RLS policy prevents checking folder '${folder}' - this is normal if you're not the owner`);
            continue; // Skip to the next folder
          } else {
            // Some other error
            console.error(`Error checking folder '${folder}':`, error);
            continue; // Skip to the next folder
          }
        } else {
          console.log(`Folder '${folder}' already exists with ${data?.length || 0} files`);
          continue; // Skip to the next folder since it exists
        }

        // Try to create the folder by uploading an empty placeholder file
        const placeholderFile = new Blob([''], { type: 'text/plain' });

        const { error: uploadError } = await supabase.storage
          .from(STORAGE_BUCKET)
          .upload(`${folder}/.placeholder`, placeholderFile);

        if (uploadError) {
          if (uploadError.message.includes('violates row-level security policy') ||
              uploadError.message.includes('permission denied')) {
            // RLS policy violation - this is expected if the user doesn't have permission
            console.log(`RLS policy prevents creating folder '${folder}' - this is normal if you're not the owner`);
          } else {
            console.error(`Error creating folder '${folder}':`, uploadError);
          }
        } else {
          console.log(`Folder '${folder}' created successfully`);
        }
      } catch (folderError) {
        console.error(`Unexpected error handling folder '${folder}':`, folderError);
      }
    }

    // Provide guidance on setting up storage policies
    console.log('Checking storage policies...');

    // Try to upload a test file to check if policies are set up correctly
    try {
      const testFile = new Blob(['test'], { type: 'text/plain' });
      const testPath = `test-${Date.now()}.txt`;

      const { error: uploadError } = await supabase.storage
        .from(STORAGE_BUCKET)
        .upload(testPath, testFile);

      if (uploadError) {
        if (uploadError.message.includes('violates row-level security policy')) {
          console.log(`
          ⚠️ RLS POLICY ERROR DETECTED ⚠️

          Your Supabase storage policies need to be set up correctly.
          Please go to the Supabase dashboard and set up the following policies:

          1. For the "images" bucket, create these policies:

             a) Allow authenticated users to view images:
                - Policy name: "Allow authenticated read access"
                - Operations: SELECT
                - Expression: auth.role() = 'authenticated'

             b) Allow owners to upload images:
                - Policy name: "Allow owners to upload images"
                - Operations: INSERT
                - Expression: auth.uid() IN (SELECT id FROM auth.users WHERE raw_user_meta_data->>'is_owner' = 'true')

             c) Allow owners to update images:
                - Policy name: "Allow owners to update images"
                - Operations: UPDATE
                - Expression: auth.uid() IN (SELECT id FROM auth.users WHERE raw_user_meta_data->>'is_owner' = 'true')

             d) Allow owners to delete images:
                - Policy name: "Allow owners to delete images"
                - Operations: DELETE
                - Expression: auth.uid() IN (SELECT id FROM auth.users WHERE raw_user_meta_data->>'is_owner' = 'true')

          2. Make sure your user account has is_owner set to true:
             - Go to Authentication > Users in the Supabase dashboard
             - Find your user and check that raw_user_meta_data contains "is_owner": "true"
             - If not, update it manually
          `);
        } else {
          console.error('Error uploading test file:', uploadError);
        }
      } else {
        console.log('Storage policies appear to be set up correctly!');

        // Clean up the test file
        await supabase.storage
          .from(STORAGE_BUCKET)
          .remove([testPath]);
      }
    } catch (policyError) {
      console.error('Error checking storage policies:', policyError);
    }

    return true;
  } catch (error) {
    console.error('Error initializing Supabase storage:', error);
    return false;
  }
};

export default supabase;
