/**
 * Clear User Data Script
 * 
 * This script clears all user data from localStorage and provides instructions
 * for resetting Firebase authentication data.
 */

// Function to clear all localStorage data
function clearLocalStorage() {
  console.log('Clearing localStorage data...');
  
  // Get all localStorage keys
  const keys = Object.keys(localStorage);
  
  // Filter keys related to user data
  const userKeys = keys.filter(key => 
    key.startsWith('user_') || 
    key.startsWith('session_') || 
    key.startsWith('login_attempts_')
  );
  
  console.log(`Found ${userKeys.length} user-related items in localStorage`);
  
  // Remove each user-related item
  userKeys.forEach(key => {
    console.log(`Removing: ${key}`);
    localStorage.removeItem(key);
  });
  
  console.log('All user data cleared from localStorage');
}

// Function to provide instructions for Firebase data reset
function showFirebaseResetInstructions() {
  console.log('\nTo reset Firebase Authentication and Firestore data:');
  console.log('1. Go to Firebase Console: https://console.firebase.google.com/');
  console.log('2. Select your project: "comet-scanner-template-wizard"');
  console.log('3. To clear Authentication data:');
  console.log('   - Go to Authentication > Users');
  console.log('   - Select users and click "Delete Account"');
  console.log('4. To clear Firestore data:');
  console.log('   - Go to Firestore Database');
  console.log('   - Select the "users" collection');
  console.log('   - Delete all documents');
  console.log('   - Repeat for any other collections with user data');
}

// Main function
function main() {
  console.log('=== User Data Cleanup Tool ===');
  
  // Clear localStorage
  clearLocalStorage();
  
  // Show Firebase reset instructions
  showFirebaseResetInstructions();
  
  console.log('\nData cleanup complete!');
  console.log('The application is now ready for a fresh start.');
}

// Run the main function
main();
