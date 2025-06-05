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
    <div className="space-y-8" data-oid="y5zfp9v">
      <div className="text-center" data-oid="9b4rdik">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="g6gugzl"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="rrs.oii">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="05v4-4b">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid="2fx6c9u"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="4my4.oq"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid="545oq95"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="69mn7sg"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid="qzhhy3n">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="egyr_48"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="ldztol0"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="cy5sqqc"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid="ulg.duv">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid="61zxa.0"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="c2kpgze">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="ulmm9_x"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="87i-j.s">
          <p data-oid="fnr8r1r">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid="-csdt4i">
      <div className="text-center" data-oid="zln--5s">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid="ottyhnl"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid="6f1nchr">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="z43w8nw">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="bybe4cb">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="tyvt71v"
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
                data-oid="6k6zcyd"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="52q7w5b"
                >
                  <div data-oid="i-g.l7g">
                    <h4 className="font-semibold" data-oid="5:tkkjp">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="05ke4a5">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="1xraaop">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="6s4y.-0">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid="l4p-yzh"
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
                data-oid="-i7w049"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="_0v7ohe"
                >
                  <div data-oid="m_69wka">
                    <h4 className="font-semibold" data-oid="bs1pf4a">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="_grznur">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="m9j8j.c">
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
      <div className="futuristic-container p-6" data-oid="dt.5svf">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid="skb88s5"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid="ck40a96">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="lb4c15x"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="ouwnmi:"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="kghnmxw">
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
            data-oid="t12wyp:"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid="6pruxd."
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid=":u7ucs7"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="h7y5gy4"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="g:-dsph"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid=":_gvyfi"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid="-jwnmhx">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="k4mt41j"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="_rj-65.">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="ijg53ix">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="bucki63">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="wtmdoar"
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
    <div className="futuristic-container p-8" data-oid="3rxvy2_">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid="u-g0-2u"
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="0v0zo3q">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="s-6d:92"
        >
          <div className="space-y-4" data-oid="nl61gl.">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="19zpg95"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="37wol8b"
            >
              <p className="text-gray-400 mb-4" data-oid="4fe5lyq">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="l5j89mq"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="oi2_mhy">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="yohyg1n"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="nv9ebx9"
            >
              <p className="text-gray-400 mb-4" data-oid="mwoi-c5">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="z4l_dif"
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="2c656b2"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="s-4abp6">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid="rl6b3dp"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="wj9dvs2">
        <p className="text-gray-400" data-oid="5k2ue9v">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="oe55m:6"
        >
          <div className="space-y-4" data-oid="z9-05f7">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="m_fws1."
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid=":xgas3u">
              <option data-oid="ejidl-v">1 minute</option>
              <option data-oid="7h88p0a">5 minutes</option>
              <option data-oid="8db97i_">15 minutes</option>
              <option data-oid="68paszh">1 hour</option>
              <option data-oid="zcmpaoi">4 hours</option>
              <option data-oid="i0vbqrg">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid="5mpganq">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="8y.1ej:"
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="nfenj9f">
              <option data-oid="v069iw-">Low</option>
              <option data-oid=".763lvq">Medium</option>
              <option data-oid="ev7qx1u">High</option>
              <option data-oid="px9ompd">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="dgv6j2x"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="8fsg:6p">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid="4u1q6:t"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="hta89x0">
        <div className="space-y-4" data-oid="mva_uib">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="lq:o8kq"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="wsfpejf"
          />
        </div>
        <div className="space-y-4" data-oid="6fnc-xq">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="pa09jcf"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid="fbvxgge"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="mya-l7u"
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
    <div className="futuristic-container p-8" data-oid="cv5s0vx">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="4g244l0"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="avn5p6p">
        <div className="space-y-4" data-oid="yd384mz">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="z.-lp6b"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            data-oid="_f90dcp"
          />
        </div>
        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          data-oid="brhtyfu"
        >
          🤖 Generate Ticker Code with AI
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="i:ishn9">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="vanhj58"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="-pgrsy:"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="1c29f8s"
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
    <div className="futuristic-container p-8" data-oid="2v:x5us">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="j757tbb"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid="ik.nz5c">
        <div className="space-y-4" data-oid="ybm0cg0">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="899yeub"
          >
            Name Format Preferences
          </label>
          <input
            type="text"
            className="futuristic-input w-full"
            placeholder="e.g., Short symbol without quote currency"
            value={nameFormat}
            onChange={(e) => setNameFormat(e.target.value)}
            data-oid="uln8tzq"
          />
        </div>
        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          data-oid="s0hmryv"
        >
          🤖 Generate Name Code with AI
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="7g1q4j3">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="yjgqxwa"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="1c6504e"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="2cepwb_"
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
    <div className="futuristic-container p-8" data-oid="gk2rck.">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="n2k00zm"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="3cljqny">
        <div className="space-y-4" data-oid="5k.y-_z">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="-rhs8-."
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="6.ikt3e">
            <label className="flex items-center space-x-3" data-oid="i9w5l1u">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="6v.yy:f"
              />

              <span data-oid="d.a.wma">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid="9q982wx">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="vrmw1qu"
              />

              <span data-oid="zbr16h.">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="bw57dog">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="tjxeq-h"
              />

              <span data-oid="--c9ib.">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="kvt.3_u">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="dy:.7dm"
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
            data-oid="1yrgk.."
          />
        </div>

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim()}
          data-oid="bhdmb1h"
        >
          🤖 Generate Custom Function with AI
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="cjwe5nl">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="wf-_irv"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="y_vvcts"
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="v6my2bx"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
