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
    <div className="space-y-8" data-oid="mdz4j6q">
      <div className="text-center" data-oid="_o40ai0">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="rfpr2zk"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="idgg67i">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="ytleql5">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid=":n5wcm0"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="bhbvs-r"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid="s0htsxh"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid=":0s9_:6"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid="r41ujao">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="3.jy931"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="5ijb9er"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="w:0:1-f"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid="nac9-sf">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid="2m54s1j"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="mpjhhts">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="qri.w3n"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="tlhysae">
          <p data-oid="rjr.mim">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid="_4._4zb">
      <div className="text-center" data-oid="1t104wa">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid="7un4_g8"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid="2q551zh">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="7nnt8m2">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="hepm9-t">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="mg4a0ak"
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
                data-oid="7u1nin-"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="t7_-qb:"
                >
                  <div data-oid="fpli.hd">
                    <h4 className="font-semibold" data-oid="bha-fsv">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="4oq-huk">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="amnepvh">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="al1cr2b">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid="v4_jef:"
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
                data-oid="n8k.owu"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="rd_dn.v"
                >
                  <div data-oid="7u5.n1n">
                    <h4 className="font-semibold" data-oid="68nun.z">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="j093ly-">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="k153_1m">
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
      <div className="futuristic-container p-6" data-oid="ghaits7">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid="jtzaljn"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid="c3p00q5">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="4sicxtg"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="xwkpyie"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="_554.51">
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
            data-oid="dmrz6qq"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid=".r01rc_"
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid="bzab.a5"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="i1feusa"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="051-d2g"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="2mcrkia"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid="9zx.wxg">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="skkybey"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="8jqzls9">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="m48b0_o">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="_0c8y7-">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="mr87.sh"
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
    <div className="futuristic-container p-8" data-oid="f.-xnia">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid="6_82rk5"
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="trz1sg4">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="m3c6pm-"
        >
          <div className="space-y-4" data-oid="3t17o5s">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="8s9ueq8"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="f2mp1d7"
            >
              <p className="text-gray-400 mb-4" data-oid="5r58qo-">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="yicka8y"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="9sijm7b">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="fy1vdm8"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="-ozszt."
            >
              <p className="text-gray-400 mb-4" data-oid="b1uh-62">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="kiv83ol"
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="l8hmrti"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="fla::9g">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid=".pz24mm"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="rmzy_kf">
        <p className="text-gray-400" data-oid="um62s-z">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="6rvczb2"
        >
          <div className="space-y-4" data-oid="vvxzy_t">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid=".qz1v7e"
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid="x.r03:y">
              <option data-oid="8oef.sr">1 minute</option>
              <option data-oid="maa23ws">5 minutes</option>
              <option data-oid="g5one2n">15 minutes</option>
              <option data-oid="a7cvh:d">1 hour</option>
              <option data-oid="hl2c:.n">4 hours</option>
              <option data-oid="c-ca:l.">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid="vefkirs">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="cu8690v"
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="vf-smib">
              <option data-oid="11s75py">Low</option>
              <option data-oid="uv-hwr1">Medium</option>
              <option data-oid="ib6.nrx">High</option>
              <option data-oid="64pfhnz">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="ldm52oh"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="igua9gw">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid="tj8mte-"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="bkd98yo">
        <div className="space-y-4" data-oid="aazt9hd">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="n9wvaq2"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="2x8nors"
          />
        </div>
        <div className="space-y-4" data-oid="qsgsdkb">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="yk1p.5r"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid="f9n64l8"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="gved9gk"
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
    <div className="futuristic-container p-8" data-oid="qw3ex4y">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="5ypx2l8"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="ok.w-g7">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="w9_zc07"
        />

        <div className="space-y-4" data-oid="18-ejb7">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid=".gyu_7j"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            disabled={isLoading}
            data-oid="0tmsffi"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="jqeebye"
          >
            <strong data-oid="5s1hobh">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading || !assets.trim()}
          data-oid="epcfo0z"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid=".n5e2ea"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Ticker Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="jx13v:4">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="l7di-l0"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="n2-1rtx"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="6mlawp7"
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
    <div className="futuristic-container p-8" data-oid="1feu7em">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="8i6eptt"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid="0vwwni0">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="kd9.0jj"
        />

        <div className="space-y-4" data-oid="3bmz_ll">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="droquo1"
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
            data-oid="qh8px1u"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="1d-ttlg"
          >
            <strong data-oid="k8wr8rj">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading}
          data-oid="2:ulkr6"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="be3rr1y"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Name Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="zp4.e6h">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="qsc43w."
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="intdf2s"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="43iou:w"
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
    <div className="futuristic-container p-8" data-oid="1gfx_0b">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="b.zqfeh"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="mij-f11">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="3kuppty"
        />

        <div className="space-y-4" data-oid="ru0blf0">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="ln29sw6"
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="_ipj:lg">
            <label className="flex items-center space-x-3" data-oid=":8c37k.">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="snyg0na"
              />

              <span data-oid=":06xkb_">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid=".-6gr-w">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="jo0c4ef"
              />

              <span data-oid="ef26cg9">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="9mprjk0">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="sent2wn"
              />

              <span data-oid="j_z4wtr">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="4i-bqgr">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="x_3i0rm"
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
            data-oid="x-i83mi"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="hwvkhbc"
          >
            <strong data-oid="_rw5._r">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim() || isLoading}
          data-oid="8zxw224"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="5-.:xrj"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Custom Function with AI"
          )}
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="aq9.i:c">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="muj21-x"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="a4lgbr."
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="8e87588"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
