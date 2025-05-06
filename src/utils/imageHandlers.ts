import { processImageForUpload } from './imageCompression';
import { uploadFile as uploadFileToSupabase, deleteFile as deleteFileFromSupabase, BucketType as SupabaseBucketType } from './supabaseImageStorage';
import { uploadFile as uploadFileToAppwrite, deleteFile as deleteFileFromAppwrite, BucketType as AppwriteBucketType } from './appwriteStorage';

/**
 * Handles image upload using local storage (base64 encoding)
 * @deprecated Use handleAppwriteImageUpload instead for better performance
 */
export const handleLocalImageUpload = (
  file: File,
  onSuccess: (imageUrl: string, imagePreview: string) => void
) => {
  const imagePreview = URL.createObjectURL(file);
  const reader = new FileReader();

  reader.onloadend = () => {
    const imageUrl = reader.result as string;
    console.log('Image uploaded locally:', { file, imageUrl: imageUrl.substring(0, 50) + '...', imagePreview });
    onSuccess(imageUrl, imagePreview);
  };

  reader.readAsDataURL(file);
};

/**
 * Handles image upload using Supabase Storage with compression
 * @param file The file to upload
 * @param type The type of image (banner, scanner, etc.)
 * @param onSuccess Callback function to be called when upload is successful
 * @param onError Optional callback function to be called when upload fails
 * @param userId The ID of the user uploading the file
 */
export const handleSupabaseImageUpload = (
  file: File,
  type: string,
  onSuccess: (imageUrl: string, imagePreview: string) => void,
  onError?: (error: any) => void,
  userId?: string
) => {
  try {
    // Create a temporary preview URL for immediate display
    const imagePreview = URL.createObjectURL(file);

    // Process the image in a non-blocking way
    (async () => {
      try {
        // Process and compress the image if needed
        const processedFile = await processImageForUpload(file, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.85,
          maxSizeInMB: 1
        });

        // Upload to Supabase Storage
        // Map scanner type to gallery folder since they are the same
        const bucketType = type === 'scanner' ? 'gallery' : type as BucketType;
        console.log(`Uploading ${type} image to ${bucketType} bucket in Supabase`);

        // If userId is not provided, use a default value
        const userIdToUse = userId || 'system';

        const result = await uploadFile(processedFile, bucketType, userIdToUse);
        const imageUrl = result.$id ? result.$id : '';

        console.log('Image uploaded to Supabase:', {
          originalSize: file.size,
          processedSize: processedFile.size,
          compressionRatio: ((processedFile.size / file.size) * 100).toFixed(2) + '%',
          imageUrl,
          publicUrl: result.publicUrl
        });

        // Call the success callback with the image ID and preview URL
        // We'll use the ID for metadata lookups and the publicUrl for direct display
        onSuccess(imageUrl, result.publicUrl || imagePreview);

        // Clean up the preview URL after a delay to ensure it's used
        setTimeout(() => {
          URL.revokeObjectURL(imagePreview);
        }, 5000);
      } catch (error) {
        console.error('Error in image processing or upload:', error);

        // Clean up the preview URL
        URL.revokeObjectURL(imagePreview);

        // Call the error callback if provided
        if (onError) {
          onError(error);
        } else {
          throw error;
        }
      }
    })();
  } catch (error) {
    console.error('Error in handleSupabaseImageUpload:', error);
    if (onError) {
      onError(error);
    } else {
      throw error;
    }
  }
};

/**
 * Handles image upload using Appwrite Storage with compression
 * @param file The file to upload
 * @param type The type of image (banner, scanner, etc.)
 * @param onSuccess Callback function to be called when upload is successful
 * @param onError Optional callback function to be called when upload fails
 * @param userId The ID of the user uploading the file
 */
export const handleAppwriteImageUpload = (
  file: File,
  type: string,
  onSuccess: (imageUrl: string, imagePreview: string) => void,
  onError?: (error: any) => void,
  userId?: string
) => {
  try {
    // Create a temporary preview URL for immediate display
    const imagePreview = URL.createObjectURL(file);

    // Process the image in a non-blocking way
    (async () => {
      try {
        // Process and compress the image if needed
        const processedFile = await processImageForUpload(file, {
          maxWidth: 1920,
          maxHeight: 1080,
          quality: 0.85,
          maxSizeInMB: 1
        });

        // Upload to Appwrite Storage
        // Map scanner type to gallery folder since they are the same
        const bucketType = type === 'scanner' ? 'gallery' : type as AppwriteBucketType;
        console.log(`Uploading ${type} image to ${bucketType} bucket in Appwrite`);

        // If userId is not provided, use a default value
        const userIdToUse = userId || 'system';

        // Upload the file to Appwrite
        const result = await uploadFileToAppwrite(processedFile, bucketType, userIdToUse);

        // Get the file ID and preview URL
        const imageUrl = result.file.$id;
        const filePreview = result.file.url;

        console.log('Image uploaded to Appwrite:', {
          originalSize: file.size,
          processedSize: processedFile.size,
          compressionRatio: ((processedFile.size / file.size) * 100).toFixed(2) + '%',
          imageUrl,
          filePreview
        });

        // Call the success callback with the image ID and preview URL
        onSuccess(imageUrl, filePreview || imagePreview);

        // Clean up the preview URL after a delay to ensure it's used
        setTimeout(() => {
          URL.revokeObjectURL(imagePreview);
        }, 5000);
      } catch (error) {
        console.error('Error in image processing or upload:', error);

        // Clean up the preview URL
        URL.revokeObjectURL(imagePreview);

        // Call the error callback if provided
        if (onError) {
          onError(error);
        } else {
          throw error;
        }
      }
    })();
  } catch (error) {
    console.error('Error in handleAppwriteImageUpload:', error);
    if (onError) {
      onError(error);
    } else {
      throw error;
    }
  }
};

/**
 * Handles image upload using the preferred storage provider (Appwrite or Supabase)
 * @param file The file to upload
 * @param type The type of image (banner, scanner, etc.)
 * @param onSuccess Callback function to be called when upload is successful
 * @param onError Optional callback function to be called when upload fails
 * @param userId The ID of the user uploading the file
 * @param preferredProvider Optional preferred provider ('appwrite' or 'supabase')
 */
export const handleImageUpload = (
  file: File,
  type: string,
  onSuccess: (imageUrl: string, imagePreview: string) => void,
  onError?: (error: any) => void,
  userId?: string,
  preferredProvider: 'appwrite' | 'supabase' = 'appwrite'
) => {
  // Use the preferred storage provider
  if (preferredProvider === 'appwrite') {
    console.log('Using Appwrite for image upload');
    return handleAppwriteImageUpload(file, type, onSuccess, onError, userId);
  } else {
    console.log('Using Supabase for image upload');
    return handleSupabaseImageUpload(file, type, onSuccess, onError, userId);
  }
};

/**
 * Cleans up a URL, revoking object URLs if necessary
 * @param url The URL to clean up
 * @param isCloudUrl Whether the URL is from a cloud storage provider
 * @param bucketType Optional bucket type for storage
 * @param provider Optional storage provider ('appwrite' or 'supabase')
 */
export const cleanupImageUrl = async (
  url: string,
  isCloudUrl = false,
  bucketType?: AppwriteBucketType | SupabaseBucketType,
  provider: 'appwrite' | 'supabase' = 'appwrite'
) => {
  if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  } else if (isCloudUrl && bucketType) {
    try {
      if (provider === 'appwrite') {
        await deleteFileFromAppwrite(url, bucketType as AppwriteBucketType);
      } else {
        await deleteFileFromSupabase(url);
      }
    } catch (error) {
      console.error(`Error deleting file from ${provider} Storage (${bucketType}):`, error);
    }
  }
};

/**
 * Resizes an image to the specified dimensions
 * @param file The image file to resize
 * @param maxWidth Maximum width of the resized image
 * @param maxHeight Maximum height of the resized image
 * @returns A promise that resolves to a Blob of the resized image
 */
export const resizeImage = (
  file: Blob,
  maxWidth: number,
  maxHeight: number
): Promise<Blob> => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.src = URL.createObjectURL(file);

    image.onload = () => {
      let width = image.width;
      let height = image.height;

      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }

      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;

      const ctx = canvas.getContext('2d');
      if (!ctx) {
        reject(new Error('Could not get canvas context'));
        return;
      }

      ctx.drawImage(image, 0, 0, width, height);

      canvas.toBlob((blob) => {
        if (blob) {
          resolve(blob);
        } else {
          reject(new Error('Could not create blob from canvas'));
        }
      }, file.type);

      URL.revokeObjectURL(image.src);
    };

    image.onerror = () => {
      reject(new Error('Failed to load image'));
      URL.revokeObjectURL(image.src);
    };
  });
};
