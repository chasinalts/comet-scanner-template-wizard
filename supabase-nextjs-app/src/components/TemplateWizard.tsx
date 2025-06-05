"use client";

import { useState, useEffect } from "react";

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
    <div className="space-y-8" data-oid="3:r5-s1">
      <div className="text-center" data-oid="yuuiq..">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="60jn2on"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="gmmsudk">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="pt_m8ha">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid=".8:a7yf"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="qb:0b2x"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid="a5ws-z:"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="lhxphkz"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid=":4dwl4r">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="-t2nvga"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="o9.vg-0"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="tm82asu"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid="5-_c-qi">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid="nz4qetn"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="uz9huxb">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="qn:40o_"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="z9b2yv7">
          <p data-oid="h35owv7">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid="i1-h9l4">
      <div className="text-center" data-oid="j-7k4ce">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid=".uc9vec"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid="_rnavcd">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="6p4kw1x">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="53305f-">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="diuv3_t"
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
                data-oid="x55h4iv"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="qyympch"
                >
                  <div data-oid="w2cxei0">
                    <h4 className="font-semibold" data-oid="9qz6-98">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="s4tmew-">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="ngg-d_7">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="td621as">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid="9zaobi5"
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
                data-oid="9_yr9i4"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="qkovfwc"
                >
                  <div data-oid="vvnvhx5">
                    <h4 className="font-semibold" data-oid="e5ob9j9">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="zbmrcaa">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="j6lxob.">
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
      <div className="futuristic-container p-6" data-oid="mormd9f">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid=":d.wwcn"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid="a_41b9k">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="x7yhue6"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="d-fq_2y"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="6xv-r5f">
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
            data-oid="bu_lb-u"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid="o302mdk"
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid="s40exg1"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="jdyaaxv"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="7jhi1o:"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="kcgmnda"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid="wwap9cc">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="fjoz8d7"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="0qs00va">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="nk2ogcz">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="sy9m298">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="qvuzzy0"
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
    <div className="futuristic-container p-8" data-oid="8p5lkr8">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid="aymsh-r"
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="btxxxvo">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="jutdr.6"
        >
          <div className="space-y-4" data-oid="g25dzx2">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="yjt7x3m"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="h9a:ni0"
            >
              <p className="text-gray-400 mb-4" data-oid="wnrlgfh">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="q:-k0ug"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="e0yd8zb">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="cschjbi"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="gsw8vpw"
            >
              <p className="text-gray-400 mb-4" data-oid="zlsrtad">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="-javsg:"
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="bhmf0ar"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="rk20xdi">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid="ve::suf"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="w78:qe.">
        <p className="text-gray-400" data-oid="2ergn8j">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="udp963q"
        >
          <div className="space-y-4" data-oid="q6bm9n.">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="dl35.re"
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid="56c7s.u">
              <option data-oid="2o9yswt">1 minute</option>
              <option data-oid=":6qxrww">5 minutes</option>
              <option data-oid=":.qt:6k">15 minutes</option>
              <option data-oid="-fw3lry">1 hour</option>
              <option data-oid="0rp4m90">4 hours</option>
              <option data-oid="p88j8li">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid=":wr0:vv">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="hjun12i"
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="0x23qw1">
              <option data-oid="qfmu673">Low</option>
              <option data-oid="2tcls7w">Medium</option>
              <option data-oid="rhb.:ta">High</option>
              <option data-oid="kyqr7r4">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="8d11_3l"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="raou.ni">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid="009qcp1"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="7na8j-h">
        <div className="space-y-4" data-oid="k:giqzz">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="4v6vwh_"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="qfsa4i4"
          />
        </div>
        <div className="space-y-4" data-oid="-ncv:a9">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="qcpi5uj"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid="-640m6x"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="m:l353f"
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

  const handleGenerateTickerCode = () => {
    // Simulate AI generation
    const tickerCode = `
// AI-Generated Ticker Configuration
tickers = array.new<string>()
${assets
  .split("\n")
  .filter((asset) => asset.trim())
  .map((asset, index) => `array.push(tickers, "${asset.trim()}")`)
  .join("\n")}

// Security function for multi-asset scanning
get_security_data(ticker) =>
    request.security(ticker, timeframe.period, close)
`;
    setGeneratedCode(tickerCode);
    onCodeUpdate(tickerCode);
  };

  return (
    <div className="futuristic-container p-8" data-oid="qo057ev">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="le2w9d0"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="_vxc:mj">
        <div className="space-y-4" data-oid="xpv8mkl">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid=":9dsd93"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            data-oid="0e-l_7m"
          />
        </div>
        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          data-oid="wyt6h9a"
        >
          🤖 Generate Ticker Code with AI
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="-tqr2hn">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="kp_8uy-"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="k.gufbx"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="i_aouol"
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

  const handleGenerateNameCode = () => {
    const nameCode = `
// AI-Generated Name Configuration
generate_asset_label(ticker) =>
    // Format: ${nameFormat || "Default format"}
    label_text = str.replace(ticker, "USDT", "")
    label_text := str.replace(label_text, "BUSD", "")
    label_text
`;
    setGeneratedCode(nameCode);
    onCodeUpdate(nameCode);
  };

  return (
    <div className="futuristic-container p-8" data-oid="md452_1">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="36::njc"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid="clobu.h">
        <div className="space-y-4" data-oid="uyj9nle">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="7:jky47"
          >
            Name Format Preferences
          </label>
          <input
            type="text"
            className="futuristic-input w-full"
            placeholder="e.g., Short symbol without quote currency"
            value={nameFormat}
            onChange={(e) => setNameFormat(e.target.value)}
            data-oid="zc4af7z"
          />
        </div>
        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          data-oid="nocd1ds"
        >
          🤖 Generate Name Code with AI
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="2cpx793">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="wdg7kj."
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="jlq:y6o"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="2u::vz7"
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

  const handleGenerateFunction = () => {
    let functionCode = "";

    switch (functionType) {
      case "idea":
        functionCode = `
// AI-Generated Custom Function from Idea
// Based on: ${userInput}
custom_scanner_function() =>
    // Implementation based on your idea
    rsi_value = ta.rsi(close, 14)
    volume_spike = volume > ta.sma(volume, 20) * 2
    price_momentum = ta.change(close, 5) > 0
    
    // Combine conditions
    signal = rsi_value < 30 and volume_spike and price_momentum
    signal
`;
        break;
      case "existing":
        functionCode = `
// AI-Generated Custom Function from Existing Indicator
// Converted from: ${userInput.substring(0, 50)}...
custom_scanner_function() =>
    // Converted indicator logic
    // [AI would analyze and convert the provided Pine Script]
    true // Placeholder
`;
        break;
      case "codebase":
        functionCode = `
// AI-Generated Custom Function from Codebase
// Extracted from: ${userInput.substring(0, 50)}...
custom_scanner_function() =>
    // Extracted and optimized logic
    // [AI would extract relevant parts from the codebase]
    true // Placeholder
`;
        break;
    }

    setGeneratedCode(functionCode);
    onCodeUpdate(functionCode);
  };

  return (
    <div className="futuristic-container p-8" data-oid="lywpl2s">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="1muu7--"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="z6po-go">
        <div className="space-y-4" data-oid="y:3xso9">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="zrd5hzt"
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="5xpw2dm">
            <label className="flex items-center space-x-3" data-oid="u2_jvwi">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="lsu1hbc"
              />

              <span data-oid="4w-v0ob">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid="etoxw-h">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="s0q_23n"
              />

              <span data-oid="1q8r20u">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="ybnp8:p">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid=":dhnmnd"
              />

              <span data-oid="tx:q0ex">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="5m-66f0">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="d6nd70n"
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
            data-oid="ak7e_f_"
          />
        </div>

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim()}
          data-oid="::qtr25"
        >
          🤖 Generate Custom Function with AI
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="5:b.1_z">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="pst-l2f"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="1fqit0q"
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="cgwdh0c"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
