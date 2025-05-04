# Checkpoint 8 Restore

## Overview

This branch represents a restore to Checkpoint 8 of the COMET Scanner Template Wizard project. This checkpoint is from commit `7d824da` with the message "Fix React hooks imports to use react-imports.ts instead of direct imports".

## Current State

### Authentication and Database

- The project is using **Supabase** for authentication and database functionality
- Authentication is handled through the `AuthContext.tsx` provider
- User profiles are stored in the `user_profiles` table in Supabase
- The project uses Supabase Storage for image storage

### Key Files

- `src/supabaseConfig.ts`: Contains the Supabase client configuration and storage initialization
- `src/contexts/AuthContext.tsx`: Manages authentication state and user profiles
- `src/utils/react-imports.ts`: Centralizes React imports to avoid direct imports

### Dependencies

The project uses the following key dependencies:
- React 18.3.1
- React Router 6.22.0
- Supabase JS Client 2.49.4
- TailwindCSS 3.4.17
- Framer Motion 11.0.5

## Environment Setup

The project requires the following environment variables:
- `VITE_SUPABASE_URL`: The URL of your Supabase project
- `VITE_SUPABASE_ANON_KEY`: The anonymous key for your Supabase project

## Next Steps

1. **Verify Supabase Setup**:
   - Ensure your Supabase project has the correct tables:
     - `user_profiles`: Stores user profile information
   - Set up storage buckets:
     - Create a bucket named `images` with appropriate permissions

2. **Run the Project**:
   ```bash
   npm install
   npm run dev
   ```

3. **Deploy to Netlify**:
   ```bash
   npm run netlify:build
   ```

## Important Notes

- This restore point uses Supabase instead of Appwrite
- The authentication flow is different from the Appwrite implementation
- Storage permissions are managed through Supabase RLS policies
