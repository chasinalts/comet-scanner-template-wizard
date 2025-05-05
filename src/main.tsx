import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/holographic.css'; // Import holographic styles directly
import { AuthProvider } from './contexts/AuthContext';
import ErrorBoundary from './components/ErrorBoundary';

import analytics from './utils/analytics';
import { initializeStorage } from './appwriteConfig.ts';
import loggingService from './utils/loggingService';
import { initializeAppwriteSession } from './utils/sessionHelper';

// Appwrite handles authentication now

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
        <App />
      </div>
    </ErrorBoundary>
  </React.StrictMode>
);



// Initialize performance analytics only in browser environment
if (typeof window !== 'undefined') {
  // Initialize Appwrite session handling for third-party cookie restrictions
  // This needs to be done before any other Appwrite operations
  initializeAppwriteSession();
  console.log('Appwrite session handler initialized');

  // Initialize analytics
  analytics.init();

  // Initialize logging service
  loggingService.initialize();
  console.log('Logging service initialized');

  // Initialize Appwrite storage
  initializeStorage()
    .then(success => {
      if (success) {
        console.log('Appwrite storage initialized successfully');
      } else {
        console.warn('Failed to initialize Appwrite storage');
      }
    })
    .catch(error => {
      console.error('Error initializing Appwrite storage:', error);
    });
}
