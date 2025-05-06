// Mock for appwriteConfig.ts
import { vi } from 'vitest';

// Create mock functions for all Appwrite client methods
const mockClient = {
  setEndpoint: vi.fn().mockReturnThis(),
  setProject: vi.fn().mockReturnThis(),
};

const mockAccount = {
  get: vi.fn().mockResolvedValue({
    $id: 'test-user-id',
    email: 'test@example.com',
    name: 'Test User',
  }),
  createEmailSession: vi.fn().mockResolvedValue({
    $id: 'test-session-id',
    userId: 'test-user-id',
  }),
  createEmailPasswordAccount: vi.fn().mockResolvedValue({
    $id: 'test-user-id',
    email: 'test@example.com',
  }),
  updatePrefs: vi.fn().mockResolvedValue({}),
  deleteSession: vi.fn().mockResolvedValue({}),
};

const mockDatabases = {
  listDocuments: vi.fn().mockResolvedValue({
    documents: [],
    total: 0,
  }),
  createDocument: vi.fn().mockResolvedValue({
    $id: 'test-doc-id',
  }),
  updateDocument: vi.fn().mockResolvedValue({
    $id: 'test-doc-id',
  }),
  deleteDocument: vi.fn().mockResolvedValue({}),
};

const mockStorage = {
  listFiles: vi.fn().mockResolvedValue({
    files: [],
    total: 0,
  }),
  createFile: vi.fn().mockResolvedValue({
    $id: 'test-file-id',
  }),
  deleteFile: vi.fn().mockResolvedValue({}),
  getFilePreview: vi.fn().mockReturnValue('https://example.com/preview.jpg'),
  getFileView: vi.fn().mockReturnValue('https://example.com/view.jpg'),
  getFileDownload: vi.fn().mockReturnValue('https://example.com/download.jpg'),
};

// Export the mock client and services
export const client = mockClient;
export const account = mockAccount;
export const databases = mockDatabases;
export const storage = mockStorage;

// Export bucket IDs
export const IMAGES_BUCKET_ID = 'banner';
export const BANNER_BUCKET_ID = 'banner';
export const GALLERY_BUCKET_ID = 'banner';
export const SCANNER_BUCKET_ID = 'banner';

// Export database and collection IDs
export const DATABASE_ID = 'test-database';
export const USERS_COLLECTION_ID = 'users';
export const CONTENT_COLLECTION_ID = 'content';
export const TEMPLATES_COLLECTION_ID = 'templates';

// Log the bucket configuration for debugging
console.log('Appwrite bucket configuration:', {
  IMAGES_BUCKET_ID,
  BANNER_BUCKET_ID,
  GALLERY_BUCKET_ID,
  SCANNER_BUCKET_ID,
});
