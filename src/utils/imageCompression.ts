/**
 * Utility functions for image compression
 */

/**
 * Compresses an image file to reduce its size
 * @param file The image file to compress
 * @param maxWidth Maximum width of the compressed image
 * @param maxHeight Maximum height of the compressed image
 * @param quality Compression quality (0-1)
 * @returns A promise that resolves to a compressed File object
 */
export const compressImage = async (
  file: File,
  maxWidth = 1920,
  maxHeight = 1080,
  quality = 0.8
): Promise<File> => {
  return new Promise((resolve, reject) => {
    try {
      // Create a FileReader to read the file
      const reader = new FileReader();
      
      reader.onload = (readerEvent) => {
        // Create an image to calculate dimensions
        const img = new Image();
        img.onload = () => {
          // Calculate new dimensions while maintaining aspect ratio
          let width = img.width;
          let height = img.height;
          
          // Only resize if the image is larger than the max dimensions
          if (width > maxWidth || height > maxHeight) {
            const ratio = Math.min(maxWidth / width, maxHeight / height);
            width = Math.floor(width * ratio);
            height = Math.floor(height * ratio);
          }
          
          // Create a canvas to draw the resized image
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          
          // Draw the image on the canvas
          const ctx = canvas.getContext('2d');
          if (!ctx) {
            reject(new Error('Could not get canvas context'));
            return;
          }
          
          ctx.drawImage(img, 0, 0, width, height);
          
          // Convert canvas to blob
          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error('Could not create blob from canvas'));
                return;
              }
              
              // Create a new File object from the blob
              const compressedFile = new File(
                [blob],
                file.name,
                {
                  type: file.type,
                  lastModified: Date.now()
                }
              );
              
              // Log compression results
              console.log('Image compression results:', {
                originalSize: file.size,
                compressedSize: compressedFile.size,
                compressionRatio: (compressedFile.size / file.size * 100).toFixed(2) + '%',
                dimensions: `${width}x${height}`
              });
              
              resolve(compressedFile);
            },
            file.type,
            quality
          );
        };
        
        img.onerror = () => {
          reject(new Error('Failed to load image for compression'));
        };
        
        // Set the image source to the file data
        if (typeof readerEvent.target?.result === 'string') {
          img.src = readerEvent.target.result;
        } else {
          reject(new Error('Failed to read file'));
        }
      };
      
      reader.onerror = () => {
        reject(new Error('Failed to read file'));
      };
      
      // Read the file as a data URL
      reader.readAsDataURL(file);
    } catch (error) {
      reject(error);
    }
  });
};

/**
 * Determines if an image needs compression based on its size
 * @param file The image file to check
 * @param maxSizeInMB Maximum file size in MB before compression is applied
 * @returns Boolean indicating if compression is needed
 */
export const shouldCompressImage = (file: File, maxSizeInMB = 1): boolean => {
  const maxSizeInBytes = maxSizeInMB * 1024 * 1024;
  return file.size > maxSizeInBytes;
};

/**
 * Processes an image file, applying compression if needed
 * @param file The image file to process
 * @param options Compression options
 * @returns A promise that resolves to a processed File object
 */
export const processImageForUpload = async (
  file: File,
  options = {
    maxWidth: 1920,
    maxHeight: 1080,
    quality: 0.8,
    maxSizeInMB: 1
  }
): Promise<File> => {
  // Check if compression is needed
  if (shouldCompressImage(file, options.maxSizeInMB)) {
    console.log('Image is large, applying compression...');
    return compressImage(
      file,
      options.maxWidth,
      options.maxHeight,
      options.quality
    );
  }
  
  // If compression is not needed, return the original file
  console.log('Image is already optimized, skipping compression');
  return file;
};
