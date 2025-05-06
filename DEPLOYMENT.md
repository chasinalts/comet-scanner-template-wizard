# COMET Scanner Deployment Guide

This guide provides detailed instructions for deploying the COMET Scanner Template Wizard application to Netlify.

## Prerequisites

- Node.js v18.x (required for Netlify deployment)
- npm or yarn
- Netlify CLI
- Git

## Deployment Options

### Option 1: Automated Deployment (Recommended)

The project includes an automated deployment script that handles all the necessary steps:

```bash
npm run deploy
```

This script:
1. Automatically switches to Node.js v18 (required by Netlify)
2. Runs deployment checks to ensure everything is ready
3. Builds the application
4. Deploys to Netlify

### Option 2: Manual Deployment

If you prefer to deploy manually, follow these steps:

1. **Switch to Node.js v18**:
   ```bash
   # If using nvm
   nvm use 18
   
   # Verify Node.js version
   node -v
   ```

2. **Check deployment readiness**:
   ```bash
   npm run netlify:check
   ```

3. **Build the application**:
   ```bash
   npm run build
   ```

4. **Deploy to Netlify**:
   ```bash
   npm run netlify:deploy
   ```

## Environment Variables

The application requires several environment variables to function properly. These should be set in your Netlify project settings.

### Setting Environment Variables in Netlify

1. **Automated Method**:
   ```bash
   npm run netlify:setup-env
   ```
   This script will automatically set all environment variables from your local `.env` file to Netlify.

2. **Manual Method**:
   - Go to the Netlify dashboard
   - Select your site
   - Go to Site settings > Build & deploy > Environment
   - Add the following environment variables:

   | Variable | Description |
   |----------|-------------|
   | `VITE_APPWRITE_ENDPOINT` | Appwrite API endpoint |
   | `VITE_APPWRITE_PROJECT_ID` | Appwrite project ID |
   | `VITE_APPWRITE_DATABASE_ID` | Appwrite database ID |
   | `VITE_SUPABASE_URL` | Supabase project URL |
   | `VITE_SUPABASE_ANON_KEY` | Supabase anonymous key |
   | `NODE_VERSION` | Set to `18.20.0` |

## Netlify Configuration

The project includes a `netlify.toml` file that configures the build settings for Netlify:

```toml
[build]
  command = "npm run netlify:clean-build"
  publish = "dist"

[dev]
  command = "npm run dev"
  targetPort = 3000
  port = 8888
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## Troubleshooting

### Node.js Version Issues

Netlify requires Node.js v18.x for deployment. If you're using a different version locally, you can:

1. Use the automated deployment script:
   ```bash
   npm run deploy
   ```

2. Install and use nvm to switch Node.js versions:
   ```bash
   nvm install 18
   nvm use 18
   ```

### Deployment Failures

If deployment fails, check the following:

1. **Netlify Build Logs**:
   - Check the build logs in the Netlify dashboard for specific errors

2. **Environment Variables**:
   - Ensure all required environment variables are set
   - Run `npm run netlify:setup-env` to set them automatically

3. **Build Command**:
   - Ensure the build command in `netlify.toml` is correct
   - Try running the build locally:
     ```bash
     npm run netlify:clean-build
     ```

4. **Secrets Scanning**:
   - Netlify scans for secrets in the build output
   - If you're getting secrets scanning errors, add the following to your `netlify.toml`:
     ```toml
     [build.environment]
       SECRETS_SCAN_OMIT_PATHS = "dist/assets/js/index-*.js,*.md"
     ```

## Continuous Deployment

To set up continuous deployment:

1. Connect your GitHub repository to Netlify
2. Configure Netlify to deploy automatically when changes are pushed to the main branch
3. Ensure all environment variables are set in Netlify

## Checking Deployment Status

To check the status of your deployment:

```bash
netlify status
```

This will show information about your site, including the site URL and admin URL.

## Viewing Deployed Site

After successful deployment, you can view your site at:

```
https://cometscanner.netlify.app
```

Or at your custom domain if you've configured one in Netlify.
