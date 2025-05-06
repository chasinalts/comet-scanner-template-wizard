// Setup file for Vitest tests
import { vi, beforeAll, afterEach, afterAll } from 'vitest';
import { server } from './mocks/server';
import '@testing-library/jest-dom';

// Establish API mocking before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished
afterAll(() => server.close());

// Mock the import.meta.env values
vi.stubGlobal('import.meta', {
  env: {
    VITE_APPWRITE_ENDPOINT: 'https://cloud.appwrite.io/v1',
    VITE_APPWRITE_PROJECT_ID: 'test-project',
    VITE_APPWRITE_DATABASE_ID: 'test-database',
    VITE_SUPABASE_URL: 'https://example.supabase.co',
    VITE_SUPABASE_ANON_KEY: 'test-anon-key',
    VITE_APPWRITE_IMAGES_BUCKET_ID: 'banner',
    VITE_APPWRITE_BANNER_BUCKET_ID: 'banner',
    VITE_APPWRITE_GALLERY_BUCKET_ID: 'gallery',
    VITE_APPWRITE_SCANNER_BUCKET_ID: 'scanner',
    VITE_SUPABASE_BANNER_BUCKET: 'banner',
    VITE_SUPABASE_GALLERY_BUCKET: 'gallery',
    VITE_SUPABASE_SCANNER_BUCKET: 'scanner',
    MODE: 'test',
    DEV: true,
  },
});
