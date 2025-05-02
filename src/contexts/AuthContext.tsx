// Authentication context that manages user authentication state, login/logout functionality, and user profiles
import { createContext, useContext, useState, useEffect, type ReactNode } from '../utils/react-imports';
import { account, databases, client, DATABASE_ID, USER_PROFILES_COLLECTION_ID } from '../appwriteConfig';
import { ID, Models, Query } from 'appwrite';

// User profile data structure
export interface UserProfile {
  id: string;
  email: string;
  username?: string;
  is_owner: boolean; // Changed to match database column name
  created_at?: string; // Changed to match database column name
  last_sign_in_at?: string;
  permissions?: {
    content_management: boolean;
    user_management: boolean;
    system_configuration: boolean;
    media_uploads: boolean;
    security_settings: boolean;
    site_customization: boolean;
  };

  // Virtual property to determine role
  role?: 'user' | 'admin' | 'owner';
}


interface AuthContextType {
  currentUser: UserProfile | null;
  session: Models.Session | null;
  login: (email: string, password: string) => Promise<{ session: Models.Session } | undefined>;
  signup: (email: string, password: string, isOwner: boolean) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);
  const [session, setSession] = useState<Models.Session | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Set up a timeout to prevent getting stuck in loading state
    const authTimeout = setTimeout(() => {
      console.log('Auth check timed out after 10 seconds, forcing completion');
      setIsLoading(false);
    }, 10000);

    // Check for an existing session
    const checkSession = async () => {
      try {
        const currentSession = await account.getSession('current');
        setSession(currentSession);

        // Get user data
        const user = await account.get();

        // Get user profile from database
        try {
          const profile = await databases.getDocument(
            DATABASE_ID,
            USER_PROFILES_COLLECTION_ID,
            user.$id
          );

          // Set the role based on permissions
          const profileWithRole = {
            ...profile,
            id: profile.$id,
            role: profile.is_owner ? 'owner' :
                  (profile.permissions?.user_management ? 'admin' : 'user')
          };

          setCurrentUser(profileWithRole);
        } catch (error) {
          // If profile doesn't exist, create a default one
          console.log('No user profile found, creating a new one');

          // Check if user has owner metadata
          const isOwnerFromMetadata = user.prefs?.is_owner === true ||
                                     user.prefs?.is_owner === 'true';

          const newProfile = {
            id: user.$id,
            email: user.email,
            is_owner: isOwnerFromMetadata || false,
            created_at: new Date().toISOString(),
            permissions: isOwnerFromMetadata ? {
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
          };

          // Create the profile in the database
          try {
            const createdProfile = await databases.createDocument(
              DATABASE_ID,
              USER_PROFILES_COLLECTION_ID,
              user.$id,
              {
                email: newProfile.email,
                is_owner: newProfile.is_owner,
                created_at: newProfile.created_at,
                permissions: newProfile.permissions
              }
            );

            const profileWithRole = {
              ...newProfile,
              role: newProfile.is_owner ? 'owner' :
                    (newProfile.permissions?.user_management ? 'admin' : 'user')
            };

            setCurrentUser(profileWithRole);
          } catch (createError) {
            console.error('Error creating user profile:', createError);
          }
        }
      } catch (error) {
        console.log('No active session found');
        setSession(null);
        setCurrentUser(null);
      } finally {
        clearTimeout(authTimeout);
        setIsLoading(false);
      }
    };

    checkSession();

    // Set up event listener for account changes
    const unsubscribe = client.subscribe('account', (response) => {
      if (response.events.includes('user.update') ||
          response.events.includes('session.create') ||
          response.events.includes('session.delete')) {
        checkSession();
      }
    });

    return () => {
      clearTimeout(authTimeout);
      unsubscribe();
    };
  }, []);

  const login = async (email: string, password: string): Promise<{ session: Models.Session } | undefined> => {
    try {
      console.log('Attempting to sign in with Appwrite auth');

      const session = await account.createEmailSession(email, password);

      console.log('Appwrite auth successful:', session);
      return { session };
    } catch (error) {
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
      // Create the user account
      const user = await account.create(
        ID.unique(),
        email,
        password,
        email
      );

      // Set user preferences
      await account.updatePrefs({
        is_owner: isOwner,
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

      // Sign in the user
      await account.createEmailSession(email, password);

      // Create user profile in database
      await databases.createDocument(
        DATABASE_ID,
        USER_PROFILES_COLLECTION_ID,
        user.$id,
        {
          email: email,
          is_owner: isOwner,
          created_at: new Date().toISOString(),
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
      );
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await account.deleteSession('current');
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  const sendPasswordResetEmail = async (email: string): Promise<void> => {
    try {
      await account.createRecovery(email, 'https://cometscanner.netlify.app/reset-password');
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
      {children}
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
