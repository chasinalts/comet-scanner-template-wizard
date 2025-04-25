import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/holographic.css'; // Import holographic styles directly
import { AuthProvider } from './contexts/AuthContext';
// Remove Firebase admin setup imports

import analytics from './utils/analytics';
import { initializeStorage } from './supabaseConfig';

// Supabase handles authentication now

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);



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
