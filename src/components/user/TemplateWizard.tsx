"use client";

import { useState, useEffect } from "react";
import LiveCodePreview from "./LiveCodePreview";
import { AIProviderSelector } from "../shared/AIProviderSelector";
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
    <div className="space-y-8" data-oid="6.uvp_e">
      <div className="text-center" data-oid="1p:7zt8">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="94.al3r"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="3n01unx">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="i-8uel3">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid="wklrjxu"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="onts66-"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid="kwqw_:d"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="q1:aje5"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid="z4azud:">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="54:459o"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="5bhe2vz"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="ynzv0-1"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid=".pqv58m">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid="9orfmv_"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="1mnre7_">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="3y175p."
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="qmy6phz">
          <p data-oid="og:3was">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid="vinmvos">
      <div className="text-center" data-oid="8bv98k6">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid="szj7p60"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid="n-ssdv:">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid=":x2ba-_">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="95ho9ku">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="1lfz25-"
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
                data-oid="zfxl29d"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="sv5ty2h"
                >
                  <div data-oid="_6_632q">
                    <h4 className="font-semibold" data-oid="-iogs_r">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="9pxh1f3">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="5f0uj2x">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="7flqaxj">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid="nzb093e"
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
                data-oid="j3q.gfa"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="lp-uff7"
                >
                  <div data-oid="yuz8l_d">
                    <h4 className="font-semibold" data-oid="l1afm1e">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="pbhhrtj">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="j22u26:">
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
      <div className="futuristic-container p-6" data-oid="rabclde">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid="a5:zljr"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid="l4l-ej9">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="wzj3hg4"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="4t3.7fe"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="5mxtrje">
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
            data-oid="1ucqv.o"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid="2zzo53q"
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid=".n4oqvv"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="xst__:1"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="j84gsis"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="4f_gzux"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid="lm6xtl-">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="z9:-x40"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="dcj64so">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="2v_k9ep">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="s2s8fdr">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="7bg_eh:"
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
    <div className="futuristic-container p-8" data-oid="-9i9387">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid=".c9-x:."
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="phh61pi">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="2du:fgb"
        >
          <div className="space-y-4" data-oid="140c1r2">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="dbxdf.2"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="p9vuoe2"
            >
              <p className="text-gray-400 mb-4" data-oid="4syzmw3">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="nh1os35"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="h6nxhjo">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="onu_dws"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="4cgb60_"
            >
              <p className="text-gray-400 mb-4" data-oid="k13z7pk">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="c:j2:6."
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="s8egdj5"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="i0cdj9y">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid="116xxtj"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="fk2_g58">
        <p className="text-gray-400" data-oid="vp3-zf5">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="0r1wyto"
        >
          <div className="space-y-4" data-oid="ubin7ss">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="ylvzsqz"
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid="ykah91q">
              <option data-oid=".df6r3.">1 minute</option>
              <option data-oid="2ti9kkg">5 minutes</option>
              <option data-oid="dlrdq60">15 minutes</option>
              <option data-oid=":78pf-4">1 hour</option>
              <option data-oid="vrj.jow">4 hours</option>
              <option data-oid="7oarsnd">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid="6s_wcd-">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="isthqnx"
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="fc:1-n-">
              <option data-oid="0sz2w5n">Low</option>
              <option data-oid="_39ss0p">Medium</option>
              <option data-oid="4rkzjnh">High</option>
              <option data-oid="mtdynz8">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="4ceb0zc"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="hasr8x7">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid="xzte7hj"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="1mb6xxa">
        <div className="space-y-4" data-oid="70i3ltg">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="_6eql:7"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="cucjka_"
          />
        </div>
        <div className="space-y-4" data-oid="ep3n1cv">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="nx.c5ry"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid="je7npwx"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="2yoihsf"
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
    <div className="futuristic-container p-8" data-oid="t:erqw-">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="4qb:5t5"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="bfawvgm">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="bue5j5k"
        />

        <div className="space-y-4" data-oid="l0beksc">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="3:ebcc1"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            disabled={isLoading}
            data-oid="kekrqi."
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="7wnrr-q"
          >
            <strong data-oid="544t:um">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading || !assets.trim()}
          data-oid="x1xnv8."
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="hnr.86t"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Ticker Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="bndz2_i">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="cequz24"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="cfjk6i:"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="r:hxavt"
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
    <div className="futuristic-container p-8" data-oid="8t2i_jw">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="t5ys54z"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid=":kazdm.">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="jy2z2g:"
        />

        <div className="space-y-4" data-oid="9rwjhzc">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="alhj-0a"
          >
            Name Format Preferences
          </label>
          <input
            type="text"
            className="futuristic-input w-full"
            placeholder="e.g., Short symbol without quote currency"
            value={nameFormat}
            onChange={(e) => setNameFormat(e.target.value)}
            disabled={isLoading}
            data-oid="ave-osh"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="2epyd5_"
          >
            <strong data-oid="4wyk3dk">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading}
          data-oid="25oids:"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="87n.dnf"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Name Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="q70.mlk">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="80reqqf"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="::tguvn"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="3c.k_jj"
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
    <div className="futuristic-container p-8" data-oid="xzo3sqf">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="kgjfaka"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="..6mwcb">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="pdrei53"
        />

        <div className="space-y-4" data-oid="1hlg2gq">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="4msajnc"
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="_s_sik:">
            <label className="flex items-center space-x-3" data-oid="ftcdrva">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid=".hb80pe"
              />

              <span data-oid="khvd6y2">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid="82t38l2">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="2mxdsrw"
              />

              <span data-oid="felf6d5">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="zmxiuy2">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="xa85fm-"
              />

              <span data-oid="o0x41_a">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="exjo5-:">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid=".3xcaa-"
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
            data-oid="n.9w4dg"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="e27map3"
          >
            <strong data-oid="27u95l_">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim() || isLoading}
          data-oid="vp69u:3"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="krkhh.z"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Custom Function with AI"
          )}
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="q57.aap">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="mobzl3h"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="luleu0b"
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="xht1z0q"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
