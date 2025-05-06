#!/usr/bin/env node

/**
 * Script to run tests with proper mocking
 * 
 * This script runs the tests with the proper mocks in place
 */
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Run the tests
try {
  console.log('🧪 Running tests with mocks...');
  console.log('------------------------------');
  
  // Set environment variables for testing
  process.env.NODE_ENV = 'test';
  process.env.VITE_APPWRITE_ENDPOINT = 'https://cloud.appwrite.io/v1';
  process.env.VITE_APPWRITE_PROJECT_ID = 'test-project';
  process.env.VITE_APPWRITE_DATABASE_ID = 'test-database';
  process.env.VITE_SUPABASE_URL = 'https://example.supabase.co';
  process.env.VITE_SUPABASE_ANON_KEY = 'test-anon-key';
  
  // Run the tests with the custom config
  execSync('npx vitest run --config vitest.config.mjs', {
    stdio: 'inherit',
    cwd: rootDir,
    env: {
      ...process.env,
      DEBUG: '1',
    },
  });
  
  console.log('\n✅ Tests completed!');
} catch (error) {
  console.error('\n❌ Tests failed:', error.message);
  process.exit(1);
}
