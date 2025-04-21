/**
 * Manual Data Reset Instructions
 * 
 * This script provides clear instructions for manually resetting all user data.
 */

console.log('=== MANUAL DATA RESET INSTRUCTIONS ===');
console.log('\nFollow these steps to completely reset all user data:');

console.log('\n1. Clear Firebase Authentication Data:');
console.log('   a. Go to Firebase Console: https://console.firebase.google.com/');
console.log('   b. Select your project: "comet-scanner-template-wizard"');
console.log('   c. Go to Authentication > Users');
console.log('   d. Select all users and click "Delete Account"');

console.log('\n2. Clear Firestore Database:');
console.log('   a. Go to Firebase Console: https://console.firebase.google.com/');
console.log('   b. Select your project: "comet-scanner-template-wizard"');
console.log('   c. Go to Firestore Database');
console.log('   d. Delete all documents in the "users" collection');
console.log('   e. Delete all documents in the "templates" collection (if it exists)');
console.log('   f. Delete any other user-related collections');

console.log('\n3. Clear Browser Local Storage:');
console.log('   a. Open your application in the browser');
console.log('   b. Open browser developer tools (F12 or right-click > Inspect)');
console.log('   c. Go to the Application tab');
console.log('   d. Select "Local Storage" from the left sidebar');
console.log('   e. Right-click on your site and select "Clear"');

console.log('\n4. Restart the Application:');
console.log('   a. Close and reopen your browser');
console.log('   b. Navigate to your application');
console.log('   c. You should now see a fresh login screen with no existing user data');

console.log('\nAfter completing these steps, all user data will be completely erased.');
console.log('The application will be ready for a fresh start with new user accounts.');
