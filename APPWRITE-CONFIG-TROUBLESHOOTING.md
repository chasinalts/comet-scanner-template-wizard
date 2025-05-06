# Appwrite Configuration Troubleshooting

This guide helps you troubleshoot and fix common issues with the Appwrite configuration in the COMET Scanner application.

## Common Issues

### "databases.get is not a function" Error

This error occurs because the script is using the wrong Appwrite SDK. The `check-appwrite-config.js` script has been updated to use the `node-appwrite` SDK instead of the client-side `appwrite` SDK.

### "Not logged in. Some checks will be skipped."

This message appears when the script can't authenticate with Appwrite. This is usually because:

1. You don't have an API key set in your `.env` file
2. The API key doesn't have the necessary permissions
3. The API key is invalid

## How to Fix

### 1. Set Up Your API Key

Run the following command to set up your Appwrite API key:

```bash
npm run appwrite:setup-api-key
```

This script will:
1. Guide you through creating an API key in the Appwrite console
2. Add the API key to your `.env` file

### 2. Check Your Configuration

After setting up your API key, run the configuration check:

```bash
npm run appwrite:check-config
```

If you want more detailed logs, run:

```bash
DEBUG=1 npm run appwrite:check-config
```

### 3. Verify Your Database ID

Make sure your `VITE_APPWRITE_DATABASE_ID` in the `.env` file matches an actual database in your Appwrite project. You can check your available databases in the Appwrite console.

## Required Permissions

Your API key needs the following permissions:

- `databases.read`
- `databases.write`
- `users.read`
- `users.write`
- `storage.read`
- `storage.write`

## Environment Variables

Make sure you have the following variables in your `.env` file:

```
# Client-side variables (exposed to the browser)
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id

# Server-side variables (not exposed to the browser)
APPWRITE_API_KEY=your-api-key
```

## Manual Verification

You can manually verify your Appwrite configuration by:

1. Logging into the [Appwrite Console](https://cloud.appwrite.io/console)
2. Selecting your project
3. Going to the "Databases" section
4. Checking that your database exists and has the expected collections

## Need More Help?

If you're still having issues, try:

1. Checking the Appwrite logs in the console
2. Running the script with debug mode: `DEBUG=1 npm run appwrite:check-config`
3. Verifying your network connection to the Appwrite server
4. Creating a new API key with all necessary permissions
