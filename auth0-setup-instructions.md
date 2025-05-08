
# Auth0 Application Settings Update Instructions

Follow these steps to update your Auth0 application settings:

1. Log in to your Auth0 dashboard at https://manage.auth0.com/
2. Go to "Applications" > "Applications" in the left sidebar
3. Select your application (the one with client ID `Mp0HS9ZAmmgPVbpDU3lCbe8vr4cQgT6L`)
4. Scroll down to the "Application URIs" section
5. Update the following fields:

## Allowed Callback URLs
```
http://localhost:3000/callback,
http://localhost:5173/callback,
https://cometscanner.netlify.app/callback
```

## Allowed Logout URLs
```
http://localhost:3000,
http://localhost:5173,
https://cometscanner.netlify.app
```

## Allowed Web Origins
```
http://localhost:3000,
http://localhost:5173,
https://cometscanner.netlify.app
```

6. Under "Advanced Settings" > "Grant Types", ensure that the following are selected:
   - Authorization Code
   - Implicit
   - Refresh Token

7. Click "Save Changes" at the bottom of the page

After completing these steps, your Auth0 application will be properly configured to work with your COMET Scanner Template Wizard application.
