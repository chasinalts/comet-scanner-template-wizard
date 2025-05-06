import { defineConfig } from 'vitest/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
    coverage: {
      reporter: ['text', 'json', 'html']
    },
    mockReset: true,
    restoreMocks: true,
    deps: {
      optimizer: {
        web: {
          include: [/@supabase\/supabase-js/, /appwrite/]
        }
      }
    },
    alias: {
      '@': path.resolve(__dirname, './src'),
      'src': path.resolve(__dirname, './src'),
    }
  }
});
