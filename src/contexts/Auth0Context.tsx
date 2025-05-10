// Auth0 context that manages user authentication state, login/logout functionality, and user profiles
import { createContext, useContext, useState, useEffect, type ReactNode } from '../utils/react-imports';
import { useAuth0 } from '@auth0/auth0-react';
import { supabaseClient } from '../supabaseConfig';
import { getUserRoleFromMetadata, getPermissionsForRole, OWNER_ROLE, ADMIN_ROLE, USER_ROLE } from '../auth0Config';

// Define the user profile interface
export interface UserProfile {
  id: string;
  email: string;
  username?: string;
  role: string;
  is_owner: boolean;
  created_at?: string;
  last_sign_in_at?: string;
  permissions?: {
    content_management: boolean;
    user_management: boolean;
    system_configuration: boolean;
    media_uploads: boolean;
    security_settings: boolean;
    site_customization: boolean;
  };
}

// Define the Auth context interface
interface Auth0ContextType {
  currentUser: UserProfile | null;
  isLoading: boolean;
  login: () => void;
  signup: () => void;
  logout: () => void;
  sendPasswordResetEmail: (email: string) => Promise<void>;
}

// Create the Auth context
export const Auth0Context = createContext<Auth0ContextType | undefined>(undefined);

// Auth0 provider component
export function Auth0Provider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const {
    isLoading: auth0IsLoading,
    isAuthenticated,
    user,
    loginWithRedirect,
    logout: auth0Logout,
    getAccessTokenSilently
  } = useAuth0();

  // Effect to set up user profile when Auth0 authentication state changes
  useEffect(() => {
    const setupUserProfile = async () => {
      try {
        // If still loading Auth0 or not authenticated, return
        if (auth0IsLoading) {
          return;
        }

        if (!isAuthenticated || !user) {
          setCurrentUser(null);
          setIsLoading(false);
          return;
        }

        console.log('Auth0 user:', user);

        // Get user metadata from Auth0
        const role = getUserRoleFromMetadata(user.user_metadata);
        const isOwner = role === OWNER_ROLE;

        // Get permissions based on role
        const permissions = getPermissionsForRole(role);

        // Check if user exists in Supabase
        const { data: existingUser, error: fetchError } = await supabaseClient
          .from('user_profiles')
          .select('*')
          .eq('auth0_id', user.sub)
          .single();

        if (fetchError && fetchError.code !== 'PGRST116') { // PGRST116 is "no rows returned"
          console.error('Error fetching user profile:', fetchError);
        }

        // If user doesn't exist in Supabase, create a new profile
        if (!existingUser) {
          console.log('Creating new user profile in Supabase');
          const { data: newUser, error: createError } = await supabaseClient
            .from('user_profiles')
            .insert([
              {
                auth0_id: user.sub,
                email: user.email,
                username: user.nickname || user.name,
                is_owner: isOwner,
                role: role,
                created_at: new Date().toISOString(),
                permissions: permissions
              }
            ])
            .select()
            .single();

          if (createError) {
            console.error('Error creating user profile:', createError);
          } else {
            console.log('New user profile created:', newUser);
            // Set the current user with the new profile
            setCurrentUser({
              id: newUser.id,
              email: newUser.email,
              role: newUser.role,
              is_owner: newUser.is_owner,
              created_at: newUser.created_at,
              permissions: newUser.permissions
            });
          }
        } else {
          console.log('Using existing user profile:', existingUser);
          // Set the current user with the existing profile
          setCurrentUser({
            id: existingUser.id,
            email: existingUser.email,
            role: existingUser.role,
            is_owner: existingUser.is_owner,
            created_at: existingUser.created_at,
            permissions: existingUser.permissions
          });
        }

        setIsLoading(false);
      } catch (error) {
        console.error('Error setting up user profile:', error);
        setIsLoading(false);
      }
    };

    setupUserProfile();
  }, [auth0IsLoading, isAuthenticated, user]);

  // Login function - uses Universal Login
  const login = () => {
    console.log('Redirecting to Auth0 login page');
    loginWithRedirect({
      authorizationParams: {
        prompt: 'login',
      },
    });
  };

  // Signup function - uses Universal Login with signup hint
  const signup = () => {
    console.log('Redirecting to Auth0 signup page');
    loginWithRedirect({
      authorizationParams: {
        screen_hint: 'signup',
      },
    });
  };

  // Logout function
  const logout = () => {
    console.log('Logging out');
    auth0Logout({
      logoutParams: {
        returnTo: window.location.origin
      }
    });
  };

  // Send password reset email
  const sendPasswordResetEmail = async (email: string): Promise<void> => {
    try {
      // Auth0 doesn't have a direct method for this in the SDK
      // We'll use the Auth0 Management API via a Netlify function
      const response = await fetch('/.netlify/functions/auth0-reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Failed to send password reset email');
      }
    } catch (error) {
      console.error('Error sending password reset:', error);
      throw error;
    }
  };

  // Context value
  const value = {
    currentUser,
    isLoading: isLoading || auth0IsLoading,
    login,
    signup,
    logout,
    sendPasswordResetEmail,
  };

  return <Auth0Context.Provider value={value}>{children}</Auth0Context.Provider>;
}

// Custom hook to use the Auth context
export const useAuth = (): Auth0ContextType => {
  const context = useContext(Auth0Context);
  if (context === undefined) {
    throw new Error('useAuth must be used within an Auth0Provider');
  }
  return context;
};
