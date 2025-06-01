// ========================================
// AUTHENTICATION SYSTEM BACKUP
// ========================================
// This file contains all the original authentication code
// that was commented out to implement the simple password system.
// To restore the full auth system, uncomment the relevant sections
// and update the imports in the respective files.

// ========================================
// AuthContext.tsx - ORIGINAL CONTENT
// ========================================
/*
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { supabase } from '../supabaseConfig'; // Import Supabase client
import {
  Session,
  PostgrestError,
  AuthError,
  AuthChangeEvent,
  User
} from '@supabase/supabase-js';

// Define explicit types for Supabase auth responses
interface AuthResponse {
  data: {
    session: Session | null;
    user: User | null;
  };
  error: AuthError | null;
}

// Define explicit types for the auth state change callback
type AuthStateChangeCallback = (event: AuthChangeEvent, session: Session | null) => void;

// User profile data structure
interface UserProfile {
  id: string;
  email: string;
  username?: string;
  is_owner: boolean; // Changed to match database column name
  created_at?: string; // Changed to match database column name
  permissions?: {
    content_management: boolean;
    user_management: boolean;
    system_configuration: boolean;
    media_uploads: boolean;
    security_settings: boolean;
    site_customization: boolean;
  };
}

interface AuthContextType {
  currentUser: UserProfile | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<{ session: Session } | undefined>;
  signup: (email: string, password: string, isOwner: boolean) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

// ... rest of AuthContext implementation
*/

// ========================================
// ProtectedRoute.tsx - ORIGINAL CONTENT
// ========================================
/*
import React, { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: ReactNode;
  requireOwner?: boolean;
}

const ProtectedRoute = ({ children, requireOwner = false }: ProtectedRouteProps) => {
  const { currentUser, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <svg
            className="animate-spin h-8 w-8 text-blue-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (requireOwner && !currentUser.is_owner) {
    return <Navigate to="/home" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
*/

// ========================================
// App.tsx - ORIGINAL ROUTING
// ========================================
/*
// Original protected routes structure:
<Route path="/" element={<Navigate to="/login" replace />} />

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

<Route
  path="/admin"
  element={
    <ProtectedRoute requireOwner={true}>
      <Layout>
        <Suspense fallback={<SuspenseFallback message="Loading admin dashboard..." />}>
          <AdminDashboard />
        </Suspense>
      </Layout>
    </ProtectedRoute>
  }
/>
*/

// ========================================
// RESTORATION INSTRUCTIONS
// ========================================
/*
To restore the full authentication system:

1. Uncomment the AuthContext.tsx content and replace the simplified version
2. Uncomment the ProtectedRoute.tsx content and replace the simplified version
3. Restore the original routing structure in App.tsx
4. Remove the password protection from AdminDashboard
5. Remove the invisible admin button from Home.tsx
6. Update imports in all affected files
7. Restore the Login and Signup pages functionality
*/