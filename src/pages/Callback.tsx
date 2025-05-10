// Callback page component that handles Auth0 redirects after authentication
import { useEffect } from '../utils/react-imports';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useAuth } from '../contexts/Auth0Context';
import HolographicText from '../components/ui/HolographicText';

const Callback = () => {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated, error } = useAuth0();
  const { currentUser } = useAuth();

  useEffect(() => {
    console.log('Callback: Auth state', { isLoading, isAuthenticated, error, currentUser });

    // If Auth0 has finished loading and the user is authenticated
    if (!isLoading && isAuthenticated) {
      console.log('Callback: Auth0 authentication successful, redirecting...');

      // If we have a current user, redirect based on role
      if (currentUser) {
        console.log('Callback: Current user found, redirecting based on role', currentUser);
        const isOwner = currentUser.is_owner === true || currentUser.is_owner === 'true';
        const isAdmin = currentUser.role === 'admin';

        if (isOwner || isAdmin) {
          console.log('Callback: User is owner or admin, redirecting to dashboard');
          navigate('/dashboard');
        } else {
          console.log('Callback: User is regular user, redirecting to home');
          navigate('/home');
        }
      } else {
        // If we don't have a current user yet, redirect to home
        console.log('Callback: No current user yet, redirecting to home');
        navigate('/home');
      }
    } else if (!isLoading && !isAuthenticated && error) {
      // If there was an error during authentication
      console.error('Callback: Auth0 authentication error:', error);
      navigate('/login');
    }
  }, [isLoading, isAuthenticated, currentUser, navigate, error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900">
      <div className="text-center">
        <HolographicText
          text="Authenticating..."
          as="h1"
          variant="title"
          className="text-3xl font-bold mb-4"
        />

        {isLoading && (
          <div className="flex justify-center">
            <svg
              className="animate-spin h-10 w-10 text-blue-600"
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
          </div>
        )}

        {error && (
          <div className="mt-4 text-red-500">
            <p>Authentication Error</p>
            <p className="text-sm mt-2">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Callback;
