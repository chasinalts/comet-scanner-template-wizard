import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useEffect } from 'react';
const { lazy, Suspense } = React;
import ErrorBoundary from './components/ErrorBoundary';
// AuthProvider is already imported in main.tsx
import { WizardProvider } from './contexts/WizardContext';
import { ToastProvider } from './components/ui/Toast';
import { ThemeProvider } from './contexts/ThemeContext';
import ProtectedRoute from './components/ProtectedRoute';
import Layout from './components/layout/Layout';
import SuspenseFallback from './components/ui/SuspenseFallback';
import PerformanceMonitor from './components/dev/PerformanceMonitor';
import UpdateNotification from './components/ui/UpdateNotification';
import CacheDebugger from './components/dev/CacheDebugger';
import { initializeStorage } from './supabaseConfig';
import { useAuth } from './contexts/AuthContext';

// Lazy load page components
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ScannerWizard = lazy(() => import('./pages/ScannerWizard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

import Home from './pages/Home';

function App() {
  const { currentUser, isLoading } = useAuth();

  // Initialize Supabase storage only when the user is authenticated and is an owner
  useEffect(() => {
    const init = async () => {
      // Only proceed if authentication is complete and we have a user
      if (isLoading || !currentUser) return;

      // Check if the user is an owner
      const isOwner = currentUser.is_owner === true || currentUser.is_owner === 'true';

      if (isOwner) {
        try {
          console.log('User is owner, initializing Supabase storage...');
          const result = await initializeStorage();
          console.log('Supabase storage initialization result:', result);
        } catch (error) {
          console.error('Error initializing Supabase storage:', error);
        }
      } else {
        console.log('User is not an owner, skipping storage initialization');
      }
    };

    init();
  }, [currentUser, isLoading]);

  return (
    <ErrorBoundary>
      <Router>
        <WizardProvider>
          <ThemeProvider>
            <ToastProvider>
              {/* Performance monitor (only visible in development) */}
              <PerformanceMonitor />
              <UpdateNotification />
              <CacheDebugger />
              <Routes>
                {/* Login is the first page */}
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
            </ToastProvider>
          </ThemeProvider>
        </WizardProvider>
      </Router>
    </ErrorBoundary>
  );
}

export default App;