// Utility functions for handling image storage with Supabase
import { supabaseClient, BANNER_BUCKET, GALLERY_BUCKET, SCANNER_BUCKET } from '../supabaseConfig';
import { v4 as uuidv4 } from 'uuid';

// Define bucket types
export type BucketType = 'banner' | 'gallery' | 'scanner';

// Map image type to bucket
const getBucketForType = (imageType: string): string => {
  switch (imageType) {
    case 'banner':
      return BANNER_BUCKET;
    case 'gallery':
      return GALLERY_BUCKET;
    case 'scanner':
      return GALLERY_BUCKET; // Using gallery bucket for scanner images
    default:
      return GALLERY_BUCKET;
  }
};

/**
 * Upload an image to Supabase Storage
 * @param file The file to upload
 * @param imageType The type of image (banner, gallery, scanner)
 * @param userId The user ID of the uploader
 * @returns Promise with the file ID and public URL
 */
export const uploadImage = async (
  file: File,
  imageType: string,
  userId: string
): Promise<{ fileId: string; publicUrl: string }> => {
  try {
    // Generate a unique file name
    const fileExt = file.name.split('.').pop();
    const fileName = `${imageType}_${uuidv4()}.${fileExt}`;
    const bucketId = getBucketForType(imageType);

    // Upload the file to Supabase Storage
    const { data, error } = await supabaseClient.storage
      .from(bucketId)
      .upload(`${imageType}/${fileName}`, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) {
      console.error(`Error uploading ${imageType} image to Supabase:`, error);
      throw error;
    }

    // Get the public URL for the file
    const { data: { publicUrl } } = supabaseClient.storage
      .from(bucketId)
      .getPublicUrl(`${imageType}/${fileName}`);

    // Store metadata in the images table
    const { error: dbError } = await supabaseClient
      .from('images')
      .insert({
        file_path: data.path,
        file_name: fileName,
        bucket_id: bucketId,
        image_type: imageType,
        user_id: userId,
        size: file.size,
        mime_type: file.type,
      });

    if (dbError) {
      console.error(`Error storing ${imageType} image metadata:`, dbError);
      // Continue even if metadata storage fails
    }

    return {
      fileId: publicUrl, // Using the public URL as the file ID for simplicity
      publicUrl,
    };
  } catch (error) {
    console.error(`Error in uploadImage (${imageType}):`, error);
    throw error;
  }
};

/**
 * Delete an image from Supabase Storage
 * @param fileUrl The public URL of the file to delete
 * @param imageType The type of image (banner, gallery, scanner)
 * @returns Promise<boolean> True if deletion was successful
 */
export const deleteImage = async (
  fileUrl: string,
  imageType: string
): Promise<boolean> => {
  try {
    // Extract the file path from the URL
    const url = new URL(fileUrl);
    const pathParts = url.pathname.split('/');
    const fileName = pathParts[pathParts.length - 1];
    const bucketId = getBucketForType(imageType);

    // Delete the file from Supabase Storage
    const { error } = await supabaseClient.storage
      .from(bucketId)
      .remove([`${imageType}/${fileName}`]);

    if (error) {
      console.error(`Error deleting ${imageType} image from Supabase:`, error);
      return false;
    }

    // Delete metadata from the images table
    const { error: dbError } = await supabaseClient
      .from('images')
      .delete()
      .eq('file_name', fileName);

    if (dbError) {
      console.error(`Error deleting ${imageType} image metadata:`, dbError);
      // Continue even if metadata deletion fails
    }

    return true;
  } catch (error) {
    console.error(`Error in deleteImage (${imageType}):`, error);
    return false;
  }
};

/**
 * List all images of a specific type
 * @param imageType The type of image (banner, gallery, scanner)
 * @returns Promise with an array of file objects
 */
export const listFiles = async (imageType: string): Promise<any[]> => {
  try {
    const bucketId = getBucketForType(imageType);

    // Get files from the images table
    const { data, error } = await supabaseClient
      .from('images')
      .select('*')
      .eq('image_type', imageType)
      .order('created_at', { ascending: false });

    if (error) {
      console.error(`Error listing ${imageType} images:`, error);
      throw error;
    }

    // Transform the data to include public URLs
    return data.map((file: any) => {
      const { data: { publicUrl } } = supabaseClient.storage
        .from(file.bucket_id)
        .getPublicUrl(`${imageType}/${file.file_name}`);

      return {
        ...file,
        publicUrl,
      };
    });
  } catch (error) {
    console.error(`Error in listFiles (${imageType}):`, error);
    throw error;
  }
};

/**
 * Get a public URL for a file
 * @param bucketId The bucket ID
 * @param filePath The file path
 * @returns The public URL
 */
export const getPublicUrl = (bucketId: string, filePath: string): string => {
  const { data: { publicUrl } } = supabaseClient.storage
    .from(bucketId)
    .getPublicUrl(filePath);

  return publicUrl;
};
