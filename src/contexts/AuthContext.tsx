import { createContext, useContext, useState, useEffect, type ReactNode } from '../utils/react-imports';
import { supabase } from '../supabaseConfig'; // Import Supabase client
import { Session } from '@supabase/supabase-js';

// User profile data structure
interface UserProfile {
  id: string;
  email: string;
  username?: string;
  is_owner: boolean; // Changed to match database column name
  created_at?: string; // Changed to match database column name
  permissions?: {
    contentManagement: boolean;
    userManagement: boolean;
    systemConfiguration: boolean;
    mediaUploads: boolean;
    securitySettings: boolean;
    siteCustomization: boolean;
  };
}


interface AuthContextType {
  currentUser: UserProfile | null;
  session: Session | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, isOwner: boolean) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up Supabase auth state listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (_event, currentSession) => {
        setIsLoading(true);
        setSession(currentSession);

        if (currentSession?.user) {
          try {
            // Fetch user profile from Supabase
            const { data, error } = await supabase
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
                    contentManagement: false,
                    userManagement: false,
                    systemConfiguration: false,
                    mediaUploads: true, // Allow uploads by default
                    securitySettings: false,
                    siteCustomization: false,
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
              setCurrentUser(data as UserProfile);
            }
          } catch (error) {
            console.error('Error in auth state change:', error);
          }
        } else {
          // User is signed out
          setCurrentUser(null);
        }

        setIsLoading(false);
      }
    );

    // Initial session check
    const initializeAuth = async () => {
      try {
        const { data: { session: initialSession } } = await supabase.auth.getSession();
        if (initialSession) {
          setSession(initialSession);

          // Fetch user profile
          const { data } = await supabase
            .from('user_profiles')
            .select('*')
            .eq('id', initialSession.user.id)
            .single();

          if (data) {
            setCurrentUser(data as UserProfile);
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

  const login = async (email: string, password: string) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;
    } catch (error) {
      console.error('Error logging in:', error);
      throw error;
    }
  };

  const signup = async (email: string, password: string, isOwner: boolean) => {
    try {
      // First create the auth user
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        // Important: Include the initial profile data in the metadata
        options: {
          data: {
            is_owner: isOwner, // Changed to match database column name
            permissions: isOwner ? {
              contentManagement: true,
              userManagement: true,
              systemConfiguration: true,
              mediaUploads: true,
              securitySettings: true,
              siteCustomization: true,
            } : {
              contentManagement: false,
              userManagement: false,
              systemConfiguration: false,
              mediaUploads: true,
              securitySettings: false,
              siteCustomization: false,
            }
          }
        }
      });

      if (error) throw error;

      if (data.user) {
        // Sign in the user immediately after signup to ensure they're authenticated
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email,
          password
        });

        if (signInError) throw signInError;

        // Now the user is authenticated, create their profile
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert({
            id: data.user.id,  // Must match auth.uid()
            email: email,
            is_owner: isOwner, // Changed to match database column name
            created_at: new Date().toISOString(), // Changed to match database column name
            permissions: isOwner ? {
              contentManagement: true,
              userManagement: true,
              systemConfiguration: true,
              mediaUploads: true,
              securitySettings: true,
              siteCustomization: true,
            } : {
              contentManagement: false,
              userManagement: false,
              systemConfiguration: false,
              mediaUploads: true,
              securitySettings: false,
              siteCustomization: false,
            }
          });

        if (profileError) {
          console.error('Error creating profile:', profileError);
          throw profileError;
        }
      }
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const logout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const sendPasswordResetEmail = async (email: string) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
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
