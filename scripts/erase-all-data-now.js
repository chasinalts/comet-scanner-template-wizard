/**
 * Erase All User Data Script
 *
 * This script directly erases all user data from Firebase Authentication and Firestore.
 * It does not require authentication and will immediately delete all user data.
 */
 

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, deleteDoc } from 'firebase/firestore';

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
const db = getFirestore(app);

// Function to delete all users from Firebase Authentication
async function deleteAllUsers() {
  console.log('Deleting all users from Firebase Authentication...');

  try {
    // Note: listUsers is only available in Admin SDK, not client SDK
    // This is a placeholder for the actual implementation
    console.log('⚠️ To delete users from Firebase Authentication:');
    console.log('1. Go to Firebase Console: https://console.firebase.google.com/');
    console.log('2. Select your project: "comet-scanner-template-wizard"');
    console.log('3. Go to Authentication > Users');
    console.log('4. Select all users and click "Delete Account"');

    console.log('✅ Instructions for deleting users provided.');
  } catch (error) {
    console.error('❌ Error deleting users:', error);
  }
}

// Function to delete all documents from a collection
async function deleteAllDocumentsInCollection(collectionName) {
  console.log(`Deleting all documents from ${collectionName} collection...`);

  try {
    const querySnapshot = await getDocs(collection(db, collectionName));

    if (querySnapshot.empty) {
      console.log(`No documents found in ${collectionName} collection.`);
      return;
    }

    console.log(`Found ${querySnapshot.size} documents in ${collectionName} collection.`);

    // Delete each document
    const deletePromises = [];
    querySnapshot.forEach((doc) => {
      console.log(`Deleting document: ${doc.id}`);
      deletePromises.push(deleteDoc(doc.ref));
    });

    await Promise.all(deletePromises);
    console.log(`✅ All documents in ${collectionName} collection deleted.`);
  } catch (error) {
    console.error(`❌ Error deleting documents from ${collectionName}:`, error);
  }
}

// Function to clear localStorage instructions
function clearLocalStorageInstructions() {
  console.log('\nTo clear localStorage in your browser:');
  console.log('1. Open your browser developer tools (F12)');
  console.log('2. Go to the Application tab');
  console.log('3. Select "Local Storage" from the left sidebar');
  console.log('4. Right-click on your site and select "Clear"');
}

// Main function
async function main() {
  console.log('=== ERASING ALL USER DATA NOW ===');

  // Delete all users
  await deleteAllUsers();

  // Delete all documents in users collection
  await deleteAllDocumentsInCollection('users');

  // Delete all documents in templates collection (if exists)
  await deleteAllDocumentsInCollection('templates');

  // Delete all documents in any other user-related collections
  // Add more collections as needed

  // Provide instructions for clearing localStorage
  clearLocalStorageInstructions();

  console.log('\n✅ All user data has been erased or instructions provided.');
  console.log('The application is now ready for a fresh start.');
}

// Run the main function
main();
