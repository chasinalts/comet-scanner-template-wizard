// Helper functions for managing Appwrite sessions using JWT-based authentication
import { type Models } from 'appwrite';
import { account, client } from '../appwriteConfig';

// Key for storing the JWT in localStorage
const JWT_KEY = 'appwriteSession';

interface SessionWithJWT extends Models.Session {
  jwt?: string;
}

/**
 * Store JWT in localStorage from session
 * @param session The Appwrite session object
 * @returns Promise<boolean> True if the session was stored successfully
 */
export const storeSession = async (session?: SessionWithJWT): Promise<boolean> => {
  try {
    if (!session || !session.jwt) {
      console.log('No valid session or JWT available to store');
      return false;
    }

    // Store the session data in localStorage
    const sessionData = {
      jwt: session.jwt,
      userId: session.userId,
      expires: session.$createdAt ? new Date(new Date(session.$createdAt).getTime() + (Number(session.expire) * 1000)).toISOString() : null
    };

    localStorage.setItem(JWT_KEY, JSON.stringify(sessionData));
    console.log('Session stored in localStorage');

    // Set the JWT on the client
    client.setJWT(session.jwt);
    return true;
  } catch (error) {
    console.error('Error storing session:', error);
    return false;
  }
};

/**
 * Check if there is a valid JWT stored
 * @returns boolean True if a valid JWT is stored
 */
export const hasValidSession = (): boolean => {
  try {
    const sessionData = localStorage.getItem(JWT_KEY);
    if (!sessionData) {
      return false;
    }

    try {
      // For backward compatibility, check if the stored value is a plain JWT string
      if (sessionData.startsWith('eyJ')) {
        return true;
      }

      // Otherwise, try to parse it as JSON
      const parsed = JSON.parse(sessionData);

      // Check if the JWT exists
      if (!parsed.jwt) {
        return false;
      }

      // Check if the session has expired
      if (parsed.expires && new Date(parsed.expires) < new Date()) {
        console.log('Session has expired');
        clearSession();
        return false;
      }

      return true;
    } catch (parseError) {
      // If it's not valid JSON but still a string, it might be a JWT from an older version
      return sessionData.length > 0;
    }
  } catch (error) {
    console.error('Error checking session validity:', error);
    return false;
  }
};

/**
 * Initialize Appwrite session handling
 * @returns Promise<void>
 */
export const initializeAppwriteSession = async (): Promise<void> => {
  try {
    const sessionData = localStorage.getItem(JWT_KEY);
    if (sessionData) {
      let jwt: string | null = null;

      // For backward compatibility, check if the stored value is a plain JWT string
      if (sessionData.startsWith('eyJ')) {
        jwt = sessionData;
      } else {
        // Try to parse it as JSON
        try {
          const parsed = JSON.parse(sessionData);
          jwt = parsed.jwt || null;
        } catch (parseError) {
          console.error('Error parsing session data:', parseError);
        }
      }

      if (jwt) {
        console.log('Found JWT in localStorage');
        client.setJWT(jwt);

        // Verify the session is still valid
        try {
          await account.get();
          console.log('JWT is valid');
        } catch (error) {
          console.log('JWT is invalid, clearing session');
          clearSession();
        }
      } else {
        console.log('No valid JWT found in session data');
        clearSession();
      }
    } else {
      console.log('No session data found');
    }
  } catch (error) {
    console.error('Error initializing session handling:', error);
  }
};

/**
 * Clear the stored session
 * Removes the session from localStorage and clears the JWT from the client
 */
export const clearSession = (): void => {
  localStorage.removeItem(JWT_KEY);
  client.setJWT(''); // Clear the JWT from the client
  console.log('Session cleared');
};
