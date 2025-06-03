import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './components/ui/Toast';
// import ProtectedRoute from './components/ProtectedRoute';
// Lazy load components for better performance
// const Login = lazy(() => import('./components/Login'));
// const Signup = lazy(() => import('./components/Signup'));
const Home = lazy(() => import('./pages/Home'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function App() {
  // Note: Storage bucket creation should be handled server-side
  // through Supabase migrations or Edge Functions for security

  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <Router>
            <div className="App">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {/* COMMENTED OUT AUTH ROUTES */}
                  {/* <Route path="/login" element={<Login />} /> */}
                  {/* <Route path="/signup" element={<Signup />} /> */}
                  
                  {/* SIMPLIFIED ROUTES - NO PROTECTION */}
                  <Route path="/home" element={<Home />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/" element={<Navigate to="/home" replace />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;