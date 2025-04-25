import { createContext, useContext, useState, useEffect, type ReactNode } from '../utils/react-imports';
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

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Set up Supabase auth state listener
    const handler: AuthStateChangeCallback = async (event, currentSession) => {
      console.log('Auth state changed:', event, currentSession?.user?.id);
      setIsLoading(true);
      setSession(currentSession);

      if (currentSession?.user) {
        try {
          console.log('User authenticated, fetching profile for ID:', currentSession.user.id);
          // Fetch user profile from Supabase
          const { data, error }: { data: UserProfile | null; error: PostgrestError | null } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', currentSession.user.id)
            .single();

          if (error) {
            console.error('Error fetching user profile:', error);
            // If profile doesn't exist, create a default one
            if (error.code === 'PGRST116') { // No rows returned
              const newProfile: UserProfile = {
                id: currentSession.user.id,
                email: currentSession.user.email || '',
                is_owner: false, // Default to non-owner
                created_at: new Date().toISOString(),
                permissions: {
                  content_management: false,
                  user_management: false,
                  system_configuration: false,
                  media_uploads: false, // Only owners can upload media
                  security_settings: false,
                  site_customization: false,
                }
              };

              // Insert the new profile
              const { error: insertError } = await supabase
                .from('user_profiles')
                .insert(newProfile);

              if (insertError) {
                console.error('Error creating user profile:', insertError);
              } else {
                setCurrentUser(newProfile);
              }
            }
          } else if (data) {
            // Profile exists, use it
            setCurrentUser(data);
          }
        } catch (error) {
          console.error('Error in auth state change:', error);
        }
      } else {
        // User is signed out
        setCurrentUser(null);
      }

      setIsLoading(false);
    };

    // Subscribe to auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(handler);

    // Initial session check
    const initializeAuth = async () => {
      try {
        console.log('Initializing auth - checking for existing session');
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        console.log('Initial session check result:', initialSession ? 'Session found' : 'No session');

        if (initialSession) {
          setSession(initialSession);
          console.log('User ID from session:', initialSession.user.id);

          // Fetch user profile
          const { data, error }: { data: UserProfile | null; error: PostgrestError | null } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', initialSession.user.id)
            .single();

          if (error) {
            console.error('Error fetching user profile during initialization:', error);
          } else if (data) {
            console.log('User profile found during initialization:', data);
            setCurrentUser(data);
          } else {
            console.warn('No user profile found during initialization');
          }
        }
      } catch (error) {
        console.error('Error checking initial session:', error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Cleanup subscription on unmount
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<{ session: Session } | undefined> => {
    try {
      console.log('Attempting to sign in with Supabase auth');

      // Use the AuthResponse interface for proper typing
      const response: AuthResponse = await supabase.auth.signInWithPassword({ email, password });
      const { data, error } = response;

      if (error) {
        console.error('Supabase auth error:', error);
        alert(`Login Error: ${error.message}`);
        throw new Error(`Supabase auth error: ${error.message}`);
      }

      if (!data || !data.session) {
        console.error('No session returned from login:', data);
        alert('Login failed: No session returned from Supabase.');
        throw new Error('Login failed: No session returned from Supabase.');
      }

      console.log('Supabase auth successful:', data);
      // Return the session data
      return { session: data.session };
    } catch (error) {
      if (error instanceof Error) {
        alert(`Login Error: ${error.message}`);
      }
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const signup = async (email: string, password: string, isOwner: boolean = false): Promise<void> => {
    // Prevent creating new owner accounts from UI
    if (isOwner) {
      console.warn('Attempt to create owner account prevented - owner already exists');
      throw new Error('Owner account already exists. Please use a regular account.');
    }
    try {
      // First create the auth user
      const { data, error }: AuthResponse = await supabase.auth.signUp({
        email,
        password,
        // Important: Include the initial profile data in the metadata
        options: {
          data: {
            is_owner: isOwner, // Changed to match database column name
            permissions: isOwner ? {
              content_management: true,
              user_management: true,
              system_configuration: true,
              media_uploads: true,
              security_settings: true,
              site_customization: true,
            } : {
              content_management: false,
              user_management: false,
              system_configuration: false,
              media_uploads: false,
              security_settings: false,
              site_customization: false,
            }
          }
        }
      });

      if (error) {
        console.error('Supabase signUp error:', error);
        throw new Error(`Supabase signUp error: ${error.message}`);
      }

      if (!data || !data.user) {
        console.error('No user object returned from signUp:', data);
        throw new Error('Signup failed: No user object returned from Supabase.');
      }

      // Sign in the user immediately after signup to ensure they're authenticated
      const { error: signInError }: AuthResponse = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (signInError) {
        console.error('Supabase signIn error after signUp:', signInError);
        throw new Error(`Supabase signIn error after signUp: ${signInError.message}`);
      }

      // Now the user is authenticated, create their profile
      const { error: profileError } = await supabase
        .from('user_profiles')
        .insert({
          id: data.user.id,  // Must match auth.uid()
          email: email,
          is_owner: isOwner, // Using snake_case to match database column name
          created_at: new Date().toISOString(), // Changed to match database column name
          permissions: isOwner ? {
            content_management: true,
            user_management: true,
            system_configuration: true,
            media_uploads: true,
            security_settings: true,
            site_customization: true,
          } : {
            content_management: false,
            user_management: false,
            system_configuration: false,
            media_uploads: false,
            security_settings: false,
            site_customization: false,
          }
        });

      if (profileError) {
        console.error('Error creating profile in user_profiles:', profileError);
        throw new Error(`Error creating profile in user_profiles: ${profileError.message}`);
      }
    } catch (error) {
      // Add more detailed error reporting for debugging
      if (error instanceof Error) {
        alert(`Signup Error: ${error.message}`);
      }
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      const { error }: { error: AuthError | null } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const sendPasswordResetEmail = async (email: string): Promise<void> => {
    try {
      const { error }: { error: AuthError | null } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.origin + '/reset-password',
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error sending password reset:', error);
      throw error;
    }
  };



  const value = {
    currentUser,
    session,
    signup,
    logout,
    login,
    isLoading,
    sendPasswordResetEmail,
    // Optionally, add a loginSuccess callback for navigation
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}


export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
