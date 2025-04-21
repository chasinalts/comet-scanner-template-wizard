/**
 * Clear User Data Script
 *
 * This script clears all user data from localStorage and provides instructions
 * for resetting Firebase authentication data.
 *
 * IMPORTANT: This script requires administrator credentials to run.
 */

import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import readline from 'readline';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk-_hxBNa1tRCosMO-FBplY5sGSj0jhEU",
  authDomain: "comet-scanner-template-wizard.firebaseapp.com",
  projectId: "comet-scanner-template-wizard",
  storageBucket: "comet-scanner-template-wizard.firebasestorage.app",
  messagingSenderId: "1073315238272",
  appId: "1:1073315238272:web:13e744ae6d06fa0949f165",
  measurementId: "G-D0CQ6B72BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for input
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

// Function to authenticate admin user
async function authenticateAdmin() {
  console.log('\n=== Administrator Authentication Required ===');
  console.log('Only administrators can reset application data.\n');

  try {
    const email = await prompt('Enter admin email: ');
    const password = await prompt('Enter admin password: ');

    // Sign in with Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Check if user is an admin in Firestore
    const userDoc = await getDoc(doc(db, 'users', user.uid));

    if (userDoc.exists() && userDoc.data().isOwner === true) {
      console.log('\n✅ Administrator authentication successful!\n');
      return true;
    } else {
      console.error('\n❌ User is not an administrator. Access denied.\n');
      return false;
    }
  } catch (error) {
    console.error('\n❌ Authentication failed:', error.message);
    return false;
  }
}

// Function to clear all localStorage data
function clearLocalStorage() {
  console.log('Clearing localStorage data...');

  // Since this is a Node.js script, we can't directly access browser localStorage
  console.log('Note: This script cannot directly clear browser localStorage.');
  console.log('To clear localStorage, please use the Reset Data button in the application.');
  console.log('\nAlternatively, you can clear localStorage manually by:');
  console.log('1. Opening your browser developer tools (F12)');
  console.log('2. Going to the Application tab');
  console.log('3. Selecting "Local Storage" from the left sidebar');
  console.log('4. Right-clicking on your site and selecting "Clear"');
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
async function main() {
  console.log('=== User Data Cleanup Tool ===');

  // Authenticate admin user
  const isAdmin = await authenticateAdmin();

  if (isAdmin) {
    // Clear localStorage
    clearLocalStorage();

    // Show Firebase reset instructions
    showFirebaseResetInstructions();

    console.log('\nData cleanup instructions complete!');
    console.log('Follow the instructions above to reset your application data.');
  } else {
    console.log('\n❌ Access denied. Only administrators can reset application data.');
  }

  // Close readline interface
  rl.close();
}

// Run the main function
main();
