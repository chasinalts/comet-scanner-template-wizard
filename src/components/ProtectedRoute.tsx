import { ReactNode, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../supabaseConfig';

interface ProtectedRouteProps {
  children: ReactNode;
  requireOwner?: boolean;
}

const ProtectedRoute = ({ children, requireOwner = false }: ProtectedRouteProps) => {
  const { currentUser, isLoading, session } = useAuth();
  const location = useLocation();
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        console.log('ProtectedRoute: Checking authentication');
        console.log('Current session:', session);
        console.log('Current user:', currentUser);

        // If we're still loading auth state, wait
        if (isLoading) {
          console.log('ProtectedRoute: Auth is still loading');
          return;
        }

        // Check if we have a session but no user profile
        if (session && !currentUser) {
          console.log('ProtectedRoute: Have session but no user profile, checking session');

          // Double-check session validity
          const { data: sessionData } = await supabase.auth.getSession();
          console.log('Session check result:', sessionData.session ? 'Valid session' : 'No valid session');

          if (!sessionData.session) {
            // Session is invalid, set access to false
            console.log('ProtectedRoute: Session is invalid');
            setHasAccess(false);
            setIsCheckingAuth(false);
            return;
          }

          // We have a valid session but no user profile, wait a bit longer
          console.log('ProtectedRoute: Valid session but no user profile yet, waiting...');
          setTimeout(() => {
            setIsCheckingAuth(false);
          }, 2000); // Give it 2 seconds to load the profile
          return;
        }

        // No session, definitely no access
        if (!session) {
          console.log('ProtectedRoute: No session, no access');
          setHasAccess(false);
          setIsCheckingAuth(false);
          return;
        }

        // We have a user, check if they meet the owner requirement
        if (requireOwner && !currentUser?.is_owner) {
          console.log('ProtectedRoute: Owner required but user is not owner');
          setHasAccess(false);
          setIsCheckingAuth(false);
          return;
        }

        // User has access
        console.log('ProtectedRoute: User has access');
        setHasAccess(true);
        setIsCheckingAuth(false);
      } catch (error) {
        console.error('ProtectedRoute: Error checking auth', error);
        setHasAccess(false);
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [currentUser, isLoading, requireOwner, session]);

  // Show loading state while checking auth
  if (isLoading || isCheckingAuth) {
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
          <span className="text-gray-600">Loading...</span>
        </div>
      </div>
    );
  }

  // No access, redirect appropriately
  if (!hasAccess) {
    if (!session) {
      // No session, redirect to login
      console.log('ProtectedRoute: Redirecting to login');
      return <Navigate to="/login" state={{ from: location.pathname }} replace />;
    }

    if (requireOwner && currentUser && !currentUser.is_owner) {
      // User is not an owner, redirect to home
      console.log('ProtectedRoute: Redirecting to home (not owner)');
      return (
        <Navigate
          to="/home"
          state={{ error: 'Owner access required' }}
          replace
        />
      );
    }

    // Generic access denied, redirect to login
    console.log('ProtectedRoute: Redirecting to login (generic access denied)');
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // User has access, render the protected content
  console.log('ProtectedRoute: Rendering protected content');
  return <>{children}</>;
};

export default ProtectedRoute;