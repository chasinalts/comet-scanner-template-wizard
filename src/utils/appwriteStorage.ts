// Utility functions for handling file storage with Appwrite
import { storage, IMAGES_BUCKET_ID, databases, DATABASE_ID, IMAGES_COLLECTION_ID } from '../appwriteConfig.ts';
import { ID } from 'appwrite';

// Define bucket types
export type BucketType = 'banner' | 'gallery' | 'scanner';

/**
 * Get the bucket ID for a given bucket type
 * @param bucketType The type of bucket
 * @returns The bucket ID
 */
export const getBucketId = (bucketType: BucketType): string => {
  // With free tier limitations, we're using a single bucket for all image types
  return IMAGES_BUCKET_ID;
};

/**
 * Upload a file to Appwrite storage
 * @param file The file to upload
 * @param bucketType The type of bucket to upload to
 * @param fileId Optional file ID to use (will generate a unique ID if not provided)
 * @param userId The ID of the user uploading the file
 * @returns The uploaded file data
 */
export const uploadFile = async (
  file: File,
  bucketType: BucketType,
  userId: string,
  fileId?: string
): Promise<any> => {
  try {
    const bucketId = getBucketId(bucketType);
    const id = fileId || ID.unique();

    // Upload the file to storage
    const result = await storage.createFile(
      bucketId,
      id,
      file
    );

    // Store metadata in the images collection
    await databases.createDocument(
      DATABASE_ID,
      IMAGES_COLLECTION_ID,
      ID.unique(),
      {
        name: file.name,
        file_id: id,
        bucket_id: bucketId,
        uploaded_by: userId,
        uploaded_at: new Date().toISOString(),
        image_type: bucketType // Store the image type to distinguish between banner, gallery, and scanner images
      }
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

    // Get all files from the single bucket
    const result = await storage.listFiles(bucketId);

    // Get metadata from the images collection to filter by image type
    const metadata = await databases.listDocuments(
      DATABASE_ID,
      IMAGES_COLLECTION_ID,
      [
        // Filter by image type
        { key: 'image_type', value: bucketType }
      ]
    );

    // Filter files based on metadata
    const fileIds = metadata.documents.map(doc => doc.file_id);
    const filteredFiles = result.files.filter(file => fileIds.includes(file.$id));

    return filteredFiles;
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
