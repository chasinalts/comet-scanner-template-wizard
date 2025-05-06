// Utility functions for handling file storage with Appwrite using the latest SDK
import { storage, IMAGES_BUCKET_ID, BANNER_BUCKET_ID, databases, DATABASE_ID, IMAGES_COLLECTION_ID, ID, Query, type Models } from '../appwriteConfig.ts';
import { ImageMetadata } from './appwriteDatabase';

// Define bucket types
export type BucketType = 'banner' | 'gallery' | 'scanner';

// Log the bucket IDs for debugging
console.log('Storage bucket configuration:', {
  IMAGES_BUCKET_ID,
  BANNER_BUCKET_ID
});

/**
 * Get the bucket ID for a given bucket type
 * @param bucketType The type of bucket
 * @returns The bucket ID
 */
export const getBucketId = (bucketType: BucketType): string => {
  // With free tier limitations, we're using a single bucket for all image types
  console.log(`Getting bucket ID for type: ${bucketType}, returning: banner`);
  return 'banner'; // Hardcoded to ensure we always use the banner bucket
};

/**
 * Upload a file to Appwrite storage
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
): Promise<{ file: Models.File; metadata: ImageMetadata }> => {
  try {
    const bucketId = getBucketId(bucketType);
    const id = fileId || ID.unique();

    // Upload the file to storage
    const fileResult = await storage.createFile(
      bucketId,
      id,
      file
    );

    // Store metadata in the images collection
    const metadataResult = await databases.createDocument<ImageMetadata>(
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

    return {
      file: fileResult,
      metadata: metadataResult
    };
  } catch (error) {
    console.error(`Error uploading file to ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Get a file preview URL
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @param width Optional width of the preview
 * @param height Optional height of the preview
 * @returns The file preview URL
 */
export const getFilePreview = (
  fileId: string,
  bucketType: BucketType,
  width?: number,
  height?: number
): URL => {
  const bucketId = getBucketId(bucketType);
  return storage.getFilePreview(
    bucketId,
    fileId,
    width,
    height
  );
};

/**
 * Get a file download URL
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file download URL
 */
export const getFileDownload = (fileId: string, bucketType: BucketType): URL => {
  const bucketId = getBucketId(bucketType);
  return storage.getFileDownload(bucketId, fileId);
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
 * @param limit Optional limit of files to return (default: 100)
 * @returns A list of files in the bucket with their metadata
 */
export const listFiles = async (
  bucketType: BucketType,
  limit: number = 100
): Promise<{ files: Models.File[]; metadata: ImageMetadata[] }> => {
  try {
    const bucketId = getBucketId(bucketType);

    // Get all files from the single bucket
    const result = await storage.listFiles(bucketId);

    // Get metadata from the images collection to filter by image type
    const metadata = await databases.listDocuments<ImageMetadata>(
      DATABASE_ID,
      IMAGES_COLLECTION_ID,
      [
        // Filter by image type using the Query syntax
        Query.equal('image_type', [bucketType]),
        Query.limit(limit)
      ]
    );

    // Filter files based on metadata
    const fileIds = metadata.documents.map(doc => doc.file_id);
    const filteredFiles = result.files.filter(file => fileIds.includes(file.$id));

    return {
      files: filteredFiles,
      metadata: metadata.documents
    };
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
export const getFile = async (fileId: string, bucketType: BucketType): Promise<Models.File> => {
  try {
    const bucketId = getBucketId(bucketType);
    return await storage.getFile(bucketId, fileId);
  } catch (error) {
    console.error(`Error getting file from ${bucketType} bucket:`, error);
    throw error;
  }
};

/**
 * Get a file with its metadata
 * @param fileId The ID of the file
 * @param bucketType The type of bucket the file is in
 * @returns The file data and metadata
 */
export const getFileWithMetadata = async (
  fileId: string,
  bucketType: BucketType
): Promise<{ file: Models.File; metadata: ImageMetadata | null }> => {
  try {
    const bucketId = getBucketId(bucketType);

    // Get the file
    const file = await storage.getFile(bucketId, fileId);

    // Get metadata from the images collection
    try {
      const metadataList = await databases.listDocuments<ImageMetadata>(
        DATABASE_ID,
        IMAGES_COLLECTION_ID,
        [
          Query.equal('file_id', [fileId]),
          Query.limit(1)
        ]
      );

      return {
        file,
        metadata: metadataList.documents.length > 0 ? metadataList.documents[0] : null
      };
    } catch (metadataError) {
      console.error(`Error getting metadata for file ${fileId}:`, metadataError);
      return {
        file,
        metadata: null
      };
    }
  } catch (error) {
    console.error(`Error getting file from ${bucketType} bucket:`, error);
    throw error;
  }
};
