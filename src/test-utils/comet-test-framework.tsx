import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Template,
  Section,
  UserSession,
  TemplateWithSections,
  QuestionType,
  ProgressState,
  TemplateValidation,
} from "@/types/template";
import { AIProvider } from "@/lib/aiService";

// ============================================================================
// CORE TYPES AND INTERFACES
// ============================================================================

export interface COMETTestContext {
  templates: Template[];
  sections: Section[];
  userSessions: UserSession[];
  currentUser: any;
  adminAuthenticated: boolean;
  aiResponses: Map<string, any>;
  supabaseState: SupabaseTestState;
}

export interface SupabaseTestState {
  tables: {
    templates: Template[];
    sections: Section[];
    user_sessions: UserSession[];
  };
  storage: {
    buckets: Map<string, File[]>;
  };
  auth: {
    user: any;
    session: any;
  };
}

export interface AITestScenario {
  provider: AIProvider;
  functionType: "ticker" | "name" | "function" | "scanner" | "custom";
  prompt: string;
  expectedResponse: {
    code: string;
    explanation?: string;
  };
  shouldFail?: boolean;
  errorMessage?: string;
}

export interface WizardTestFlow {
  templateId: string;
  steps: WizardStep[];
  expectedFinalCode: string;
  expectedProgress: ProgressState;
}

export interface WizardStep {
  sectionId: string;
  userInput: any;
  expectedCodeSnippet?: string;
  aiGeneration?: AITestScenario;
  validations?: Array<(context: COMETTestContext) => boolean>;
}

// ============================================================================
// MOCK DATA FACTORIES
// ============================================================================

export class COMETDataFactory {
  private static idCounter = 0;

  static generateId(prefix: string = "test"): string {
    return `${prefix}-${++this.idCounter}-${Date.now()}`;
  }

  static createTemplate(overrides: Partial<Template> = {}): Template {
    return {
      id: this.generateId("template"),
      name: "Test COMET Scanner Template",
      description:
        "A comprehensive test template for COMET Scanner functionality",
      master_code: this.generateMasterCode(),
      section_ids: ["section-1", "section-2", "section-3"],
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...overrides,
    };
  }

  static createSection(overrides: Partial<Section> = {}): Section {
    const questionType: QuestionType =
      overrides.question_type || "multiple_choice";

    return {
      id: this.generateId("section"),
      title: "Scanner Configuration",
      description: "Configure your scanner parameters",
      question_type: questionType,
      options: this.generateOptionsForType(questionType),
      code_snippets: this.generateCodeSnippets(questionType),
      image_assignments: this.generateImageAssignments(),
      order_index: 0,
      is_active: true,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...overrides,
    };
  }

  static createUserSession(overrides: Partial<UserSession> = {}): UserSession {
    return {
      id: this.generateId("session"),
      template_id: this.generateId("template"),
      user_answers: {
        "section-1": "Momentum Scanner",
        "section-2": "5m",
      },
      completed_sections: ["section-1"],
      generated_code: this.generateSampleCode(),
      progress_state: "in_progress",
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      ...overrides,
    };
  }

  static createTemplateWithSections(
    templateOverrides: Partial<Template> = {},
    sectionOverrides: Partial<Section>[] = [],
  ): TemplateWithSections {
    const template = this.createTemplate(templateOverrides);
    const sections =
      sectionOverrides.length > 0
        ? sectionOverrides.map((override) => this.createSection(override))
        : [
            this.createSection({
              id: "section-1",
              title: "Scanner Type",
              question_type: "multiple_choice",
              options: ["Momentum", "Volume", "Breakout"],
            }),
            this.createSection({
              id: "section-2",
              title: "Timeframe",
              question_type: "multiple_choice",
              options: ["1m", "5m", "15m", "1h"],
            }),
            this.createSection({
              id: "section-3",
              title: "Custom Parameters",
              question_type: "text_input",
              options: null,
            }),
          ];

    return {
      ...template,
      section_ids: sections.map((s) => s.id),
      sections,
    };
  }

  private static generateMasterCode(): string {
    return `//@version=5
indicator("COMET Scanner Template", overlay=true)

// ============================================================================
// CONFIGURATION PARAMETERS
// ============================================================================
scanner_enabled = input.bool(true, "Enable Scanner")
max_assets = input.int(40, "Maximum Assets to Scan", minval=1, maxval=40)
timeframe_setting = input.timeframe("5", "Scanner Timeframe")

// ============================================================================
// SCANNER LOGIC PLACEHOLDERS
// ============================================================================
// {{SCANNER_TYPE_PLACEHOLDER}}
// {{TIMEFRAME_PLACEHOLDER}}
// {{CUSTOM_LOGIC_PLACEHOLDER}}

// ============================================================================
// SIGNAL GENERATION
// ============================================================================
signal_condition = false // Will be replaced by actual logic

// ============================================================================
// VISUALIZATION
// ============================================================================
plotshape(signal_condition, title="Scanner Signal", style=shape.triangleup, 
          location=location.belowbar, color=color.green, size=size.small)

// ============================================================================
// ALERTS
// ============================================================================
alertcondition(signal_condition, title="COMET Scanner Alert", 
               message="Scanner signal detected")`;
  }

  private static generateOptionsForType(type: QuestionType): string[] | null {
    switch (type) {
      case "multiple_choice":
        return ["Option A", "Option B", "Option C"];
      case "boolean":
        return ["Yes", "No"];
      case "slider":
        return null;
      case "text_input":
        return null;
      default:
        return null;
    }
  }

  private static generateCodeSnippets(
    type: QuestionType,
  ): Record<string, string> {
    switch (type) {
      case "multiple_choice":
        return {
          "Option A": '// Code for Option A\nscanner_type = "momentum"',
          "Option B": '// Code for Option B\nscanner_type = "volume"',
          "Option C": '// Code for Option C\nscanner_type = "breakout"',
        };
      case "boolean":
        return {
          Yes: "// Enable feature\nfeature_enabled = true",
          No: "// Disable feature\nfeature_enabled = false",
        };
      default:
        return {
          default: "// Default code snippet\n// Custom logic here",
        };
    }
  }

  private static generateImageAssignments(): Record<string, string> | null {
    return {
      "Option A": "momentum-scanner.png",
      "Option B": "volume-scanner.png",
      "Option C": "breakout-scanner.png",
    };
  }

  private static generateSampleCode(): string {
    return `//@version=5
indicator("Generated COMET Scanner", overlay=true)

// Generated scanner logic
scanner_enabled = input.bool(true, "Enable Scanner")
length = input.int(14, "Length")

// Sample momentum calculation
momentum = close - close[length]
signal = momentum > 0

plotshape(signal, title="Signal", style=shape.triangleup, 
          location=location.belowbar, color=color.green)`;
  }
}

// ============================================================================
// AI TESTING UTILITIES
// ============================================================================

export class AITestingFramework {
  private static aiResponses = new Map<string, any>();
  private static requestHistory: any[] = [];

  static setupAIMocks(): void {
    // Mock the AI service
    jest.mock("@/lib/aiService", () => ({
      aiService: {
        generateCode: jest
          .fn()
          .mockImplementation(this.mockGenerateCode.bind(this)),
      },
      AIProvider: {
        OPENAI: "openai",
        GEMINI: "gemini",
        CLAUDE: "claude",
        OPENROUTER: "openrouter",
      },
    }));

    // Mock fetch for AI API calls
    global.fetch = jest.fn().mockImplementation(this.mockFetch.bind(this));
  }

  static addAIResponse(scenario: AITestScenario): void {
    const key = this.generateResponseKey(scenario);
    this.aiResponses.set(key, scenario);
  }

  static addMultipleAIResponses(scenarios: AITestScenario[]): void {
    scenarios.forEach((scenario) => this.addAIResponse(scenario));
  }

  static clearAIResponses(): void {
    this.aiResponses.clear();
    this.requestHistory = [];
  }

  static getRequestHistory(): any[] {
    return [...this.requestHistory];
  }

  static getLastRequest(): any {
    return this.requestHistory[this.requestHistory.length - 1];
  }

  private static async mockGenerateCode(request: any): Promise<any> {
    this.requestHistory.push(request);

    const key = this.generateResponseKey(request);
    const scenario = this.aiResponses.get(key);

    if (scenario?.shouldFail) {
      throw new Error(scenario.errorMessage || "AI generation failed");
    }

    if (scenario) {
      return scenario.expectedResponse;
    }

    // Default response
    return {
      code: this.generateDefaultCode(request.functionType),
      explanation: `Generated ${request.functionType} code using ${request.provider}`,
    };
  }

  private static async mockFetch(url: string, options: any): Promise<Response> {
    if (url.includes("/api/ai/generate")) {
      const body = JSON.parse(options.body);
      this.requestHistory.push(body);

      const key = this.generateResponseKey(body);
      const scenario = this.aiResponses.get(key);

      if (scenario?.shouldFail) {
        return new Response(
          JSON.stringify({
            error: scenario.errorMessage || "AI generation failed",
          }),
          { status: 500, statusText: "Internal Server Error" },
        );
      }

      const response = scenario?.expectedResponse || {
        code: this.generateDefaultCode(body.functionType),
        explanation: `Generated ${body.functionType} code`,
      };

      return new Response(JSON.stringify(response), {
        status: 200,
        statusText: "OK",
        headers: { "Content-Type": "application/json" },
      });
    }

    // Default fetch mock
    return new Response(JSON.stringify({}), { status: 200 });
  }

  private static generateResponseKey(request: any): string {
    return `${request.provider}-${request.functionType}-${request.prompt?.slice(0, 50) || "default"}`;
  }

  private static generateDefaultCode(functionType: string): string {
    switch (functionType) {
      case "ticker":
        return `// Ticker configuration
tickers = array.new<string>()
array.push(tickers, "BTCUSDT")
array.push(tickers, "ETHUSDT")`;

      case "name":
        return `// Name formatting function
format_name(ticker) =>
    str.replace(ticker, "USDT", "")`;

      case "function":
        return `// Custom scanner function
scanner_condition() =>
    rsi_value = ta.rsi(close, 14)
    rsi_value > 70 or rsi_value < 30`;

      case "scanner":
        return `// Scanner logic
scanner_signal = ta.crossover(ta.sma(close, 10), ta.sma(close, 20))`;

      default:
        return `// Generated code for ${functionType}
// Custom logic here`;
    }
  }
}

// ============================================================================
// WIZARD FLOW TESTING
// ============================================================================

export class WizardTestingFramework {
  static async simulateCompleteWizardFlow(
    flow: WizardTestFlow,
    user: ReturnType<typeof userEvent.setup>,
  ): Promise<{
    success: boolean;
    finalCode: string;
    errors: string[];
    stepResults: any[];
  }> {
    const errors: string[] = [];
    const stepResults: any[] = [];
    let currentCode = "";

    try {
      // Start the wizard
      await this.startWizard(user);

      // Execute each step
      for (const step of flow.steps) {
        const stepResult = await this.executeWizardStep(step, user);
        stepResults.push(stepResult);

        if (!stepResult.success) {
          errors.push(`Step ${step.sectionId} failed: ${stepResult.error}`);
        } else {
          currentCode = stepResult.generatedCode || currentCode;
        }
      }

      // Validate final state
      const finalValidation = this.validateFinalWizardState(flow, currentCode);

      return {
        success: errors.length === 0 && finalValidation.isValid,
        finalCode: currentCode,
        errors: [...errors, ...finalValidation.errors],
        stepResults,
      };
    } catch (error) {
      errors.push(`Wizard flow failed: ${error.message}`);
      return {
        success: false,
        finalCode: currentCode,
        errors,
        stepResults,
      };
    }
  }

  private static async startWizard(
    user: ReturnType<typeof userEvent.setup>,
  ): Promise<void> {
    // Look for wizard start button
    const startButton = screen.getByRole("button", { name: /start wizard/i });
    await user.click(startButton);

    // Select template builder option
    await waitFor(() => {
      const builderOption = screen.getByText(/template builder wizard/i);
      expect(builderOption).toBeInTheDocument();
    });

    const builderButton = screen.getByRole("button", { name: /start wizard/i });
    await user.click(builderButton);
  }

  private static async executeWizardStep(
    step: WizardStep,
    user: ReturnType<typeof userEvent.setup>,
  ): Promise<any> {
    try {
      // Navigate to the step
      const stepElement = screen.getByText(new RegExp(step.sectionId, "i"));
      await user.click(stepElement);

      // Handle different input types
      await this.handleStepInput(step, user);

      // Handle AI generation if specified
      if (step.aiGeneration) {
        await this.handleAIGeneration(step.aiGeneration, user);
      }

      // Complete the step
      const completeButton = screen.getByRole("button", { name: /complete/i });
      await user.click(completeButton);

      // Validate step completion
      await waitFor(() => {
        const completedIndicator = screen.getByText("✓");
        expect(completedIndicator).toBeInTheDocument();
      });

      return {
        success: true,
        sectionId: step.sectionId,
        generatedCode: step.expectedCodeSnippet,
      };
    } catch (error) {
      return {
        success: false,
        sectionId: step.sectionId,
        error: error.message,
      };
    }
  }

  private static async handleStepInput(
    step: WizardStep,
    user: ReturnType<typeof userEvent.setup>,
  ): Promise<void> {
    if (typeof step.userInput === "string") {
      // Handle text input
      const textInput = screen.getByRole("textbox");
      await user.clear(textInput);
      await user.type(textInput, step.userInput);
    } else if (Array.isArray(step.userInput)) {
      // Handle multiple choice
      for (const choice of step.userInput) {
        const option = screen.getByText(choice);
        await user.click(option);
      }
    } else if (typeof step.userInput === "boolean") {
      // Handle boolean input
      const checkbox = screen.getByRole("checkbox");
      if (step.userInput) {
        await user.check(checkbox);
      } else {
        await user.uncheck(checkbox);
      }
    }
  }

  private static async handleAIGeneration(
    aiScenario: AITestScenario,
    user: ReturnType<typeof userEvent.setup>,
  ): Promise<void> {
    // Select AI provider
    const providerSelect = screen.getByDisplayValue(aiScenario.provider);
    await user.selectOptions(providerSelect, aiScenario.provider);

    // Enter prompt if needed
    if (aiScenario.prompt) {
      const promptInput = screen.getByPlaceholderText(/prompt/i);
      await user.clear(promptInput);
      await user.type(promptInput, aiScenario.prompt);
    }

    // Trigger AI generation
    const generateButton = screen.getByRole("button", {
      name: /generate.*ai/i,
    });
    await user.click(generateButton);

    // Wait for generation to complete
    await waitFor(
      () => {
        if (aiScenario.shouldFail) {
          expect(screen.getByText(/error/i)).toBeInTheDocument();
        } else {
          expect(screen.getByText(/generated code/i)).toBeInTheDocument();
        }
      },
      { timeout: 10000 },
    );
  }

  private static validateFinalWizardState(
    flow: WizardTestFlow,
    actualCode: string,
  ): TemplateValidation {
    const errors: string[] = [];
    const warnings: string[] = [];

    // Validate code structure
    if (!actualCode.includes("//@version=5")) {
      errors.push("Generated code missing Pine Script version declaration");
    }

    if (!actualCode.includes("indicator(")) {
      errors.push("Generated code missing indicator declaration");
    }

    // Validate expected content
    if (
      flow.expectedFinalCode &&
      !actualCode.includes(flow.expectedFinalCode)
    ) {
      warnings.push("Generated code does not match expected final code");
    }

    return {
      isValid: errors.length === 0,
      errors,
      warnings,
    };
  }
}

// ============================================================================
// SUPABASE TESTING FRAMEWORK
// ============================================================================

export class SupabaseTestingFramework {
  private static testState: SupabaseTestState = {
    tables: {
      templates: [],
      sections: [],
      user_sessions: [],
    },
    storage: {
      buckets: new Map(),
    },
    auth: {
      user: null,
      session: null,
    },
  };

  static initializeTestState(initialData?: Partial<SupabaseTestState>): void {
    this.testState = {
      tables: {
        templates: initialData?.tables?.templates || [],
        sections: initialData?.tables?.sections || [],
        user_sessions: initialData?.tables?.user_sessions || [],
      },
      storage: {
        buckets: initialData?.storage?.buckets || new Map(),
      },
      auth: {
        user: initialData?.auth?.user || null,
        session: initialData?.auth?.session || null,
      },
    };
  }

  static getTestState(): SupabaseTestState {
    return { ...this.testState };
  }

  static addTemplate(template: Template): void {
    this.testState.tables.templates.push(template);
  }

  static addSection(section: Section): void {
    this.testState.tables.sections.push(section);
  }

  static addUserSession(session: UserSession): void {
    this.testState.tables.user_sessions.push(session);
  }

  static setupSupabaseMocks(): void {
    const mockSupabase = this.createMockSupabaseClient();

    jest.mock("@/lib/supabaseClient", () => ({
      supabase: mockSupabase,
    }));

    jest.mock("@/utils/supabase/client", () => ({
      createClient: () => mockSupabase,
    }));

    jest.mock("@/utils/supabase/server", () => ({
      createClient: () => mockSupabase,
    }));
  }

  private static createMockSupabaseClient(): any {
    return {
      from: (table: string) => this.createTableMock(table),
      storage: {
        from: (bucket: string) => this.createStorageMock(bucket),
      },
      auth: this.createAuthMock(),
      realtime: {
        channel: () => ({
          on: jest.fn().mockReturnThis(),
          subscribe: jest.fn(),
          unsubscribe: jest.fn(),
        }),
      },
    };
  }

  private static createTableMock(tableName: string): any {
    const tableData =
      this.testState.tables[tableName as keyof typeof this.testState.tables] ||
      [];

    return {
      select: jest.fn().mockImplementation((columns = "*") => ({
        eq: jest.fn().mockImplementation((column, value) => ({
          data: tableData.filter((item) => item[column] === value),
          error: null,
        })),
        order: jest.fn().mockImplementation(() => ({
          data: [...tableData].sort((a, b) =>
            a.created_at.localeCompare(b.created_at),
          ),
          error: null,
        })),
        limit: jest.fn().mockImplementation((count) => ({
          data: tableData.slice(0, count),
          error: null,
        })),
        data: tableData,
        error: null,
      })),

      insert: jest.fn().mockImplementation((data) => {
        const newItem = Array.isArray(data) ? data : [data];
        newItem.forEach((item) => {
          const itemWithId = {
            ...item,
            id: item.id || COMETDataFactory.generateId(),
            created_at: item.created_at || new Date().toISOString(),
            updated_at: item.updated_at || new Date().toISOString(),
          };
          tableData.push(itemWithId);
        });

        return {
          data: newItem,
          error: null,
        };
      }),

      update: jest.fn().mockImplementation((updates) => ({
        eq: jest.fn().mockImplementation((column, value) => {
          const items = tableData.filter((item) => item[column] === value);
          items.forEach((item) => {
            Object.assign(item, updates, {
              updated_at: new Date().toISOString(),
            });
          });

          return {
            data: items,
            error: null,
          };
        }),
      })),

      delete: jest.fn().mockImplementation(() => ({
        eq: jest.fn().mockImplementation((column, value) => {
          const index = tableData.findIndex((item) => item[column] === value);
          const deleted = index >= 0 ? tableData.splice(index, 1) : [];

          return {
            data: deleted,
            error: null,
          };
        }),
      })),
    };
  }

  private static createStorageMock(bucketName: string): any {
    if (!this.testState.storage.buckets.has(bucketName)) {
      this.testState.storage.buckets.set(bucketName, []);
    }

    const bucketFiles = this.testState.storage.buckets.get(bucketName)!;

    return {
      upload: jest.fn().mockImplementation((path, file) => {
        bucketFiles.push(file);
        return Promise.resolve({
          data: { path, id: COMETDataFactory.generateId("file") },
          error: null,
        });
      }),

      download: jest.fn().mockImplementation((path) => {
        const file = bucketFiles.find((f) => f.name === path);
        return Promise.resolve({
          data: file || new Blob(["mock file content"]),
          error: file ? null : { message: "File not found" },
        });
      }),

      getPublicUrl: jest.fn().mockImplementation((path) => ({
        data: { publicUrl: `https://mock-storage.com/${bucketName}/${path}` },
      })),

      remove: jest.fn().mockImplementation((paths) => {
        const pathArray = Array.isArray(paths) ? paths : [paths];
        pathArray.forEach((path) => {
          const index = bucketFiles.findIndex((f) => f.name === path);
          if (index >= 0) bucketFiles.splice(index, 1);
        });

        return Promise.resolve({
          data: pathArray.map((path) => ({ name: path })),
          error: null,
        });
      }),

      list: jest.fn().mockImplementation(() =>
        Promise.resolve({
          data: bucketFiles.map((file) => ({ name: file.name, id: file.name })),
          error: null,
        }),
      ),
    };
  }

  private static createAuthMock(): any {
    return {
      getUser: jest.fn().mockImplementation(() =>
        Promise.resolve({
          data: { user: this.testState.auth.user },
          error: null,
        }),
      ),

      getSession: jest.fn().mockImplementation(() =>
        Promise.resolve({
          data: { session: this.testState.auth.session },
          error: null,
        }),
      ),

      signUp: jest.fn().mockImplementation((credentials) => {
        const user = {
          id: COMETDataFactory.generateId("user"),
          email: credentials.email,
          created_at: new Date().toISOString(),
        };

        this.testState.auth.user = user;

        return Promise.resolve({
          data: { user, session: null },
          error: null,
        });
      }),

      signInWithPassword: jest.fn().mockImplementation((credentials) => {
        const user = {
          id: COMETDataFactory.generateId("user"),
          email: credentials.email,
        };

        const session = {
          access_token: "mock-access-token",
          user,
        };

        this.testState.auth.user = user;
        this.testState.auth.session = session;

        return Promise.resolve({
          data: { user, session },
          error: null,
        });
      }),

      signOut: jest.fn().mockImplementation(() => {
        this.testState.auth.user = null;
        this.testState.auth.session = null;

        return Promise.resolve({ error: null });
      }),

      onAuthStateChange: jest.fn().mockImplementation(() => ({
        data: { subscription: { unsubscribe: jest.fn() } },
      })),
    };
  }
}

// Export all utilities
export * from "@testing-library/react";
export { userEvent };
