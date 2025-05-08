// Main application component that defines the routing structure and overall layout of the COMET Scanner Template Wizard app
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import { useEffect } from './utils/react-imports';
const { lazy, Suspense } = React;
// ErrorBoundary removed to fix TypeScript errors
import { Auth0Provider } from '@auth0/auth0-react';
import { Auth0Provider as CustomAuth0Provider } from './contexts/Auth0Context';
import { WizardProvider } from './contexts/WizardContext';
import { ToastProvider } from './components/ui/Toast';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/layout/Layout';
import SuspenseFallback from './components/ui/SuspenseFallback';
import { auth0Config } from './auth0Config';
import { useAuth } from './contexts/Auth0Context';

// Lazy load page components
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ScannerWizard = lazy(() => import('./pages/ScannerWizard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const Callback = lazy(() => import('./pages/Callback'));

import Home from './pages/Home';

// No need for a wrapper since we're importing the component directly

function AppContent() {
  const { currentUser, isLoading } = useAuth();

  // Initialize storage only when the user is authenticated and is an owner
  useEffect(() => {
    const init = async () => {
      // Only proceed if authentication is complete and we have a user
      if (isLoading || !currentUser) return;

      // Check if the user is an owner
      const isOwner = currentUser.is_owner === true || currentUser.is_owner === 'true';

      if (isOwner) {
        try {
          console.log('User is owner, storage already initialized by Supabase');
          // Supabase buckets are created through the setup scripts
        } catch (error) {
          console.error('Error with storage:', error);
        }
      } else {
        console.log('User is not an owner, skipping storage initialization');
      }
    };

    init();
  }, [currentUser, isLoading]);

  // Set up a timeout to prevent getting stuck in loading state
  useEffect(() => {
    let loadingTimeout: NodeJS.Timeout | null = null;

    if (isLoading) {
      loadingTimeout = setTimeout(() => {
        console.log('App: Auth loading timed out after 8 seconds, forcing navigation to login');
        window.location.href = '/login'; // Force navigation to login page
      }, 8000);
    }

    return () => {
      if (loadingTimeout) clearTimeout(loadingTimeout);
    };
  }, [isLoading]);

  // Show a loading indicator while auth is being determined
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900" style={{ backgroundColor: '#0f172a' }}>
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent"></div>
          <p className="text-gray-300 text-lg">Verifying authentication...</p>
          <button
            onClick={() => window.location.href = '/login'}
            className="mt-8 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <Routes>
      {/* Login is the entry point for unauthenticated users */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Home Page Route - Protected but accessible to all authenticated users */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<SuspenseFallback message='Loading home page...' />}>
                <Home />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Public Routes */}
      <Route
        path="/login"
        element={
          <Layout>
            <Suspense fallback={<SuspenseFallback message="Loading login page..." />}>
              <Login />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/signup"
        element={
          <Layout>
            <Suspense fallback={<SuspenseFallback message="Loading signup page..." />}>
              <Signup />
            </Suspense>
          </Layout>
        }
      />
      <Route
        path="/callback"
        element={
          <Suspense fallback={<SuspenseFallback message="Processing authentication..." />}>
            <Callback />
          </Suspense>
        }
      />
      {/* Owner setup route removed - owner account already created */}

      {/* Protected Routes */}
      <Route
        path="/scanner"
        element={
          <ProtectedRoute>
            <Layout>
              <Suspense fallback={<SuspenseFallback message="Loading scanner wizard..." />}>
                <ScannerWizard />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Protected Admin Dashboard Route - Accessible by owners and admins */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute requireAdmin={true}>
            <Layout>
              <Suspense fallback={<SuspenseFallback message="Loading admin dashboard..." />}>
                <AdminDashboard />
              </Suspense>
            </Layout>
          </ProtectedRoute>
        }
      />

      {/* Catch all route - redirect to login */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN || 'cometscanner.us.auth0.com'}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || 'your-client-id'}
        authorizationParams={{
          redirect_uri: `${window.location.origin}/callback`,
          audience: import.meta.env.VITE_AUTH0_AUDIENCE || 'https://cometscanner.netlify.app/api',
          scope: 'openid profile email'
        }}
        cacheLocation="localstorage"
        useRefreshTokens={true}
      >
        <WizardProvider>
          <ThemeProvider>
            <ToastProvider>
              <CustomAuth0Provider>
                <AppContent />
              </CustomAuth0Provider>
            </ToastProvider>
          </ThemeProvider>
        </WizardProvider>
      </Auth0Provider>
    </Router>
  );
}

export default App;