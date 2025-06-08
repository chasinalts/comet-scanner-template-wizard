import React, { ReactElement } from 'react';
import { render, RenderOptions, RenderResult } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Template, Section, UserSession } from '@/types/supabaseDb';

// Custom render function that includes providers
interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  initialProps?: Record<string, any>;
}

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div data-testid="test-wrapper">
      {children}
    </div>
  );
};

const customRender = (
  ui: ReactElement,
  options?: CustomRenderOptions
): RenderResult => {
  return render(ui, {
    wrapper: AllTheProviders,
    ...options,
  });
};

// Test data factories
export const createMockTemplate = (overrides: Partial<Template> = {}): Template => ({
  id: 'test-template-id',
  name: 'Test Template',
  description: 'A test template for unit testing',
  master_code: '// Test master code\n//@version=5\nindicator("Test Scanner", overlay=true)',
  section_ids: ['section-1', 'section-2'],
  is_active: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  ...overrides,
});

export const createMockSection = (overrides: Partial<Section> = {}): Section => ({
  id: 'test-section-id',
  title: 'Test Section',
  description: 'A test section for unit testing',
  question_type: 'multiple_choice',
  options: ['Option 1', 'Option 2', 'Option 3'],
  code_snippets: {
    'Option 1': '// Code for option 1',
    'Option 2': '// Code for option 2',
    'Option 3': '// Code for option 3',
  },
  image_assignments: {
    'Option 1': 'image-1.jpg',
    'Option 2': 'image-2.jpg',
  },
  order_index: 0,
  is_active: true,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  ...overrides,
});

export const createMockUserSession = (overrides: Partial<UserSession> = {}): UserSession => ({
  id: 'test-session-id',
  template_id: 'test-template-id',
  user_answers: {
    'section-1': 'Option 1',
    'section-2': 'Option 2',
  },
  completed_sections: ['section-1'],
  generated_code: '// Generated test code',
  progress_state: 'in_progress',
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
  ...overrides,
});

// Mock API responses
export const createMockApiResponse = <T>(data: T, error: any = null) => ({
  data,
  error,
  status: error ? 400 : 200,
  statusText: error ? 'Bad Request' : 'OK',
});

// User event setup
export const setupUserEvent = () => userEvent.setup();

// Wait utilities
export const waitForLoadingToFinish = () => 
  new Promise(resolve => setTimeout(resolve, 0));

// Mock environment setup
export const setupMockEnvironment = () => {
  const originalEnv = process.env;
  
  beforeEach(() => {
    process.env = {
      ...originalEnv,
      NEXT_PUBLIC_SUPABASE_URL: 'https://test-project.supabase.co',
      NEXT_PUBLIC_SUPABASE_ANON_KEY: 'test-anon-key',
      OPENAI_API_KEY: 'test-openai-key',
      NODE_ENV: 'test',
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });
};

// Component testing helpers
export const getByTestId = (container: HTMLElement, testId: string) => 
  container.querySelector(`[data-testid="${testId}"]`);

export const getAllByTestId = (container: HTMLElement, testId: string) => 
  container.querySelectorAll(`[data-testid="${testId}"]`);

// Form testing helpers
export const fillForm = async (form: HTMLFormElement, data: Record<string, string>) => {
  const user = setupUserEvent();
  
  for (const [name, value] of Object.entries(data)) {
    const field = form.querySelector(`[name="${name}"]`) as HTMLInputElement;
    if (field) {
      await user.clear(field);
      await user.type(field, value);
    }
  }
};

export const submitForm = async (form: HTMLFormElement) => {
  const user = setupUserEvent();
  const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;
  if (submitButton) {
    await user.click(submitButton);
  }
};

// Async testing helpers
export const waitForElement = async (
  getElement: () => HTMLElement | null,
  timeout = 1000
): Promise<HTMLElement> => {
  return new Promise((resolve, reject) => {
    const startTime = Date.now();
    
    const check = () => {
      const element = getElement();
      if (element) {
        resolve(element);
      } else if (Date.now() - startTime > timeout) {
        reject(new Error(`Element not found within ${timeout}ms`));
      } else {
        setTimeout(check, 10);
      }
    };
    
    check();
  });
};

// Mock fetch responses
export const mockFetchResponse = (data: any, ok = true, status = 200) => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok,
      status,
      statusText: ok ? 'OK' : 'Error',
      json: () => Promise.resolve(data),
      text: () => Promise.resolve(JSON.stringify(data)),
      blob: () => Promise.resolve(new Blob([JSON.stringify(data)])),
      headers: new Headers(),
      redirected: false,
      type: 'basic',
      url: 'http://localhost:3000/api/test',
    } as Response)
  );
};

// Error boundary testing
export const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  React.useEffect(() => {
    const handleError = () => setHasError(true);
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return <div data-testid="error-boundary">Something went wrong</div>;
  }

  return <>{children}</>;
};

// Re-export everything from React Testing Library
export * from '@testing-library/react';
export { customRender as render };
export { userEvent };