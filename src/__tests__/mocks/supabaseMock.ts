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
    from: (bucketId: string) => ({
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
    }),
  },
  from: (table: string) => ({
    select: vi.fn().mockImplementation(() => ({
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
      data: mockDatabaseData[table] || [],
      error: null,
    })),
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
      };
    }),
    delete: vi.fn().mockImplementation(() => {
      return {
        data: { message: 'Deleted successfully' },
        error: null,
      };
    }),
  }),
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
  vi.mock('@supabase/supabase-js', () => ({
    createClient: vi.fn().mockReturnValue(mockSupabaseClient),
  }));

  vi.mock('../supabaseConfig', () => ({
    supabaseClient: mockSupabaseClient,
    BANNER_BUCKET: 'banner',
    GALLERY_BUCKET: 'gallery',
    SCANNER_BUCKET: 'scanner',
    IMAGES_TABLE: 'images',
    EXTENDED_CONTENT_TABLE: 'content',
    LOGS_TABLE: 'logs',
  }));
};
