import { ref, uploadBytes, getDownloadURL, deleteObject, uploadBytesResumable } from 'firebase/storage';
import { storage } from '../firebaseConfig';
import { v4 as uuidv4 } from 'uuid';

/**
 * Uploads a file to Firebase Storage with metadata and cache control
 * @param file The file to upload
 * @param path The path in storage where the file should be stored
 * @param cacheControl Optional cache control header (default: 'public, max-age=31536000')
 * @returns A promise that resolves to the download URL of the uploaded file
 */
export const uploadFileToStorage = async (
  file: File,
  path: string,
  cacheControl = 'public, max-age=31536000'
): Promise<string> => {
  try {
    // Generate a unique filename to prevent collisions
    const fileExtension = file.name.split('.').pop();
    const fileName = `${uuidv4()}.${fileExtension}`;
    const fullPath = `${path}/${fileName}`;

    // Create a reference to the file location in Firebase Storage
    const storageRef = ref(storage, fullPath);

    // Set metadata including cache control
    const metadata = {
      contentType: file.type,
      cacheControl: cacheControl, // 1 year cache by default
      customMetadata: {
        'originalName': file.name,
        'uploadedAt': new Date().toISOString()
      }
    };

    // Upload the file with metadata and track progress
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Return a promise that resolves when the upload is complete
    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        // Progress callback
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload progress: ${progress.toFixed(2)}%`);
        },
        // Error callback
        (error) => {
          console.error('Error uploading file to Firebase Storage:', error);
          reject(error);
        },
        // Success callback
        async () => {
          try {
            // Get the download URL
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File uploaded successfully:', uploadTask.snapshot.metadata.fullPath);
            resolve(downloadURL);
          } catch (error) {
            console.error('Error getting download URL:', error);
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    console.error('Error setting up file upload to Firebase Storage:', error);
    throw error;
  }
};

/**
 * Deletes a file from Firebase Storage
 * @param url The download URL of the file to delete
 * @returns A promise that resolves when the file is deleted
 */
export const deleteFileFromStorage = async (url: string): Promise<void> => {
  try {
    // Extract the path from the URL
    // This is a simplistic approach and might need adjustment based on your Firebase Storage setup
    const decodedUrl = decodeURIComponent(url);
    const startIndex = decodedUrl.indexOf('/o/') + 3;
    const endIndex = decodedUrl.indexOf('?');

    if (startIndex === -1 || endIndex === -1) {
      console.error('Invalid Firebase Storage URL format:', url);
      return;
    }

    const path = decodedUrl.substring(startIndex, endIndex);
    const storageRef = ref(storage, path);

    // Delete the file
    await deleteObject(storageRef);
    console.log('File deleted successfully:', path);
  } catch (error) {
    console.error('Error deleting file from Firebase Storage:', error);
    throw error;
  }
};
