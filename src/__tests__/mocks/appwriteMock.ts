// Mock implementation of Appwrite client for testing
import { vi } from 'vitest';

// Mock storage data
const mockStorageData = {
  banner: [
    {
      $id: 'banner-1',
      name: 'banner1.jpg',
      mimeType: 'image/jpeg',
      sizeOriginal: 1024,
    },
    {
      $id: 'banner-2',
      name: 'banner2.jpg',
      mimeType: 'image/jpeg',
      sizeOriginal: 2048,
    },
  ],
  gallery: [
    {
      $id: 'gallery-1',
      name: 'gallery1.jpg',
      mimeType: 'image/jpeg',
      sizeOriginal: 1024,
    },
    {
      $id: 'gallery-2',
      name: 'gallery2.jpg',
      mimeType: 'image/jpeg',
      sizeOriginal: 2048,
    },
  ],
  scanner: [
    {
      $id: 'scanner-1',
      name: 'scanner1.jpg',
      mimeType: 'image/jpeg',
      sizeOriginal: 1024,
    },
    {
      $id: 'scanner-2',
      name: 'scanner2.jpg',
      mimeType: 'image/jpeg',
      sizeOriginal: 2048,
    },
  ],
};

// Mock metadata for storage files
const mockMetadata = {
  banner: [
    {
      $id: 'metadata-banner-1',
      file_id: 'banner-1',
      bucket_id: 'banner',
      image_type: 'banner',
    },
    {
      $id: 'metadata-banner-2',
      file_id: 'banner-2',
      bucket_id: 'banner',
      image_type: 'banner',
    },
  ],
  gallery: [
    {
      $id: 'metadata-gallery-1',
      file_id: 'gallery-1',
      bucket_id: 'gallery',
      image_type: 'gallery',
    },
    {
      $id: 'metadata-gallery-2',
      file_id: 'gallery-2',
      bucket_id: 'gallery',
      image_type: 'gallery',
    },
  ],
  scanner: [
    {
      $id: 'metadata-scanner-1',
      file_id: 'scanner-1',
      bucket_id: 'scanner',
      image_type: 'scanner',
    },
    {
      $id: 'metadata-scanner-2',
      file_id: 'scanner-2',
      bucket_id: 'scanner',
      image_type: 'scanner',
    },
  ],
};

// Mock database collections
const mockCollections = {
  user_profiles: [
    {
      $id: 'user-1',
      email: 'user1@example.com',
      is_owner: false,
      permissions: JSON.stringify({
        content_management: false,
        user_management: false,
        system_configuration: false,
        media_uploads: false,
        security_settings: false,
        site_customization: false,
      }),
    },
    {
      $id: 'user-2',
      email: 'user2@example.com',
      is_owner: true,
      permissions: JSON.stringify({
        content_management: true,
        user_management: true,
        system_configuration: true,
        media_uploads: true,
        security_settings: true,
        site_customization: true,
      }),
    },
  ],
  content: [
    {
      $id: 'content-1',
      type: 'what_is_comet',
      content: 'Test COMET description',
    },
    {
      $id: 'content-2',
      type: 'scanner_usage',
      content: 'Test scanner usage description',
    },
  ],
  images: [
    ...mockMetadata.banner,
    ...mockMetadata.gallery,
    ...mockMetadata.scanner,
  ],
};

// Create mock Appwrite client
export const mockAppwriteClient = {
  setEndpoint: vi.fn().mockReturnThis(),
  setProject: vi.fn().mockReturnThis(),
  config: {
    endpoint: 'https://cloud.appwrite.io/v1',
    project: 'test-project',
  },
};

// Create mock Appwrite services
export const mockAppwriteAccount = {
  get: vi.fn().mockResolvedValue({
    $id: 'user-123',
    email: 'user@example.com',
    name: 'Test User',
  }),
  getSession: vi.fn().mockResolvedValue({
    $id: 'session-123',
    userId: 'user-123',
  }),
  createEmailPasswordSession: vi.fn().mockResolvedValue({
    $id: 'session-123',
    userId: 'user-123',
  }),
  deleteSession: vi.fn().mockResolvedValue({}),
  updatePrefs: vi.fn().mockResolvedValue({}),
  create: vi.fn().mockResolvedValue({
    $id: 'user-123',
    email: 'user@example.com',
  }),
  createRecovery: vi.fn().mockResolvedValue({}),
};

export const mockAppwriteDatabases = {
  getDocument: vi.fn().mockImplementation((databaseId, collectionId, documentId) => {
    const collection = mockCollections[collectionId];
    if (!collection) throw new Error(`Collection ${collectionId} not found`);
    
    const document = collection.find(doc => doc.$id === documentId);
    if (!document) throw new Error(`Document ${documentId} not found in ${collectionId}`);
    
    return Promise.resolve(document);
  }),
  listDocuments: vi.fn().mockImplementation((databaseId, collectionId, queries) => {
    const collection = mockCollections[collectionId];
    if (!collection) return Promise.resolve({ documents: [], total: 0 });
    
    return Promise.resolve({
      documents: collection,
      total: collection.length,
    });
  }),
  createDocument: vi.fn().mockImplementation((databaseId, collectionId, documentId, data) => {
    return Promise.resolve({
      $id: documentId,
      ...data,
    });
  }),
  updateDocument: vi.fn().mockImplementation((databaseId, collectionId, documentId, data) => {
    return Promise.resolve({
      $id: documentId,
      ...data,
    });
  }),
  deleteDocument: vi.fn().mockResolvedValue({}),
};

export const mockAppwriteStorage = {
  createFile: vi.fn().mockImplementation((bucketId, fileId, file) => {
    return Promise.resolve({
      $id: fileId,
      name: file.name,
      mimeType: file.type,
      sizeOriginal: file.size,
    });
  }),
  getFilePreview: vi.fn().mockImplementation((bucketId, fileId) => {
    return `https://example.com/${bucketId}/preview/${fileId}.jpg`;
  }),
  listFiles: vi.fn().mockImplementation((bucketId, queries) => {
    const files = mockStorageData[bucketId] || [];
    return Promise.resolve({
      files,
      total: files.length,
    });
  }),
  deleteFile: vi.fn().mockResolvedValue({}),
};

// Create mock for the Appwrite module
export const mockAppwrite = {
  Client: vi.fn().mockImplementation(() => mockAppwriteClient),
  Account: vi.fn().mockImplementation(() => mockAppwriteAccount),
  Databases: vi.fn().mockImplementation(() => mockAppwriteDatabases),
  Storage: vi.fn().mockImplementation(() => mockAppwriteStorage),
  Functions: vi.fn().mockImplementation(() => ({})),
  Avatars: vi.fn().mockImplementation(() => ({})),
  ID: {
    unique: vi.fn().mockReturnValue('unique-id-123'),
  },
  Query: {
    equal: vi.fn().mockImplementation((field, value) => `${field}=${value}`),
    notEqual: vi.fn().mockImplementation((field, value) => `${field}!=${value}`),
  },
};

// Setup the mock
export const setupAppwriteMock = () => {
  vi.mock('appwrite', () => mockAppwrite);

  vi.mock('../appwriteConfig', () => ({
    client: mockAppwriteClient,
    account: mockAppwriteAccount,
    databases: mockAppwriteDatabases,
    storage: mockAppwriteStorage,
    functions: {},
    avatars: {},
    ID: mockAppwrite.ID,
    Query: mockAppwrite.Query,
    DATABASE_ID: 'test-database',
    USER_PROFILES_COLLECTION_ID: 'user_profiles',
    CONTENT_COLLECTION_ID: 'content',
    IMAGES_COLLECTION_ID: 'images',
    IMAGES_BUCKET_ID: 'banner',
    BANNER_BUCKET_ID: 'banner',
    GALLERY_BUCKET_ID: 'banner',
    SCANNER_BUCKET_ID: 'banner',
    reconnectClient: vi.fn().mockResolvedValue(true),
    getUserId: vi.fn().mockResolvedValue('user-123'),
    initializeStorage: vi.fn().mockResolvedValue(true),
  }));
};
