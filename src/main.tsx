import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/holographic.css'; // Import holographic styles directly
import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';

import analytics from './utils/analytics';
import { initializeStorage } from './supabaseConfig';
import loggingService from './utils/loggingService';

// Supabase handles authentication now

// Make sure the root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  const newRoot = document.createElement('div');
  newRoot.id = 'root';
  document.body.appendChild(newRoot);
  console.warn('Root element not found, created a new one');
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-900">
        <AuthProvider>
          <App />
        </AuthProvider>
      </div>
    </ErrorBoundary>
  </React.StrictMode>
);



// Initialize performance analytics only in browser environment
if (typeof window !== 'undefined') {
  analytics.init();

  // Initialize logging service
  loggingService.initialize();
  console.log('Logging service initialized');

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
