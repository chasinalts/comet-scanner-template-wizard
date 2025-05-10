# Auth0 Universal Login Setup Guide

This guide explains how to set up Auth0 Universal Login for the COMET Scanner application to avoid Quirks Mode rendering issues.

## Overview

The application uses Auth0 Universal Login for:
- User authentication with a modern, consistent experience
- Proper DOCTYPE declaration to avoid Quirks Mode
- Streamlined authentication flow

## Steps to Configure Auth0 Universal Login

1. **Log in to your Auth0 Dashboard**
   - Go to [Auth0 Dashboard](https://manage.auth0.com/)
   - Select your tenant (dev-mytcazei5krtbkqw)

2. **Enable the New Universal Login Experience**
   - Navigate to "Branding" → "Universal Login"
   - Under "Experience", select "New Universal Login Experience"
   - Click "Save Changes"

3. **Configure Login Page Settings**
   - Still in the "Universal Login" section
   - Ensure "Customize Login Page" is turned OFF (unless you want to provide custom HTML)
   - Under "Login Page", make sure the default settings are selected

4. **Configure Prompt Settings**
   - Navigate to "Authentication" → "Authentication Profile"
   - Under "Login Experience", set "Prompt" to "None" (default)
   - This allows our application to control when to show the login prompt

5. **Configure CORS Settings**
   - Navigate to "Applications" → "Applications" → "COMET Scanner Template Wizard"
   - Go to the "Settings" tab
   - Under "Allowed Web Origins", ensure your application URLs are listed:
     - http://localhost:3000
     - https://cometscanner.netlify.app

6. **Configure Callback URLs**
   - In the same "Settings" tab
   - Under "Allowed Callback URLs", ensure your callback URLs are listed:
     - http://localhost:3000/callback
     - https://cometscanner.netlify.app/callback

7. **Configure Logout URLs**
   - Under "Allowed Logout URLs", ensure your logout URLs are listed:
     - http://localhost:3000
     - https://cometscanner.netlify.app

8. **Save Changes**
   - Click "Save Changes" at the bottom of the page

## Verifying the Setup

After completing these steps:

1. Log out of your application if you're currently logged in
2. Navigate to the login page
3. You should be redirected to Auth0's Universal Login page
4. The page should render properly without Quirks Mode warnings
5. After successful authentication, you should be redirected back to your application

## Troubleshooting

If you still see Quirks Mode warnings:

1. **Check Browser Console**
   - Open your browser's developer tools (F12)
   - Look for any warnings about Quirks Mode

2. **Inspect the Auth0 Login Page**
   - Use the browser's developer tools to inspect the HTML
   - Verify that the page has a proper DOCTYPE declaration: `<!DOCTYPE html>`

3. **Contact Auth0 Support**
   - If the issue persists, contact Auth0 support
   - Provide screenshots of the Quirks Mode warnings
   - Ask them to ensure their login page includes a proper DOCTYPE declaration

## Additional Resources

- [Auth0 Universal Login Documentation](https://auth0.com/docs/universal-login)
- [Auth0 Branding Customization](https://auth0.com/docs/customize/universal-login-pages/universal-login-page-customization)
- [Auth0 New Universal Login Experience](https://auth0.com/docs/universal-login/new-experience)
