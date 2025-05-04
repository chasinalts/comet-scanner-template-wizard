// Script to migrate images from Appwrite to Supabase
// This script fetches all images from Appwrite, downloads them, and uploads them to Supabase

import { Client, Storage, Databases } from 'node-appwrite';
import { createClient } from '@supabase/supabase-js';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Initialize Appwrite client
const appwriteClient = new Client()
  .setEndpoint(process.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
  .setProject(process.env.VITE_APPWRITE_PROJECT_ID || '');

const appwriteStorage = new Storage(appwriteClient);
const appwriteDb = new Databases(appwriteClient);

// Initialize Supabase client
const supabaseClient = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.VITE_SUPABASE_ANON_KEY || ''
);

// Bucket mapping
const bucketMap = {
  'banner': 'banner',
  'gallery': 'gallery',
  'scanner': 'scanner'
};

// Create temp directory for downloads
const tempDir = path.join(process.cwd(), 'temp_images');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Function to download a file from a URL
async function downloadFile(url, filePath) {
  const response = await fetch(url);
  const buffer = await response.buffer();
  fs.writeFileSync(filePath, buffer);
  return filePath;
}

// Function to migrate images from Appwrite to Supabase
async function migrateImages() {
  try {
    console.log('Starting image migration from Appwrite to Supabase...');

    // Get all images from Appwrite
    const appwriteBucketId = 'banner'; // Using the single bucket for all images
    const appwriteDbId = process.env.VITE_APPWRITE_DATABASE_ID || '';
    const appwriteImagesCollectionId = 'images';

    console.log('Fetching images from Appwrite...');
    
    // Get all files from Appwrite storage
    const appwriteFiles = await appwriteStorage.listFiles(appwriteBucketId);
    console.log(`Found ${appwriteFiles.total} files in Appwrite storage`);

    // Get all image metadata from Appwrite database
    const appwriteImageMetadata = await appwriteDb.listDocuments(
      appwriteDbId,
      appwriteImagesCollectionId
    );
    console.log(`Found ${appwriteImageMetadata.total} image metadata records in Appwrite database`);

    // Process each file
    for (const file of appwriteFiles.files) {
      try {
        console.log(`Processing file: ${file.$id}`);

        // Find metadata for this file
        const metadata = appwriteImageMetadata.documents.find(doc => doc.file_id === file.$id);
        
        if (!metadata) {
          console.warn(`No metadata found for file ${file.$id}, skipping...`);
          continue;
        }

        // Determine bucket type
        const bucketType = metadata.image_type || 'banner';
        const supabaseBucket = bucketMap[bucketType];

        console.log(`File ${file.$id} is of type ${bucketType}, will be uploaded to ${supabaseBucket} bucket`);

        // Download the file
        const downloadUrl = appwriteStorage.getFileDownload(appwriteBucketId, file.$id);
        const tempFilePath = path.join(tempDir, `${file.$id}_${file.name}`);
        
        console.log(`Downloading file to ${tempFilePath}...`);
        await downloadFile(downloadUrl.toString(), tempFilePath);

        // Upload to Supabase
        const filePath = `${bucketType}/${Date.now()}_${file.name}`;
        console.log(`Uploading file to Supabase bucket ${supabaseBucket} at path ${filePath}...`);
        
        const fileBuffer = fs.readFileSync(tempFilePath);
        
        const { data: uploadData, error: uploadError } = await supabaseClient
          .storage
          .from(supabaseBucket)
          .upload(filePath, fileBuffer, {
            contentType: file.mimeType,
            cacheControl: '3600'
          });

        if (uploadError) {
          console.error(`Error uploading file ${file.$id} to Supabase:`, uploadError);
          continue;
        }

        // Get the public URL
        const { data: { publicUrl } } = supabaseClient
          .storage
          .from(supabaseBucket)
          .getPublicUrl(filePath);

        console.log(`File uploaded successfully. Public URL: ${publicUrl}`);

        // Store metadata in Supabase
        const { data: metadataData, error: metadataError } = await supabaseClient
          .from('images')
          .insert({
            id: metadata.id || file.$id,
            name: file.name,
            file_path: filePath,
            bucket_id: supabaseBucket,
            uploaded_by: metadata.uploaded_by || 'system',
            uploaded_at: metadata.uploaded_at || new Date().toISOString(),
            image_type: bucketType,
            size: file.sizeOriginal,
            metadata: {
              originalSize: file.sizeOriginal,
              mimeType: file.mimeType
            }
          });

        if (metadataError) {
          console.error(`Error storing metadata for file ${file.$id} in Supabase:`, metadataError);
        } else {
          console.log(`Metadata stored successfully for file ${file.$id}`);
        }

        // Clean up temp file
        fs.unlinkSync(tempFilePath);
        console.log(`Temporary file ${tempFilePath} deleted`);

      } catch (error) {
        console.error(`Error processing file ${file.$id}:`, error);
      }
    }

    console.log('Migration completed successfully!');
  } catch (error) {
    console.error('Error during migration:', error);
  } finally {
    // Clean up temp directory
    if (fs.existsSync(tempDir)) {
      fs.rmdirSync(tempDir, { recursive: true });
      console.log(`Temporary directory ${tempDir} deleted`);
    }
  }
}

// Run the migration
migrateImages().catch(console.error);
