# Netlify Functions

This directory contains serverless functions that are deployed to Netlify.

## Available Functions

- `api.js` - General API handler
- `process-image.js` - Image processing function
- `blob-handler.js` - File upload handler
- `auth0-logout.js` - Auth0 logout handler
- `set-owner.js` - Set owner permissions function
- `check-processing-status.js` - Check image processing status
- `analytics.js` - Analytics tracking function
- `process-image-handler.js` - Image processing handler

## Deployment

These functions are automatically deployed to Netlify when you push to the main branch.

## Local Development

To test these functions locally, you can use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify dev
```

This will start a local development server that includes your Netlify functions.
