# Appwrite Setup Guide for COMET Scanner

This guide provides step-by-step instructions for setting up Appwrite for the COMET Scanner application.

## Prerequisites

- Node.js 18 or higher
- npm or yarn
- Appwrite account (sign up at [cloud.appwrite.io](https://cloud.appwrite.io))

## Setup Steps

Follow these steps to set up Appwrite for your COMET Scanner application:

### 1. Install Dependencies

```bash
npm install
```

### 2. Update Environment Variables

Create or update your `.env` file with the necessary Appwrite configuration:

```bash
npm run appwrite:update-env
```

This will prompt you to enter your Appwrite Project ID and Database ID.

### 3. Add API Key to Environment Variables

Update your `.env` file with instructions for adding an Appwrite API key:

```bash
npm run appwrite:update-env-api-key
```

Follow the instructions provided by the script to create an API key in the Appwrite console and add it to your `.env` file.

### 4. Set Up Appwrite Resources (Free Tier Version)

Run the setup script to create all necessary Appwrite resources within the free tier limitations:

```bash
npm run appwrite:setup-resources-limited
```

This script will:
- Use the existing database named 'cometscanner'
- Create collections for user profiles, content, images, and logs
- Use a single storage bucket for all image types (banner, gallery, and scanner)

> **Note:** Due to Appwrite free tier limitations, we're using a single bucket for all image types. The image_type attribute in the images collection will distinguish between banner, gallery, and scanner images.

### 5. Create Owner Account

Create an owner account for the application:

```bash
npm run appwrite:create-owner
```

This will create an account with owner privileges for the email address specified in the script.

### 6. Create Initial Content

Create initial content for the "What is COMET?" section:

```bash
npm run appwrite:create-content
```

### 7. Start the Application

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Troubleshooting

If you encounter issues:

1. Check your `.env` file for correct configuration
2. Run `npm run appwrite:check-config` to verify your Appwrite setup
3. Ensure your Appwrite project has the correct platform settings
4. Check the console for error messages

### Common Issues

#### Database Not Found

If you see `AppwriteException: Database not found` in the console:

1. Make sure you've run `npm run appwrite:setup-resources-limited` to set up the database
2. Verify that your `.env` file has the correct `VITE_APPWRITE_DATABASE_ID`
3. If you're on the free tier, make sure you're not exceeding the database limit

#### WebSocket Connection Issues

If you see WebSocket connection errors:

1. Make sure your Appwrite project has the correct platform settings
2. Check that your session is properly stored in localStorage

#### Account Not Defined

If you see `Uncaught ReferenceError: account is not defined`:

1. Make sure you've imported the `account` object from `appwriteConfig.ts` in any file that uses it

## Additional Commands

- `npm run appwrite:check-config` - Check your Appwrite configuration
- `npm run appwrite:update-env` - Update your `.env` file with Appwrite credentials
- `npm run appwrite:get-credentials` - Get your Appwrite credentials

## Security Considerations

- Never commit your `.env` file or API keys to version control
- Use appropriate permissions for collections and buckets
- Consider using custom domains for production deployments to improve security

## Free Tier Limitations

Appwrite's free tier has the following limitations:

- 1 database per project
- 3 storage buckets per project
- Limited API calls per day

Our setup script works around these limitations by:

1. Using a single database
2. Using a single storage bucket for all image types
3. Adding an `image_type` attribute to distinguish between different types of images
4. Using string attributes instead of JSON attributes (which may not be supported in all SDK versions)

If you need more resources, consider upgrading to a paid plan or creating multiple Appwrite projects.

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
