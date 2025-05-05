// Helper functions for managing Appwrite sessions using token-based authentication

import { Models } from 'appwrite';
import { account, client, reconnectClient } from '../appwriteConfig';

const SESSION_KEY = 'appwrite_session';

/**
 * Store session data in localStorage
 */
export const storeSession = async (session?: Models.Session): Promise<boolean> => {
  try {
    const currentSession = session || await account.getSession('current');
    
    if (!currentSession) {
      console.log('No session available to store');
      return false;
    }

    const sessionData = {
      data: currentSession,
      expires: new Date(currentSession.expire).getTime()
    };

    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionData));
    console.log('Session stored in localStorage');

    // Reconnect client with new session
    reconnectClient();
    return true;
  } catch (error) {
    console.error('Error storing session:', error);
    return false;
  }
};

/**
 * Check if there is a valid session stored
 */
export const hasValidSession = (): boolean => {
  try {
    const storedSession = localStorage.getItem(SESSION_KEY);
    if (!storedSession) return false;

    const sessionData = JSON.parse(storedSession);
    return sessionData.expires > Date.now();
  } catch (error) {
    console.error('Error checking session validity:', error);
    return false;
  }
};

/**
 * Initialize Appwrite session handling
 */
export const initializeAppwriteSession = (): void => {
  try {
    if (hasValidSession()) {
      console.log('Found valid session in localStorage');
      reconnectClient();
    } else {
      console.log('No valid session found');
      localStorage.removeItem(SESSION_KEY);
    }

    // Listen for storage changes
    window.addEventListener('storage', (event) => {
      if (event.key === SESSION_KEY) {
        console.log('Session changed in localStorage, reconnecting client');
        reconnectClient();
      }
    });

    console.log('Appwrite session handling initialized');
  } catch (error) {
    console.error('Error initializing session handling:', error);
  }
};

/**
 * Clear the stored session
 */
export const clearSession = (): void => {
  localStorage.removeItem(SESSION_KEY);
  reconnectClient();
};
