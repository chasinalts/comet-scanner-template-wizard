# Migrating to Appwrite

This document provides instructions for migrating the COMET Scanner Template Wizard from Supabase/Auth0 to Appwrite.

## Overview

The codebase has been prepared for migration to Appwrite. The following components have been migrated:

1. **Authentication** - Replaced Auth0/Supabase authentication with Appwrite authentication
2. **Database** - Replaced Supabase database with Appwrite database
3. **Storage** - Replaced Supabase storage with Appwrite storage

## Setup Instructions

### 1. Create an Appwrite Account and Project

1. Sign up for an Appwrite account at [https://appwrite.io/](https://appwrite.io/)
2. Create a new project in the Appwrite console
3. Note your Project ID

### 2. Configure Authentication

1. In the Appwrite console, go to **Auth** > **Settings**
2. Enable Email/Password authentication
3. Configure the URL whitelist to include your application URLs

### 3. Create Database and Collections

1. In the Appwrite console, go to **Databases**
2. Create a new database (e.g., "cometscanner")
3. Note your Database ID
4. Create the following collections:

#### User Profiles Collection

Create a collection named `user_profiles` with the following attributes:

- `email` (string, required)
- `is_owner` (boolean, required)
- `created_at` (string, required)
- `permissions` (object, required)
  - `content_management` (boolean)
  - `user_management` (boolean)
  - `system_configuration` (boolean)
  - `media_uploads` (boolean)
  - `security_settings` (boolean)
  - `site_customization` (boolean)

#### Content Collection

Create a collection named `content` with the following attributes:

- `title` (string, required)
- `content` (string, required)
- `type` (string, required)
- `created_at` (string, required)
- `updated_at` (string, required)
- `created_by` (string, required)

#### Images Collection

Create a collection named `images` with the following attributes:

- `file_id` (string, required)
- `file_name` (string, required)
- `file_size` (number, required)
- `file_type` (string, required)
- `bucket_type` (string, required)
- `uploaded_by` (string, required)
- `uploaded_at` (string, required)
- `description` (string)

### 4. Create Storage Buckets

1. In the Appwrite console, go to **Storage**
2. Create the following buckets:
   - `banner` - For banner images
   - `gallery` - For gallery images
   - `scanner` - For scanner template images

### 5. Configure Environment Variables

1. Copy the `.env.example` file to `.env`
2. Update the Appwrite configuration variables:
   ```
   VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   VITE_APPWRITE_PROJECT_ID=your-project-id
   VITE_APPWRITE_DATABASE_ID=your-database-id
   ```

### 6. Install Dependencies and Run the Application

```bash
npm install
npm run dev
```

## Data Migration

To migrate data from Supabase to Appwrite, you'll need to:

1. Export data from Supabase
2. Transform the data to match Appwrite's structure
3. Import the data into Appwrite

### Exporting Data from Supabase

```bash
# Export user profiles
npx supabase db dump -t user_profiles > user_profiles.sql

# Export content
npx supabase db dump -t content > content.sql

# Export images
npx supabase db dump -t images > images.sql
```

### Importing Data into Appwrite

You can use the Appwrite SDK to import the data:

```javascript
import { Client, Databases, Storage } from 'appwrite';
import fs from 'fs';

// Initialize Appwrite client
const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('your-project-id');

const databases = new Databases(client);
const storage = new Storage(client);

// Import user profiles
const userProfiles = JSON.parse(fs.readFileSync('user_profiles.json', 'utf8'));
for (const profile of userProfiles) {
    await databases.createDocument(
        'your-database-id',
        'user_profiles',
        profile.id,
        {
            email: profile.email,
            is_owner: profile.is_owner,
            created_at: profile.created_at,
            permissions: profile.permissions
        }
    );
}

// Import content
const content = JSON.parse(fs.readFileSync('content.json', 'utf8'));
for (const item of content) {
    await databases.createDocument(
        'your-database-id',
        'content',
        item.id,
        {
            title: item.title,
            content: item.content,
            type: item.type,
            created_at: item.created_at,
            updated_at: item.updated_at,
            created_by: item.created_by
        }
    );
}

// Import images
const images = JSON.parse(fs.readFileSync('images.json', 'utf8'));
for (const image of images) {
    await databases.createDocument(
        'your-database-id',
        'images',
        image.id,
        {
            file_id: image.file_id,
            file_name: image.file_name,
            file_size: image.file_size,
            file_type: image.file_type,
            bucket_type: image.bucket_type,
            uploaded_by: image.uploaded_by,
            uploaded_at: image.uploaded_at,
            description: image.description
        }
    );
}
```

## Additional Resources

- [Appwrite Documentation](https://appwrite.io/docs)
- [Appwrite JavaScript SDK](https://appwrite.io/docs/sdks/web/javascript)
- [Appwrite API Reference](https://appwrite.io/docs/apis)
