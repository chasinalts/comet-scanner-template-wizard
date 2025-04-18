// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getPerformance } from 'firebase/performance';
import { getAnalytics, isSupported } from 'firebase/analytics'; // Import Analytics

// Your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk-_hxBNa1tRCosMO-FBplY5sGSj0jhEU",
  authDomain: "comet-scanner-template-wizard.firebaseapp.com",
  projectId: "comet-scanner-template-wizard",
  storageBucket: "comet-scanner-template-wizard.firebasestorage.app", // Corrected bucket name if necessary
  messagingSenderId: "1073315238272",
  appId: "1:1073315238272:web:13e744ae6d06fa0949f165",
  measurementId: "G-D0CQ6B72BS" // IMPORTANT: Add your Measurement ID from Firebase/Google Analytics
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);
const perf = getPerformance(app);

// Initialize Analytics (check for browser support)
let analytics: ReturnType<typeof getAnalytics> | null = null;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized.");
  } else {
    console.log("Firebase Analytics is not supported in this environment.");
  }
});


// Export the services for use in other parts of the app
// Export analytics only after it's potentially initialized
export { app, auth, db, storage, perf, analytics };
