import "@testing-library/jest-dom";
import "whatwg-fetch";

// Extend Jest matchers
expect.extend({
  toBeValidReactComponent(received) {
    const pass =
      typeof received === "function" ||
      (typeof received === "object" && received !== null);
    if (pass) {
      return {
        message: () => `expected ${received} not to be a valid React component`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be a valid React component`,
        pass: false,
      };
    }
  },
});

// Global test utilities
global.testUtils = {
  createMockTemplate: (overrides = {}) => ({
    id: "test-template-id",
    name: "Test Template",
    description: "A test template for unit testing",
    master_code: "// Test master code",
    section_ids: ["section-1", "section-2"],
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    ...overrides,
  }),

  createMockSection: (overrides = {}) => ({
    id: "test-section-id",
    title: "Test Section",
    description: "A test section",
    question_type: "multiple_choice",
    options: ["Option 1", "Option 2"],
    code_snippets: { "Option 1": "code1", "Option 2": "code2" },
    image_assignments: null,
    order_index: 0,
    is_active: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    ...overrides,
  }),

  createMockUserSession: (overrides = {}) => ({
    id: "test-session-id",
    template_id: "test-template-id",
    user_answers: {},
    completed_sections: [],
    generated_code: "",
    progress_state: "not_started",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    ...overrides,
  }),
};

// Enhanced Next.js router mock with more realistic behavior
const mockRouter = {
  push: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  pathname: "/",
  route: "/",
  query: {},
  asPath: "/",
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  beforePopState: jest.fn(),
  isFallback: false,
  isLocaleDomain: true,
  isReady: true,
  isPreview: false,
};

jest.mock("next/navigation", () => ({
  useRouter: () => mockRouter,
  usePathname: () => mockRouter.pathname,
  useSearchParams: () => new URLSearchParams(),
  useParams: () => ({}),
  notFound: jest.fn(),
  redirect: jest.fn(),
}));

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt || ""} />;
  },
}));

// Enhanced Supabase mock with more realistic responses
const createSupabaseMock = () => {
  const mockQuery = {
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    neq: jest.fn().mockReturnThis(),
    gt: jest.fn().mockReturnThis(),
    gte: jest.fn().mockReturnThis(),
    lt: jest.fn().mockReturnThis(),
    lte: jest.fn().mockReturnThis(),
    like: jest.fn().mockReturnThis(),
    ilike: jest.fn().mockReturnThis(),
    is: jest.fn().mockReturnThis(),
    in: jest.fn().mockReturnThis(),
    contains: jest.fn().mockReturnThis(),
    containedBy: jest.fn().mockReturnThis(),
    rangeGt: jest.fn().mockReturnThis(),
    rangeGte: jest.fn().mockReturnThis(),
    rangeLt: jest.fn().mockReturnThis(),
    rangeLte: jest.fn().mockReturnThis(),
    rangeAdjacent: jest.fn().mockReturnThis(),
    overlaps: jest.fn().mockReturnThis(),
    textSearch: jest.fn().mockReturnThis(),
    match: jest.fn().mockReturnThis(),
    not: jest.fn().mockReturnThis(),
    or: jest.fn().mockReturnThis(),
    filter: jest.fn().mockReturnThis(),
    order: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    range: jest.fn().mockReturnThis(),
    single: jest.fn().mockReturnThis(),
    maybeSingle: jest.fn().mockReturnThis(),
    csv: jest.fn().mockReturnThis(),
    geojson: jest.fn().mockReturnThis(),
    explain: jest.fn().mockReturnThis(),
    rollback: jest.fn().mockReturnThis(),
    returns: jest.fn().mockReturnThis(),
  };

  // Add promise-like behavior
  Object.keys(mockQuery).forEach((key) => {
    if (typeof mockQuery[key] === "function") {
      mockQuery[key].mockImplementation(() => {
        const result = { ...mockQuery };
        result.then = jest.fn((callback) =>
          callback({ data: [], error: null }),
        );
        result.catch = jest.fn();
        result.finally = jest.fn();
        return result;
      });
    }
  });

  return {
    from: jest.fn(() => mockQuery),
    storage: {
      from: jest.fn(() => ({
        upload: jest.fn(() =>
          Promise.resolve({
            data: {
              path: "test-path",
              id: "test-id",
              fullPath: "test-full-path",
            },
            error: null,
          }),
        ),
        download: jest.fn(() =>
          Promise.resolve({
            data: new Blob(["test content"]),
            error: null,
          }),
        ),
        getPublicUrl: jest.fn(() => ({
          data: { publicUrl: "https://test-url.com/test-path" },
        })),
        createSignedUrl: jest.fn(() =>
          Promise.resolve({
            data: { signedUrl: "https://test-signed-url.com" },
            error: null,
          }),
        ),
        remove: jest.fn(() =>
          Promise.resolve({
            data: [],
            error: null,
          }),
        ),
        list: jest.fn(() =>
          Promise.resolve({
            data: [],
            error: null,
          }),
        ),
        move: jest.fn(() =>
          Promise.resolve({
            data: { message: "Successfully moved" },
            error: null,
          }),
        ),
        copy: jest.fn(() =>
          Promise.resolve({
            data: { path: "copied-path" },
            error: null,
          }),
        ),
      })),
    },
    auth: {
      getUser: jest.fn(() =>
        Promise.resolve({
          data: { user: null },
          error: null,
        }),
      ),
      getSession: jest.fn(() =>
        Promise.resolve({
          data: { session: null },
          error: null,
        }),
      ),
      signUp: jest.fn(() =>
        Promise.resolve({
          data: { user: { id: "test-user-id" }, session: null },
          error: null,
        }),
      ),
      signInWithPassword: jest.fn(() =>
        Promise.resolve({
          data: {
            user: { id: "test-user-id" },
            session: { access_token: "test-token" },
          },
          error: null,
        }),
      ),
      signOut: jest.fn(() => Promise.resolve({ error: null })),
      onAuthStateChange: jest.fn(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
      admin: {
        createUser: jest.fn(() =>
          Promise.resolve({
            data: { user: { id: "test-admin-user-id" } },
            error: null,
          }),
        ),
        deleteUser: jest.fn(() =>
          Promise.resolve({
            data: { user: null },
            error: null,
          }),
        ),
        listUsers: jest.fn(() =>
          Promise.resolve({
            data: { users: [] },
            error: null,
          }),
        ),
        updateUserById: jest.fn(() =>
          Promise.resolve({
            data: { user: { id: "test-user-id" } },
            error: null,
          }),
        ),
      },
    },
    realtime: {
      channel: jest.fn(() => ({
        on: jest.fn().mockReturnThis(),
        subscribe: jest.fn(),
        unsubscribe: jest.fn(),
      })),
    },
  };
};

jest.mock("@/lib/supabaseClient", () => ({
  supabase: createSupabaseMock(),
}));

jest.mock("@/utils/supabase/client", () => ({
  createClient: () => createSupabaseMock(),
}));

jest.mock("@/utils/supabase/server", () => ({
  createClient: () => createSupabaseMock(),
}));

// Mock AI Services
jest.mock("@/lib/aiService", () => ({
  aiService: {
    generateCode: jest.fn(() =>
      Promise.resolve({
        code: "// Generated test code",
        explanation: "Test explanation",
      }),
    ),
  },
  AIProvider: {
    OPENAI: "openai",
    GEMINI: "gemini",
    CLAUDE: "claude",
    OPENROUTER: "openrouter",
  },
}));

// Mock fetch globally
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve({}),
    text: () => Promise.resolve(""),
    blob: () => Promise.resolve(new Blob()),
  }),
);

// Enhanced localStorage mock
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    key: jest.fn((index) => Object.keys(store)[index] || null),
    get length() {
      return Object.keys(store).length;
    },
  };
})();

Object.defineProperty(window, "localStorage", {
  value: localStorageMock,
});

// Enhanced sessionStorage mock
const sessionStorageMock = (() => {
  let store = {};
  return {
    getItem: jest.fn((key) => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: jest.fn((key) => {
      delete store[key];
    }),
    clear: jest.fn(() => {
      store = {};
    }),
    key: jest.fn((index) => Object.keys(store)[index] || null),
    get length() {
      return Object.keys(store).length;
    },
  };
})();

Object.defineProperty(window, "sessionStorage", {
  value: sessionStorageMock,
});

// Mock window.navigator with enhanced clipboard API
Object.defineProperty(window, "navigator", {
  value: {
    ...window.navigator,
    clipboard: {
      writeText: jest.fn(() => Promise.resolve()),
      readText: jest.fn(() => Promise.resolve("")),
      write: jest.fn(() => Promise.resolve()),
      read: jest.fn(() => Promise.resolve([])),
    },
    userAgent: "Mozilla/5.0 (Test Environment)",
    language: "en-US",
    languages: ["en-US", "en"],
    onLine: true,
    cookieEnabled: true,
  },
  writable: true,
});

// Mock window.location
Object.defineProperty(window, "location", {
  value: {
    href: "http://localhost:3000/",
    origin: "http://localhost:3000",
    protocol: "http:",
    host: "localhost:3000",
    hostname: "localhost",
    port: "3000",
    pathname: "/",
    search: "",
    hash: "",
    assign: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
  },
  writable: true,
});

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock console methods for cleaner test output
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === "string" &&
      args[0].includes("Warning: ReactDOM.render is deprecated")
    ) {
      return;
    }
    originalError.call(console, ...args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === "string" &&
      (args[0].includes("componentWillReceiveProps") ||
        args[0].includes("componentWillUpdate"))
    ) {
      return;
    }
    originalWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
  console.warn = originalWarn;
});

// Global test cleanup
afterEach(() => {
  jest.clearAllMocks();
  localStorageMock.clear();
  sessionStorageMock.clear();
});

// Environment variables for testing
process.env.NEXT_PUBLIC_SUPABASE_URL = "https://test-project.supabase.co";
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "test-anon-key";
process.env.SUPABASE_SERVICE_ROLE_KEY = "test-service-role-key";
process.env.OPENAI_API_KEY = "test-openai-key";
process.env.CLAUDE_API_KEY = "test-claude-key";
process.env.GEMINI_API_KEY = "test-gemini-key";
process.env.OPENROUTER_API_KEY = "test-openrouter-key";
process.env.NEXT_PUBLIC_SITE_URL = "http://localhost:3000";
process.env.NODE_ENV = "test";
