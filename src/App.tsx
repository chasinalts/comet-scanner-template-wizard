import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
const { lazy, Suspense } = React;
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

// Lazy load page components
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ScannerWizard = lazy(() => import('./pages/ScannerWizard'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

import Home from './pages/Home';

function App() {
  return (
    <Router>
        <WizardProvider>
          <ThemeProvider>
            <ToastProvider>
              {/* Performance monitor (only visible in development) */}
              <PerformanceMonitor />
              <UpdateNotification />
              <CacheDebugger />
              <Routes>
                {/* Home Page Route - Protected */}
                <Route
                  path="/"
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
                {/* Redirect unauthenticated root to login */}
                <Route path="*" element={<Navigate to="/login" replace />} />
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

                {/* Protected Admin Dashboard Route */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute ownerOnly>
                      <Layout>
                        <Suspense fallback={<SuspenseFallback message="Loading admin dashboard..." />}>
                          <AdminDashboard />
                        </Suspense>
                      </Layout>
                    </ProtectedRoute>
                  }
                />

                {/* Redirect root to scanner or login based on auth state */}
                <Route
                  path="/"
                  element={<Navigate to="/scanner" replace />}
                />

                {/* Catch all route - redirect to scanner */}
                <Route
                  path="*"
                  element={<Navigate to="/scanner" replace />}
                />
              </Routes>
            </ToastProvider>
          </ThemeProvider>
        </WizardProvider>
    </Router>
  );
}

export default App;