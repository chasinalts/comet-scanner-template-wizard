# Hybrid Appwrite/Supabase Setup Guide for COMET Scanner

This guide provides instructions for setting up a hybrid environment using Appwrite for authentication and its single database, while using Supabase for additional database needs and storage.

## Overview

The hybrid setup uses:

- **Appwrite** for:
  - Authentication
  - User profiles (in the single free database)
  - Core content

- **Supabase** for:
  - Extended content storage
  - Image storage (all buckets)
  - Logs and analytics
  - Any additional data that won't fit in Appwrite's single database

## Prerequisites

- Node.js 18 (specifically v18.x.x, not v22 or v23)
- npm or yarn
- Appwrite account (sign up at [cloud.appwrite.io](https://cloud.appwrite.io))
- Supabase account (sign up at [supabase.com](https://supabase.com))

### Node.js Version Requirement

This project requires Node.js v18. It will not work correctly with Node.js v22 or v23.

To ensure you're using Node.js v18:

```bash
# If you have nvm installed
source scripts/use-node18.sh

# Verify the Node.js version
node -v  # Should show v18.x.x
```

All the setup scripts include checks to ensure you're using Node.js v18.

## Setup Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Run the Hybrid Setup Script

The easiest way to set up the hybrid environment is to use the provided setup script:

```bash
npm run hybrid:setup
```

This interactive script will:
1. Set up Appwrite for authentication and core database
2. Set up Supabase for extended storage and database needs
3. Update your environment variables
4. Create an owner account (optional)

### 3. Manual Setup (Alternative)

If you prefer to set up each service separately, you can use the following commands:

#### Appwrite Setup

```bash
# Update Appwrite environment variables
npm run appwrite:update-env

# Set up Appwrite resources (limited to free tier)
npm run appwrite:setup-resources-limited

# Create initial content
npm run appwrite:create-content

# Create owner account
npm run appwrite:create-owner
```

#### Supabase Setup

```bash
# Update Supabase environment variables
npm run supabase:update-env

# Set up Supabase resources
npm run supabase:setup
```

## Environment Variables

Your `.env` file should contain the following variables:

```
# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
APPWRITE_API_KEY=your-api-key

# Supabase Configuration
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

## Implementation Details

### Authentication Flow

1. Users authenticate with Appwrite
2. After successful authentication, a session is created in Appwrite
3. The application uses the Appwrite session for authorization

### Database Operations

The application uses a service abstraction layer that routes database operations to either Appwrite or Supabase based on the collection/table name:

- User profiles → Appwrite
- Core content → Appwrite
- Extended content → Supabase
- Images metadata → Supabase
- Logs → Supabase

### Storage Operations

All file storage operations use Supabase Storage:

- Banner images → Supabase 'banner' bucket
- Gallery images → Supabase 'gallery' bucket
- Scanner images → Supabase 'scanner' bucket

## Troubleshooting

### Authentication Issues

If you experience authentication issues:

1. Make sure your Appwrite project has the correct platform settings
2. Check that your session is properly stored in localStorage

### Database Connection Issues

If you experience database connection issues:

1. Verify your Appwrite and Supabase credentials in the `.env` file
2. Check the browser console for specific error messages
3. Ensure the collections/tables exist in the respective services

### Storage Issues

If you experience storage issues:

1. Verify your Supabase storage buckets are properly configured
2. Check that the buckets have the correct permissions
3. Ensure your Supabase anon key has the necessary permissions

## Additional Commands

- `npm run appwrite:check-config` - Check your Appwrite configuration
- `npm run appwrite:update-env` - Update your `.env` file with Appwrite credentials
- `npm run supabase:update-env` - Update your `.env` file with Supabase credentials

## Security Considerations

- Keep your API keys and service role keys secure
- Do not expose them in client-side code
- Use appropriate permissions for your Supabase storage buckets
- Implement proper authorization checks in your application
