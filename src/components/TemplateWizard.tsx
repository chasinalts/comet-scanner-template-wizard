"use client";

import { useState, useEffect } from "react";
import LiveCodePreview from "./LiveCodePreview";
import { AIProviderSelector } from "./AIProviderSelector";
import { useAI } from "@/hooks/useAI";
import { AIProvider } from "@/lib/aiService";

interface Template {
  id: string;
  name: string;
  description: string;
}

interface TemplateWizardProps {
  template: Template | null;
  onCodeUpdate: (code: string) => void;
}

interface WizardStep {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  type: "wizard" | "ai";
}

export default function TemplateWizard({
  template,
  onCodeUpdate,
}: TemplateWizardProps) {
  const [currentStep, setCurrentStep] = useState<string>("method-selection");
  const [selectedMethod, setSelectedMethod] = useState<
    "full" | "builder" | null
  >(null);
  const [wizardSteps, setWizardSteps] = useState<WizardStep[]>([
    {
      id: "image-management",
      title: "Image Management",
      description: "Upload and manage banner images",
      completed: false,
      type: "wizard",
    },
    {
      id: "scanner-variations",
      title: "Scanner Variations",
      description: "Configure scanner parameters",
      completed: false,
      type: "wizard",
    },
    {
      id: "content-management",
      title: "Home Page Content",
      description: "Set up descriptions and usage info",
      completed: false,
      type: "wizard",
    },
    {
      id: "ai-ticker-generation",
      title: "AI Ticker Generation",
      description: "Generate TickerID strings with AI",
      completed: false,
      type: "ai",
    },
    {
      id: "ai-name-generation",
      title: "AI Name Generation",
      description: "Generate NameID strings with AI",
      completed: false,
      type: "ai",
    },
    {
      id: "ai-function-creation",
      title: "AI Function Creation",
      description: "Create custom functions with AI",
      completed: false,
      type: "ai",
    },
  ]);

  const [baseCode, setBaseCode] =
    useState<string>(`// Base COMET Scanner Template
//@version=5
indicator("COMET Scanner Template", overlay=true)

// Base configuration that appears in every template
// This code will be present regardless of wizard choices

// Input parameters
scanner_enabled = input.bool(true, "Enable Scanner")
max_assets = input.int(40, "Maximum Assets to Scan", minval=1, maxval=40)

// Base scanner logic will be added here based on wizard progression
`);

  useEffect(() => {
    onCodeUpdate(baseCode);
  }, [baseCode, onCodeUpdate]);

  const handleMethodSelection = (method: "full" | "builder") => {
    setSelectedMethod(method);
    if (method === "builder") {
      setCurrentStep("wizard-checklist");
    }
  };

  const handleStepClick = (stepId: string) => {
    setCurrentStep(stepId);
  };

  const markStepCompleted = (stepId: string) => {
    setWizardSteps((prev) =>
      prev.map((step) =>
        step.id === stepId ? { ...step, completed: true } : step,
      ),
    );
  };

  const renderMethodSelection = () => (
    <div className="space-y-8">
      <div className="text-center">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg">Welcome to the stock market</p>
      </div>

      <div className="futuristic-container p-8">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
        >
          Choose Your Template Creation Method
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Full Template */}
          <div className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Full Template
            </h3>
            <p className="text-gray-400 mb-6">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4">
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400">
          <p>
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6">
      <div className="text-center">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Wizard Steps */}
        <div className="space-y-4">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
          >
            Wizard Steps
          </h3>
          {wizardSteps
            .filter((step) => step.type === "wizard")
            .map((step) => (
              <div
                key={step.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  step.completed
                    ? "bg-green-500/20 border-green-500/50 text-green-300"
                    : currentStep === step.id
                      ? "bg-cyan-500/20 border-cyan-500/50 text-cyan-300"
                      : "bg-slate-800/50 border-slate-600 text-gray-300 hover:border-cyan-500/30"
                }`}
                onClick={() => handleStepClick(step.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-sm opacity-80">{step.description}</p>
                  </div>
                  <div className="text-2xl">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
          >
            AI-Powered Steps
          </h3>
          {wizardSteps
            .filter((step) => step.type === "ai")
            .map((step) => (
              <div
                key={step.id}
                className={`p-4 rounded-lg border cursor-pointer transition-all ${
                  step.completed
                    ? "bg-green-500/20 border-green-500/50 text-green-300"
                    : currentStep === step.id
                      ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                      : "bg-slate-800/50 border-slate-600 text-gray-300 hover:border-purple-500/30"
                }`}
                onClick={() => handleStepClick(step.id)}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold">{step.title}</h4>
                    <p className="text-sm opacity-80">{step.description}</p>
                  </div>
                  <div className="text-2xl">
                    {step.completed
                      ? "✓"
                      : currentStep === step.id
                        ? "🤖"
                        : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Progress Summary */}
      <div className="futuristic-container p-6">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4">
          <div className="flex-1 bg-slate-700 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold">
            {wizardSteps.filter((s) => s.completed).length} /{" "}
            {wizardSteps.length} Complete
          </span>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case "image-management":
        return (
          <ImageManagementStep
            onComplete={() => markStepCompleted("image-management")}
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div>
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              ← Back to Wizard Checklist
            </button>
            {renderCurrentStep()}
          </div>
        )}
    </div>
  );
}

// Individual step components
function ImageManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
      >
        Image Management
      </h2>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-300">
              Banner Image
            </h3>
            <div className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center">
              <p className="text-gray-400 mb-4">
                Upload banner image for your scanner
              </p>
              <button className="futuristic-button px-4 py-2">
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-300">
              Preview Images
            </h3>
            <div className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center">
              <p className="text-gray-400 mb-4">
                Upload preview images showing scanner output
              </p>
              <button className="futuristic-button px-4 py-2">
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button onClick={onComplete} className="futuristic-button px-6 py-3">
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6">
        <p className="text-gray-400">
          Configure different scanner parameter variations
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <label className="block text-cyan-300 font-semibold">
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full">
              <option>1 minute</option>
              <option>5 minutes</option>
              <option>15 minutes</option>
              <option>1 hour</option>
              <option>4 hours</option>
              <option>1 day</option>
            </select>
          </div>
          <div className="space-y-4">
            <label className="block text-cyan-300 font-semibold">
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full">
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
              <option>Extreme</option>
            </select>
          </div>
        </div>
        <button onClick={onComplete} className="futuristic-button px-6 py-3">
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
      >
        Home Page Content
      </h2>
      <div className="space-y-6">
        <div className="space-y-4">
          <label className="block text-cyan-300 font-semibold">
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
          />
        </div>
        <div className="space-y-4">
          <label className="block text-cyan-300 font-semibold">
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
          />
        </div>
        <button onClick={onComplete} className="futuristic-button px-6 py-3">
          Complete Content Management
        </button>
      </div>
    </div>
  );
}

function AITickerGenerationStep({
  onComplete,
  onCodeUpdate,
}: {
  onComplete: () => void;
  onCodeUpdate: (code: string) => void;
}) {
  const [assets, setAssets] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [selectedProvider, setSelectedProvider] =
    useState<AIProvider>("openai");

  const { generateCode, isLoading, error } = useAI({
    onSuccess: (code) => {
      setGeneratedCode(code);
      onCodeUpdate(code);
    },
  });

  const handleGenerateTickerCode = async () => {
    if (!assets.trim()) {
      alert("Please enter some assets to scan");
      return;
    }

    const prompt = `Create a Pine Script ticker configuration for scanning these assets:\n${assets}\n\nGenerate code that:\n1. Creates an array of ticker symbols\n2. Includes a security function for multi-asset data retrieval\n3. Is optimized for scanner performance\n4. Handles the asset list properly`;

    await generateCode({
      prompt,
      functionType: "ticker",
      userInput: assets,
      provider: selectedProvider,
    });
  };

  return (
    <div className="futuristic-container p-8">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
        />

        <div className="space-y-4">
          <label className="block text-cyan-300 font-semibold">
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300">
            <strong>Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading || !assets.trim()}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Ticker Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">
              Generated Code:
            </h3>
            <pre className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto">
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
        >
          Complete Ticker Generation
        </button>
      </div>
    </div>
  );
}

function AINameGenerationStep({
  onComplete,
  onCodeUpdate,
}: {
  onComplete: () => void;
  onCodeUpdate: (code: string) => void;
}) {
  const [nameFormat, setNameFormat] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [selectedProvider, setSelectedProvider] =
    useState<AIProvider>("openai");

  const { generateCode, isLoading, error } = useAI({
    onSuccess: (code) => {
      setGeneratedCode(code);
      onCodeUpdate(code);
    },
  });

  const handleGenerateNameCode = async () => {
    const prompt = `Create a Pine Script function for generating clean asset labels/names.\n\nRequirements:\n- Format preference: ${nameFormat || "Clean, readable format"}\n- Remove quote currencies (USDT, BUSD, etc.)\n- Handle various ticker formats\n- Return clean, display-friendly names\n\nGenerate a complete Pine Script function.`;

    await generateCode({
      prompt,
      functionType: "name",
      userInput: nameFormat,
      provider: selectedProvider,
    });
  };

  return (
    <div className="futuristic-container p-8">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
        />

        <div className="space-y-4">
          <label className="block text-cyan-300 font-semibold">
            Name Format Preferences
          </label>
          <input
            type="text"
            className="futuristic-input w-full"
            placeholder="e.g., Short symbol without quote currency"
            value={nameFormat}
            onChange={(e) => setNameFormat(e.target.value)}
            disabled={isLoading}
          />
        </div>

        {error && (
          <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300">
            <strong>Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Name Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">
              Generated Code:
            </h3>
            <pre className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto">
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
        >
          Complete Name Generation
        </button>
      </div>
    </div>
  );
}

function AIFunctionCreationStep({
  onComplete,
  onCodeUpdate,
}: {
  onComplete: () => void;
  onCodeUpdate: (code: string) => void;
}) {
  const [functionType, setFunctionType] = useState<
    "idea" | "existing" | "codebase"
  >("idea");
  const [userInput, setUserInput] = useState<string>("");
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [selectedProvider, setSelectedProvider] =
    useState<AIProvider>("openai");

  const { generateCode, isLoading, error } = useAI({
    onSuccess: (code) => {
      setGeneratedCode(code);
      onCodeUpdate(code);
    },
  });

  const handleGenerateFunction = async () => {
    let prompt = "";

    switch (functionType) {
      case "idea":
        prompt = `Create a Pine Script custom scanner function based on this idea:\n\n${userInput}\n\nRequirements:\n- Write complete Pine Script v5 code\n- Include proper technical indicators\n- Return boolean conditions for scanning\n- Add helpful comments\n- Make it optimized for scanner performance`;
        break;
      case "existing":
        prompt = `Convert this existing Pine Script indicator into a scanner function:\n\n${userInput}\n\nRequirements:\n- Extract the core logic\n- Optimize for scanner performance\n- Return boolean signals\n- Maintain the original indicator's purpose`;
        break;
      case "codebase":
        prompt = `Extract and create a scanner function from this codebase:\n\n${userInput}\n\nRequirements:\n- Identify the most relevant trading logic\n- Create a focused scanner function\n- Optimize for performance\n- Return clear boolean signals`;
        break;
    }

    await generateCode({
      prompt,
      functionType: "custom",
      userInput,
      provider: selectedProvider,
    });
  };

  return (
    <div className="futuristic-container p-8">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
        />

        <div className="space-y-4">
          <label className="block text-cyan-300 font-semibold">
            Function Creation Method
          </label>
          <div className="space-y-3">
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
              />

              <span>Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
              />

              <span>Convert existing Pine Script indicator</span>
            </label>
            <label className="flex items-center space-x-3">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
              />

              <span>Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <label className="block text-cyan-300 font-semibold">
            {functionType === "idea" && "Describe Your Indicator Idea"}
            {functionType === "existing" && "Paste Existing Pine Script Code"}
            {functionType === "codebase" &&
              "Paste Codebase and Specify What to Extract"}
          </label>
          <textarea
            className="futuristic-input w-full h-40"
            placeholder={
              functionType === "idea"
                ? "Describe the trading logic you want to implement..."
                : functionType === "existing"
                  ? "Paste your Pine Script indicator code here..."
                  : "Paste your codebase and describe what you want to extract..."
            }
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>

        {error && (
          <div className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300">
            <strong>Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim() || isLoading}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Custom Function with AI"
          )}
        </button>

        {generatedCode && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-300">
              Generated Function:
            </h3>
            <pre className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto">
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
