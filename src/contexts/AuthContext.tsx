import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  signOut, 
  User as FirebaseUser // Rename to avoid conflict with local User interface if needed
} from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebaseConfig'; // Import initialized auth and db

// Keep your custom User profile data structure
interface UserProfile {
  username: string; // Or email, depending on what you use for login
  isOwner: boolean;
  // Add other profile fields previously stored in localStorage if needed
  createdAt?: any; // serverTimestamp() will populate this
  permissions?: {
    contentManagement: boolean;
    userManagement: boolean;
    systemConfiguration: boolean;
    mediaUploads: boolean;
    securitySettings: boolean;
    siteCustomization: boolean;
  };
}

// Combine Firebase User info with your UserProfile
interface AppUser extends FirebaseUser {
  profile: UserProfile | null; // Store fetched profile data here
  isOwner?: boolean; // Direct access to isOwner property
  username?: string; // Direct access to username property
}


interface AuthContextType {
  currentUser: AppUser | null; // Use the combined AppUser type
  login: (email: string, password: string) => Promise<void>; // Use email for Firebase
  signup: (email: string, password: string, isOwner: boolean) => Promise<void>; // Use email for Firebase
  sendPasswordResetEmail: (email: string) => Promise<void>;
  saveTemplate: (templateName: string, templateData: any, currentUser: AppUser) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AppUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Firebase's listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setIsLoading(true);
      try {
        if (firebaseUser) {
          // User is signed in, fetch their profile from Firestore
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDocSnap = await getDoc(userDocRef);

          let userProfile: UserProfile | null = null;
          if (userDocSnap.exists()) {
            userProfile = userDocSnap.data() as UserProfile;
          } else {
            // Handle case where user exists in Auth but not Firestore (should ideally not happen with proper signup)
            console.warn("User document not found in Firestore for UID:", firebaseUser.uid);
            // You might want to create a default profile here or log them out
          }

          // Combine Firebase user with Firestore profile
          setCurrentUser({
            ...firebaseUser,
            profile: userProfile,
            isOwner: userProfile?.isOwner,
            username: userProfile?.username
          });

        } else {
          // User is signed out
          setCurrentUser(null);
        }
      } catch (error) {
          console.error("Error fetching user profile:", error)
      }
      setIsLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []); // Run only once on mount
  
  const login = async (email: string, password: string) => {
      try {
          await signInWithEmailAndPassword(auth, email, password);
      } catch (error) {
          throw error;
      }
  };

  const signup = async (email: string, password: string, isOwner: boolean) => {
      if (isOwner) {
          // Check if an owner already exists
          const ownerQuery = await db.collection('users').where('isOwner', '==', true).get();
          if (!ownerQuery.empty) {
              throw new Error('An owner account already exists.');
          }
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const firebaseUser = userCredential.user;

      if (firebaseUser) {
          // Create user profile document in Firestore
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userProfile: UserProfile = {
              username: email, // Use email as username or add another field
              isOwner: isOwner,
              createdAt: serverTimestamp(), // Use Firestore server timestamp
              // Define default permissions based on isOwner status
              permissions: isOwner ? {
                  contentManagement: true,
                  userManagement: true,
                  systemConfiguration: true,
                  mediaUploads: true, // Owner can upload
                  securitySettings: true,
                  siteCustomization: true,
              } : {
                  contentManagement: false,
                  userManagement: false,
                  systemConfiguration: false,
                  mediaUploads: true, // Allow non-owners to upload too? Adjust as needed.
                  securitySettings: false,
                  siteCustomization: false,
              }
          };
          await setDoc(userDocRef, userProfile);
      } else {
          throw new Error('Failed to create user account.');
        }
  };
  
  const sendPasswordResetEmail = async (email: string) => {
      await sendPasswordResetEmail(auth, email);
  };

  const saveTemplate = async (templateName: string, templateData: any, currentUser: AppUser) => {
    if (currentUser) {
        const templateDocRef = doc(db, 'templates');
        await setDoc(templateDocRef, {
            userId: currentUser.uid,
            templateName: templateName,
            templateData: templateData,
            createdAt: serverTimestamp()
        });
    } else {
      throw new Error("Failed to create user account.");
    }
  };

  const logout = async () => {
    await signOut(auth);
    // onAuthStateChanged will handle setting currentUser to null
  };

  const value = {
    currentUser,
    sendPasswordResetEmail,
    login,
    signup,
    logout,
    isLoading,
    saveTemplate
  };

  return (
    <AuthContext.Provider value={value}>
      {!isLoading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
