// Authentication context that manages user authentication state, login/logout functionality, and user profiles
import { createContext, useContext, useState, useEffect, type ReactNode } from '../utils/react-imports';
import { account, databases, client, DATABASE_ID, USER_PROFILES_COLLECTION_ID, ID, type Models } from '../appwriteConfig.ts';
import { storeSession, hasValidSession } from '../utils/sessionHelper';
import { UserProfile as DbUserProfile } from '../utils/appwriteDatabase';

// Extended user profile with additional UI-specific fields
export interface UserProfile extends Omit<DbUserProfile, 'permissions'> {
  id: string;
  email: string;
  username?: string;
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
        if (hasValidSession()) {
          console.log('Found valid JWT in localStorage');

          try {
            // Verify session and get user data
            const userData = await account.get();
            const currentSession = await account.getSession('current');
            setSession(currentSession);

            // Get user profile from database
            try {
              const profile = await databases.getDocument<DbUserProfile>(
                DATABASE_ID,
                USER_PROFILES_COLLECTION_ID,
                userData.$id
              );

              // Parse permissions from string to object
              let permissions;
              try {
                permissions = profile.permissions ? JSON.parse(profile.permissions) : null;
              } catch (e) {
                console.error('Error parsing permissions:', e);
                permissions = null;
              }

              // Set the role based on permissions
              const profileWithRole: UserProfile = {
                ...profile,
                id: profile.$id,
                permissions,
                role: profile.is_owner ? 'owner' :
                      (permissions?.user_management ? 'admin' : 'user')
              };

              setCurrentUser(profileWithRole);
            } catch (profileError) {
              console.error('Error getting user profile:', profileError);

              // If profile doesn't exist, create a default one
              const isOwnerFromMetadata = userData.prefs?.is_owner === true ||
                                        userData.prefs?.is_owner === 'true';

              const defaultPermissions = isOwnerFromMetadata ? {
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
              };

              const newProfile: UserProfile = {
                id: userData.$id,
                $id: userData.$id,
                $createdAt: userData.$createdAt,
                $updatedAt: userData.$updatedAt,
                email: userData.email,
                is_owner: isOwnerFromMetadata || false,
                created_at: new Date().toISOString(),
                permissions: defaultPermissions
              };

              // Create the profile in the database
              try {
                await databases.createDocument<DbUserProfile>(
                  DATABASE_ID,
                  USER_PROFILES_COLLECTION_ID,
                  userData.$id,
                  {
                    email: newProfile.email,
                    is_owner: newProfile.is_owner,
                    created_at: newProfile.created_at,
                    permissions: JSON.stringify(defaultPermissions)
                  }
                );

                const profileWithRole: UserProfile = {
                  ...newProfile,
                  role: newProfile.is_owner ? 'owner' :
                        (defaultPermissions?.user_management ? 'admin' : 'user')
                };

                setCurrentUser(profileWithRole);
              } catch (createError) {
                console.error('Error creating user profile:', createError);
              }
            }
          } catch (error) {
            console.error('Error verifying session:', error);
            setSession(null);
            setCurrentUser(null);
          }
        } else {
          console.log('No valid JWT found in localStorage');
          setSession(null);
          setCurrentUser(null);
        }
      } catch (error) {
        console.error('Error checking session:', error);
        setSession(null);
        setCurrentUser(null);
      } finally {
        clearTimeout(authTimeout);
        setIsLoading(false);
      }
    };

    checkSession();

    // Set up event listener for account changes using the latest Appwrite SDK
    const unsubscribe = client.subscribe('account', (response) => {
      if (response.events.includes('users.update') ||
          response.events.includes('sessions.create') ||
          response.events.includes('sessions.delete')) {
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

      const session = await account.createEmailPasswordSession(email, password);
      console.log('Appwrite auth successful:', session);

      // Store the JWT in localStorage
      await storeSession(session);

      // Update the session state
      setSession(session);

      // Get user data
      const userData = await account.get();
      console.log('User data retrieved:', userData);

      // Get user profile from database
      try {
        const profile = await databases.getDocument<DbUserProfile>(
          DATABASE_ID,
          USER_PROFILES_COLLECTION_ID,
          userData.$id
        );

        // Parse permissions from string to object
        let permissions: UserProfile['permissions'] | null = null;
        try {
          permissions = profile.permissions ? JSON.parse(profile.permissions) : null;
        } catch (e) {
          console.error('Error parsing permissions:', e);
          permissions = null;
        }

        // Set the role based on permissions
        const profileWithRole: UserProfile = {
          ...profile,
          id: profile.$id,
          permissions,
          role: profile.is_owner ? 'owner' :
                (permissions?.user_management ? 'admin' : 'user')
        };

        console.log('User profile retrieved:', profileWithRole);
        setCurrentUser(profileWithRole);
      } catch (profileError) {
        console.error('Error getting user profile:', profileError);

        // If profile doesn't exist, create a default one
        const isOwnerFromMetadata = userData.prefs?.is_owner === true ||
                                  userData.prefs?.is_owner === 'true';

        const defaultPermissions: UserProfile['permissions'] = isOwnerFromMetadata ? {
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
        };

        const newProfile: UserProfile = {
          id: userData.$id,
          $id: userData.$id,
          $createdAt: userData.$createdAt,
          $updatedAt: userData.$updatedAt,
          email: userData.email,
          is_owner: isOwnerFromMetadata || false,
          created_at: new Date().toISOString(),
          permissions: defaultPermissions
        };

        // Create the profile in the database
        try {
          await databases.createDocument<DbUserProfile>(
            DATABASE_ID,
            USER_PROFILES_COLLECTION_ID,
            userData.$id,
            {
              email: newProfile.email,
              is_owner: newProfile.is_owner,
              created_at: newProfile.created_at,
              permissions: JSON.stringify(defaultPermissions)
            }
          );

          const profileWithRole: UserProfile = {
            ...newProfile,
            role: newProfile.is_owner ? 'owner' :
                  (defaultPermissions?.user_management ? 'admin' : 'user')
          };

          setCurrentUser(profileWithRole);
        } catch (createError) {
          console.error('Error creating user profile:', createError);
        }
      }

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
      const userData = await account.create(
        ID.unique(),
        email,
        password,
        email
      );

      // Define default permissions based on user role
      const defaultPermissions: UserProfile['permissions'] = isOwner ? {
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
      };

      // Set user preferences
      await account.updatePrefs({
        is_owner: isOwner,
        permissions: defaultPermissions
      });

      // Sign in the user
      const session = await account.createEmailPasswordSession(email, password);

      // Store the JWT in localStorage
      await storeSession(session);

      // Update the session state
      setSession(session);

      // Create user profile in database
      await databases.createDocument<DbUserProfile>(
        DATABASE_ID,
        USER_PROFILES_COLLECTION_ID,
        userData.$id,
        {
          email: email,
          is_owner: isOwner,
          created_at: new Date().toISOString(),
          permissions: JSON.stringify(defaultPermissions)
        }
      );

      // Set the current user
      const newProfile: UserProfile = {
        id: userData.$id,
        $id: userData.$id,
        $createdAt: userData.$createdAt,
        $updatedAt: userData.$updatedAt,
        email: userData.email,
        is_owner: isOwner,
        created_at: new Date().toISOString(),
        permissions: defaultPermissions,
        role: isOwner ? 'owner' :
              (defaultPermissions.user_management ? 'admin' : 'user')
      };

      setCurrentUser(newProfile);
    } catch (error) {
      console.error('Error signing up:', error);
      throw error;
    }
  };

  /**
   * Log out the current user
   * Deletes the current session and clears the user state
   */
  const logout = async (): Promise<void> => {
    try {
      // Delete the current session
      await account.deleteSession('current');

      // Clear the session from localStorage
      localStorage.removeItem('appwrite_session');

      // Clear the user state
      setSession(null);
      setCurrentUser(null);
    } catch (error) {
      console.error('Error signing out:', error);
      throw error;
    }
  };

  /**
   * Send a password reset email
   * @param email The email address to send the reset link to
   */
  const sendPasswordResetEmail = async (email: string): Promise<void> => {
    try {
      // Get the reset password URL from environment variables or use the current origin
      const resetPasswordUrl = import.meta.env.VITE_RESET_PASSWORD_URL ||
                             `${import.meta.env.VITE_APP_URL || window.location.origin}/reset-password`;

      console.log('Using reset password URL:', resetPasswordUrl);

      // Create a recovery token and send the email
      await account.createRecovery(email, resetPasswordUrl);
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
