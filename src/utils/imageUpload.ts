// Utility functions for handling image uploads
import { uploadImage as uploadToSupabase } from './supabaseStorage';

/**
 * Create a blob URL from a file
 * @param file The file to create a blob URL for
 * @returns The blob URL
 */
export const createBlobUrl = (file: File): string => {
  return URL.createObjectURL(file);
};

/**
 * Revoke a blob URL
 * @param url The blob URL to revoke
 * @param isStorageUrl Whether the URL is a storage URL (not a blob URL)
 * @param imageType Optional image type for logging
 * @param storageProvider Optional storage provider for logging
 */
export const revokeBlobUrl = (
  url: string,
  isStorageUrl: boolean = false,
  imageType: string = 'unknown',
  storageProvider: string = 'unknown'
): void => {
  if (!url) return;

  if (!isStorageUrl && url.startsWith('blob:')) {
    try {
      URL.revokeObjectURL(url);
      console.log(`Revoked blob URL for ${imageType} image`);
    } catch (error) {
      console.error(`Error revoking blob URL for ${imageType} image:`, error);
    }
  } else {
    console.log(`Skipped revoking URL for ${imageType} image (${storageProvider})`);
  }
};

/**
 * Upload an image to the storage provider
 * @param file The file to upload
 * @param imageType The type of image (banner, gallery, scanner)
 * @param onSuccess Callback for successful upload
 * @param onError Callback for upload error
 * @param userId The user ID of the uploader
 * @param storageProvider The storage provider to use (supabase)
 */
export const uploadImageToStorage = async (
  file: File,
  imageType: string,
  onSuccess: (fileId: string, previewUrl: string) => void,
  onError: (error: any) => void,
  userId: string = 'system',
  storageProvider: string = 'supabase'
): Promise<void> => {
  try {
    console.log(`Starting upload of ${imageType} image:`, {
      fileName: file.name,
      fileSize: file.size,
      fileType: file.type,
      storageProvider
    });

    // Create a blob URL for preview
    const previewUrl = createBlobUrl(file);

    // Upload to the appropriate storage provider
    if (storageProvider === 'supabase') {
      const { fileId, publicUrl } = await uploadToSupabase(file, imageType, userId);
      onSuccess(publicUrl, previewUrl);
    } else {
      throw new Error(`Unsupported storage provider: ${storageProvider}`);
    }
  } catch (error) {
    console.error(`Error uploading ${imageType} image to ${storageProvider}:`, error);
    onError(error);
  }
};
