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

- Node.js (v22+)
- npm (v10+)

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

1. Build the application:
   ```bash
   npm run build
   ```

2. Test the Netlify deployment locally:
   ```bash
   npm run test:netlify
   ```

3. Deploy to Netlify using the Netlify CLI:
   ```bash
   npx netlify deploy --prod
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

1. Check the Netlify build logs for errors
2. Ensure the base directory is correctly set in netlify.toml
3. Run the local Netlify deployment test:
   ```bash
   npm run test:netlify
   ```
4. Try using the direct Vite build script:
   ```bash
   npm run vite:build
   ```

## 📝 License

[MIT](LICENSE)

## 👥 Contributors

- Chase Cambre
