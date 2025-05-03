# Appwrite Setup for COMET Scanner

This document provides instructions for setting up Appwrite for the COMET Scanner application.

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

### 2. Set Up Appwrite Resources

Run the setup script to create all necessary Appwrite resources:

```bash
npm run appwrite:setup
```

This script will:
- Create a database named "cometscanner"
- Create collections for user profiles, content, images, and logs
- Add all required attributes to each collection
- Create storage buckets for banner, gallery, and scanner images
- Create indexes for faster queries
- Update your .env file with the correct configuration

### 3. Create an Owner Account

Create an owner account with full permissions:

```bash
npm run appwrite:create-owner
```

You'll be prompted to enter:
- Email address
- Password (minimum 8 characters)
- Name

This account will have full access to the application.

### 4. Create Initial Content

Add initial content to the application:

```bash
npm run appwrite:create-content
```

This will create:
- "What is COMET?" section
- Welcome message

### 5. Configure Appwrite Platform Settings

1. Go to the [Appwrite Console](https://cloud.appwrite.io/console)
2. Select your project
3. Go to "Settings" → "Platform Settings"
4. Add the following hostnames:
   - `cometscanner.netlify.app` (production)
   - `*.netlify.app` (preview deployments)
   - `localhost` (local development)

### 6. Start the Application

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application.

## Troubleshooting

If you encounter issues:

1. Check your .env file for correct configuration
2. Run `npm run appwrite:check-config` to verify your Appwrite setup
3. Ensure your Appwrite project has the correct platform settings

## Additional Commands

- `npm run appwrite:check-config` - Check your Appwrite configuration
- `npm run appwrite:update-env` - Update your .env file with Appwrite credentials
- `npm run appwrite:get-credentials` - Get your Appwrite credentials

## Security Considerations

- Keep your .env file secure and never commit it to version control
- Use environment variables in Netlify for production deployments
- Set up proper collection permissions in the Appwrite Console
