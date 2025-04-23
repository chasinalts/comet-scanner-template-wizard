import { supabase, STORAGE_BUCKET, getUserId } from '../supabaseConfig';
import { v4 as uuidv4 } from 'uuid';

/**
 * Uploads a file to Supabase Storage
 * @param file The file to upload
 * @param path The path in storage where the file should be stored
 * @param cacheControl Optional cache control header (default: 'public, max-age=31536000')
 * @returns A promise that resolves to the download URL of the uploaded file
 */
export const uploadFileToSupabase = async (
  file: File,
  path: string,
  cacheControl = 'public, max-age=31536000'
): Promise<string> => {
  try {
    // Get user ID for metadata
    const userId = getUserId();
    if (!userId) {
      throw new Error('Authentication required. Please sign in to upload files.');
    }

    // Generate a unique filename to prevent collisions
    const fileExtension = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    const fullPath = `${path}/${fileName}`;

    // Get the storage client
    const storageClient = supabase.storage.from(STORAGE_BUCKET);

    // Upload the file to Supabase Storage
    const { data, error } = await storageClient.upload(fullPath, file, {
      cacheControl,
      upsert: false,
      contentType: file.type,
      // Add metadata with user ID for RLS policies
      duplex: 'half',
      metadata: {
        userId: userId
      }
    });

    if (error) {
      console.error('Error uploading file to Supabase Storage:', error);
      throw error;
    }

    // Get the signed URL for the uploaded file (valid for authenticated users)
    const { data: { signedUrl } } = await supabase.storage
      .from(STORAGE_BUCKET)
      .createSignedUrl(data.path, 60 * 60 * 24 * 365); // 1 year expiry

    if (!signedUrl) {
      throw new Error('Failed to generate signed URL for uploaded file');
    }

    console.log('File uploaded successfully to Supabase Storage:', signedUrl);

    return signedUrl;
  } catch (error) {
    console.error('Error uploading file to Supabase Storage:', error);
    throw error;
  }
};

/**
 * Deletes a file from Supabase Storage
 * @param url The public URL of the file to delete
 * @returns A promise that resolves when the file is deleted
 */
export const deleteFileFromSupabase = async (url: string): Promise<void> => {
  try {
    // Get user ID for metadata
    const userId = getUserId();
    if (!userId) {
      throw new Error('Authentication required. Please sign in to delete files.');
    }

    // Extract the path from the URL
    const urlObj = new URL(url);
    const pathParts = urlObj.pathname.split('/');
    const bucketIndex = pathParts.findIndex(part => part === STORAGE_BUCKET);

    if (bucketIndex === -1 || bucketIndex === pathParts.length - 1) {
      console.error('Invalid Supabase Storage URL format:', url);
      return;
    }

    // Get the path after the bucket name
    const path = pathParts.slice(bucketIndex + 1).join('/');

    // Get the storage client
    const storageClient = supabase.storage.from(STORAGE_BUCKET);

    // Delete the file
    const { error } = await storageClient.remove([path]);

    if (error) {
      console.error('Error deleting file from Supabase Storage:', error);
      throw error;
    }

    console.log('File deleted successfully from Supabase Storage:', path);
  } catch (error) {
    console.error('Error deleting file from Supabase Storage:', error);
    throw error;
  }
};
