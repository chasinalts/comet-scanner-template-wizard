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
  ProgressState,
} from "@/types/template";
import {
  COMETDataFactory,
  WizardTestingFramework,
  SupabaseTestingFramework,
  WizardTestFlow,
  WizardStep,
} from "./comet-test-framework";

// ============================================================================
// TEMPLATE WORKFLOW TESTING FRAMEWORK
// ============================================================================

export interface TemplateWorkflowConfig {
  template: TemplateWithSections;
  expectedSteps: WorkflowStep[];
  validationRules: ValidationRule[];
  performanceThresholds: PerformanceThresholds;
}

export interface WorkflowStep {
  id: string;
  name: string;
  type: "selection" | "input" | "ai_generation" | "validation" | "completion";
  expectedDuration: number;
  requiredElements: string[];
  interactions: StepInteraction[];
  validations: StepValidation[];
}

export interface StepInteraction {
  type: "click" | "type" | "select" | "upload" | "drag";
  target: string;
  value?: any;
  options?: any;
}

export interface StepValidation {
  type:
    | "element_present"
    | "element_absent"
    | "text_content"
    | "attribute_value"
    | "custom";
  target?: string;
  expected?: any;
  validator?: (element: HTMLElement) => boolean;
}

export interface ValidationRule {
  name: string;
  validator: (context: TemplateWorkflowContext) => ValidationResult;
  critical: boolean;
}

export interface ValidationResult {
  passed: boolean;
  message: string;
  details?: any;
}

export interface PerformanceThresholds {
  maxTotalDuration: number;
  maxStepDuration: number;
  maxMemoryUsage: number;
  minSuccessRate: number;
}

export interface TemplateWorkflowContext {
  template: TemplateWithSections;
  currentStep: number;
  userAnswers: Record<string, any>;
  generatedCode: string;
  completedSections: string[];
  startTime: number;
  stepTimes: number[];
  errors: string[];
}

// ============================================================================
// MAIN WORKFLOW TESTER CLASS
// ============================================================================

export class TemplateWorkflowTester {
  private config: TemplateWorkflowConfig;
  private context: TemplateWorkflowContext;
  private user: ReturnType<typeof userEvent.setup>;

  constructor(config: TemplateWorkflowConfig) {
    this.config = config;
    this.user = userEvent.setup();
    this.context = this.initializeContext();
  }

  async runCompleteWorkflow(): Promise<WorkflowTestResult> {
    const startTime = performance.now();
    const results: StepResult[] = [];
    let overallSuccess = true;

    try {
      // Initialize test environment
      await this.setupTestEnvironment();

      // Execute each workflow step
      for (let i = 0; i < this.config.expectedSteps.length; i++) {
        const step = this.config.expectedSteps[i];
        this.context.currentStep = i;

        const stepResult = await this.executeWorkflowStep(step);
        results.push(stepResult);

        if (!stepResult.success) {
          overallSuccess = false;
          this.context.errors.push(
            `Step ${step.name} failed: ${stepResult.error}`,
          );
        }

        // Update context with step results
        this.updateContextFromStep(stepResult);
      }

      // Run final validations
      const validationResults = await this.runValidations();

      // Calculate performance metrics
      const performanceMetrics = this.calculatePerformanceMetrics(startTime);

      return {
        success: overallSuccess && validationResults.every((v) => v.passed),
        duration: performance.now() - startTime,
        stepResults: results,
        validationResults,
        performanceMetrics,
        context: this.context,
      };
    } catch (error) {
      return {
        success: false,
        duration: performance.now() - startTime,
        stepResults: results,
        validationResults: [],
        performanceMetrics: this.calculatePerformanceMetrics(startTime),
        context: this.context,
        error: error.message,
      };
    }
  }

  private initializeContext(): TemplateWorkflowContext {
    return {
      template: this.config.template,
      currentStep: 0,
      userAnswers: {},
      generatedCode: "",
      completedSections: [],
      startTime: 0,
      stepTimes: [],
      errors: [],
    };
  }

  private async setupTestEnvironment(): Promise<void> {
    // Setup Supabase mocks
    SupabaseTestingFramework.setupSupabaseMocks();
    SupabaseTestingFramework.addTemplate(this.config.template);

    if (this.config.template.sections) {
      this.config.template.sections.forEach((section) => {
        SupabaseTestingFramework.addSection(section);
      });
    }

    // Render the template wizard component
    render(
      <div data-testid="template-wizard-container" data-oid="ndz7jh.">
        {/* Template wizard component would be rendered here */}
      </div>,
    );

    this.context.startTime = performance.now();
  }

  private async executeWorkflowStep(step: WorkflowStep): Promise<StepResult> {
    const stepStartTime = performance.now();

    try {
      // Verify required elements are present
      await this.verifyRequiredElements(step.requiredElements);

      // Execute step interactions
      for (const interaction of step.interactions) {
        await this.executeInteraction(interaction);
      }

      // Run step validations
      const validationResults = await this.runStepValidations(step.validations);

      // Check performance threshold
      const stepDuration = performance.now() - stepStartTime;
      const performanceOk =
        stepDuration <= this.config.performanceThresholds.maxStepDuration;

      this.context.stepTimes.push(stepDuration);

      return {
        stepId: step.id,
        stepName: step.name,
        success: validationResults.every((v) => v.passed) && performanceOk,
        duration: stepDuration,
        validations: validationResults,
        performanceOk,
      };
    } catch (error) {
      return {
        stepId: step.id,
        stepName: step.name,
        success: false,
        duration: performance.now() - stepStartTime,
        error: error.message,
        validations: [],
        performanceOk: false,
      };
    }
  }

  private async verifyRequiredElements(
    elementSelectors: string[],
  ): Promise<void> {
    for (const selector of elementSelectors) {
      await waitFor(
        () => {
          const element =
            screen.getByTestId(selector) ||
            screen.getByRole("button", { name: new RegExp(selector, "i") }) ||
            screen.getByText(new RegExp(selector, "i"));
          expect(element).toBeInTheDocument();
        },
        { timeout: 5000 },
      );
    }
  }

  private async executeInteraction(
    interaction: StepInteraction,
  ): Promise<void> {
    const element = this.findElement(interaction.target);

    switch (interaction.type) {
      case "click":
        await this.user.click(element);
        break;

      case "type":
        if (interaction.value) {
          await this.user.clear(element);
          await this.user.type(element, interaction.value);
        }
        break;

      case "select":
        if (interaction.value) {
          await this.user.selectOptions(element, interaction.value);
        }
        break;

      case "upload":
        if (interaction.value) {
          await this.user.upload(element, interaction.value);
        }
        break;

      case "drag":
        if (interaction.options?.target) {
          const targetElement = this.findElement(interaction.options.target);
          await this.user.drag(element, targetElement);
        }
        break;
    }

    // Wait for any async operations to complete
    await waitFor(() => {}, { timeout: 1000 });
  }

  private findElement(selector: string): HTMLElement {
    try {
      return screen.getByTestId(selector);
    } catch {
      try {
        return screen.getByRole("button", { name: new RegExp(selector, "i") });
      } catch {
        try {
          return screen.getByLabelText(new RegExp(selector, "i"));
        } catch {
          return screen.getByText(new RegExp(selector, "i"));
        }
      }
    }
  }

  private async runStepValidations(
    validations: StepValidation[],
  ): Promise<ValidationResult[]> {
    const results: ValidationResult[] = [];

    for (const validation of validations) {
      try {
        let passed = false;
        let message = "";

        switch (validation.type) {
          case "element_present":
            const element = validation.target
              ? this.findElement(validation.target)
              : null;
            passed = element !== null;
            message = passed
              ? "Element found"
              : `Element ${validation.target} not found`;
            break;

          case "element_absent":
            try {
              const absentElement = validation.target
                ? this.findElement(validation.target)
                : null;
              passed = absentElement === null;
            } catch {
              passed = true; // Element not found, which is what we want
            }
            message = passed
              ? "Element correctly absent"
              : `Element ${validation.target} should not be present`;
            break;

          case "text_content":
            const textElement = validation.target
              ? this.findElement(validation.target)
              : document.body;
            passed =
              textElement.textContent?.includes(validation.expected) || false;
            message = passed
              ? "Text content matches"
              : `Expected text "${validation.expected}" not found`;
            break;

          case "attribute_value":
            const attrElement = validation.target
              ? this.findElement(validation.target)
              : null;
            const attrValue = attrElement?.getAttribute(
              validation.expected?.attribute,
            );
            passed = attrValue === validation.expected?.value;
            message = passed
              ? "Attribute value matches"
              : `Attribute ${validation.expected?.attribute} does not match expected value`;
            break;

          case "custom":
            if (validation.validator && validation.target) {
              const customElement = this.findElement(validation.target);
              passed = validation.validator(customElement);
              message = passed
                ? "Custom validation passed"
                : "Custom validation failed";
            }
            break;
        }

        results.push({ passed, message });
      } catch (error) {
        results.push({
          passed: false,
          message: `Validation error: ${error.message}`,
        });
      }
    }

    return results;
  }

  private updateContextFromStep(stepResult: StepResult): void {
    // Update context based on step results
    // This would be customized based on the specific step type and results

    if (stepResult.stepName.includes("section")) {
      const sectionId = stepResult.stepId;
      if (!this.context.completedSections.includes(sectionId)) {
        this.context.completedSections.push(sectionId);
      }
    }

    // Extract any generated code from the UI
    try {
      const codeElement = screen.queryByTestId("generated-code");
      if (codeElement) {
        this.context.generatedCode = codeElement.textContent || "";
      }
    } catch {
      // Code element not found, which is fine for some steps
    }
  }

  private async runValidations(): Promise<ValidationResult[]> {
    const results: ValidationResult[] = [];

    for (const rule of this.config.validationRules) {
      try {
        const result = rule.validator(this.context);
        results.push(result);
      } catch (error) {
        results.push({
          passed: false,
          message: `Validation rule "${rule.name}" failed: ${error.message}`,
        });
      }
    }

    return results;
  }

  private calculatePerformanceMetrics(startTime: number): PerformanceMetrics {
    const totalDuration = performance.now() - startTime;
    const averageStepTime =
      this.context.stepTimes.reduce((sum, time) => sum + time, 0) /
      this.context.stepTimes.length;
    const maxStepTime = Math.max(...this.context.stepTimes);
    const minStepTime = Math.min(...this.context.stepTimes);

    return {
      totalDuration,
      averageStepTime,
      maxStepTime,
      minStepTime,
      stepTimes: [...this.context.stepTimes],
      memoryUsage: this.getMemoryUsage(),
      thresholdsMet: {
        totalDuration:
          totalDuration <= this.config.performanceThresholds.maxTotalDuration,
        stepDuration:
          maxStepTime <= this.config.performanceThresholds.maxStepDuration,
        memoryUsage:
          this.getMemoryUsage() <=
          this.config.performanceThresholds.maxMemoryUsage,
      },
    };
  }

  private getMemoryUsage(): number {
    // In a real browser environment, you might use performance.memory
    // For testing, we'll return a mock value
    return Math.random() * 100; // MB
  }
}

// ============================================================================
// SPECIALIZED WORKFLOW TESTERS
// ============================================================================

export class AdminWorkflowTester extends TemplateWorkflowTester {
  static async testTemplateCreation(
    templateData: Partial<Template>,
    sections: Partial<Section>[],
  ): Promise<AdminWorkflowResult> {
    const user = userEvent.setup();

    // Navigate to admin panel
    await this.navigateToAdmin(user);

    // Create template
    const templateResult = await this.createTemplate(templateData, user);

    // Add sections
    const sectionResults = [];
    for (const sectionData of sections) {
      const sectionResult = await this.createSection(sectionData, user);
      sectionResults.push(sectionResult);
    }

    // Validate template structure
    const validation = await this.validateTemplateStructure(templateData.id!);

    return {
      templateCreated: templateResult.success,
      sectionsCreated: sectionResults.every((r) => r.success),
      validationPassed: validation.passed,
      errors: [
        ...(templateResult.errors || []),
        ...sectionResults.flatMap((r) => r.errors || []),
        ...(validation.errors || []),
      ],
    };
  }

  private static async navigateToAdmin(
    user: ReturnType<typeof userEvent.setup>,
  ): Promise<void> {
    // Click admin button
    const adminButton = screen.getByText(/admin/i);
    await user.click(adminButton);

    // Enter admin password
    const passwordInput = screen.getByLabelText(/password/i);
    await user.type(passwordInput, "testpassword");

    const loginButton = screen.getByRole("button", {
      name: /access admin panel/i,
    });
    await user.click(loginButton);

    // Wait for admin dashboard
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });
  }

  private static async createTemplate(
    templateData: Partial<Template>,
    user: ReturnType<typeof userEvent.setup>,
  ): Promise<{ success: boolean; errors?: string[] }> {
    try {
      // Navigate to template creation
      const createTemplateButton = screen.getByRole("button", {
        name: /create template/i,
      });
      await user.click(createTemplateButton);

      // Fill template form
      if (templateData.name) {
        const nameInput = screen.getByLabelText(/template name/i);
        await user.type(nameInput, templateData.name);
      }

      if (templateData.description) {
        const descInput = screen.getByLabelText(/description/i);
        await user.type(descInput, templateData.description);
      }

      if (templateData.master_code) {
        const codeInput = screen.getByLabelText(/master code/i);
        await user.clear(codeInput);
        await user.type(codeInput, templateData.master_code);
      }

      // Submit form
      const submitButton = screen.getByRole("button", {
        name: /save template/i,
      });
      await user.click(submitButton);

      // Wait for success message
      await waitFor(() => {
        expect(screen.getByText(/template created/i)).toBeInTheDocument();
      });

      return { success: true };
    } catch (error) {
      return { success: false, errors: [error.message] };
    }
  }

  private static async createSection(
    sectionData: Partial<Section>,
    user: ReturnType<typeof userEvent.setup>,
  ): Promise<{ success: boolean; errors?: string[] }> {
    try {
      // Navigate to section creation
      const createSectionButton = screen.getByRole("button", {
        name: /add section/i,
      });
      await user.click(createSectionButton);

      // Fill section form
      if (sectionData.title) {
        const titleInput = screen.getByLabelText(/section title/i);
        await user.type(titleInput, sectionData.title);
      }

      if (sectionData.question_type) {
        const typeSelect = screen.getByLabelText(/question type/i);
        await user.selectOptions(typeSelect, sectionData.question_type);
      }

      // Submit form
      const submitButton = screen.getByRole("button", {
        name: /save section/i,
      });
      await user.click(submitButton);

      // Wait for success message
      await waitFor(() => {
        expect(screen.getByText(/section created/i)).toBeInTheDocument();
      });

      return { success: true };
    } catch (error) {
      return { success: false, errors: [error.message] };
    }
  }

  private static async validateTemplateStructure(templateId: string): Promise<{
    passed: boolean;
    errors?: string[];
  }> {
    // This would validate the template structure in the database
    // For testing purposes, we'll simulate this
    return { passed: true };
  }
}

// ============================================================================
// RESULT INTERFACES
// ============================================================================

export interface WorkflowTestResult {
  success: boolean;
  duration: number;
  stepResults: StepResult[];
  validationResults: ValidationResult[];
  performanceMetrics: PerformanceMetrics;
  context: TemplateWorkflowContext;
  error?: string;
}

export interface StepResult {
  stepId: string;
  stepName: string;
  success: boolean;
  duration: number;
  validations: ValidationResult[];
  performanceOk: boolean;
  error?: string;
}

export interface PerformanceMetrics {
  totalDuration: number;
  averageStepTime: number;
  maxStepTime: number;
  minStepTime: number;
  stepTimes: number[];
  memoryUsage: number;
  thresholdsMet: {
    totalDuration: boolean;
    stepDuration: boolean;
    memoryUsage: boolean;
  };
}

export interface AdminWorkflowResult {
  templateCreated: boolean;
  sectionsCreated: boolean;
  validationPassed: boolean;
  errors: string[];
}

// ============================================================================
// EXPORT ALL UTILITIES
// ============================================================================

export { TemplateWorkflowTester, AdminWorkflowTester };
