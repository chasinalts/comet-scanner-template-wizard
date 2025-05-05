// Helper functions for managing Appwrite sessions using JWT-based authentication

import { Models } from 'appwrite';
import { account, client } from '../appwriteConfig';

const JWT_KEY = 'appwriteSession';

interface SessionWithJWT extends Models.Session {
  jwt?: string;
}

/**
 * Store JWT in localStorage from session
 */
export const storeSession = async (session?: SessionWithJWT): Promise<boolean> => {
  try {
    if (!session || !session.jwt) {
      console.log('No valid session or JWT available to store');
      return false;
    }

    // Store the JWT
    localStorage.setItem(JWT_KEY, session.jwt);
    console.log('JWT stored in localStorage');

    // Set the JWT on the client
    client.setJWT(session.jwt);
    return true;
  } catch (error) {
    console.error('Error storing JWT:', error);
    return false;
  }
};

/**
 * Check if there is a valid JWT stored
 */
export const hasValidSession = (): boolean => {
  try {
    const jwt = localStorage.getItem(JWT_KEY);
    return !!jwt;
  } catch (error) {
    console.error('Error checking JWT validity:', error);
    return false;
  }
};

/**
 * Initialize Appwrite session handling
 */
export const initializeAppwriteSession = async (): Promise<void> => {
  try {
    const jwt = localStorage.getItem(JWT_KEY);
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
      console.log('No JWT found');
    }
  } catch (error) {
    console.error('Error initializing session handling:', error);
  }
};

/**
 * Clear the stored JWT
 */
export const clearSession = (): void => {
  localStorage.removeItem(JWT_KEY);
  client.setJWT(''); // Clear the JWT from the client
};
