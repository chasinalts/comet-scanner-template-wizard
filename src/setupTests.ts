// Setup file for Vitest tests

// Mock the import.meta.env values
import { vi } from 'vitest';

// Mock modules
vi.mock('@supabase/supabase-js');
vi.mock('src/supabaseConfig.ts');
vi.mock('src/appwriteConfig.ts');
vi.mock('framer-motion');

// Mock database and storage services
const mockDatabaseService = {
  createDocument: vi.fn().mockResolvedValue({ id: 'test-id' }),
  updateDocument: vi.fn().mockResolvedValue({ id: 'test-id' }),
  deleteDocument: vi.fn().mockResolvedValue(true),
  getDocument: vi.fn().mockResolvedValue({ id: 'test-id' }),
  list: vi.fn().mockResolvedValue([{ id: 'test-id' }]),
  query: vi.fn().mockResolvedValue([{ id: 'test-id' }]),
};

const mockSupabaseImageStorage = {
  uploadImage: vi.fn().mockResolvedValue({ id: 'test-id', url: 'https://example.com/test.jpg' }),
  getImageUrl: vi.fn().mockReturnValue('https://example.com/test.jpg'),
  listFiles: vi.fn().mockResolvedValue([{ id: 'test-id', url: 'https://example.com/test.jpg' }]),
  deleteImage: vi.fn().mockResolvedValue(true),
  IMAGES_BUCKET_ID: 'banner',
  BANNER_BUCKET_ID: 'banner',
};

const mockAppwriteStorage = {
  uploadFile: vi.fn().mockResolvedValue({ $id: 'test-id' }),
  getFilePreview: vi.fn().mockReturnValue('https://example.com/test.jpg'),
  getFileDownload: vi.fn().mockReturnValue('https://example.com/test.jpg'),
  listFiles: vi.fn().mockResolvedValue({ files: [{ $id: 'test-id' }], total: 1 }),
  deleteFile: vi.fn().mockResolvedValue(true),
};

vi.mock('src/utils/databaseService.ts', () => mockDatabaseService);
vi.mock('src/utils/supabaseImageStorage.ts', () => mockSupabaseImageStorage);
vi.mock('src/utils/appwriteStorage.ts', () => mockAppwriteStorage);

// Mock environment variables
vi.stubGlobal('import.meta', {
  env: {
    VITE_APPWRITE_ENDPOINT: 'https://cloud.appwrite.io/v1',
    VITE_APPWRITE_PROJECT_ID: 'test-project',
    VITE_APPWRITE_DATABASE_ID: 'test-database',
    VITE_SUPABASE_URL: 'https://example.supabase.co',
    VITE_SUPABASE_ANON_KEY: 'test-anon-key',
    VITE_APPWRITE_IMAGES_BUCKET_ID: 'banner',
    VITE_APPWRITE_BANNER_BUCKET_ID: 'banner',
    VITE_APPWRITE_GALLERY_BUCKET_ID: 'banner',
    VITE_APPWRITE_SCANNER_BUCKET_ID: 'banner',
    MODE: 'test',
    DEV: true,
  },
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock IntersectionObserver
class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, 'IntersectionObserver', {
  writable: true,
  value: MockIntersectionObserver,
});

// Mock ResizeObserver
class MockResizeObserver {
  constructor(callback) {
    this.callback = callback;
  }
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

Object.defineProperty(window, 'ResizeObserver', {
  writable: true,
  value: MockResizeObserver,
});
