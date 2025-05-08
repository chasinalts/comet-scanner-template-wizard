// Stub file that redirects to Supabase storage utilities
// This file exists only for backward compatibility with existing imports
// All functionality has been migrated to supabaseStorage.ts

import { v4 as uuidv4 } from 'uuid';
import { supabaseClient } from '../supabaseConfig';
import { uploadImage, deleteImage, listFiles as listSupabaseFiles, getPublicUrl } from './supabaseStorage';

// Define bucket types for backward compatibility
export type BucketType = 'banner' | 'gallery' | 'scanner';

// Mock ImageMetadata type for backward compatibility
export interface ImageMetadata {
  name: string;
  file_id: string;
  bucket_id: string;
  uploaded_by: string;
  uploaded_at: string;
  image_type: BucketType;
  [key: string]: any;
}

/**
 * Get the bucket ID for a given bucket type
 * @param bucketType The type of bucket
 * @returns The bucket ID
 */
export const getBucketId = (bucketType: BucketType): string => {
  return bucketType; // In Supabase, we use the bucket type as the bucket ID
};

/**
 * Upload a file to storage (redirects to Supabase)
 * @param file The file to upload
 * @param bucketType The type of bucket to upload to
 * @param userId The ID of the user uploading the file
 * @param fileId Optional file ID to use (will generate a unique ID if not provided)
 * @returns The uploaded file data and metadata
 */
export const uploadFile = async (
  file: File,
  bucketType: BucketType,
  userId: string,
  fileId?: string
): Promise<{ file: any; metadata: ImageMetadata }> => {
  try {
    // Use the Supabase upload function
    const { fileId: newFileId, publicUrl } = await uploadImage(file, bucketType, userId);

    // Create a mock response that matches the expected format
    return {
      file: {
        $id: newFileId,
        name: file.name,
        mimeType: file.type,
        sizeOriginal: file.size,
      },
      metadata: {
        name: file.name,
        file_id: newFileId,
        bucket_id: bucketType,
        uploaded_by: userId,
        uploaded_at: new Date().toISOString(),
        image_type: bucketType
      }
    };
  } catch (error) {
    console.error(`Error uploading file to ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Get a file preview URL (redirects to Supabase)
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file preview URL
 */
export const getFilePreview = (
  fileId: string,
  bucketType: BucketType
): string => {
  // In Supabase, we use the public URL directly
  return getPublicUrl(bucketType, fileId);
};

/**
 * Get a file download URL (redirects to Supabase)
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file download URL
 */
export const getFileDownload = (fileId: string, bucketType: BucketType): string => {
  // In Supabase, we use the public URL directly
  return getPublicUrl(bucketType, fileId);
};

/**
 * Delete a file from storage (redirects to Supabase)
 * @param fileId The ID of the file to delete
 * @param bucketType The type of bucket the file is in
 * @returns A promise that resolves when the file is deleted
 */
export const deleteFile = async (fileId: string, bucketType: BucketType): Promise<void> => {
  try {
    await deleteImage(fileId, bucketType);
  } catch (error) {
    console.error(`Error deleting file from ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * List all files in a bucket (redirects to Supabase)
 * @param bucketType The type of bucket to list files from
 * @param limit Optional limit of files to return (default: 100)
 * @returns A list of files in the bucket with their metadata
 */
export const listFiles = async (
  bucketType: BucketType,
  limit: number = 100
): Promise<{ files: any[]; metadata: ImageMetadata[] }> => {
  try {
    // Use the Supabase list files function
    const files = await listSupabaseFiles(bucketType);

    // Transform the response to match the expected format
    const transformedFiles = files.map(file => ({
      $id: file.file_name,
      name: file.file_name,
      mimeType: file.mime_type,
      sizeOriginal: file.size,
    }));

    const metadata = files.map(file => ({
      name: file.file_name,
      file_id: file.file_name,
      bucket_id: bucketType,
      uploaded_by: file.user_id || 'system',
      uploaded_at: file.created_at,
      image_type: bucketType
    }));

    return {
      files: transformedFiles,
      metadata
    };
  } catch (error) {
    console.error(`Error listing files in ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Get a file by ID (redirects to Supabase)
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file data
 */
export const getFile = async (fileId: string, bucketType: BucketType): Promise<any> => {
  try {
    // In Supabase, we don't have a direct equivalent, so we'll return a mock
    return {
      $id: fileId,
      name: fileId,
      mimeType: 'image/jpeg',
      sizeOriginal: 0,
    };
  } catch (error) {
    console.error(`Error getting file from ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Get a file with its metadata (redirects to Supabase)
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file data and metadata
 */
export const getFileWithMetadata = async (
  fileId: string,
  bucketType: BucketType
): Promise<{ file: any; metadata: ImageMetadata | null }> => {
  try {
    // In Supabase, we don't have a direct equivalent, so we'll return a mock
    return {
      file: {
        $id: fileId,
        name: fileId,
        mimeType: 'image/jpeg',
        sizeOriginal: 0,
      },
      metadata: {
        name: fileId,
        file_id: fileId,
        bucket_id: bucketType,
        uploaded_by: 'system',
        uploaded_at: new Date().toISOString(),
        image_type: bucketType
      }
    };
  } catch (error) {
    console.error(`Error getting file from ${bucketType} bucket:`, error);
    throw error;
  }
};
