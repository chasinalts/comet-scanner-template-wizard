import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { verifyAdminSetup } from './utils/verifyAdminSetup';
import { testAdminAccount } from './utils/testAdminSetup';
import { registerServiceWorker } from './utils/serviceWorkerRegistration';
import analytics from './utils/analytics';
import { initializeStorage } from './supabaseConfig';

// Verify admin setup on application start
verifyAdminSetup();

// In development, run the admin account test
if (import.meta.env.DEV) {
  testAdminAccount()
    .then((success: boolean) => {
      console.log('\nAdmin setup verification completed.');
      if (!success) {
        console.warn('Please check the admin account configuration.');
      }
    })
    .catch((error: Error) => {
      console.error('Error during admin setup verification:', error);
    });
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);

// Register service worker for caching only in production and browser environment
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}

// Initialize performance analytics only in browser environment
if (typeof window !== 'undefined') {
  analytics.init();

  // Initialize Supabase storage
  initializeStorage()
    .then(success => {
      if (success) {
        console.log('Supabase storage initialized successfully');
      } else {
        console.warn('Failed to initialize Supabase storage');
      }
    })
    .catch(error => {
      console.error('Error initializing Supabase storage:', error);
    });
}
