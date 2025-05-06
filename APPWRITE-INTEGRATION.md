# Appwrite Integration Guide

This guide explains how the COMET Scanner application integrates with Appwrite for authentication, database, and storage functionality.

## Overview

The application uses Appwrite for:

- User authentication and session management
- Database storage for user profiles, content, and image metadata
- File storage for images (banner, gallery, scanner)

## Configuration

The Appwrite integration is configured in `src/appwriteConfig.ts`, which initializes the Appwrite client and services:

```typescript
import { Client, Account, Databases, Storage, Functions, Avatars, ID, Query, Models } from 'appwrite';

// Initialize Appwrite client
export const client = new Client()
    .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT || 'https://cloud.appwrite.io/v1')
    .setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID || '');

// Initialize Appwrite services
export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const functions = new Functions(client);
export const avatars = new Avatars(client);

// Export utility classes for easier access
export { ID, Query };
export type { Models };
```

## Environment Variables

The application requires the following environment variables:

- `VITE_APPWRITE_ENDPOINT`: The Appwrite API endpoint (default: 'https://cloud.appwrite.io/v1')
- `VITE_APPWRITE_PROJECT_ID`: Your Appwrite project ID
- `VITE_APPWRITE_DATABASE_ID`: Your Appwrite database ID
- `APPWRITE_API_KEY`: Your Appwrite API key (for server-side operations and MCP server)

## Database Structure

The application uses the following collections:

1. **user_profiles**: Stores user profile information
   - `email`: User's email address
   - `is_owner`: Boolean indicating if the user is an owner
   - `created_at`: Timestamp of when the profile was created
   - `permissions`: JSON string of user permissions

2. **content**: Stores content items
   - `type`: Type of content (e.g., 'banner', 'gallery', 'scanner')
   - `title`: Content title
   - `content`: Content text
   - `imageUrl`: URL of the associated image (optional)
   - `scale`: Image scale factor (optional)

3. **images**: Stores image metadata
   - `name`: Original filename
   - `file_id`: ID of the file in storage
   - `bucket_id`: ID of the storage bucket
   - `uploaded_by`: User ID of the uploader
   - `uploaded_at`: Timestamp of when the image was uploaded
   - `image_type`: Type of image ('banner', 'gallery', 'scanner')

## Storage Structure

The application uses a single storage bucket for all images due to free tier limitations:

- `banner`: Stores all images (banner, gallery, scanner)

## Utility Functions

The application provides utility functions for interacting with Appwrite:

### Database Utilities (`src/utils/appwriteDatabase.ts`)

- `createDocument<T>`: Create a document in a collection
- `getDocument<T>`: Get a document by ID
- `updateDocument<T>`: Update a document
- `deleteDocument`: Delete a document
- `listDocuments<T>`: List documents in a collection
- `getUserProfile`: Get a user profile by user ID
- `updateUserProfile`: Update a user profile
- `getContent`: Get content by ID
- `updateContent`: Update content
- `getImage`: Get image metadata by ID
- `listImages`: List all image metadata

### Storage Utilities (`src/utils/appwriteStorage.ts`)

- `uploadFile`: Upload a file to storage
- `getFilePreview`: Get a file preview URL
- `getFileDownload`: Get a file download URL
- `deleteFile`: Delete a file from storage
- `listFiles`: List all files in a bucket
- `getFile`: Get a file by ID
- `getFileWithMetadata`: Get a file with its metadata

### MCP Server Utilities (`src/utils/appwriteMCP.ts`)

- `checkMCPServerAvailable`: Check if the MCP server is available
- `getMCPServerConfig`: Get MCP server configuration
- `createUserWithMCP`: Create a new user profile using the MCP server
- `uploadFileWithMCP`: Upload a file using the MCP server
- `getContentWithMCP`: Get all content items using the MCP server
- `getUserProfilesWithMCP`: Get all user profiles using the MCP server

## Authentication Flow

1. User signs in with email and password
2. Appwrite creates a session and returns a JWT token
3. The application stores the session in localStorage
4. The application uses the session to authenticate API requests

## MCP Server Integration

The application integrates with the Appwrite Model Context Protocol (MCP) server, which allows AI assistants to interact with the Appwrite API. See [MCP-SERVER-SETUP.md](MCP-SERVER-SETUP.md) for setup instructions.

## Troubleshooting

### Authentication Issues

If you encounter authentication issues:

1. Check that your Appwrite project ID and endpoint are correct
2. Verify that the user exists in Appwrite
3. Check that the user has the necessary permissions
4. Try clearing localStorage and signing in again

### Database Issues

If you encounter database issues:

1. Check that your Appwrite database ID is correct
2. Verify that the collections exist in Appwrite
3. Check that the user has the necessary permissions for the collections

### Storage Issues

If you encounter storage issues:

1. Check that the bucket exists in Appwrite
2. Verify that the user has the necessary permissions for the bucket
3. Check that the file exists in the bucket

## Additional Resources

- [Appwrite Documentation](https://appwrite.io/docs)
- [Appwrite Web SDK Reference](https://appwrite.io/docs/references/cloud/client-web)
- [Appwrite MCP Server Documentation](https://appwrite.io/docs/tooling/mcp)
