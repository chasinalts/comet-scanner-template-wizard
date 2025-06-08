const nextJest = require('next/jest')

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  displayName: {
    name: 'COMET Scanner Template Wizard',
    color: 'cyan',
  },
  
  // Setup files
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  setupFiles: ['<rootDir>/jest.polyfills.js'],
  
  // Test environment
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    url: 'http://localhost:5000',
    customExportConditions: ['node', 'node-addons'],
    resources: 'usable',
    runScripts: 'dangerously',
  },
  
  // Path configurations
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/.next-prod/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/out/',
    '<rootDir>/.jest-cache/',
  ],
  
  // Watch mode ignore patterns
  watchPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/.next-prod/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage/',
    '<rootDir>/.jest-cache/',
    '<rootDir>/tsconfig.tsbuildinfo',
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
    '^@/test-utils: '<rootDir>/src/test-utils/index.tsx',
    '^@/test-utils/(.*): '<rootDir>/src/test-utils/$1',
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
    '!src/test-utils/**/*',
    '!src/app/**/layout.tsx',
    '!src/app/**/loading.tsx',
    '!src/app/**/error.tsx',
    '!src/app/**/not-found.tsx',
    '!src/app/**/template.tsx',
    '!src/app/**/default.tsx',
    '!src/app/globals.css',
    '!src/app/favicon.ico',
    '!src/styles/**/*',
    '!**/node_modules/**',
    '!**/.next/**',
  ],
  
  coverageDirectory: 'coverage',
  coverageReporters: [
    'text',
    'text-summary', 
    'lcov', 
    'html', 
    'json',
    'clover',
    ['json-summary', { file: 'coverage-summary.json' }],
  ],
  
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
    './src/lib/': {
      branches: 75,
      functions: 75,
      lines: 75,
      statements: 75,
    },
  },
  
  // Test matching patterns
  testMatch: [
    '<rootDir>/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}',
  ],
  
  // Test regex patterns
  testRegex: [
    '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?),
  ],
  
  // Transform configuration
  transform: {
    '^.+\\.(js|jsx|ts|tsx): ['babel-jest', { 
      presets: [
        ['next/babel', {
          'preset-react': {
            runtime: 'automatic',
          },
        }],
      ],
      plugins: [
        ['@babel/plugin-transform-runtime', { 
          useESModules: true,
          regenerator: false,
        }],
      ],
    }],
    '^.+\\.(css|scss|sass|less): 'jest-transform-stub',
    '^.+\\.(jpg|jpeg|png|gif|webp|svg|ico): 'jest-transform-stub',
    '^.+\\.(woff|woff2|eot|ttf|otf): 'jest-transform-stub',
  },
  
  transformIgnorePatterns: [
    '/node_modules/(?!(@supabase|@anthropic-ai|@google|@modelcontextprotocol|@testing-library|@babel|uuid|nanoid)/)',
    '^.+\\.module\\.(css|sass|scss),
  ],
  
  // File extensions
  moduleFileExtensions: [
    'ts',
    'tsx', 
    'js', 
    'jsx', 
    'json', 
    'node',
    'mjs',
    'cjs',
  ],
  
  // Resolver configuration
  resolver: undefined,
  
  // Test timeout
  testTimeout: 15000,
  
  // Verbose output
  verbose: true,
  
  // Error handling
  errorOnDeprecated: true,
  bail: 0, // Don't stop on first failure
  
  // Globals for TypeScript and modern JS
  globals: {
    'ts-jest': {
      useESM: true,
      tsconfig: {
        jsx: 'react-jsx',
        esModuleInterop: true,
        allowSyntheticDefaultImports: true,
        target: 'ES2022',
        module: 'ESNext',
        moduleResolution: 'bundler',
      },
    },
    __DEV__: true,
    __TEST__: true,
  },
  
  // Clear mocks between tests
  clearMocks: true,
  restoreMocks: true,
  resetMocks: true,
  resetModules: false,
  
  // Snapshot configuration
  snapshotSerializers: [
    '@emotion/jest/serializer',
    'enzyme-to-json/serializer',
  ],
  
  // Parallel execution
  maxWorkers: process.env.CI ? 2 : '50%',
  
  // Cache configuration
  cacheDirectory: '<rootDir>/.jest-cache',
  
  // Notify configuration
  notify: false,
  notifyMode: 'failure-change',
  
  // Reporter configuration
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'coverage',
      outputName: 'junit.xml',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}',
      ancestorSeparator: ' › ',
      usePathForSuiteName: true,
    }],
  ],
  
  // Test result processor
  testResultsProcessor: undefined,
  
  // Custom test sequencer for better performance
  testSequencer: '@jest/test-sequencer',
  
  // Detect open handles for debugging
  detectOpenHandles: process.env.NODE_ENV === 'test',
  forceExit: process.env.CI === 'true',
  
  // Extensibility
  projects: undefined,
  
  // Module directories
  moduleDirectories: [
    'node_modules',
    '<rootDir>/src',
    '<rootDir>',
  ],
  
  // Module paths
  modulePaths: [
    '<rootDir>/src',
  ],
  
  // Preset
  preset: undefined,
  
  // Runner
  runner: 'jest-runner',
  
  // Test name pattern
  testNamePattern: undefined,
  
  // Unmocked module path patterns
  unmockedModulePathPatterns: undefined,
  
  // Watch plugins
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)