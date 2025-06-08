import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Template, Section, UserSession } from '@/types/supabaseDb';
import { AIProvider } from '@/lib/aiService';

// COMET Scanner specific test utilities

export interface COMETTestContext {
  templates: Template[];
  sections: Section[];
  userSessions: UserSession[];
  currentUser: any;
  adminAuthenticated: boolean;
}

export const createCOMETTestContext = (overrides: Partial<COMETTestContext> = {}): COMETTestContext => ({
  templates: [
    {
      id: 'template-1',
      name: 'Basic Scanner Template',
      description: 'A basic scanner template for testing',
      master_code: '//@version=5\nindicator("Basic Scanner", overlay=true)\n// Basic scanner logic',
      section_ids: ['section-1', 'section-2'],
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'template-2',
      name: 'Advanced Scanner Template',
      description: 'An advanced scanner template with AI features',
      master_code: '//@version=5\nindicator("Advanced Scanner", overlay=true)\n// Advanced scanner logic',
      section_ids: ['section-3', 'section-4'],
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  sections: [
    {
      id: 'section-1',
      title: 'Scanner Type Selection',
      description: 'Choose the type of scanner you want to create',
      question_type: 'multiple_choice',
      options: ['Momentum Scanner', 'Volume Scanner', 'Breakout Scanner'],
      code_snippets: {
        'Momentum Scanner': '// Momentum scanner code',
        'Volume Scanner': '// Volume scanner code',
        'Breakout Scanner': '// Breakout scanner code',
      },
      image_assignments: null,
      order_index: 0,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    {
      id: 'section-2',
      title: 'Timeframe Configuration',
      description: 'Select the timeframe for your scanner',
      question_type: 'multiple_choice',
      options: ['1m', '5m', '15m', '1h', '4h', '1d'],
      code_snippets: {
        '1m': 'timeframe.period = "1"',
        '5m': 'timeframe.period = "5"',
        '15m': 'timeframe.period = "15"',
        '1h': 'timeframe.period = "60"',
        '4h': 'timeframe.period = "240"',
        '1d': 'timeframe.period = "1D"',
      },
      image_assignments: null,
      order_index: 1,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  userSessions: [
    {
      id: 'session-1',
      template_id: 'template-1',
      user_answers: {
        'section-1': 'Momentum Scanner',
        'section-2': '5m',
      },
      completed_sections: ['section-1'],
      generated_code: '//@version=5\nindicator("Generated Scanner", overlay=true)\n// Generated code',
      progress_state: 'in_progress',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
  ],
  currentUser: null,
  adminAuthenticated: false,
  ...overrides,
});

// Mock AI service responses
export const createMockAIResponse = (overrides: any = {}) => ({
  code: '//@version=5\nindicator("AI Generated Scanner", overlay=true)\n// AI generated code',
  explanation: 'This is an AI-generated Pine Script scanner that detects momentum patterns.',
  ...overrides,
});

// Mock Supabase responses for COMET Scanner
export const createMockSupabaseResponse = <T>(data: T, error: any = null) => ({
  data,
  error,
  status: error ? 400 : 200,
  statusText: error ? 'Bad Request' : 'OK',
});

// Template wizard test helpers
export const simulateWizardFlow = async (user: ReturnType<typeof userEvent.setup>) => {
  // Start wizard
  const startButton = screen.getByRole('button', { name: /start wizard/i });
  await user.click(startButton);

  // Select template builder
  const builderOption = screen.getByText(/template builder wizard/i);
  await user.click(builderOption);

  return {
    selectSection: async (sectionTitle: string) => {
      const section = screen.getByText(sectionTitle);
      await user.click(section);
    },
    completeSection: async () => {
      const completeButton = screen.getByRole('button', { name: /complete/i });
      await user.click(completeButton);
    },
    generateAICode: async (provider: AIProvider = 'openai') => {
      const providerSelect = screen.getByDisplayValue(provider);
      await user.selectOptions(providerSelect, provider);
      
      const generateButton = screen.getByRole('button', { name: /generate.*ai/i });
      await user.click(generateButton);
      
      await waitFor(() => {
        expect(screen.getByText(/generated code/i)).toBeInTheDocument();
      });
    },
  };
};

// Admin panel test helpers
export const simulateAdminLogin = async (user: ReturnType<typeof userEvent.setup>, password = 'testpassword') => {
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole('button', { name: /access admin panel/i });

  await user.type(passwordInput, password);
  await user.click(loginButton);

  await waitFor(() => {
    expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
  });
};

// Code preview test helpers
export const validateGeneratedCode = (code: string) => {
  const validations = {
    hasPineScriptVersion: code.includes('//@version=5'),
    hasIndicatorDeclaration: code.includes('indicator('),
    hasValidSyntax: !code.includes('undefined') && !code.includes('null'),
    hasComments: code.includes('//'),
    isNotEmpty: code.trim().length > 0,
  };

  return {
    ...validations,
    isValid: Object.values(validations).every(Boolean),
  };
};

// File upload test helpers
export const createMockFile = (name: string, content: string, type: string = 'text/plain') => {
  const file = new File([content], name, { type });
  Object.defineProperty(file, 'size', { value: content.length });
  return file;
};

export const simulateFileUpload = async (
  user: ReturnType<typeof userEvent.setup>,
  inputElement: HTMLInputElement,
  files: File[]
) => {
  await user.upload(inputElement, files);
  
  // Wait for file processing
  await waitFor(() => {
    expect(inputElement.files).toHaveLength(files.length);
  });
};

// Database operation test helpers
export const mockSupabaseOperations = () => {
  const mockOperations = {
    select: jest.fn().mockReturnThis(),
    insert: jest.fn().mockReturnThis(),
    update: jest.fn().mockReturnThis(),
    delete: jest.fn().mockReturnThis(),
    eq: jest.fn().mockReturnThis(),
    order: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
  };

  // Add promise-like behavior
  Object.keys(mockOperations).forEach(key => {
    mockOperations[key].mockImplementation(() => ({
      ...mockOperations,
      then: jest.fn((callback) => callback({ data: [], error: null })),
      catch: jest.fn(),
      finally: jest.fn(),
    }));
  });

  return mockOperations;
};

// Performance testing helpers
export const measureRenderTime = async (component: React.ReactElement) => {
  const startTime = performance.now();
  render(component);
  const endTime = performance.now();
  return endTime - startTime;
};

// Accessibility testing helpers
export const checkAccessibility = (container: HTMLElement) => {
  const checks = {
    hasProperHeadings: container.querySelectorAll('h1, h2, h3, h4, h5, h6').length > 0,
    hasAltTextForImages: Array.from(container.querySelectorAll('img')).every(img => img.alt),
    hasAriaLabels: container.querySelectorAll('[aria-label]').length > 0,
    hasProperFormLabels: Array.from(container.querySelectorAll('input, select, textarea')).every(
      input => input.labels?.length > 0 || input.getAttribute('aria-label')
    ),
    hasKeyboardNavigation: container.querySelectorAll('[tabindex]').length > 0,
  };

  return {
    ...checks,
    score: Object.values(checks).filter(Boolean).length / Object.keys(checks).length,
  };
};

// Error boundary testing
export const ErrorBoundaryTestWrapper: React.FC<{ 
  children: React.ReactNode;
  onError?: (error: Error, errorInfo: any) => void;
}> = ({ children, onError }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setHasError(true);
      setError(new Error(event.message));
      if (onError) {
        onError(new Error(event.message), { componentStack: event.filename });
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [onError]);

  if (hasError) {
    return (
      <div data-testid="error-boundary" role="alert">
        <h2>Something went wrong</h2>
        <details>
          <summary>Error details</summary>
          <pre>{error?.message}</pre>
        </details>
      </div>
    );
  }

  return <>{children}</>;
};

// Custom matchers for COMET Scanner testing
export const customMatchers = {
  toBeValidPineScript: (received: string) => {
    const validations = validateGeneratedCode(received);
    return {
      message: () => `Expected ${received} to be valid Pine Script code`,
      pass: validations.isValid,
    };
  },
  
  toHaveValidTemplateStructure: (received: Template) => {
    const hasRequiredFields = received.id && received.name && received.master_code;
    const hasValidSectionIds = Array.isArray(received.section_ids);
    
    return {
      message: () => `Expected template to have valid structure`,
      pass: hasRequiredFields && hasValidSectionIds,
    };
  },
  
  toBeAccessible: (received: HTMLElement) => {
    const accessibility = checkAccessibility(received);
    return {
      message: () => `Expected element to be accessible (score: ${accessibility.score})`,
      pass: accessibility.score >= 0.8,
    };
  },
};

// Export all utilities
export * from '@testing-library/react';
export { userEvent };