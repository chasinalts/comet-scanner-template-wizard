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
    <div className="space-y-8" data-oid="fqnoxzk">
      <div className="text-center" data-oid="9uk0lrp">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="xpjdkrq"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="yg.i2a9">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="437-474">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid=".zx62s1"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="m7is.6:"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid="i:63g9y"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="r9_7jlj"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid="3fme3dr">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="h8kexix"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="bppbo4t"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="n3kbe1r"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid="ypgss5e">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid="3i0.4np"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="iaqzeec">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="4a4kofi"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="h966kux">
          <p data-oid="01-bzys">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid=":brr.0:">
      <div className="text-center" data-oid="5mbxqfd">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid="a1c950j"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid="_a7h7hs">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="n5-vexc">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="lafn:vg">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="dfz5-sh"
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
                data-oid="0-4t99s"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="syga-lu"
                >
                  <div data-oid="h68u4nf">
                    <h4 className="font-semibold" data-oid="e5opzb6">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="i5gmc:6">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="zzhhwz1">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="sva5t03">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid="w6__yxx"
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
                data-oid="7drwn4j"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="5l::6-f"
                >
                  <div data-oid="u-0kmyy">
                    <h4 className="font-semibold" data-oid="5f3r5yg">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="l6q3z92">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="ct5p4gf">
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
      <div className="futuristic-container p-6" data-oid="j6.vd88">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid="jp8fo_3"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid=".hf-pyc">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="9a_urxd"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="f.ycexy"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="r25mkrw">
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
            data-oid="um3l4zc"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid="vvd8r3o"
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid="uo121v0"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="wzkfk2s"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="al7_.l0"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="-q5bclr"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid="-3vep-v">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="juvlho4"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="5agk58l">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="-za0wwd">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="b5c.lg6">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="_kf8e0v"
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
    <div className="futuristic-container p-8" data-oid="83lhxbc">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid="9wyz78q"
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="48tmyt:">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="u4elp.:"
        >
          <div className="space-y-4" data-oid="nhwqb1r">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid=":o9b0jd"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="-egs:i4"
            >
              <p className="text-gray-400 mb-4" data-oid="p4c:rel">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="_xda.d7"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="280xpvn">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="7ltj-ic"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="b5hee9n"
            >
              <p className="text-gray-400 mb-4" data-oid="5c-ozo_">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="11j0gx7"
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="uzx9t2q"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="8zx2u-s">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid="5-a7p0h"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="sctl5-9">
        <p className="text-gray-400" data-oid="gv60x7n">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="4w7_w_c"
        >
          <div className="space-y-4" data-oid="cpv9rwj">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="r4wd-p0"
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid="p0x_2r-">
              <option data-oid="gltton1">1 minute</option>
              <option data-oid="_on:naa">5 minutes</option>
              <option data-oid="2_1dhag">15 minutes</option>
              <option data-oid="tkrg2w-">1 hour</option>
              <option data-oid="0167yh6">4 hours</option>
              <option data-oid="-dehejl">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid="jleeo5l">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="rnggr_a"
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="sixkhac">
              <option data-oid="ss:0jwd">Low</option>
              <option data-oid="kqjkyeg">Medium</option>
              <option data-oid="2vfrfuf">High</option>
              <option data-oid="alqq22r">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="mk1uswq"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="u0.zo-f">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid="dkxnynj"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="mhinbx3">
        <div className="space-y-4" data-oid="9o4c:_q">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="7q_x_u:"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="0i28hpx"
          />
        </div>
        <div className="space-y-4" data-oid="clqjmuz">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="l-6d1wn"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid="6ngi94l"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="21zym98"
        >
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
  const [selectedProvider, setSelectedProvider] = useState<AIProvider>('openai');
  
  const { generateCode, isLoading, error } = useAI({
    onSuccess: (code) => {
      setGeneratedCode(code);
      onCodeUpdate(code);
    }
  });

  const handleGenerateTickerCode = async () => {
    if (!assets.trim()) {
      alert('Please enter some assets to scan');
      return;
    }

    const prompt = `Create a Pine Script ticker configuration for scanning these assets:\n${assets}\n\nGenerate code that:\n1. Creates an array of ticker symbols\n2. Includes a security function for multi-asset data retrieval\n3. Is optimized for scanner performance\n4. Handles the asset list properly`;

    await generateCode({
      prompt,
      functionType: 'ticker',
      userInput: assets,
      provider: selectedProvider
    });
  };

  return (
    <div className="futuristic-container p-8" data-oid="11w7ruk">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="mjk15ci"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="89t4h84">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
        />
        
        <div className="space-y-4" data-oid="pepm__5">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="ldp3.yb"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            data-oid="c..dtb:"
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
          data-oid="kw7lip0"
          disabled={isLoading || !assets.trim()}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            '🤖 Generate Ticker Code with AI'
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="wmw7eis">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="ke9_:8_"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="jjqlolz"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="qk6brye"
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
  const [selectedProvider, setSelectedProvider] = useState<AIProvider>('openai');
  
  const { generateCode, isLoading, error } = useAI({
    onSuccess: (code) => {
      setGeneratedCode(code);
      onCodeUpdate(code);
    }
  });

  const handleGenerateNameCode = async () => {
    const prompt = `Create a Pine Script function for generating clean asset labels/names.\n\nRequirements:\n- Format preference: ${nameFormat || 'Clean, readable format'}\n- Remove quote currencies (USDT, BUSD, etc.)\n- Handle various ticker formats\n- Return clean, display-friendly names\n\nGenerate a complete Pine Script function.`;

    await generateCode({
      prompt,
      functionType: 'name',
      userInput: nameFormat,
      provider: selectedProvider
    });
  };

  return (
    <div className="futuristic-container p-8" data-oid="w0230lv">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="s02jk90"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid="sk-itgg">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
        />
        
        <div className="space-y-4" data-oid="fui0l.t">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="2y::7c4"
          >
            Name Format Preferences
          </label>
          <input
            type="text"
            className="futuristic-input w-full"
            placeholder="e.g., Short symbol without quote currency"
            value={nameFormat}
            onChange={(e) => setNameFormat(e.target.value)}
            data-oid="gpagm13"
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
          data-oid="d8fdess"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            '🤖 Generate Name Code with AI'
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="-a8kya6">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="o1u.6jq"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="-6b:xti"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="3423-o5"
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
  const [selectedProvider, setSelectedProvider] = useState<AIProvider>('openai');
  
  const { generateCode, isLoading, error } = useAI({
    onSuccess: (code) => {
      setGeneratedCode(code);
      onCodeUpdate(code);
    }
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
      functionType: 'custom',
      userInput,
      provider: selectedProvider
    });
  };

  return (
    <div className="futuristic-container p-8" data-oid="prgh6ez">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="xxyw_0y"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="hra3e4o">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
        />
        
        <div className="space-y-4" data-oid="2u0qxj8">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="q9etusk"
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="s7cm4sr">
            <label className="flex items-center space-x-3" data-oid=".o-o73t">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="0dnb_6g"
              />

              <span data-oid="cpk31vy">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid="_t004fo">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="lisu9-y"
              />

              <span data-oid="mubwldb">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="g:e.32v">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid=".2c2bw_"
              />

              <span data-oid="3oi.g9f">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="hkufyst">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="srn.291"
          >
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
            data-oid="1rw4:xr"
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
          data-oid="j0:77.v"
        >
          {isLoading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            '🤖 Generate Custom Function with AI'
          )}
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="y5jm1ie">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="lr35.42"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="kovyt79"
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="6:1d6i7"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
