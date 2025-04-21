import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

/**
 * ResetDataButton Component
 * 
 * A button component that allows users to reset all application data,
 * including authentication state and localStorage data.
 */
const ResetDataButton = () => {
  const [isResetting, setIsResetting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

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
    setShowConfirmation(true);
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
