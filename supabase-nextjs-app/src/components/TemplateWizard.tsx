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
    <div className="space-y-8" data-oid="i.fsnzl">
      <div className="text-center" data-oid="8uhrm26">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="rp1al9u"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="m:n_4x5">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="9k8ssw2">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid="a57r.y:"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="atmgc2s"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid="od:173_"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="r:rlzc4"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid="qw1a44x">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="7xlt.b5"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="fw5tiia"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="vm4bywa"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid="si2fiaz">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid="i_3waw4"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="__1hz5k">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="59ylsl8"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="-l-6vlz">
          <p data-oid="-4j1yic">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid="4ym01ag">
      <div className="text-center" data-oid="0yj99ci">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid="k1he78m"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid="3qasahs">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid=":sk.hvm">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="p.b6rq6">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="m2.ngej"
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
                data-oid="dfm9b13"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="l4yi5qa"
                >
                  <div data-oid="bx:ybc.">
                    <h4 className="font-semibold" data-oid="vf28eti">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="82bsbuu">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="1tyw3:z">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="a66.ogc">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid="i8kebia"
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
                data-oid="k8rmjl5"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="1pud9ti"
                >
                  <div data-oid="6b0.m1t">
                    <h4 className="font-semibold" data-oid="k_s1zan">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="s_ub7km">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="hq5l9n2">
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
      <div className="futuristic-container p-6" data-oid="cnt9ed6">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid="fxa7j_9"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid="g1je9xs">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="2-8_.fw"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="-rkrcoh"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="t53qk_i">
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
            data-oid="bci15z-"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid="--129ye"
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid="jhwfsl2"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="jemthk:"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="y6bewg5"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="szxcj1d"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid="w_348h_">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="qyenuad"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="a6t0q9k">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="9:8fj0y">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="86:.-uf">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="6nt0kt0"
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
    <div className="futuristic-container p-8" data-oid="qn300ef">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid="tr72lsg"
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="cs-ywva">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="83ov3xq"
        >
          <div className="space-y-4" data-oid="rtrfgz9">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="w4dllkd"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="ratm9w3"
            >
              <p className="text-gray-400 mb-4" data-oid="gtg39od">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="n1.nt6a"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="aeh8kmz">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="b4-vww-"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="ti0suz1"
            >
              <p className="text-gray-400 mb-4" data-oid="usoheqe">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="crelk9d"
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="tvaimqm"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="x0w6gvn">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid="h33jmq-"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="llb9ag_">
        <p className="text-gray-400" data-oid="y9qfcjo">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="4cgggj8"
        >
          <div className="space-y-4" data-oid="ugnfwg4">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="tn4.u:l"
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid="9k0-6ts">
              <option data-oid="ng2ai:p">1 minute</option>
              <option data-oid="jbolsf1">5 minutes</option>
              <option data-oid="pajat0-">15 minutes</option>
              <option data-oid="z2kj-w1">1 hour</option>
              <option data-oid="l7q29oe">4 hours</option>
              <option data-oid="9oz_99r">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid="56l4d23">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid=":srsfdx"
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="n9.us7u">
              <option data-oid="dono3vs">Low</option>
              <option data-oid="gr.hx2:">Medium</option>
              <option data-oid="nhjgq11">High</option>
              <option data-oid="l5np7p_">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="k10gu7d"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="3_g7k1c">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid="8fw1hbz"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="g.a5n9a">
        <div className="space-y-4" data-oid="wm.bj5k">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="siwaiz8"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="ek4x443"
          />
        </div>
        <div className="space-y-4" data-oid="tlah166">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="tsr5eva"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid="1jzt7xg"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="lej2nwk"
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
    <div className="futuristic-container p-8" data-oid="wo3-_ht">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="xknu4ki"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="zu97jiu">
        <div className="space-y-4" data-oid="p-oriu_">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="kiilatu"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            data-oid="or0_iol"
          />
        </div>
        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          data-oid="8aokza."
        >
          🤖 Generate Ticker Code with AI
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="8enrya5">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="_l8hgfx"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="iuf4.t3"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="po71hf-"
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
    <div className="futuristic-container p-8" data-oid="iues:1b">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="d7ldb84"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid="8c_43l6">
        <div className="space-y-4" data-oid="_g90cfs">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid=".othy5v"
          >
            Name Format Preferences
          </label>
          <input
            type="text"
            className="futuristic-input w-full"
            placeholder="e.g., Short symbol without quote currency"
            value={nameFormat}
            onChange={(e) => setNameFormat(e.target.value)}
            data-oid="akhnqf7"
          />
        </div>
        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          data-oid="linkjpf"
        >
          🤖 Generate Name Code with AI
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid=".n16003">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="kvkr1a."
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="zp5idbc"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="dwme:93"
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
    <div className="futuristic-container p-8" data-oid="h4ipfvy">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="_mhwxay"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="jajc5b:">
        <div className="space-y-4" data-oid="zplsydw">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid=".bqs:hi"
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="-yh4a41">
            <label className="flex items-center space-x-3" data-oid="-pnu7m7">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="sc9._6y"
              />

              <span data-oid="o5z:txe">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid="9vskxf8">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="5n34m22"
              />

              <span data-oid="hitvjgu">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="3hz55wr">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="sagksi."
              />

              <span data-oid="vjgwr7o">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="w61bmt1">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="aayolfs"
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
            data-oid="r80ox9j"
          />
        </div>

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim()}
          data-oid="plv_w46"
        >
          🤖 Generate Custom Function with AI
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="xui104r">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="kkler8-"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="0ded05w"
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="jotul.e"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
