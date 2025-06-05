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
    <div className="space-y-8" data-oid="xy2s8am">
      <div className="text-center" data-oid="2jz3f_o">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="wkr2.3i"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="5e7q5yy">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="7c55y3e">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid="zgk7ukr"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="dj::e5o"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid="o_y5hbs"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="s79:r:w"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid="rr3e-46">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="ex9au76"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="f84k7y-"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="ytp11tb"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid="-ukswrq">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid="7thr:80"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="efk.e.3">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="fu9ueb5"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="4t_1-hg">
          <p data-oid="fa5b18l">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid="cuusxh0">
      <div className="text-center" data-oid="hn6msp1">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid="wiew46-"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid="-su:dah">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="r7kht_y">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="t18bg3u">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="2v64.pl"
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
                data-oid="g0e4-3w"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="923as7."
                >
                  <div data-oid="1.-sxx.">
                    <h4 className="font-semibold" data-oid="9va67h8">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="lf0x7j2">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="zlbxvie">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="wld5-6_">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid="zjqm:6g"
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
                data-oid="-3:h8yc"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="u:op1ww"
                >
                  <div data-oid="76_efhe">
                    <h4 className="font-semibold" data-oid="wmucck3">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="q2m189h">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid=":8-ky1v">
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
      <div className="futuristic-container p-6" data-oid="1bby3io">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid="chi9:-j"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid="jm4tv8v">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="w48i6k1"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="enbrk5:"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="ytz0e:5">
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
            data-oid="74_c3uh"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid="w9pkek-"
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid=":m.-r3p"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="1.5k1-4"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="bqm5f8k"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="v_s9_yh"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid="4h_91ig">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="tmf7j:b"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="gkj9-qy">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="qhynnqh">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="0tx1ncz">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="urpc2k7"
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
    <div className="futuristic-container p-8" data-oid="pn4hhw-">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid="6d40vpd"
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="pnpkg9d">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="hsauex_"
        >
          <div className="space-y-4" data-oid="3wb25e6">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="ers0m2l"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid=":ryq63s"
            >
              <p className="text-gray-400 mb-4" data-oid="e02x69n">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid=".dvrxvj"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="r.oh08q">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="vzwdf28"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="k_1rz2y"
            >
              <p className="text-gray-400 mb-4" data-oid="8d1tfac">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid=":ypm.z3"
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="l-zk5je"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="m2emwte">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid="qu1--xr"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="07sjvu:">
        <p className="text-gray-400" data-oid="41--61p">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="f37285c"
        >
          <div className="space-y-4" data-oid="89y4c4b">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="3b91ebe"
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid="hsstuti">
              <option data-oid="s7ckl:7">1 minute</option>
              <option data-oid="8sawa9i">5 minutes</option>
              <option data-oid="0rqrrk_">15 minutes</option>
              <option data-oid="dci6zk-">1 hour</option>
              <option data-oid="4ocee7g">4 hours</option>
              <option data-oid="nf7gx0f">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid="wv_g:j4">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="e4otz5w"
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="a12g.0.">
              <option data-oid=":35oer4">Low</option>
              <option data-oid="svrx83g">Medium</option>
              <option data-oid="_7:tjds">High</option>
              <option data-oid="4ybqgvg">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="n8pg67f"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="q4kz.:z">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid=":5vxw83"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="0t1s2fm">
        <div className="space-y-4" data-oid="g5c13qq">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="v2qok17"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="y9q3-:b"
          />
        </div>
        <div className="space-y-4" data-oid="gzra5bm">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="dcsbnen"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid="w6t9.e-"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="klcvbmg"
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
    <div className="futuristic-container p-8" data-oid="i4q773k">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="c6m5z5."
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="ch-10gw">
        <div className="space-y-4" data-oid="ff:a2yf">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="hyrh4e9"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            data-oid=":v57d_q"
          />
        </div>
        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          data-oid="2gmcz6j"
        >
          🤖 Generate Ticker Code with AI
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="u13zv5.">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="w0qm2xt"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="mo03:0u"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="tythi3f"
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
    <div className="futuristic-container p-8" data-oid="xzyngbo">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="pmns53k"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid="8vx.:w3">
        <div className="space-y-4" data-oid="5fmqrf2">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="_dt4ju_"
          >
            Name Format Preferences
          </label>
          <input
            type="text"
            className="futuristic-input w-full"
            placeholder="e.g., Short symbol without quote currency"
            value={nameFormat}
            onChange={(e) => setNameFormat(e.target.value)}
            data-oid="26nqxr7"
          />
        </div>
        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          data-oid="ftordo9"
        >
          🤖 Generate Name Code with AI
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="h78iu9j">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="nvpg9ni"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="emkng_."
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="oi8b08p"
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
    <div className="futuristic-container p-8" data-oid="xjpgh60">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="_o21vfj"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="9r8g_zc">
        <div className="space-y-4" data-oid="x2_xk64">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="15.c8a2"
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="g60m.uq">
            <label className="flex items-center space-x-3" data-oid="o98qvae">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="_3apn:-"
              />

              <span data-oid="v1a5j8t">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid="fwselnq">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="9xfm1u2"
              />

              <span data-oid="d7tq3le">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="bxwwzha">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="xzr6jhs"
              />

              <span data-oid="d267o21">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="4vocfu4">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="nsmszz5"
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
            data-oid=".8-j2nh"
          />
        </div>

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim()}
          data-oid="l0p.jmp"
        >
          🤖 Generate Custom Function with AI
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="hvf:qwa">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="pv-zwsc"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="abrge_i"
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="7t:9p.u"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
