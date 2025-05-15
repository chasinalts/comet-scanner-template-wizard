# Auth0 and Supabase Setup Guide

This guide explains how to set up Auth0 and Supabase for the COMET Scanner Template Wizard application.

## Prerequisites

1. Auth0 account (you can sign up for free at [auth0.com](https://auth0.com))
2. Supabase account (you can sign up for free at [supabase.com](https://supabase.com))
3. Node.js v18.x or later

## Auth0 Setup

### 1. Create an Auth0 Application

1. Log in to your Auth0 dashboard
2. Go to "Applications" > "Applications"
3. Click "Create Application"
4. Name it "COMET Scanner Template Wizard"
5. Select "Single Page Application" as the application type
6. Click "Create"

### 2. Configure Auth0 Application Settings

1. In your Auth0 application settings, set the following:
   - **Allowed Callback URLs**:
     ```
     http://localhost:3000/callback,
     http://localhost:5173/callback,
     https://cometscanner.netlify.app/callback
     ```
   - **Allowed Logout URLs**:
     ```
     http://localhost:3000,
     http://localhost:5173,
     https://cometscanner.netlify.app
     ```
   - **Allowed Web Origins**:
     ```
     http://localhost:3000,
     http://localhost:5173,
     https://cometscanner.netlify.app
     ```

2. Scroll down and click "Save Changes"

### 3. Set Up Auth0 API

1. Go to "Applications" > "APIs"
2. Click "Create API"
3. Name it "COMET Scanner API"
4. Set the Identifier to `https://cometscanner.netlify.app/api`
5. Click "Create"

### 4. Set Up Auth0 Rules

1. Go to "Auth Pipeline" > "Rules"
2. Click "Create Rule"
3. Select "Empty Rule"
4. Name it "Set User Roles"
5. Add the following code:

```javascript
function setUserRoles(user, context, callback) {
  // Set the owner role for specific users
  if (user.email === 'chasinalts@gmail.com') {
    context.idToken['https://cometscanner.netlify.app/roles'] = ['owner'];
    context.accessToken['https://cometscanner.netlify.app/roles'] = ['owner'];
  } else if (user.email.includes('admin')) {
    context.idToken['https://cometscanner.netlify.app/roles'] = ['admin'];
    context.accessToken['https://cometscanner.netlify.app/roles'] = ['admin'];
  } else {
    context.idToken['https://cometscanner.netlify.app/roles'] = ['user'];
    context.accessToken['https://cometscanner.netlify.app/roles'] = ['user'];
  }
  
  callback(null, user, context);
}
```

6. Click "Save Changes"

### 5. Update Environment Variables

1. Create or update your `.env` file with the following Auth0 variables:
   ```
   VITE_AUTH0_DOMAIN=your-auth0-domain.auth0.com
   VITE_AUTH0_CLIENT_ID=your-auth0-client-id
   VITE_AUTH0_AUDIENCE=https://cometscanner.netlify.app/api
   ```

## Supabase Setup

### 1. Create a Supabase Project

1. Log in to your Supabase dashboard
2. Click "New Project"
3. Enter a name for your project (e.g., "comet-scanner")
4. Set a secure database password
5. Choose a region close to your users
6. Click "Create New Project"

### 2. Get Supabase Credentials

1. In your Supabase project dashboard, go to "Project Settings" > "API"
2. Copy the "Project URL" and "anon" key
3. Update your `.env` file with these values:
   ```
   VITE_SUPABASE_URL=your-supabase-project-url
   VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
   SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
   ```

### 3. Set Up Supabase Tables and Storage

1. Run the setup script to create the necessary tables and storage buckets:
   ```
   npm run supabase:setup
   ```

   This script will:
   - Create the `user_profiles`, `images`, and `logs` tables
   - Set up Row Level Security (RLS) policies
   - Create the `banner`, `gallery`, and `scanner` storage buckets

2. Verify that the tables and buckets were created successfully in the Supabase dashboard

## Connecting Auth0 with Supabase

The application is set up to automatically sync Auth0 users with Supabase. When a user authenticates with Auth0, their profile information is stored in the Supabase `user_profiles` table.

## Testing the Integration

1. Start the application:
   ```
   npm run dev
   ```

2. Navigate to `http://localhost:5173/login`
3. Click "Sign In with Auth0"
4. Complete the Auth0 authentication flow
5. You should be redirected back to the application and logged in
6. Check the Supabase `user_profiles` table to verify that the user was created

## Troubleshooting

### Auth0 Issues

- **Callback URL errors**: Make sure the callback URLs in your Auth0 application settings match the URLs in your application
- **Token errors**: Check that your Auth0 domain and client ID are correct in your `.env` file
- **Role issues**: Verify that the Auth0 rule for setting user roles is active

### Supabase Issues

- **Connection errors**: Check that your Supabase URL and anon key are correct in your `.env` file
- **Permission errors**: Verify that the RLS policies are set up correctly
- **Storage errors**: Make sure the storage buckets exist and have the correct permissions

## Additional Resources

- [Auth0 Documentation](https://auth0.com/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Auth0 React SDK](https://auth0.com/docs/libraries/auth0-react)
- [Supabase JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
