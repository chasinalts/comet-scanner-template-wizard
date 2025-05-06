# COMET Scanner Wizard

A comprehensive setup wizard for scanner configuration built with React, TypeScript, and Vite.

## 🚀 Features

- Interactive scanner configuration wizard
- Real-time code preview
- Admin dashboard for content management
- Responsive design with dark mode support
- Performance optimized with lazy loading and caching

## 🛠️ Technologies

- **Frontend**: React, TypeScript, Tailwind CSS
- **State Management**: React Context API
- **Routing**: React Router
- **UI Components**: Framer Motion, Headless UI
- **Build Tool**: Vite
- **Performance**: Service Worker, Lazy Loading, Memoization

## 📋 Prerequisites

- Node.js (v22+ for development, v18.x for Netlify deployment)
- npm (v10+)
- Netlify CLI (for deployment)

## 🔧 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chasinalts/comet-scanner-template-wizard.git
   cd comet-scanner-template-wizard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Build

To build the application for production:

```bash
npm run build:prod
```

This will:
1. Optimize images
2. Build the application with production settings
3. Generate optimized assets in the `dist` directory

## 🚀 Deployment

### Netlify Deployment

The application is configured for easy deployment to Netlify. When changes are pushed to the main branch, Netlify will automatically build and deploy the application.

#### Manual Netlify Deployment

1. Use the simplified deployment script (recommended):
   ```bash
   npm run deploy
   ```
   This script automatically:
   - Switches to Node.js v18 (required by Netlify)
   - Runs deployment checks
   - Deploys to Netlify

2. Alternatively, you can deploy manually:
   ```bash
   # Build the application
   npm run build

   # Check deployment readiness
   npm run netlify:check

   # Deploy to Netlify
   npm run netlify:deploy
   ```

### GitHub Pages Deployment

You can also deploy to GitHub Pages:

```bash
npm run deploy:github
```

### Manual Deployment

For other hosting providers:

```bash
npm run build:prod
```

Then deploy the `dist` directory to your hosting provider.

## 🧪 Testing

### Performance Testing

To run performance tests:

```bash
npm run test:performance
```

### TypeScript Type Checking

To run TypeScript type checking:

```bash
npm run build:check
```

### Netlify Deployment Testing

To test Netlify deployment locally:

```bash
npm run test:netlify
```

## 🔧 Troubleshooting

### Storage Configuration

#### Appwrite Storage (Recommended)

This project uses Appwrite Storage for image uploads. To configure Appwrite Storage:

1. Create an Appwrite account at https://appwrite.io
2. Create a new project
3. Go to the project settings and copy the endpoint and project ID
4. Create a `.env` file in the root of the project with the following content:

```
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
```

5. Create storage buckets named `banner`, `gallery`, and `scanner` in the Appwrite dashboard

#### Firebase Storage CORS Configuration

If you encounter CORS errors when uploading images to Firebase Storage, you need to configure CORS for your Firebase Storage bucket:

1. **Using Firebase Console (Recommended)**:
   - Go to the Firebase Console: https://console.firebase.google.com/
   - Select your project
   - Go to "Storage" in the left sidebar
   - Click on the "Rules" tab
   - Update your rules to include CORS configuration:

   ```
   service firebase.storage {
     match /b/{bucket}/o {
       match /{allPaths=**} {
         allow read, write: if request.auth != null;

         // CORS configuration
         options {
           cors {
             origin: ["https://cometscanners.netlify.app", "http://localhost:3000"];
             method: ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"];
             maxAgeSeconds: 3600;
             responseHeader: ["Content-Type", "Content-Length", "Content-Encoding", "Content-Disposition"];
           }
         }
       }
     }
   }
   ```

2. **Using Firebase CLI**:
   - Create a `cors.json` file with the following content:
   ```json
   [
     {
       "origin": ["https://cometscanners.netlify.app", "http://localhost:3000"],
       "method": ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
       "maxAgeSeconds": 3600,
       "responseHeader": ["Content-Type", "Content-Length", "Content-Encoding", "Content-Disposition"]
     }
   ]
   ```
   - Run the following commands:
   ```bash
   firebase login
   firebase use your-project-id
   firebase storage:cors update cors.json
   ```

### Resetting User Data

Resetting user data requires administrator credentials. Only administrators can perform this action.

1. Using the UI:
   - Go to the login page
   - Click the "Reset All Data" button at the bottom of the page
   - Enter administrator credentials when prompted
   - Confirm the action in the dialog

2. Using the command line:
   ```bash
   npm run clear-data
   ```
   This will prompt for administrator credentials before providing instructions.

3. For Firebase data (administrator access required):
   - Go to the Firebase Console (https://console.firebase.google.com/)
   - Select your project
   - Go to Authentication > Users and delete any users
   - Go to Firestore Database and delete any user-related documents

### TypeScript Errors

If you encounter TypeScript errors during the build process, you can:

1. Skip TypeScript type checking during build:
   ```bash
   npm run build
   ```
   This will build the application without running TypeScript type checking.

2. Fix TypeScript errors by updating the tsconfig.json file:
   - Set `"strict": false` to disable strict type checking
   - Set `"noUnusedLocals": false` and `"noUnusedParameters": false` to ignore unused variables
   - Update the `moduleResolution` to `"bundler"` or `"node"`

### Netlify Deployment Issues

If you encounter issues with Netlify deployment:

1. **Node.js Version**: Ensure you're using Node.js v18.x for deployment (Netlify requirement)
   ```bash
   # Use the automated deployment script which handles Node.js version
   npm run deploy
   ```

2. **Check Deployment Readiness**:
   ```bash
   npm run netlify:check
   ```
   This will verify that all requirements for deployment are met.

3. **Environment Variables**: Ensure all required environment variables are set in Netlify
   ```bash
   # Set up environment variables from your .env file
   npm run netlify:setup-env
   ```

4. **Build Issues**: Check the Netlify build logs for errors
   - Ensure the base directory is correctly set in netlify.toml
   - Try using the clean build script:
     ```bash
     npm run netlify:clean-build
     ```

## 📝 License

[MIT](LICENSE)

## 👥 Contributors

- Chase Cambre
