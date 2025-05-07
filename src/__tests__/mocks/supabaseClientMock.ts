// Comprehensive mock for Supabase client
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
  ],
  templates: [
    {
      id: 'template-1',
      title: 'Template 1',
      content: 'Template 1 content',
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

// Create a mock storage bucket
const createMockBucket = (bucketId: string) => {
  return {
    upload: vi.fn().mockResolvedValue({
      data: { path: `${bucketId}/test-file.jpg` },
      error: null,
    }),
    getPublicUrl: vi.fn().mockImplementation((path) => ({
      data: { publicUrl: `https://example.com/${path}` },
    })),
    remove: vi.fn().mockResolvedValue({
      data: { message: 'Files deleted successfully' },
      error: null,
    }),
    list: vi.fn().mockResolvedValue({
      data: mockStorageData[bucketId] || [],
      error: null,
    }),
  };
};

// Create a mock query builder
const createMockQueryBuilder = (table: string) => {
  const queryBuilder = {
    select: vi.fn().mockReturnValue({
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
    }),
    insert: vi.fn().mockImplementation((data) => {
      const newItem = Array.isArray(data) ? data[0] : data;
      return {
        data: { ...newItem, id: newItem.id || `${table}-${Date.now()}` },
        error: null,
      };
    }),
    update: vi.fn().mockReturnValue({
      match: vi.fn().mockReturnValue({
        eq: vi.fn().mockResolvedValue({
          data: { message: 'Updated successfully' },
          error: null,
        }),
      }),
    }),
    delete: vi.fn().mockReturnValue({
      match: vi.fn().mockReturnValue({
        eq: vi.fn().mockResolvedValue({
          data: { message: 'Deleted successfully' },
          error: null,
        }),
      }),
    }),
  };
  
  return queryBuilder;
};

// Create the mock Supabase client
export const mockSupabaseClient = {
  storage: {
    from: vi.fn().mockImplementation((bucketId) => createMockBucket(bucketId)),
  },
  from: vi.fn().mockImplementation((table) => createMockQueryBuilder(table)),
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
      callback('SIGNED_IN', {
        user: {
          id: 'user-2',
          email: 'user2@example.com',
        }
      });
      return { data: { subscription: { unsubscribe: vi.fn() } } };
    }),
  },
};
