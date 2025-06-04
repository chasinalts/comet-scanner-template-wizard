import React, { ReactNode, createContext, useContext, useEffect, useState } from '../utils/react-imports';
// COMMENTED OUT FOR SIMPLIFIED AUTH SYSTEM
// import { supabase } from '../supabaseConfig'; // Import Supabase client
// import {
//   Session,
//   PostgrestError,
//   AuthError,
//   AuthChangeEvent,
//   User
// } from '@supabase/supabase-js';

// SIMPLIFIED AUTH SYSTEM - NO REAL AUTHENTICATION
// All users are treated as authenticated by default

// Simplified user profile for bypass mode
interface UserProfile {
  id: string;
  email: string;
  username?: string;
  is_owner: boolean;
  created_at?: string;
  permissions?: {
    content_management: boolean;
    user_management: boolean;
    system_configuration: boolean;
    media_uploads: boolean;
    security_settings: boolean;
    site_customization: boolean;
  };
}

interface AuthContextType {
  currentUser: UserProfile | null;
  session: any | null; // Simplified session type
  login: (email: string, password: string) => Promise<{ session: any } | undefined>;
  signup: (email: string, password: string, isOwner: boolean) => Promise<void>;
  sendPasswordResetEmail: (email: string) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // SIMPLIFIED AUTH SYSTEM - BYPASS ALL AUTHENTICATION
  // Create a default user that's always "authenticated"
  const [currentUser] = useState<UserProfile>({
    id: 'bypass-user',
    email: 'user@bypass.local',
    username: 'Bypass User',
    is_owner: true, // Grant all permissions
    created_at: new Date().toISOString(),
    permissions: {
      content_management: true,
      user_management: true,
      system_configuration: true,
      media_uploads: true,
      security_settings: true,
      site_customization: true,
    }
  });
  
  const [session] = useState<any>({
    user: {
      id: 'bypass-user',
      email: 'user@bypass.local'
    }
  });
  
  const [isLoading] = useState(false); // Never loading in bypass mode

  // SIMPLIFIED AUTH METHODS - NO REAL AUTHENTICATION
  const login = async (email: string, password: string): Promise<{ session: any } | undefined> => {
    // Always return success in bypass mode
    console.log('Bypass login for:', email);
    return { session };
  };

  const signup = async (email: string, password: string, isOwner: boolean): Promise<void> => {
    // Always succeed in bypass mode
    console.log('Bypass signup for:', email, 'isOwner:', isOwner);
    return Promise.resolve();
  };

  const logout = async (): Promise<void> => {
    // No-op in bypass mode
    console.log('Bypass logout');
    return Promise.resolve();
  };

  const sendPasswordResetEmail = async (email: string): Promise<void> => {
    // No-op in bypass mode
    console.log('Bypass password reset for:', email);
    return Promise.resolve();
  };



  const value = {
    currentUser,
    session,
    signup,
    logout,
    login,
    isLoading,
    sendPasswordResetEmail,
    // Optionally, add a loginSuccess callback for navigation
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
