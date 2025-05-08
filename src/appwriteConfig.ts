// Stub file that redirects to Supabase configuration
// This file exists only for backward compatibility with existing imports
// All functionality has been migrated to Supabase

import { v4 as uuidv4 } from 'uuid';
import { supabaseClient, getUserProfile } from './supabaseConfig';

// Export a mock ID generator that uses UUID
export const ID = {
  unique: () => uuidv4(),
};

// Export a mock Query object
export const Query = {
  equal: (field: string, value: any) => ({ field, value, operator: '=' }),
  notEqual: (field: string, value: any) => ({ field, value, operator: '!=' }),
  lessThan: (field: string, value: any) => ({ field, value, operator: '<' }),
  lessThanEqual: (field: string, value: any) => ({ field, value, operator: '<=' }),
  greaterThan: (field: string, value: any) => ({ field, value, operator: '>' }),
  greaterThanEqual: (field: string, value: any) => ({ field, value, operator: '>=' }),
  isNull: (field: string) => ({ field, value: null, operator: 'IS NULL' }),
  isNotNull: (field: string) => ({ field, value: null, operator: 'IS NOT NULL' }),
  between: (field: string, start: any, end: any) => ({ field, value: [start, end], operator: 'BETWEEN' }),
  startsWith: (field: string, value: string) => ({ field, value, operator: 'LIKE', suffix: '%' }),
  endsWith: (field: string, value: string) => ({ field, value, operator: 'LIKE', prefix: '%' }),
  contains: (field: string, value: string) => ({ field, value, operator: 'LIKE', prefix: '%', suffix: '%' }),
  orderDesc: (field: string) => ({ field, direction: 'DESC' }),
  orderAsc: (field: string) => ({ field, direction: 'ASC' }),
  limit: (limit: number) => ({ limit }),
  offset: (offset: number) => ({ offset }),
  cursorAfter: (cursor: string) => ({ cursor, direction: 'after' }),
  cursorBefore: (cursor: string) => ({ cursor, direction: 'before' }),
};

// Mock Models type
export type Models = any;

// Database and collection IDs (for backward compatibility)
export const DATABASE_ID = 'supabase_db';
export const USER_PROFILES_COLLECTION_ID = 'user_profiles';
export const CONTENT_COLLECTION_ID = 'content';
export const IMAGES_COLLECTION_ID = 'images';

// Storage bucket IDs (for backward compatibility)
export const IMAGES_BUCKET_ID = 'images';
export const BANNER_BUCKET_ID = 'banner';
export const GALLERY_BUCKET_ID = 'gallery';
export const SCANNER_BUCKET_ID = 'scanner';

// Mock client object
export const client = {
  setEndpoint: () => client,
  setProject: () => client,
  config: {
    endpoint: 'https://supabase.io',
    project: 'supabase_project',
  },
};

// Mock account object that redirects to Supabase auth
export const account = {
  get: async () => {
    const { data: { user } } = await supabaseClient.auth.getUser();
    if (!user) throw new Error('User not authenticated');
    return {
      $id: user.id,
      email: user.email,
      name: user.user_metadata?.name || '',
      prefs: user.user_metadata || {},
    };
  },
  createEmailSession: async (email: string, password: string) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data.session;
  },
  createEmailPasswordSession: async (email: string, password: string) => {
    return account.createEmailSession(email, password);
  },
  createSession: async (userId: string, password: string) => {
    return account.createEmailSession(userId, password);
  },
  deleteSession: async (sessionId: string) => {
    await supabaseClient.auth.signOut();
    return {};
  },
  createVerification: async (url: string) => {
    // Not implemented
    return {};
  },
  updateVerification: async (userId: string, secret: string) => {
    // Not implemented
    return {};
  },
  createRecovery: async (email: string, url: string) => {
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: url,
    });
    if (error) throw error;
    return {};
  },
  updateRecovery: async (userId: string, secret: string, password: string, passwordAgain: string) => {
    const { error } = await supabaseClient.auth.updateUser({
      password,
    });
    if (error) throw error;
    return {};
  },
  getSession: async (sessionId: string) => {
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    return data.session;
  },
  deleteSessions: async () => {
    await supabaseClient.auth.signOut();
    return {};
  },
  createOAuth2Session: async (provider: string, success: string, failure: string) => {
    // Not implemented
    return {};
  },
};

// Mock databases object that redirects to Supabase
export const databases = {
  getDocument: async (databaseId: string, collectionId: string, documentId: string) => {
    if (collectionId === USER_PROFILES_COLLECTION_ID) {
      const profile = await getUserProfile();
      if (!profile) throw new Error('Profile not found');
      return {
        ...profile,
        $id: documentId,
      };
    }
    throw new Error('Collection not supported');
  },
  listDocuments: async (databaseId: string, collectionId: string, queries: any[] = []) => {
    // Not implemented
    return { documents: [] };
  },
  createDocument: async (databaseId: string, collectionId: string, documentId: string, data: any) => {
    // Not implemented
    return { $id: documentId, ...data };
  },
  updateDocument: async (databaseId: string, collectionId: string, documentId: string, data: any) => {
    // Not implemented
    return { $id: documentId, ...data };
  },
  deleteDocument: async (databaseId: string, collectionId: string, documentId: string) => {
    // Not implemented
    return {};
  },
};

// Mock storage object that redirects to Supabase
export const storage = {
  getFilePreview: (bucketId: string, fileId: string) => {
    // Convert to Supabase URL format
    return `${supabaseClient.storage.from(bucketId).getPublicUrl(fileId).data.publicUrl}`;
  },
  listFiles: async (bucketId: string) => {
    const { data, error } = await supabaseClient.storage.from(bucketId).list();
    if (error) throw error;
    return { files: data };
  },
  createFile: async (bucketId: string, fileId: string, file: File) => {
    const { data, error } = await supabaseClient.storage.from(bucketId).upload(fileId, file);
    if (error) throw error;
    return { $id: fileId };
  },
  deleteFile: async (bucketId: string, fileId: string) => {
    const { error } = await supabaseClient.storage.from(bucketId).remove([fileId]);
    if (error) throw error;
    return {};
  },
};

// Mock functions object
export const functions = {
  createExecution: async () => ({}),
};

// Mock avatars object
export const avatars = {
  getInitials: (name: string) => `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=random`,
};

// Helper function to get the current user ID (redirects to Supabase)
export const getUserId = async (): Promise<string | null> => {
  const { data: { user } } = await supabaseClient.auth.getUser();
  return user?.id || null;
};

// Helper function for backward compatibility
export const reconnectClient = async (): Promise<boolean> => {
  return true;
};

// Helper function for backward compatibility
export const initializeStorage = async (): Promise<boolean> => {
  return true;
};
