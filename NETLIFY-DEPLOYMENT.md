# Netlify Deployment Guide

This guide explains how to deploy the COMET Scanner application to Netlify.

## Prerequisites

Before deploying to Netlify, make sure you have:

1. An Appwrite project set up with the necessary collections and buckets
2. A Netlify account
3. Node.js v18.x installed (Netlify requires this version)

## Automated Setup

We've created scripts to automate the deployment process. Follow these steps:

1. **Install Netlify CLI** (if not already installed):
   ```bash
   npm install -g netlify-cli
   ```

2. **Set up Netlify environment variables**:
   ```bash
   npm run netlify:setup-env
   ```
   This script will:
   - Check if Netlify CLI is installed
   - Log you in to Netlify if needed
   - Link your site to Netlify if needed
   - Set up the necessary environment variables
   - Optionally deploy your site

3. **Deploy to Netlify**:
   ```bash
   npm run netlify:deploy
   ```

## Manual Setup

If you prefer to set up Netlify manually, follow these steps:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Log in to Netlify**:
   ```bash
   netlify login
   ```

3. **Initialize Netlify in your project**:
   ```bash
   netlify init
   ```

4. **Set up environment variables**:
   ```bash
   netlify env:set VITE_APPWRITE_ENDPOINT "https://cloud.appwrite.io/v1"
   netlify env:set VITE_APPWRITE_PROJECT_ID "your-project-id"
   netlify env:set VITE_APPWRITE_DATABASE_ID "your-database-id"
   ```

5. **Deploy your site**:
   ```bash
   netlify deploy --prod
   ```

## Configuration Files

The project includes the following configuration files for Netlify:

1. **netlify.toml**: Configures build settings, redirects, and headers
2. **netlify-build.js**: Custom build script for Netlify
3. **netlify-node-version.js**: Sets the Node.js version for Netlify

## Troubleshooting

### Build Failures

If your build fails, check the following:

1. **Node.js version**: Make sure you're using Node.js v18.x
   ```bash
   node -v
   ```

2. **Environment variables**: Make sure all required environment variables are set
   ```bash
   netlify env:list
   ```

3. **Secrets scanning**: If the build fails due to secrets scanning, update the `SECRETS_SCAN_OMIT_PATHS` in netlify.toml

### CORS Issues

If you encounter CORS issues with Appwrite:

1. Add your Netlify domain to the allowed platforms in your Appwrite project settings
2. Make sure your Appwrite endpoint is correctly set in the environment variables

### Authentication Issues

If authentication doesn't work:

1. Make sure your redirect URLs are properly configured in Appwrite
2. Check that your environment variables are correctly set in Netlify

## Continuous Deployment

Netlify supports continuous deployment from GitHub. To set it up:

1. Connect your GitHub repository to Netlify
2. Configure the build settings:
   - Build command: `npm run netlify:clean-build`
   - Publish directory: `dist`
3. Set up the environment variables in the Netlify dashboard

## Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#netlify)
