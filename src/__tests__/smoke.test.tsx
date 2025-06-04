/// <reference types="vitest" />

if (typeof window !== 'undefined') {
  window.scrollTo = vi.fn();
}

// Global mock for supabaseClient - this is the primary mock.
vi.mock('../supabaseClient', () => {
  // console.log('[S supabaseClient] Global mock factory executing');
  return {
    supabase: {
      storage: {
        listBuckets: vi.fn().mockResolvedValue({ data: [{ name: 'images' }], error: null }),
        createBucket: vi.fn().mockResolvedValue({ data: { name: 'images' }, error: null }),
      },
      auth: {
        getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
      },
    }
  };
});

// Global mock for supabaseConfig - used by pages/components.
vi.mock('../supabaseConfig', () => {
  // console.log('[S supabaseConfig] Global mock factory executing');
  const newStorageSubOperations = () => ({
    list: vi.fn().mockResolvedValue({ data: [], error: null }),
    getPublicUrl: vi.fn().mockReturnValue({ data: { publicUrl: 'http://localhost/mock.png' } }),
  });
  const newQuerySubOperations = () => ({
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data: { content: 'Mocked COMET explanation' }, error: null }),
  });
  return {
    supabase: {
      storage: {
        listBuckets: vi.fn().mockResolvedValue({ data: [{ name: 'images' }], error: null }),
        createBucket: vi.fn().mockResolvedValue({ data: { name: 'images' }, error: null }),
        from: vi.fn(newStorageSubOperations),
      },
      auth: {
        getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null })
      },
      from: vi.fn(newQuerySubOperations),
    }
  };
});

import { describe, it, expect, vi, afterEach, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Smoke Tests', () => {

  afterEach(() => {
    vi.restoreAllMocks(); // This is important to undo vi.doMock calls.
    vi.unstubAllEnvs();
    vi.resetModules();    // This allows top-level vi.mock to re-apply for the next test.
  });

  describe('Application Loads Test', () => {
    it('should render the App component without crashing', async () => {
      const { default: App } = await import('../App'); // Fresh import
      render(<App />);
      // Check for presence of "Loading..." or the main heading from Home.tsx
      expect(screen.queryByText(/Loading.../i) || screen.queryByRole('heading', {name: /COMET SCANNER TEMPLATE WIZARD/i})).not.toBeNull();
    });
  });

  describe('Supabase Client Initialization Test', () => {
    it('should initialize the Supabase client from ../supabaseClient.ts without errors', async () => {
      vi.resetModules(); // Clear module cache
      vi.doUnmock('../supabaseClient'); // Explicitly unmock for this test
      // supabaseConfig remains mocked by the global vi.mock, which is fine.

      vi.stubEnv('VITE_SUPABASE_URL', 'http://localhost:54321');
      vi.stubEnv('VITE_SUPABASE_ANON_KEY', 'test-anon-key');

      const { supabase: actualSupabaseClient } = await import('../supabaseClient'); // Fresh, real import

      expect(actualSupabaseClient).toBeDefined();
      expect(actualSupabaseClient.auth.signInWithPassword).toBeTypeOf('function');
      expect(actualSupabaseClient.storage.from).toBeTypeOf('function');
      // vi.restoreAllMocks() in global afterEach will handle undoing doUnmock for the next test,
      // allowing the global vi.mock('../supabaseClient') to become active again after resetModules.
    });
  });

  describe('Basic Routing Test', () => {
    beforeEach(() => {
      // For each routing test, we want to ensure App.tsx gets the correct mocks.
      // vi.resetModules() in the global afterEach already cleared the module cache.
      // The top-level vi.mock('../supabaseClient') and vi.mock('../supabaseConfig')
      // should now apply to any new imports of these modules.
      // No specific vi.doMock needed here if global mocks are correctly re-applied after reset.
      // However, to be absolutely certain that App.tsx's direct dependency on supabaseClient
      // is using the intended mock (especially after it was unmocked for one test),
      // explicitly re-asserting the mock for supabaseClient using vi.doMock can be more robust.
      vi.doMock('../supabaseClient', () => {
        // console.log('[S supabaseClient] beforeEach routing: vi.doMock executing');
        return {
          supabase: {
            storage: {
              listBuckets: vi.fn().mockResolvedValue({ data: [{ name: 'images' }], error: null }),
              createBucket: vi.fn().mockResolvedValue({ data: { name: 'images' }, error: null }),
            },
            auth: {
              getSession: vi.fn().mockResolvedValue({ data: { session: null }, error: null }),
            },
          }
        };
      });
      vi.resetModules(); // Crucial: ensure App and its deps re-import and pick up the fresh doMock.
    });

    it('should navigate to the home page and render its content', async () => {
      window.history.pushState({}, 'Test Home Page', '/home');
      const { default: App } = await import('../App'); // Fresh import after reset & doMock
      render(<App />);

      const homePageHeading = await screen.findByRole('heading', {
        name: /COMET SCANNER TEMPLATE WIZARD/i,
        level: 1,
      });
      expect(!!homePageHeading).toBe(true);
    });

    it('should redirect from / to /home', async () => {
      window.history.pushState({}, 'Test Root Page', '/');
      const { default: App } = await import('../App'); // Fresh import
      render(<App />);

      const homePageHeading = await screen.findByRole('heading', {
        name: /COMET SCANNER TEMPLATE WIZARD/i,
        level: 1,
      });
      expect(!!homePageHeading).toBe(true);
    });

    it('should navigate to the admin page and render its content', async () => {
      window.history.pushState({}, 'Test Admin Page', '/admin');
      const { default: App } = await import('../App'); // Fresh import
      render(<App />);

      const adminPageHeading = await screen.findByRole('heading', {
        name: /Admin Dashboard/i,
        level: 1,
      });
      expect(!!adminPageHeading).toBe(true);
    });
  });
});
