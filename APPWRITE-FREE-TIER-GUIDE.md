# Appwrite Free Tier Setup Guide for COMET Scanner

This guide provides instructions for setting up Appwrite for the COMET Scanner application within the free tier limitations.

## Free Tier Limitations

Appwrite's free tier has the following limitations:

- 1 database per project
- 3 storage buckets per project
- Limited API calls per day

Our setup has been adapted to work within these constraints.

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Environment Variables

Make sure your `.env` file has the correct Appwrite configuration:

```
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=cstw
VITE_APPWRITE_DATABASE_ID=cometscanner
```

### 3. Add API Key to Environment Variables

Add your Appwrite API key to your `.env` file:

```bash
npm run appwrite:update-env-api-key
```

Then edit the `.env` file to add your API key:

```
APPWRITE_API_KEY=your-api-key-here
```

Make sure your API key has the following permissions:
- collections.read
- collections.write
- buckets.read
- buckets.write
- users.read
- users.write

### 4. Set Up Appwrite Resources (Free Tier Version)

Run the limited setup script to create all necessary Appwrite resources within the free tier limitations:

```bash
npm run appwrite:setup-resources-limited
```

This script will:
- Use the existing database named 'cometscanner'
- Create collections for user profiles, content, images, and logs
- Use a single storage bucket for all image types (banner, gallery, and scanner)

### 5. Update Existing Account to Owner

If you already have an account but need to make it an owner:

```bash
npm run appwrite:update-owner
```

Enter your email when prompted, and the script will update your account to have owner permissions.

### 6. Start the Application

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Implementation Details

### Storage Structure

With the free tier limitations, we've implemented the following structure:

1. **Single Bucket**: All images (banner, gallery, scanner) are stored in a single bucket named 'banner'
2. **Image Metadata**: We store metadata about each image in the 'images' collection, including:
   - `name`: Original filename
   - `file_id`: ID of the file in the storage bucket
   - `bucket_id`: ID of the bucket (always 'banner')
   - `uploaded_by`: User ID of the uploader
   - `uploaded_at`: Timestamp of upload
   - `image_type`: Type of image ('banner', 'gallery', or 'scanner')

3. **Permissions**: Stored as JSON strings in the database and parsed when retrieved

### Code Adaptations

The code has been adapted to work with these limitations:

1. **Storage Utility**: The `appwriteStorage.ts` file has been updated to:
   - Use a single bucket for all image types
   - Filter files by image type when listing files
   - Store metadata in the images collection

2. **Authentication**: The `AuthContext.tsx` file has been updated to:
   - Convert permission objects to JSON strings when storing
   - Parse JSON strings back to objects when retrieving

## Troubleshooting

### Database Not Found

If you see `AppwriteException: Database not found` in the console:

1. Make sure you've run `npm run appwrite:setup-resources-limited` to set up the database
2. Verify that your `.env` file has the correct `VITE_APPWRITE_DATABASE_ID`

### WebSocket Connection Issues

If you see WebSocket connection errors:

1. Make sure your Appwrite project has the correct platform settings
2. Check that your session is properly stored in localStorage

### Account Already Exists

If you see `A user with the same id, email, or phone already exists in this project` when trying to create an owner account:

1. Use `npm run appwrite:update-owner` instead to update your existing account to have owner permissions

## Security Considerations

- Never commit your `.env` file or API keys to version control
- Use appropriate permissions for collections and buckets
- Consider using custom domains for production deployments to improve security
