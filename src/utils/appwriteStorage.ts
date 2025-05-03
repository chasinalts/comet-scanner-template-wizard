// Utility functions for handling file storage with Appwrite
import { storage, BANNER_BUCKET_ID, GALLERY_BUCKET_ID, SCANNER_BUCKET_ID } from '../appwriteConfig.ts';
import { ID } from 'appwrite';

// Define bucket types
export type BucketType = 'banner' | 'gallery' | 'scanner';

/**
 * Get the bucket ID for a given bucket type
 * @param bucketType The type of bucket
 * @returns The bucket ID
 */
export const getBucketId = (bucketType: BucketType): string => {
  switch (bucketType) {
    case 'banner':
      return BANNER_BUCKET_ID;
    case 'gallery':
      return GALLERY_BUCKET_ID;
    case 'scanner':
      return SCANNER_BUCKET_ID;
    default:
      throw new Error(`Invalid bucket type: ${bucketType}`);
  }
};

/**
 * Upload a file to Appwrite storage
 * @param file The file to upload
 * @param bucketType The type of bucket to upload to
 * @param fileId Optional file ID to use (will generate a unique ID if not provided)
 * @returns The uploaded file data
 */
export const uploadFile = async (
  file: File,
  bucketType: BucketType,
  fileId?: string
): Promise<any> => {
  try {
    const bucketId = getBucketId(bucketType);
    const id = fileId || ID.unique();

    const result = await storage.createFile(
      bucketId,
      id,
      file
    );

    return result;
  } catch (error) {
    console.error(`Error uploading file to ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Get a file preview URL
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file preview URL
 */
export const getFilePreview = (fileId: string, bucketType: BucketType): string => {
  const bucketId = getBucketId(bucketType);
  return storage.getFilePreview(bucketId, fileId).toString();
};

/**
 * Get a file download URL
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file download URL
 */
export const getFileDownload = (fileId: string, bucketType: BucketType): string => {
  const bucketId = getBucketId(bucketType);
  return storage.getFileDownload(bucketId, fileId).toString();
};

/**
 * Delete a file from storage
 * @param fileId The ID of the file to delete
 * @param bucketType The type of bucket the file is in
 * @returns A promise that resolves when the file is deleted
 */
export const deleteFile = async (fileId: string, bucketType: BucketType): Promise<void> => {
  try {
    const bucketId = getBucketId(bucketType);
    await storage.deleteFile(bucketId, fileId);
  } catch (error) {
    console.error(`Error deleting file from ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * List all files in a bucket
 * @param bucketType The type of bucket to list files from
 * @returns A list of files in the bucket
 */
export const listFiles = async (bucketType: BucketType): Promise<any[]> => {
  try {
    const bucketId = getBucketId(bucketType);
    const result = await storage.listFiles(bucketId);
    return result.files;
  } catch (error) {
    console.error(`Error listing files in ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Get a file by ID
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file data
 */
export const getFile = async (fileId: string, bucketType: BucketType): Promise<any> => {
  try {
    const bucketId = getBucketId(bucketType);
    return await storage.getFile(bucketId, fileId);
  } catch (error) {
    console.error(`Error getting file from ${bucketType} bucket:`, error);
    throw error;
  }
};
