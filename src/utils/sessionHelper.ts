// Helper functions for managing Appwrite sessions

import { Models } from 'appwrite';
import { account, reconnectClient } from '../appwriteConfig';

/**
 * Ensures that the Appwrite session is properly stored in localStorage
 * This helps fix issues where the session might not be properly saved
 */
export const ensureSessionInLocalStorage = async (session?: Models.Session): Promise<boolean> => {
  try {
    // If a session is provided, use it; otherwise, try to get the current session
    const currentSession = session || await account.getSession('current');

    if (!currentSession) {
      console.log('No session available to ensure in localStorage');
      return false;
    }

    // Check if the session is already in localStorage
    const cookieFallback = localStorage.getItem('cookieFallback');

    if (!cookieFallback || cookieFallback === '[]') {
      console.log('No cookieFallback found in localStorage, creating it');

      // Create a basic cookieFallback structure with the session
      const sessionKey = `a_session_${currentSession.projectId}`;
      const sessionData = {
        [sessionKey]: JSON.stringify({
          data: currentSession,
          expires: new Date(currentSession.expire).getTime()
        })
      };

      // Store it in localStorage
      localStorage.setItem('cookieFallback', JSON.stringify(sessionData));
      console.log('Created cookieFallback in localStorage');

      // Force reconnect the client to ensure WebSocket connections are established with the new session
      reconnectClient();

      return true;
    }

    // If cookieFallback exists but doesn't contain the session, add it
    try {
      const cookieData = JSON.parse(cookieFallback);
      const sessionKey = `a_session_${currentSession.projectId}`;

      if (!cookieData[sessionKey]) {
        console.log('Session not found in cookieFallback, adding it');
        cookieData[sessionKey] = JSON.stringify({
          data: currentSession,
          expires: new Date(currentSession.expire).getTime()
        });

        localStorage.setItem('cookieFallback', JSON.stringify(cookieData));
        console.log('Updated cookieFallback with session');

        // Force reconnect the client to ensure WebSocket connections are established with the new session
        reconnectClient();
      }

      return true;
    } catch (parseError) {
      console.error('Error parsing cookieFallback:', parseError);

      // If parsing fails, overwrite with a new cookieFallback
      const sessionKey = `a_session_${currentSession.projectId}`;
      const sessionData = {
        [sessionKey]: JSON.stringify({
          data: currentSession,
          expires: new Date(currentSession.expire).getTime()
        })
      };

      localStorage.setItem('cookieFallback', JSON.stringify(sessionData));
      console.log('Recreated cookieFallback in localStorage due to parsing error');

      // Force reconnect the client to ensure WebSocket connections are established with the new session
      reconnectClient();

      return true;
    }
  } catch (error) {
    console.error('Error ensuring session in localStorage:', error);
    return false;
  }
};

/**
 * Checks if there is a valid Appwrite session in localStorage
 */
export const hasValidSessionInLocalStorage = (): boolean => {
  try {
    const cookieFallback = localStorage.getItem('cookieFallback');

    if (!cookieFallback || cookieFallback === '[]') {
      return false;
    }

    // Try to parse the cookieFallback
    try {
      const cookieData = JSON.parse(cookieFallback);

      // Check if there's any session key
      const sessionKeys = Object.keys(cookieData).filter(key => key.startsWith('a_session_'));

      if (sessionKeys.length === 0) {
        return false;
      }

      // Check if any session is not expired
      for (const key of sessionKeys) {
        try {
          const sessionData = JSON.parse(cookieData[key]);

          if (sessionData.expires && sessionData.expires > Date.now()) {
            return true;
          }
        } catch (e) {
          // Ignore parsing errors for individual sessions
        }
      }

      return false;
    } catch (parseError) {
      console.error('Error parsing cookieFallback:', parseError);
      return false;
    }
  } catch (error) {
    console.error('Error checking for valid session in localStorage:', error);
    return false;
  }
};
