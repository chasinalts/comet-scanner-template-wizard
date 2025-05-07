# Supabase Setup Guide

This guide will help you set up Supabase for the COMET Scanner Template Wizard application.

## Prerequisites

- Node.js v18 or higher
- Supabase account
- Supabase project created

## 1. Set Up Supabase Tables

The application requires an `images` table in Supabase to store image metadata. Run the following command to create the table:

```bash
npm run supabase:setup-images-table
```

This will create the `images` table with the following columns:
- `id` (UUID, primary key)
- `name` (text)
- `file_path` (text)
- `bucket_id` (text)
- `uploaded_at` (timestamp)
- `owner_id` (UUID)
- `image_type` (text) - This should be 'banner', 'gallery', or 'scanner'
- `size` (integer)
- `width` (integer)
- `height` (integer)
- `metadata` (jsonb)

## 2. Set Up Supabase Storage Buckets

The application requires storage buckets in Supabase to store images. Run the following command to create the buckets:

```bash
npm run supabase:setup-buckets
```

This will create the following buckets:
- `banner` - For banner images
- `gallery` - For gallery images
- `scanner` - For scanner images

## 3. Set Up CORS in Supabase

To allow the application to access Supabase from different domains, you need to set up CORS. Run the following command to get instructions:

```bash
npm run supabase:setup-cors
```

Then follow the instructions to set up CORS in the Supabase dashboard:

1. Go to https://app.supabase.com/project/hpbfipnhqakrhlnhluze/settings/api
2. Scroll down to the "CORS" section
3. Add the following origins:
   - http://localhost:3000
   - http://localhost:5173
   - https://cometscanner.netlify.app
   - https://680f06902e429800091e81e5--cometscanner.netlify.app
4. Click "Save"

## 4. Set Up Netlify Environment Variables

To deploy the application to Netlify, you need to set up environment variables. Run the following command:

```bash
npm run netlify:setup-env
```

This will set up the following environment variables in Netlify:
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

## 5. Commit and Push Changes

After making all the changes, commit and push them to GitHub:

```bash
npm run github:commit-push
```

## 6. Deploy to Netlify

Deploy the application to Netlify:

```bash
npm run netlify:deploy
```

## 7. Test the Application

After deployment, test the application to make sure the CORS issues are resolved and images are loading correctly.

## Troubleshooting

### CORS Issues

If you're still experiencing CORS issues, try the following:

1. Make sure the CORS settings in Supabase are correct
2. Check that the Netlify environment variables are set correctly
3. Verify that the application is using the correct Supabase URL and anon key

### Image Loading Issues

If images are not loading correctly, try the following:

1. Check that the storage buckets are created correctly
2. Verify that the `images` table is created correctly
3. Check that the application is using the correct bucket names

## All-in-One Fix

To fix CORS issues, set up Netlify environment variables, and commit/push changes all at once, run:

```bash
npm run fix-cors
```

This will:
1. Set up CORS in Supabase
2. Set up Netlify environment variables
3. Commit and push changes to GitHub
