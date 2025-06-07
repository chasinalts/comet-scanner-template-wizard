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
    <div className="space-y-8" data-oid="6uuw-.2">
      <div className="text-center" data-oid="d6ipez3">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="4xxxdlk"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="2j25f8e">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="w6hj2_.">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid=".e0wy67"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="-mjsz16"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid=".qs6bxs"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="h6drfzq"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid="kp9vx51">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="63z-l:j"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="1ujvlvt"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="u6xg_rr"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid="k09w:.p">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid="no.rjik"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="_0kstw.">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="whfy_qw"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="xok26iy">
          <p data-oid="85w6jfx">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid="ch6gmc1">
      <div className="text-center" data-oid="0y_zvdm">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid="sux5gme"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid=":zsi:dl">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="n78x5hw">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="3931har">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="qb6tto."
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
                data-oid=":ucvqk_"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="jx623u:"
                >
                  <div data-oid="vl-i_lo">
                    <h4 className="font-semibold" data-oid="nylt3mj">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="bot5yix">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="rcd4.iu">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="qj:f77v">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid="-k6r14k"
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
                data-oid="x43oypw"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="gnc:jru"
                >
                  <div data-oid="el5qk4-">
                    <h4 className="font-semibold" data-oid="7mwci9a">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="w:5va4h">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="0h.4uk8">
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
      <div className="futuristic-container p-6" data-oid=":rswxul">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid="vtvs0.d"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid="fix5ais">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="0ux30ig"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="jhbp6bl"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="6tsus_p">
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
            data-oid="pxstn_f"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid="o0g6sq:"
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid="97_p-89"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="oslgcta"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="x-jodju"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="97892tr"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid=".dcsxyb">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="9j3sk7q"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="82mh:2o">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="f:6:sum">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="5rhu3ww">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="idzo1rw"
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
    <div className="futuristic-container p-8" data-oid="-x9th3m">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid="11xsl9j"
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="72t1dv-">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="igf43:_"
        >
          <div className="space-y-4" data-oid="03p9su-">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="8s7v.f8"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid=".-5sbaj"
            >
              <p className="text-gray-400 mb-4" data-oid="j1.8:m6">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="z3.0is4"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="tg:alo8">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="k7gks_g"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="s5cxcj2"
            >
              <p className="text-gray-400 mb-4" data-oid="u0a:o-p">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="53koh7:"
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="jnpsi1t"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="pobd3v3">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid="__5xjer"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="e_467lg">
        <p className="text-gray-400" data-oid="pwp70-n">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="ht7qmgi"
        >
          <div className="space-y-4" data-oid="i8-wtq2">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="fgr0a_k"
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid="lxlub5e">
              <option data-oid="nqlofjo">1 minute</option>
              <option data-oid="m.9vloo">5 minutes</option>
              <option data-oid="hyzppwp">15 minutes</option>
              <option data-oid="8j5wcir">1 hour</option>
              <option data-oid="qs-xl-a">4 hours</option>
              <option data-oid="u8nt-9q">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid="vib3ow2">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="hg1-rx."
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="it_d9bc">
              <option data-oid="j4b-.8a">Low</option>
              <option data-oid="bl8eqc1">Medium</option>
              <option data-oid="xm:044c">High</option>
              <option data-oid="y5zpn9o">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="v0f6243"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="2mw2huo">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid="e0r.8d0"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="6rqelme">
        <div className="space-y-4" data-oid="f3cz:s3">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="90ce:zg"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="chrf_9."
          />
        </div>
        <div className="space-y-4" data-oid="xhoeai-">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="8f.q95:"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid="rh.64by"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="--mela3"
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
    <div className="futuristic-container p-8" data-oid="bfc48-a">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="p2oes48"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="p.toq2-">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="f:ihbms"
        />

        <div className="space-y-4" data-oid="9.mctl.">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="a-53nya"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            disabled={isLoading}
            data-oid="in8ajyn"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="_ro.jn8"
          >
            <strong data-oid="jup5ffg">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading || !assets.trim()}
          data-oid="_dur2m9"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="4d7t4xz"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Ticker Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="vw8nij7">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="w_zacn:"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="81j9.0p"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="ho-2sdl"
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
    <div className="futuristic-container p-8" data-oid="x2md99w">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="mzxbban"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid="49yc0.b">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="sxrdhl:"
        />

        <div className="space-y-4" data-oid="1vi_40h">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="0j482q9"
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
            data-oid="..3b.z9"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="9uo_1_5"
          >
            <strong data-oid="v7d2.3y">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading}
          data-oid="2phjsv7"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="sq0p7rl"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Name Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="eq7fdl.">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="ror9hh2"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="xoyxtuw"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="hi_fn__"
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
    <div className="futuristic-container p-8" data-oid="d4mlxma">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="8842374"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="nr5k2it">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="6rf-r68"
        />

        <div className="space-y-4" data-oid="3pjh7ih">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="6ncw449"
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="abjjiqj">
            <label className="flex items-center space-x-3" data-oid="5n8xi_h">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="_k9atns"
              />

              <span data-oid="0wuez62">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid="q30d.f:">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="s-lm:m."
              />

              <span data-oid="87jh-_a">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="g:styqm">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid=":yv_2wd"
              />

              <span data-oid="nl1ty2d">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="-8vrcib">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="8vlkxs_"
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
            data-oid="v:cmqxr"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="vde4spt"
          >
            <strong data-oid="2nn.q1_">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim() || isLoading}
          data-oid="_v2myk:"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="8c2ldnc"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Custom Function with AI"
          )}
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="jcp91uw">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="u201nc_"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="mvl-3n8"
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="8loeir-"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
