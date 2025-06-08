const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: 'COMET Scanner Template Wizard Tests',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  setupFiles: ['<rootDir>/jest.polyfills.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost:3000',
    customExportConditions: [''],
  },
  
  // Path configurations
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/.next-prod/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
  ],
  
  // Module resolution
  moduleNameMapping: {
    '^@/(.*): '<rootDir>/src/$1',
    '^@/components/(.*): '<rootDir>/src/components/$1',
    '^@/hooks/(.*): '<rootDir>/src/hooks/$1',
    '^@/lib/(.*): '<rootDir>/src/lib/$1',
    '^@/types/(.*): '<rootDir>/src/types/$1',
    '^@/utils/(.*): '<rootDir>/src/utils/$1',
    '^@/styles/(.*): '<rootDir>/src/styles/$1',
    '^@/app/(.*): '<rootDir>/src/app/$1',
  },
  
  // Coverage configuration
  collectCoverage: false, // Enable only when needed
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/types/**/*',
    '!src/**/*.test.{js,jsx,ts,tsx}',
    '!src/**/*.spec.{js,jsx,ts,tsx}',
    '!src/**/*.stories.{js,jsx,ts,tsx}',
    '!src/app/**/layout.tsx',
    '!src/app/**/loading.tsx',
    '!src/app/**/error.tsx',
    '!src/app/**/not-found.tsx',
    '!src/app/globals.css',
    '!src/styles/**/*',
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'text-summary', 'lcov', 'html', 'json'],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
    './src/components/': {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
    './src/hooks/': {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
  
  // Test matching patterns
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
  
  // Transform configuration
  transform: {
    '^.+\\.(js|jsx|ts|tsx): ['babel-jest', { 
      presets: ['next/babel'],
      plugins: [
        ['@babel/plugin-transform-runtime', { useESModules: true }]
      ]
    }],
    '^.+\\.(css|scss|sass): 'jest-transform-stub',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg): 'jest-transform-stub',
  },
  
  transformIgnorePatterns: [
    '/node_modules/(?!(@supabase|@anthropic-ai|@google|@modelcontextprotocol)/)',
    '^.+\\.module\\.(css|sass|scss),
  ],
  
  // File extensions
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  
  // Test timeout
  testTimeout: 10000,
  
  // Verbose output
  verbose: true,
  
  // Error handling
  errorOnDeprecated: true,
  
  // Watch mode configuration
  watchPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/.next-prod/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
  ],
  
  // Globals for TypeScript
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: {
        jsx: 'react-jsx',
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
      },
    },
  },
  
  // Clear mocks between tests
  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,
  
  // Snapshot configuration
  snapshotSerializers: ['@emotion/jest/serializer'],
  
  // Custom matchers
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  
  // Parallel execution
  maxWorkers: '50%',
  
  // Cache configuration
  cacheDirectory: '<rootDir>/.jest-cache',
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)