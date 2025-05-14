// Helper functions for managing user sessions
// For backward compatibility
const JWT_KEY = 'appwriteSession';
const SESSION_KEY = 'currentUser';

/**
 * Store session in localStorage
 * @param session The session object
 * @returns Promise<boolean> True if the session was stored successfully
 */
export const storeSession = async (session: any): Promise<boolean> => {
  try {
    if (!session) {
      console.log('No valid session available to store');
      return false;
    }

    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    console.log('Session stored in localStorage');
    return true;
  } catch (error) {
    console.error('Error storing session:', error);
    return false;
  }
};

/**
 * Check if there is a valid session stored
 * @returns boolean True if a valid session is stored
 */
export const hasValidSession = (): boolean => {
  try {
    const sessionData = localStorage.getItem(SESSION_KEY);
    return !!sessionData;
  } catch (error) {
    console.error('Error checking session validity:', error);
    return false;
  }
};

/**
 * Clear the stored session
 * Removes the session from localStorage
 */
export const clearSession = (): void => {
  localStorage.removeItem(SESSION_KEY);
  // For backward compatibility
  localStorage.removeItem(JWT_KEY);
  console.log('Session cleared');
};
