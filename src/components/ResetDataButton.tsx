import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

/**
 * ResetDataButton Component
 *
 * A button component that allows users to reset all application data,
 * including authentication state and localStorage data.
 */
interface ResetDataButtonProps {
  adminOnly?: boolean;
}

const ResetDataButton = ({ adminOnly = true }: ResetDataButtonProps) => {
  const [isResetting, setIsResetting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showAdminAuth, setShowAdminAuth] = useState(false);
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const { logout, currentUser } = useAuth();
  const navigate = useNavigate();

  // Check if current user is an admin/owner
  const isAdmin = currentUser?.is_owner === true;

  // Function to clear all localStorage data
  const clearLocalStorage = () => {
    // Get all localStorage keys
    const keys = Object.keys(localStorage);

    // Filter keys related to user data
    const userKeys = keys.filter(key =>
      key.startsWith('user_') ||
      key.startsWith('session_') ||
      key.startsWith('login_attempts_')
    );

    // Remove each user-related item
    userKeys.forEach(key => {
      localStorage.removeItem(key);
    });
  };

  // Handle reset button click
  const handleReset = async () => {
    if (adminOnly && !isAdmin) {
      // If admin-only and user is not admin, show admin authentication
      setShowAdminAuth(true);
    } else {
      // Otherwise, show confirmation directly
      setShowConfirmation(true);
    }
  };

  // Handle confirmation of reset
  const handleConfirmReset = async () => {
    try {
      setIsResetting(true);

      // Clear localStorage data
      clearLocalStorage();

      // Log out the current user
      await logout();

      // Navigate to login page
      navigate('/login');

      // Show success message
      alert('All user data has been reset. You can now create a new account.');
    } catch (error) {
      console.error('Error resetting data:', error);
      alert('Failed to reset data. Please try again.');
    } finally {
      setIsResetting(false);
      setShowConfirmation(false);
    }
  };

  // Handle cancellation of reset
  const handleCancelReset = () => {
    setShowConfirmation(false);
    setShowAdminAuth(false);
    setAdminEmail('');
    setAdminPassword('');
    setAuthError('');
  };

  // Handle admin authentication
  const handleAdminAuth = async () => {
    if (!adminEmail || !adminPassword) {
      setAuthError('Please enter both email and password');
      return;
    }

    try {
      setIsResetting(true);
      setAuthError('');

      // Attempt to sign in with provided credentials
      await signInWithEmailAndPassword(auth, adminEmail, adminPassword);

      // If successful, check if the user is an admin
      const user = auth.currentUser;
      if (user) {
        // In a real app, you would check admin status in Firestore
        // For now, we'll assume successful login means admin access
        setShowAdminAuth(false);
        setShowConfirmation(true);
      } else {
        setAuthError('Authentication failed');
      }
    } catch (error) {
      console.error('Admin authentication failed:', error);
      setAuthError('Invalid credentials. Only administrators can reset data.');
    } finally {
      setIsResetting(false);
    }
  };

  return (
    <div>
      <button
        onClick={handleReset}
        className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
        disabled={isResetting}
      >
        {isResetting ? 'Resetting...' : 'Reset All Data'}
      </button>

      {/* Admin Authentication Modal */}
      {showAdminAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Administrator Authentication Required</h3>
            <p className="mb-4 text-gray-700">
              Only administrators can reset application data. Please enter administrator credentials to continue.
            </p>

            {authError && (
              <div className="mb-4 p-2 bg-red-100 border border-red-400 text-red-700 rounded">
                {authError}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin-email">
                Admin Email
              </label>
              <input
                id="admin-email"
                type="email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="admin@example.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="admin-password">
                Admin Password
              </label>
              <input
                id="admin-password"
                type="password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelReset}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
                disabled={isResetting}
              >
                Cancel
              </button>
              <button
                onClick={handleAdminAuth}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                disabled={isResetting}
              >
                {isResetting ? 'Authenticating...' : 'Authenticate'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirmation Modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-xl font-bold mb-4">Confirm Data Reset</h3>
            <p className="mb-6">
              This will permanently delete all user data and log you out. You will need to create a new account to use the application.
              <br /><br />
              <span className="font-bold text-red-600">This action cannot be undone.</span>
            </p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCancelReset}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition-colors"
                disabled={isResetting}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmReset}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                disabled={isResetting}
              >
                {isResetting ? 'Resetting...' : 'Reset All Data'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResetDataButton;
