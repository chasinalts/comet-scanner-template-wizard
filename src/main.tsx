import React from 'react';
import * as ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/holographic.css'; // Import holographic styles directly
import { AuthProvider } from './contexts/AuthContext';
// Remove Firebase admin setup imports
import { registerServiceWorker } from './utils/serviceWorkerRegistration';
import analytics from './utils/analytics';
import { initializeStorage } from './supabaseConfig';

// Supabase handles authentication now

createRoot(document.getElementById('root') as HTMLElement).render(
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
