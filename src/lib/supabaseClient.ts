import { createClient } from '@supabase/supabase-js';

// Supabase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  console.warn('Supabase URL is not set. Please check your .env.local file.');
}
if (!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
  console.warn('Supabase Anon Key is not set. Please check your .env.local file.');
}

// Create Supabase client with auth configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true, // Store session in local storage
    autoRefreshToken: true, // Auto refresh tokens
  }
});

// Storage bucket name
export const STORAGE_BUCKET = 'images'; // Or your actual bucket name

/**
 * Get a proxied URL for a Supabase Storage image to avoid CORS issues
 * @param url The original Supabase Storage URL
 * @returns A URL that can be used to load the image without CORS issues
 */
export const getProxiedImageUrl = async (url: string): Promise<string> => {
  if (!url) return '';

  // If it's already a blob URL, return it as is
  if (url.startsWith('blob:')) {
    return url;
  }

  if (url.includes('supabase.co/storage') && !url.includes('token=')) {
    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split('/');
      const bucketIndex = pathParts.findIndex(part => part === STORAGE_BUCKET);

      if (bucketIndex === -1 || bucketIndex === pathParts.length - 1) {
        console.error('Invalid Supabase Storage URL format:', url);
        return url;
      }
      const path = pathParts.slice(bucketIndex + 1).join('/');

      const { data: publicUrlData } = await supabase.storage
        .from(STORAGE_BUCKET)
        .getPublicUrl(path);

      if (publicUrlData?.publicUrl) {
        const separator = publicUrlData.publicUrl.includes('?') ? '&' : '?';
        return `${publicUrlData.publicUrl}${separator}t=${Date.now()}`;
      }

      const { data: signedUrlData } = await supabase.storage
        .from(STORAGE_BUCKET)
        .createSignedUrl(path, 60 * 60); // 1 hour expiry

      if (signedUrlData?.signedUrl) {
        return signedUrlData.signedUrl;
      }
      console.error('Failed to get public or signed URL for:', path);
      return url;
    } catch (error) {
      console.error('Error getting proxied URL:', error);
      return url;
    }
  }

  if (url.includes('token=')) {
    const separator = url.includes('?') ? '&' : '?';
    return `${url}${separator}t=${Date.now()}`;
  }
  return url;
};

/**
 * Get the current Supabase user ID
 */
export const getUserId = async () => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    return user?.id || null;
  } catch (error) {
    console.error('Error getting user ID:', error);
    return null;
  }
};

/**
 * Initialize Supabase storage (simplified - actual RLS/Policy setup is in Supabase dashboard)
 * Creates the images bucket if it doesn't exist.
 * Folder creation can be handled on-demand or by other scripts if complex.
 */
export const initializeStorage = async () => {
  try {
    console.log('Checking Supabase storage bucket:', STORAGE_BUCKET);
    const { data: buckets, error: listError } = await supabase.storage.listBuckets();

    if (listError) {
      console.error('Error listing buckets:', listError);
      return false;
    }

    const bucketExists = buckets?.some(bucket => bucket.name === STORAGE_BUCKET);

    if (!bucketExists) {
      console.log(`Creating storage bucket '${STORAGE_BUCKET}'...`);
      const { error } = await supabase.storage.createBucket(STORAGE_BUCKET, {
        public: true, // Bucket policies will manage fine-grained access
        fileSizeLimit: 5242880, // 5MB limit (example)
      });

      if (error) {
        console.error('Error creating storage bucket:', error);
        return false;
      }
      console.log(`Storage bucket '${STORAGE_BUCKET}' created successfully.`);
    } else {
      console.log(`Storage bucket '${STORAGE_BUCKET}' already exists.`);
    }
    // Note: Detailed folder creation and RLS policy reminders are omitted here for brevity
    // but should be managed as per original file's guidance in Supabase dashboard.
    return true;
  } catch (error) {
    console.error('Error initializing Supabase storage:', error);
    return false;
  }
};

export default supabase;
