// Helper functions for managing Auth0 sessions
import { Auth0Client } from '@auth0/auth0-spa-js';

// Key for storing the Auth0 session in localStorage
const AUTH0_SESSION_KEY = 'auth0_session';
// For backward compatibility
const JWT_KEY = 'appwriteSession';

/**
 * Store Auth0 session in localStorage
 * @param session The Auth0 session object
 * @returns Promise<boolean> True if the session was stored successfully
 */
export const storeSession = async (session: any): Promise<boolean> => {
  try {
    if (!session) {
      console.log('No valid session available to store');
      return false;
    }

    // Store the session data in localStorage
    const sessionData = {
      accessToken: session.accessToken,
      idToken: session.idToken,
      expiresAt: session.expiresAt,
      user: session.user
    };

    localStorage.setItem(AUTH0_SESSION_KEY, JSON.stringify(sessionData));
    console.log('Auth0 session stored in localStorage');
    return true;
  } catch (error) {
    console.error('Error storing Auth0 session:', error);
    return false;
  }
};

/**
 * Check if there is a valid Auth0 session stored
 * @returns boolean True if a valid session is stored
 */
export const hasValidSession = (): boolean => {
  try {
    const sessionData = localStorage.getItem(AUTH0_SESSION_KEY);
    if (!sessionData) {
      return false;
    }

    try {
      const parsed = JSON.parse(sessionData);

      // Check if the session has expired
      if (parsed.expiresAt && new Date(parsed.expiresAt) < new Date()) {
        console.log('Auth0 session has expired');
        clearSession();
        return false;
      }

      return true;
    } catch (parseError) {
      console.error('Error parsing Auth0 session data:', parseError);
      return false;
    }
  } catch (error) {
    console.error('Error checking Auth0 session validity:', error);
    return false;
  }
};

/**
 * Initialize Auth0 session handling
 * @param auth0Client The Auth0 client instance
 * @returns Promise<void>
 */
export const initializeAuth0Session = async (auth0Client: Auth0Client): Promise<void> => {
  try {
    const isAuthenticated = await auth0Client.isAuthenticated();

    if (isAuthenticated) {
      console.log('User is authenticated with Auth0');

      // Get the tokens
      const token = await auth0Client.getTokenSilently();
      const idToken = await auth0Client.getIdTokenClaims();
      const user = await auth0Client.getUser();

      // Store the session
      const session = {
        accessToken: token,
        idToken: idToken.__raw,
        expiresAt: new Date(idToken.exp * 1000).toISOString(),
        user
      };

      await storeSession(session);
    } else {
      console.log('User is not authenticated with Auth0');
      clearSession();
    }
  } catch (error) {
    console.error('Error initializing Auth0 session handling:', error);
    clearSession();
  }
};

/**
 * Initialize Appwrite session handling (for backward compatibility)
 * @returns Promise<void>
 */
export const initializeAppwriteSession = async (): Promise<void> => {
  console.log('Appwrite session initialization skipped - using Auth0 instead');
};

/**
 * Clear the stored Auth0 session
 * Removes the session from localStorage
 */
export const clearSession = (): void => {
  localStorage.removeItem(AUTH0_SESSION_KEY);
  // For backward compatibility
  localStorage.removeItem(JWT_KEY);
  console.log('Auth0 session cleared');
};
