/**
 * Setup Owner Account Script
 * 
 * This script provides instructions for setting up the first owner account
 * by temporarily modifying Firebase security rules.
 */

console.log('=== OWNER ACCOUNT SETUP INSTRUCTIONS ===');
console.log('\nTo set up the first owner account, follow these steps:');

console.log('\n1. Update Firestore Security Rules:');
console.log('   a. Go to Firebase Console: https://console.firebase.google.com/');
console.log('   b. Select your project: "comet-scanner-template-wizard"');
console.log('   c. Go to Firestore Database > Rules');
console.log('   d. Temporarily replace the rules with the following:');
console.log('\n```');
console.log('rules_version = \'2\';');
console.log('service cloud.firestore {');
console.log('  match /databases/{database}/documents {');
console.log('    // Allow read/write access to all users temporarily');
console.log('    match /{document=**} {');
console.log('      allow read, write: if true;');
console.log('    }');
console.log('  }');
console.log('}');
console.log('```');

console.log('\n2. Create Owner Account:');
console.log('   a. Go back to your application');
console.log('   b. Navigate to the signup page');
console.log('   c. Fill in your email and password');
console.log('   d. Check the "Register as Owner" checkbox');
console.log('   e. Click "Create account"');

console.log('\n3. Restore Secure Firestore Rules:');
console.log('   a. After successfully creating the owner account, go back to Firebase Console');
console.log('   b. Go to Firestore Database > Rules');
console.log('   c. Replace the rules with more secure rules:');
console.log('\n```');
console.log('rules_version = \'2\';');
console.log('service cloud.firestore {');
console.log('  match /databases/{database}/documents {');
console.log('    // Allow users to read and write only their own data');
console.log('    match /users/{userId} {');
console.log('      allow read: if request.auth != null && request.auth.uid == userId;');
console.log('      allow write: if request.auth != null && request.auth.uid == userId;');
console.log('    }');
console.log('    ');
console.log('    // Allow users to read and write only their own templates');
console.log('    match /templates/{templateId} {');
console.log('      allow read: if request.auth != null;');
console.log('      allow write: if request.auth != null && request.resource.data.userId == request.auth.uid;');
console.log('    }');
console.log('    ');
console.log('    // Add more collection rules as needed');
console.log('  }');
console.log('}');
console.log('```');

console.log('\nIMPORTANT: The temporary rules allow anyone to read and write to your database.');
console.log('Make sure to restore the secure rules immediately after creating the owner account.');
console.log('\nAfter completing these steps, you should be able to use your owner account normally.');
