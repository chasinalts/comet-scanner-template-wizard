# Auth0 Setup Guide

This guide explains how to set up Auth0 for the COMET Scanner application.

## Overview

The application uses Auth0 for:

- User authentication and session management
- Role-based access control
- User profile management

## Prerequisites

1. An Auth0 account (you can sign up for free at [auth0.com](https://auth0.com))
2. A Netlify account (for deployment)
3. Node.js v18.x or later

## Setup Steps

### 1. Create an Auth0 Application

1. Log in to your Auth0 dashboard
2. Go to "Applications" > "Applications"
3. Click "Create Application"
4. Name it "COMET Scanner Template Wizard"
5. Select "Single Page Application" as the application type
6. Click "Create"

### 2. Configure Auth0 Application Settings

1. In your Auth0 application settings:
   - Set "Allowed Callback URLs" to:
     ```
     http://localhost:3000/callback,
     https://cometscanner.netlify.app/callback
     ```
   - Set "Allowed Logout URLs" to:
     ```
     http://localhost:3000,
     https://cometscanner.netlify.app
     ```
   - Set "Allowed Web Origins" to:
     ```
     http://localhost:3000,
     https://cometscanner.netlify.app
     ```
   - Set "Allowed Origins (CORS)" to:
     ```
     http://localhost:3000,
     https://cometscanner.netlify.app
     ```

2. Save the changes

### 3. Create Auth0 API

1. Go to "Applications" > "APIs"
2. Click "Create API"
3. Name it "COMET Scanner API"
4. Set the Identifier to your Auth0 domain with `/api/v2/` appended (e.g., `https://your-tenant.auth0.com/api/v2/`)
5. Select "RS256" as the signing algorithm
6. Click "Create"

### 4. Set Up Auth0 Rules

1. Go to "Auth Pipeline" > "Rules"
2. Click "Create Rule"
3. Select "Empty Rule"
4. Name it "Add User Roles"
5. Add the following code:

```javascript
function addUserRoles(user, context, callback) {
  // Get user metadata
  const namespace = 'https://cometscanner.netlify.app';
  const assignedRoles = (user.app_metadata && user.app_metadata.roles) || ['user'];
  const isOwner = (user.app_metadata && user.app_metadata.is_owner) || false;
  
  // Add roles to the user's ID token
  context.idToken[`${namespace}/roles`] = assignedRoles;
  context.idToken[`${namespace}/is_owner`] = isOwner;
  
  // Add roles to the user's access token
  context.accessToken[`${namespace}/roles`] = assignedRoles;
  context.accessToken[`${namespace}/is_owner`] = isOwner;
  
  callback(null, user, context);
}
```

6. Click "Save Changes"

### 5. Set Up Environment Variables

1. Create a `.env.local` file in the project root with the following variables:

```
# Auth0 Configuration
VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
VITE_AUTH0_CLIENT_ID=your-auth0-client-id
VITE_AUTH0_AUDIENCE=https://your-auth0-domain.auth0.com/api/v2/

# Auth0 Server-side Configuration (for Netlify functions)
AUTH0_DOMAIN=your-auth0-domain.auth0.com
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret
```

2. Replace the placeholders with your actual Auth0 values

### 6. Set Up Netlify Environment Variables

Run the Auth0 setup script to set up the environment variables in Netlify:

```bash
npm run auth0:setup-env
```

### 7. Set Up User Profiles Table in Supabase

Run the Auth0 user profiles setup script to create the necessary table in Supabase:

```bash
npm run auth0:setup-user-profiles
```

### 8. Deploy to Netlify

Deploy the application to Netlify:

```bash
npm run netlify:deploy
```

## Setting Up Owner Account

To set up an owner account:

1. Sign up for an account in the application
2. Go to your Auth0 dashboard
3. Go to "User Management" > "Users"
4. Find the user you want to make an owner
5. Click on the user to edit their profile
6. Go to the "Metadata" tab
7. Add the following to the "app_metadata" field:

```json
{
  "roles": ["owner"],
  "is_owner": true
}
```

8. Click "Save"

## Troubleshooting

### Authentication Issues

If you encounter authentication issues:

1. Check that your Auth0 domain and client ID are correct
2. Verify that the callback URLs are properly configured
3. Check the browser console for any errors
4. Try clearing localStorage and signing in again

### CORS Issues

If you encounter CORS issues:

1. Make sure your Auth0 application has the correct Allowed Origins (CORS) settings
2. Check that your Netlify site URL is included in the allowed origins

### Role-Based Access Control Issues

If users are not getting the correct roles:

1. Check that the Auth0 rule is properly configured
2. Verify that the user has the correct roles in their app_metadata
3. Check that the application is correctly reading the roles from the ID token

## Additional Resources

- [Auth0 Documentation](https://auth0.com/docs)
- [Auth0 React SDK Documentation](https://auth0.com/docs/libraries/auth0-react)
- [Netlify Documentation](https://docs.netlify.com)
- [Supabase Documentation](https://supabase.io/docs)
