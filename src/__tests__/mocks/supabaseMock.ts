// Mock implementation of Supabase client for testing
import { vi } from 'vitest';

// Mock storage data
const mockStorageData = {
  banner: [
    {
      id: 'banner-1',
      name: 'banner1.jpg',
      file_path: 'banner/image1.jpg',
      image_type: 'banner',
      publicUrl: 'https://example.com/banner/image1.jpg',
    },
  ],
  gallery: [
    {
      id: 'gallery-1',
      name: 'gallery1.jpg',
      file_path: 'gallery/image1.jpg',
      image_type: 'gallery',
      publicUrl: 'https://example.com/gallery/image1.jpg',
    },
    {
      id: 'gallery-2',
      name: 'gallery2.jpg',
      file_path: 'gallery/image2.jpg',
      image_type: 'gallery',
      publicUrl: 'https://example.com/gallery/image2.jpg',
    },
  ],
  scanner: [
    {
      id: 'scanner-1',
      name: 'scanner1.jpg',
      file_path: 'scanner/image1.jpg',
      image_type: 'scanner',
      publicUrl: 'https://example.com/scanner/image1.jpg',
    },
    {
      id: 'scanner-2',
      name: 'scanner2.jpg',
      file_path: 'scanner/image2.jpg',
      image_type: 'scanner',
      publicUrl: 'https://example.com/scanner/image2.jpg',
    },
  ],
};

// Mock database data
const mockDatabaseData = {
  images: [
    ...mockStorageData.banner,
    ...mockStorageData.gallery,
    ...mockStorageData.scanner,
  ],
  content: [
    {
      id: 'what_is_comet',
      content: 'Test COMET description',
      type: 'what_is_comet',
    },
    {
      id: 'scanner_usage',
      content: 'Test scanner usage description',
      type: 'scanner_usage',
    },
  ],
  templates: [
    {
      id: 'template-1',
      title: 'Template 1',
      content: 'Template 1 content',
    },
    {
      id: 'template-2',
      title: 'Template 2',
      content: 'Template 2 content',
    },
  ],
  user_profiles: [
    {
      id: 'user-1',
      email: 'user1@example.com',
      is_owner: false,
    },
    {
      id: 'user-2',
      email: 'user2@example.com',
      is_owner: true,
    },
  ],
};

// Create mock Supabase client
export const mockSupabaseClient = {
  storage: {
    from: vi.fn().mockImplementation((bucketId: string) => {
      return {
        upload: vi.fn().mockImplementation((filePath, file, options) => {
          return {
            data: {
              path: filePath,
            },
            error: null,
          };
        }),
        getPublicUrl: vi.fn().mockImplementation((filePath) => {
          return {
            data: {
              publicUrl: `https://example.com/${filePath}`,
            },
          };
        }),
        remove: vi.fn().mockImplementation((paths) => {
          return {
            data: { message: 'Files deleted successfully' },
            error: null,
          };
        }),
        list: vi.fn().mockImplementation(() => {
          return {
            data: mockStorageData[bucketId] || [],
            error: null,
          };
        }),
        // Add any other methods used in your code
      };
    }),
  },
  from: vi.fn().mockImplementation((table: string) => {
    return {
      select: vi.fn().mockImplementation((columns = '*') => {
        return {
          eq: vi.fn().mockImplementation((field, value) => {
            const filteredData = mockDatabaseData[table]?.filter(item => item[field] === value) || [];
            return {
              data: filteredData,
              error: null,
            };
          }),
          filter: vi.fn().mockImplementation((field, operator, value) => {
            const filteredData = mockDatabaseData[table]?.filter(item => {
              if (operator === 'eq') return item[field] === value;
              if (operator === 'in') return value.includes(item[field]);
              return true;
            }) || [];
            return {
              data: filteredData,
              error: null,
            };
          }),
          in: vi.fn().mockImplementation((field, values) => {
            const filteredData = mockDatabaseData[table]?.filter(item => values.includes(item[field])) || [];
            return {
              data: filteredData,
              error: null,
            };
          }),
          data: mockDatabaseData[table] || [],
          error: null,
        };
      }),
      insert: vi.fn().mockImplementation((data) => {
        const newItem = Array.isArray(data) ? data[0] : data;
        return {
          data: { ...newItem, id: newItem.id || `${table}-${Date.now()}` },
          error: null,
        };
      }),
      update: vi.fn().mockImplementation((data) => {
        return {
          data,
          error: null,
          match: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
        };
      }),
      delete: vi.fn().mockImplementation(() => {
        return {
          data: { message: 'Deleted successfully' },
          error: null,
          match: vi.fn().mockReturnThis(),
          eq: vi.fn().mockReturnThis(),
        };
      }),
    };
  }),
  auth: {
    getUser: vi.fn().mockResolvedValue({
      data: {
        user: {
          id: 'user-2',
          email: 'user2@example.com',
        }
      },
      error: null
    }),
    signOut: vi.fn().mockResolvedValue({ error: null }),
    signInWithOAuth: vi.fn().mockResolvedValue({ error: null }),
    onAuthStateChange: vi.fn().mockImplementation((callback) => {
      // Call the callback immediately with a mock auth state
      callback('SIGNED_IN', {
        user: {
          id: 'user-2',
          email: 'user2@example.com',
        }
      });
      // Return an unsubscribe function
      return { data: { subscription: { unsubscribe: vi.fn() } } };
    }),
  },
};

// Create mock for the Supabase module
export const mockSupabase = {
  createClient: vi.fn().mockReturnValue(mockSupabaseClient),
  BANNER_BUCKET: 'banner',
  GALLERY_BUCKET: 'gallery',
  SCANNER_BUCKET: 'scanner',
  IMAGES_TABLE: 'images',
  EXTENDED_CONTENT_TABLE: 'content',
  LOGS_TABLE: 'logs',
};

// Setup the mock
export const setupSupabaseMock = () => {
  // Use the existing mockSupabaseClient instead of importing
  // const { mockSupabaseClient } = require('../mocks/supabaseClientMock');

  // Mock the Supabase client
  vi.mock('@supabase/supabase-js', () => ({
    createClient: vi.fn().mockReturnValue(mockSupabaseClient),
  }));

  // Mock the Supabase config
  vi.mock('../supabaseConfig', () => ({
    supabaseClient: mockSupabaseClient,
    BANNER_BUCKET: 'banner',
    GALLERY_BUCKET: 'gallery',
    SCANNER_BUCKET: 'scanner',
    IMAGES_TABLE: 'images',
    EXTENDED_CONTENT_TABLE: 'content',
    LOGS_TABLE: 'logs',
  }));

  // Mock the Supabase storage module
  vi.mock('../utils/supabaseImageStorage', () => ({
    uploadFile: vi.fn().mockImplementation((file, bucketType, userId) => {
      return Promise.resolve({
        $id: 'supabase-file-id',
        publicUrl: 'https://example.com/test-image.jpg',
        name: 'test-image.jpg',
        file_path: `${bucketType}/test-image.jpg`,
        image_type: bucketType
      });
    }),
    getFileUrl: vi.fn().mockImplementation((fileId) => {
      return Promise.resolve('https://example.com/test-image.jpg');
    }),
    listFiles: vi.fn().mockImplementation((bucketType) => {
      return Promise.resolve(mockStorageData[bucketType] || []);
    }),
    deleteFile: vi.fn().mockImplementation((fileId) => {
      return Promise.resolve(true);
    }),
    getFilePreview: vi.fn().mockImplementation((fileId) => {
      return Promise.resolve('https://example.com/test-image.jpg');
    }),
  }));
};
