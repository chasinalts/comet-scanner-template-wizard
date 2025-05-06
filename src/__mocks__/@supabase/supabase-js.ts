// Mock for @supabase/supabase-js
import { vi } from 'vitest';

// Create a mock Supabase client
const mockSupabaseClient = {
  storage: {
    from: vi.fn().mockReturnValue({
      upload: vi.fn().mockResolvedValue({ data: { path: 'test-path' }, error: null }),
      getPublicUrl: vi.fn().mockReturnValue({ data: { publicUrl: 'https://example.com/test-image.jpg' } }),
      list: vi.fn().mockResolvedValue({ data: [{ name: 'test-image.jpg' }], error: null }),
      remove: vi.fn().mockResolvedValue({ data: {}, error: null }),
      createSignedUrl: vi.fn().mockResolvedValue({ data: { signedUrl: 'https://example.com/signed-url' }, error: null }),
    }),
  },
  auth: {
    getSession: vi.fn().mockResolvedValue({ data: { session: { user: { id: 'test-user-id' } } }, error: null }),
    signInWithPassword: vi.fn().mockResolvedValue({ data: { user: { id: 'test-user-id' } }, error: null }),
    signUp: vi.fn().mockResolvedValue({ data: { user: { id: 'test-user-id' } }, error: null }),
    signOut: vi.fn().mockResolvedValue({ error: null }),
  },
  from: vi.fn().mockReturnValue({
    select: vi.fn().mockReturnThis(),
    insert: vi.fn().mockReturnThis(),
    update: vi.fn().mockReturnThis(),
    delete: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn().mockReturnThis(),
    order: vi.fn().mockReturnThis(),
    then: vi.fn().mockImplementation(callback => Promise.resolve(callback({ data: [], error: null }))),
  }),
};

// Export the createClient function that returns our mock
export const createClient = vi.fn().mockReturnValue(mockSupabaseClient);

export default { createClient };
