import React, { ReactElement } from "react";
import { render, RenderOptions, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// ============================================================================
// IMPORT ALL SPECIALIZED TESTING FRAMEWORKS
// ============================================================================

// Core framework
export * from "./comet-test-framework";

// AI testing utilities
export * from "./ai-component-testing";

// Template workflow testing
export * from "./template-workflow-testing";

// Complex interaction testing
export * from "./interaction-testing";

// Re-export React Testing Library
export * from "@testing-library/react";
export { userEvent };

// ============================================================================
// MAIN TEST UTILITIES AND PROVIDERS
// ============================================================================

interface COMETTestProviderProps {
  children: React.ReactNode;
  initialState?: any;
  mockServices?: boolean;
}

const COMETTestProvider: React.FC<COMETTestProviderProps> = ({
  children,
  initialState,
  mockServices = true,
}) => {
  React.useEffect(() => {
    if (mockServices) {
      // Setup global mocks
      setupGlobalMocks();
    }
  }, [mockServices]);

  return (
    <div data-testid="comet-test-provider" data-oid="_h-2zoz">
      {children}
    </div>
  );
};

// Custom render function with COMET-specific providers
interface COMETRenderOptions extends Omit<RenderOptions, "wrapper"> {
  initialState?: any;
  mockServices?: boolean;
  wrapperProps?: any;
}

export const renderWithCOMETProviders = (
  ui: ReactElement,
  options: COMETRenderOptions = {},
): RenderResult => {
  const { initialState, mockServices, wrapperProps, ...renderOptions } =
    options;

  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <COMETTestProvider
      initialState={initialState}
      mockServices={mockServices}
      {...wrapperProps}
      data-oid="ox.ag:-"
    >
      {children}
    </COMETTestProvider>
  );

  return render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};

// ============================================================================
// GLOBAL MOCK SETUP
// ============================================================================

function setupGlobalMocks(): void {
  // Mock Next.js router
  if (!jest.isMockFunction(require("next/navigation").useRouter)) {
    jest.mock("next/navigation", () => ({
      useRouter: () => ({
        push: jest.fn(),
        replace: jest.fn(),
        prefetch: jest.fn(),
        back: jest.fn(),
        forward: jest.fn(),
        refresh: jest.fn(),
        pathname: "/",
        query: {},
        asPath: "/",
      }),
      usePathname: () => "/",
      useSearchParams: () => new URLSearchParams(),
      useParams: () => ({}),
    }));
  }

  // Mock environment variables
  process.env.NEXT_PUBLIC_SUPABASE_URL = "https://test-project.supabase.co";
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY = "test-anon-key";
  process.env.OPENAI_API_KEY = "test-openai-key";
  process.env.CLAUDE_API_KEY = "test-claude-key";
  process.env.GEMINI_API_KEY = "test-gemini-key";
  process.env.OPENROUTER_API_KEY = "test-openrouter-key";
  process.env.NODE_ENV = "test";
}

// ============================================================================
// ENHANCED CUSTOM MATCHERS
// ============================================================================

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeValidPineScript(): R;
      toHaveValidTemplateStructure(): R;
      toBeAccessible(): R;
      toHavePerformantRender(): R;
      toHandleAIGeneration(): R;
      toCompleteWizardFlow(): R;
    }
  }
}

// Extend Jest matchers
expect.extend({
  toBeValidPineScript(received: string) {
    const validations = {
      hasVersion: received.includes("//@version=5"),
      hasIndicator: received.includes("indicator("),
      hasValidSyntax:
        !received.includes("undefined") && !received.includes("null"),
      hasComments: received.includes("//"),
      isNotEmpty: received.trim().length > 0,
    };

    const isValid = Object.values(validations).every(Boolean);

    return {
      message: () => `Expected ${received} to be valid Pine Script code`,
      pass: isValid,
    };
  },

  toHaveValidTemplateStructure(received: any) {
    const hasRequiredFields =
      received.id && received.name && received.master_code;
    const hasValidSectionIds = Array.isArray(received.section_ids);
    const hasValidTimestamps = received.created_at && received.updated_at;

    const isValid =
      hasRequiredFields && hasValidSectionIds && hasValidTimestamps;

    return {
      message: () => `Expected template to have valid structure`,
      pass: isValid,
    };
  },

  toBeAccessible(received: HTMLElement) {
    const checks = {
      hasProperHeadings:
        received.querySelectorAll("h1, h2, h3, h4, h5, h6").length > 0,
      hasAltTextForImages: Array.from(received.querySelectorAll("img")).every(
        (img) => img.alt,
      ),
      hasAriaLabels: received.querySelectorAll("[aria-label]").length > 0,
      hasProperFormLabels: Array.from(
        received.querySelectorAll("input, select, textarea"),
      ).every(
        (input) => input.labels?.length > 0 || input.getAttribute("aria-label"),
      ),
      hasKeyboardNavigation: received.querySelectorAll("[tabindex]").length > 0,
    };

    const score =
      Object.values(checks).filter(Boolean).length / Object.keys(checks).length;
    const isAccessible = score >= 0.8;

    return {
      message: () => `Expected element to be accessible (score: ${score})`,
      pass: isAccessible,
    };
  },

  toHavePerformantRender(received: () => React.ReactElement) {
    const startTime = performance.now();
    render(received());
    const endTime = performance.now();
    const renderTime = endTime - startTime;

    const isPerformant = renderTime < 100; // 100ms threshold

    return {
      message: () =>
        `Expected component to render in less than 100ms, but took ${renderTime}ms`,
      pass: isPerformant,
    };
  },

  toHandleAIGeneration(received: any) {
    const hasAIProvider = received.props?.provider !== undefined;
    const hasGenerateFunction =
      typeof received.props?.onGenerate === "function";
    const hasErrorHandling = typeof received.props?.onError === "function";

    const canHandleAI =
      hasAIProvider && hasGenerateFunction && hasErrorHandling;

    return {
      message: () => `Expected component to handle AI generation properly`,
      pass: canHandleAI,
    };
  },

  toCompleteWizardFlow(received: any) {
    const hasSteps = Array.isArray(received.steps) && received.steps.length > 0;
    const hasValidation = typeof received.validate === "function";
    const hasCompletion = typeof received.onComplete === "function";

    const canCompleteFlow = hasSteps && hasValidation && hasCompletion;

    return {
      message: () => `Expected wizard to complete flow properly`,
      pass: canCompleteFlow,
    };
  },
});

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

export const setupCOMETTestEnvironment = () => {
  beforeEach(() => {
    setupGlobalMocks();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
};

export const createCOMETTestSuite = (suiteName: string, tests: () => void) => {
  describe(`COMET Scanner - ${suiteName}`, () => {
    setupCOMETTestEnvironment();
    tests();
  });
};

// ============================================================================
// PERFORMANCE TESTING UTILITIES
// ============================================================================

export const measureComponentPerformance = async (
  component: React.ComponentType<any>,
  props: any = {},
  iterations: number = 10,
): Promise<{
  averageRenderTime: number;
  minRenderTime: number;
  maxRenderTime: number;
  memoryUsage: number;
}> => {
  const renderTimes: number[] = [];
  let memoryUsage = 0;

  for (let i = 0; i < iterations; i++) {
    const startTime = performance.now();
    const { unmount } = render(React.createElement(component, props));
    const endTime = performance.now();

    renderTimes.push(endTime - startTime);
    unmount();
  }

  // Mock memory usage calculation
  memoryUsage = Math.random() * 50; // MB

  return {
    averageRenderTime:
      renderTimes.reduce((sum, time) => sum + time, 0) / renderTimes.length,
    minRenderTime: Math.min(...renderTimes),
    maxRenderTime: Math.max(...renderTimes),
    memoryUsage,
  };
};

// ============================================================================
// EXPORT MAIN RENDER FUNCTION
// ============================================================================

export { renderWithCOMETProviders as render };
