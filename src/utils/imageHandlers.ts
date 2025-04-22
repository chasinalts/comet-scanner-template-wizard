import { uploadFileToStorage, deleteFileFromStorage } from './firebaseStorage';
import { processImageForUpload } from './imageCompression';

/**
 * Handles image upload using local storage (base64 encoding)
 * @deprecated Use handleFirebaseImageUpload instead for better performance
 */
export const handleImageUpload = (
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
 * Handles image upload using Firebase Storage with compression
 * Falls back to localStorage if Firebase Storage is not accessible
 * @param file The file to upload
 * @param type The type of image (banner, scanner, etc.)
 * @param onSuccess Callback function to be called when upload is successful
 */
export const handleFirebaseImageUpload = (
  file: File,
  type: string,
  onSuccess: (imageUrl: string, imagePreview: string) => void
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

        try {
          // Try to upload to Firebase Storage first
          const storagePath = `images/${type}`;
          const imageUrl = await uploadFileToStorage(processedFile, storagePath);

          console.log('Image uploaded to Firebase:', {
            originalSize: file.size,
            processedSize: processedFile.size,
            compressionRatio: ((processedFile.size / file.size) * 100).toFixed(2) + '%',
            imageUrl
          });

          // Call the success callback with the Firebase URL and preview URL
          onSuccess(imageUrl, imagePreview);
        } catch (firebaseError) {
          console.warn('Firebase Storage upload failed, falling back to localStorage:', firebaseError);

          // Fallback to localStorage if Firebase Storage fails
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64data = reader.result as string;
            console.log('Image stored in localStorage as base64');
            onSuccess(base64data, imagePreview);
          };
          reader.onerror = () => {
            console.error('FileReader failed, using blob URL as last resort');
            onSuccess(imagePreview, imagePreview);
          };
          reader.readAsDataURL(processedFile);
        }

        // Clean up the preview URL after a delay to ensure it's used
        setTimeout(() => {
          URL.revokeObjectURL(imagePreview);
        }, 5000);
      } catch (error) {
        console.error('Error in image processing:', error);
        // If all else fails, we can still use the local preview as a fallback
        onSuccess(imagePreview, imagePreview);
      }
    })();
  } catch (error) {
    console.error('Error in handleFirebaseImageUpload:', error);
    throw error;
  }
};

/**
 * Cleans up a URL, revoking object URLs if necessary
 * @param url The URL to clean up
 * @param isFirebaseUrl Whether the URL is from Firebase Storage
 */
export const cleanupImageUrl = async (url: string, isFirebaseUrl = false) => {
  if (url.startsWith('blob:')) {
    URL.revokeObjectURL(url);
  } else if (isFirebaseUrl && url.includes('firebasestorage.googleapis.com')) {
    try {
      await deleteFileFromStorage(url);
    } catch (error) {
      console.error('Error deleting file from Firebase Storage:', error);
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
