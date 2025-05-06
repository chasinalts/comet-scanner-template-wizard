# Image Handling in COMET Scanner

This document explains how image handling works in the COMET Scanner application, including uploading, processing, and storage.

## Overview

The application supports multiple storage providers for images:

1. **Appwrite Storage** (primary)
2. **Supabase Storage** (secondary)
3. **Local Storage** (deprecated, for development only)

Images are processed and compressed before being uploaded to reduce storage usage and improve performance.

## Image Upload Process

The image upload process follows these steps:

1. Create a temporary preview URL for immediate display
2. Process and compress the image
3. Upload the image to the selected storage provider
4. Return the image ID and public URL

## Usage

### Basic Usage

```typescript
import { handleImageUpload } from '../utils/imageHandlers';

// Upload an image
handleImageUpload(
  file, // File object from input
  'banner', // Type: 'banner', 'gallery', or 'scanner'
  (imageId, publicUrl) => {
    // Success callback
    console.log('Image uploaded successfully:', imageId, publicUrl);
  },
  (error) => {
    // Error callback
    console.error('Error uploading image:', error);
  },
  userId, // User ID of the uploader
  'appwrite' // Storage provider: 'appwrite' or 'supabase'
);
```

### Specifying a Storage Provider

You can specify which storage provider to use:

```typescript
// Use Appwrite Storage (default)
handleImageUpload(file, type, onSuccess, onError, userId, 'appwrite');

// Use Supabase Storage
handleImageUpload(file, type, onSuccess, onError, userId, 'supabase');
```

### Cleaning Up Image URLs

When you no longer need an image, you should clean up the URL:

```typescript
import { cleanupImageUrl } from '../utils/imageHandlers';

// Clean up a blob URL
cleanupImageUrl(imageUrl);

// Clean up a cloud storage URL
cleanupImageUrl(imageUrl, true, 'banner', 'appwrite');
```

## Storage Providers

### Appwrite Storage

Appwrite is the primary storage provider for the application. It uses a single bucket for all images, with metadata to distinguish between different types of images.

```typescript
import { uploadFile, getFilePreview, deleteFile } from './appwriteStorage';

// Upload a file
const result = await uploadFile(file, 'banner', userId);

// Get a file preview URL
const previewUrl = getFilePreview(fileId, 'banner');

// Delete a file
await deleteFile(fileId, 'banner');
```

### Supabase Storage

Supabase is the secondary storage provider for the application. It uses separate buckets for different types of images.

```typescript
import { uploadFile, getFileUrl, deleteFile } from './supabaseImageStorage';

// Upload a file
const result = await uploadFile(file, 'banner', userId);

// Get a file URL
const fileUrl = getFileUrl(filePath, 'banner');

// Delete a file
await deleteFile(fileId);
```

## Image Processing

Images are processed and compressed before being uploaded to reduce storage usage and improve performance.

```typescript
import { processImageForUpload } from './imageCompression';

// Process and compress an image
const processedFile = await processImageForUpload(file, {
  maxWidth: 1920,
  maxHeight: 1080,
  quality: 0.85,
  maxSizeInMB: 1
});
```

## Image Types

The application supports three types of images:

1. **Banner**: Used for the banner image on the home page
2. **Gallery**: Used for the gallery images on the home page
3. **Scanner**: Used for the scanner images in the template wizard

## Troubleshooting

### Image Upload Fails

If an image upload fails, check the following:

1. Make sure the file is a valid image
2. Check that the file size is within the limits
3. Verify that the user has permission to upload images
4. Check the storage provider configuration

### Image Not Displaying

If an image is not displaying, check the following:

1. Make sure the image URL is correct
2. Verify that the image exists in the storage provider
3. Check that the user has permission to view the image
4. Try clearing the browser cache

## Additional Resources

- [Appwrite Storage Documentation](https://appwrite.io/docs/storage)
- [Supabase Storage Documentation](https://supabase.io/docs/guides/storage)
- [Image Compression Guide](https://web.dev/fast-load-time/)
