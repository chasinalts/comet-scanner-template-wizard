// Utility functions for handling image storage with Supabase
import { supabaseClient, BANNER_BUCKET, GALLERY_BUCKET, SCANNER_BUCKET, IMAGES_TABLE } from '../supabaseConfig';
import { databaseService } from './databaseService';
import { processImageForUpload } from './imageCompression';
import { ID } from 'appwrite'; // Using Appwrite's ID generator for compatibility

// Define bucket types
export type BucketType = 'banner' | 'gallery' | 'scanner';

// Map bucket types to Supabase bucket IDs
const bucketMap: Record<BucketType, string> = {
  'banner': BANNER_BUCKET,
  'gallery': GALLERY_BUCKET,
  'scanner': SCANNER_BUCKET
};

/**
 * Get the bucket ID for a given bucket type
 * @param bucketType The type of bucket
 * @returns The bucket ID
 */
export const getBucketId = (bucketType: BucketType): string => {
  return bucketMap[bucketType];
};

/**
 * Generate a file path for storage
 * @param fileName The name of the file
 * @param bucketType The type of bucket
 * @returns A unique file path
 */
export const generateFilePath = (fileName: string, bucketType: BucketType): string => {
  const timestamp = Date.now();
  const sanitizedName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_');
  return `${bucketType}/${timestamp}_${sanitizedName}`;
};

/**
 * Upload a file to Supabase storage
 * @param file The file to upload
 * @param bucketType The type of bucket to upload to
 * @param userId The ID of the user uploading the file
 * @param fileId Optional file ID to use (will generate a unique ID if not provided)
 * @returns The uploaded file data with URL
 */
export const uploadFile = async (
  file: File,
  bucketType: BucketType,
  userId: string,
  fileId?: string
): Promise<any> => {
  try {
    // Process and compress the image if needed
    const processedFile = await processImageForUpload(file, {
      maxWidth: 1920,
      maxHeight: 1080,
      quality: 0.85,
      maxSizeInMB: 1
    });

    const bucketId = getBucketId(bucketType);
    const filePath = generateFilePath(file.name, bucketType);
    const id = fileId || ID.unique();

    // Upload the file to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabaseClient
      .storage
      .from(bucketId)
      .upload(filePath, processedFile, {
        cacheControl: '3600',
        upsert: false
      });

    if (uploadError) throw uploadError;

    // Get the public URL
    const { data: { publicUrl } } = supabaseClient
      .storage
      .from(bucketId)
      .getPublicUrl(filePath);

    // Store metadata in the images table
    const imageData = {
      id,
      name: file.name,
      file_path: filePath,
      bucket_id: bucketId,
      uploaded_by: userId,
      uploaded_at: new Date().toISOString(),
      image_type: bucketType,
      size: processedFile.size,
      metadata: {
        originalSize: file.size,
        mimeType: file.type,
        compressionRatio: ((processedFile.size / file.size) * 100).toFixed(2) + '%'
      }
    };

    await databaseService.create(IMAGES_TABLE, imageData, id);

    return {
      $id: id,
      bucketId,
      filePath,
      publicUrl,
      name: file.name,
      size: processedFile.size
    };
  } catch (error) {
    console.error(`Error uploading file to ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Get a file's public URL
 * @param filePath The path of the file
 * @param bucketType The type of bucket the file is in
 * @returns The public URL of the file
 */
export const getFileUrl = (filePath: string, bucketType: BucketType): string => {
  try {
    if (!filePath) {
      console.warn('Empty file path provided to getFileUrl');
      return '';
    }

    const bucketId = getBucketId(bucketType);

    // Try to get the public URL from Supabase
    try {
      const { data: { publicUrl } } = supabaseClient
        .storage
        .from(bucketId)
        .getPublicUrl(filePath);

      if (publicUrl) {
        return publicUrl;
      }
    } catch (supabaseError) {
      console.warn(`Error getting Supabase public URL: ${supabaseError}`);
    }

    // Fallback: construct the URL manually with the correct Supabase URL
    const supabaseUrl = 'https://hpbfipnhqakrhlnhluze.supabase.co';
    return `${supabaseUrl}/storage/v1/object/public/${bucketId}/${filePath}`;
  } catch (error) {
    console.error(`Error getting file URL for ${filePath} in ${bucketType} bucket:`, error);
    return '';
  }
};

/**
 * Get file preview URL - for compatibility with Appwrite interface
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file preview URL
 */
export const getFilePreview = async (fileId: string, bucketType: BucketType): Promise<string> => {
  try {
    // Get file metadata to find the file path
    const fileMetadata = await getFileMetadata(fileId);
    if (!fileMetadata) {
      console.warn(`File with ID ${fileId} not found`);
      return '';
    }

    // Get the public URL using the file path
    return getFileUrl(fileMetadata.file_path, bucketType);
  } catch (error) {
    console.error(`Error getting file preview from ${bucketType} bucket:`, error);
    return ''; // Return empty string instead of throwing
  }
};

/**
 * Get file metadata by ID
 * @param fileId The ID of the file
 * @returns The file metadata
 */
export const getFileMetadata = async (fileId: string): Promise<any> => {
  try {
    if (!fileId) {
      console.warn('No file ID provided to getFileMetadata');
      return null;
    }

    const metadata = await databaseService.get(IMAGES_TABLE, fileId);
    if (!metadata) {
      console.warn(`No metadata found for file ID ${fileId}`);
      return null;
    }

    return metadata;
  } catch (error) {
    console.error('Error getting file metadata:', error);
    return null; // Return null instead of throwing
  }
};

/**
 * List all files in a bucket
 * @param bucketType The type of bucket to list files from
 * @returns A list of files with their metadata and URLs
 */
export const listFiles = async (bucketType: BucketType): Promise<any[]> => {
  try {
    const bucketId = getBucketId(bucketType);

    // Try to use the Netlify CORS proxy function if we're in production
    const isProduction = window.location.hostname !== 'localhost';

    let files;

    if (isProduction) {
      try {
        // Use the Netlify function to proxy the request with the correct Supabase URL
        const supabaseUrl = 'https://hpbfipnhqakrhlnhluze.supabase.co';
        const proxyUrl = `/.netlify/functions/cors-proxy?url=${encodeURIComponent(
          `${supabaseUrl}/rest/v1/${IMAGES_TABLE}?select=*&image_type=eq.${bucketType}`
        )}`;

        const response = await fetch(proxyUrl);
        if (!response.ok) {
          throw new Error(`Proxy request failed with status ${response.status}`);
        }

        files = await response.json();
      } catch (proxyError) {
        console.error('Error using CORS proxy:', proxyError);
        // Fall back to the database service
        files = await databaseService.list(IMAGES_TABLE, [
          { key: 'image_type', value: bucketType }
        ]);
      }
    } else {
      // In development, use the database service directly
      files = await databaseService.list(IMAGES_TABLE, [
        { key: 'image_type', value: bucketType }
      ]);
    }

    // Add public URLs to the files
    if (!files || !Array.isArray(files)) {
      console.warn(`No files found in ${bucketType} bucket or invalid response`);
      return [];
    }

    return files.map(file => ({
      ...file,
      $id: file.id, // Add $id for compatibility with Appwrite
      publicUrl: getFileUrl(file.file_path, bucketType as BucketType)
    }));
  } catch (error) {
    console.error(`Error listing files in ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Delete a file
 * @param fileId The ID of the file
 * @returns True if deletion was successful
 */
export const deleteFile = async (fileId: string): Promise<boolean> => {
  try {
    if (!fileId) {
      console.warn('No file ID provided to deleteFile');
      return false;
    }

    // Get file metadata
    const fileMetadata = await databaseService.get(IMAGES_TABLE, fileId);

    if (!fileMetadata) {
      console.warn(`File with ID ${fileId} not found`);
      return false;
    }

    const bucketId = fileMetadata.bucket_id || getBucketId(fileMetadata.image_type);
    const filePath = fileMetadata.file_path;

    if (!filePath) {
      console.warn(`No file path found for file ID ${fileId}`);
      // Still delete the metadata
      await databaseService.delete(IMAGES_TABLE, fileId);
      return true;
    }

    // Delete the file from storage
    const { error: deleteError } = await supabaseClient
      .storage
      .from(bucketId)
      .remove([filePath]);

    if (deleteError) {
      console.error(`Error deleting file from storage: ${deleteError.message}`);
      // Still try to delete the metadata
    }

    // Delete the metadata
    await databaseService.delete(IMAGES_TABLE, fileId);

    return true;
  } catch (error) {
    console.error('Error deleting file:', error);
    return false; // Return false instead of throwing
  }
};

/**
 * Update file metadata
 * @param fileId The ID of the file
 * @param metadata The metadata to update
 * @returns The updated file metadata
 */
export const updateFileMetadata = async (fileId: string, metadata: any): Promise<any> => {
  try {
    if (!fileId) {
      console.warn('No file ID provided to updateFileMetadata');
      return null;
    }

    if (!metadata) {
      console.warn('No metadata provided to updateFileMetadata');
      return null;
    }

    // Check if the file exists
    const existingFile = await databaseService.get(IMAGES_TABLE, fileId);
    if (!existingFile) {
      console.warn(`File with ID ${fileId} not found for metadata update`);
      return null;
    }

    return await databaseService.update(IMAGES_TABLE, fileId, metadata);
  } catch (error) {
    console.error('Error updating file metadata:', error);
    return null; // Return null instead of throwing
  }
};
