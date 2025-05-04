# Image Storage Guide

This guide explains how images are stored in the COMET Scanner Template Wizard application.

## Storage Architecture

The application uses a dual-storage approach:

1. **Supabase Storage**: Used for all images (banner, gallery, scanner)
2. **Appwrite Database**: Used for text/document data only

## Why This Approach?

Appwrite's free tier has limitations on image transformations (resizing), which are essential for our application. Supabase provides these features in their free tier, making it a better choice for image storage.

## Bucket Structure in Supabase

The application uses three buckets in Supabase:

1. `banner`: For banner images displayed at the top of the home page
2. `gallery`: For gallery images displayed in the image gallery section
3. `scanner`: For scanner-related images used in the template wizard

## How Images Are Stored

When an image is uploaded:

1. The image is compressed and optimized
2. The file is stored in the appropriate Supabase bucket
3. Metadata about the image is stored in the Supabase `images` table
4. The public URL is used for displaying the image

## How to Upload Images

Images are uploaded using the `handleImageUpload` function from `src/utils/imageHandlers.ts`. This function:

1. Creates a temporary preview URL for immediate display
2. Processes and compresses the image
3. Uploads the image to Supabase
4. Returns the image ID and public URL

Example usage:

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
  userId // User ID of the uploader
);
```

## How to Display Images

Images are displayed using the `LazyImage` component from `src/components/ui/LazyImage.tsx`. This component:

1. Lazily loads images when they enter the viewport
2. Handles responsive image sizing
3. Provides fallbacks for loading and error states

Example usage:

```tsx
import LazyImage from '../components/ui/LazyImage';

// Display an image
<LazyImage
  src={imageUrl} // Public URL from Supabase
  alt="Image description"
  className="rounded-lg shadow-2xl w-full h-72 object-cover"
  loadingStrategy="eager" // 'eager' or 'lazy'
  scale={1} // Scale factor for the image
  aspectRatio="16/9" // Aspect ratio
  displaySize="large" // 'small', 'medium', 'large', or 'custom'
/>
```

## Migrating Images from Appwrite to Supabase

If you have existing images in Appwrite that need to be migrated to Supabase, you can use the migration script:

```bash
npm run migrate:images
```

This script:

1. Fetches all images from Appwrite
2. Downloads them to a temporary directory
3. Uploads them to the appropriate Supabase buckets
4. Stores the metadata in the Supabase `images` table
5. Cleans up the temporary files

## Troubleshooting

If images are not displaying correctly:

1. Check the browser console for errors
2. Verify that the Supabase buckets are properly configured
3. Ensure that the image metadata is correctly stored in the `images` table
4. Check that the public URLs are accessible

For more detailed information, refer to the code in:
- `src/utils/supabaseImageStorage.ts`
- `src/utils/imageHandlers.ts`
- `src/components/ui/LazyImage.tsx`
