import { createClient } from '@supabase/supabase-js';

// Supabase configuration
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
      public: true, // Make bucket public but use RLS for fine-grained control
      fileSizeLimit: 5242880, // 5MB limit
    });

    // Log the bucket update result
    if (updateError) {
      console.error('Error updating bucket settings:', updateError);
    } else {
      console.log(`Updated bucket '${STORAGE_BUCKET}' settings to be public`);
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

    1. Allow authenticated users to view images:
       - Policy name: "Allow authenticated read access"
       - Operations: SELECT
       - Expression: auth.role() = 'authenticated'

    2. Allow owners to upload images:
       - Policy name: "Allow owners to upload images"
       - Operations: INSERT
       - Expression: auth.uid() IN (SELECT id FROM user_profiles WHERE is_owner = true)

    3. Allow owners to update images:
       - Policy name: "Allow owners to update images"
       - Operations: UPDATE
       - Expression: auth.uid() IN (SELECT id FROM user_profiles WHERE is_owner = true)

    4. Allow owners to delete images:
       - Policy name: "Allow owners to delete images"
       - Operations: DELETE
       - Expression: auth.uid() IN (SELECT id FROM user_profiles WHERE is_owner = true)
    `);

    return true;
  } catch (error) {
    console.error('Error initializing Supabase storage:', error);
    return false;
  }
};

export default supabase;
