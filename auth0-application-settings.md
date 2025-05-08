# Auth0 Application Settings

## Required Settings

To fix the authentication issues with your COMET Scanner Template Wizard application, you need to update the following settings in your Auth0 application:

### Application URIs

1. **Login URL**:
   ```
   https://cometscanner.netlify.app/login
   http://localhost:5173/login
   http://localhost:3000/login
   ```

2. **Allowed Callback URLs**:
   ```
   https://cometscanner.netlify.app/callback
   http://localhost:5173/callback
   http://localhost:3000/callback
   ```

3. **Allowed Logout URLs**:
   ```
   https://cometscanner.netlify.app
   http://localhost:5173
   http://localhost:3000
   ```

4. **Allowed Web Origins**:
   ```
   https://cometscanner.netlify.app
   http://localhost:5173
   http://localhost:3000
   ```

### Application Settings

1. **Application Type**: Single Page Application
2. **Token Endpoint Authentication Method**: None (found under "Advanced Settings" > "OAuth" tab)
3. **OIDC Conformant**: Yes/Enabled (found under "Advanced Settings" > "OAuth" tab)
4. **Grant Types**: Authorization Code, Implicit, Refresh Token

## How to Update These Settings

1. Log in to your Auth0 dashboard at https://manage.auth0.com/
2. Go to "Applications" > "Applications" in the left sidebar
3. Select your application (the one with client ID `Mp0HS9ZAmmgPVbpDU3lCbe8vr4cQgT6L`)
4. Scroll down to the "Application URIs" section
5. Update all the fields as specified above
6. Under "Advanced Settings" > "Grant Types", ensure that the required grant types are selected
7. Click "Save Changes" at the bottom of the page

## Testing the Configuration

After updating the settings, you can test the configuration by:

1. Running your application locally with `npm run dev`
2. Navigating to the login page
3. Clicking the login button
4. You should be redirected to the Auth0 login page
5. After logging in, you should be redirected back to your application

If you encounter any issues, check the browser console for error messages and ensure that all the settings above are correctly configured.

## Common Issues and Solutions

### "Callback URL mismatch" Error

This error occurs when the callback URL in your application doesn't match any of the allowed callback URLs in your Auth0 application settings. Make sure the callback URL in your application matches one of the allowed callback URLs.

### "Unknown host" Error

This error occurs when the Auth0 domain in your application doesn't match the actual Auth0 domain. Make sure the Auth0 domain in your application is set to `dev-mytcazei5krtbkqw.us.auth0.com`.

### "Invalid client" Error

This error occurs when the client ID in your application doesn't match the actual client ID. Make sure the client ID in your application is set to `Mp0HS9ZAmmgPVbpDU3lCbe8vr4cQgT6L`.

### "Stuck on Authenticating" Issue

If your application gets stuck on the "Authenticating..." screen, it could be due to:

1. The callback URL not being properly handled in your application
2. Issues with the user profile in your database
3. Network issues preventing the callback from completing

Check the browser console for error messages and ensure that your Callback component is properly handling the authentication process.
