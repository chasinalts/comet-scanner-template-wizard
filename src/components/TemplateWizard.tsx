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
    <div className="space-y-8" data-oid="su5n9r2">
      <div className="text-center" data-oid="ohees43">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Visualize Your Data with COMET Scanner"
          data-oid="ighmisf"
        >
          Visualize Your Data with COMET Scanner
        </h1>
        <p className="text-gray-400 text-lg" data-oid="2.6.ies">
          Welcome to the stock market
        </p>
      </div>

      <div className="futuristic-container p-8" data-oid="27jdfca">
        <h2
          className="holographic-subtitle text-2xl mb-6 text-center"
          data-text="Choose Your Template Creation Method"
          data-oid="yfkusoo"
        >
          Choose Your Template Creation Method
        </h2>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          data-oid="zusngc2"
        >
          {/* Full Template */}
          <div
            className="bg-slate-800/50 rounded-lg border border-slate-600 p-6 text-center"
            data-oid="fq59cfw"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid="uscdz74"
            >
              Full Template
            </h3>
            <p className="text-gray-400 mb-6" data-oid="_dv5p3l">
              The administrator has not uploaded a full template yet. Please use
              the Template Builder Wizard to create a template.
            </p>
            <button
              className="futuristic-button px-6 py-3 opacity-50 cursor-not-allowed"
              disabled
              data-oid="q7:1v:a"
            >
              Not Available
            </button>
          </div>

          {/* Template Builder Wizard */}
          <div
            className="bg-slate-800/50 rounded-lg border border-cyan-500/50 p-6 text-center holo-glow"
            data-oid="3f_ukm7"
          >
            <h3
              className="text-xl font-semibold text-cyan-300 mb-4"
              data-oid=".hqlp6q"
            >
              Template Builder Wizard
            </h3>
            <p className="text-gray-400 mb-6" data-oid="q06en7i">
              Build your template step-by-step by answering questions. Customize
              the template to your specific needs.
            </p>
            <button
              className="futuristic-button px-6 py-3"
              onClick={() => handleMethodSelection("builder")}
              data-oid=".yv18rp"
            >
              Start Wizard
            </button>
          </div>
        </div>
      </div>

      {/* Saved Templates */}
      <div className="futuristic-container p-8" data-oid="svgugit">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Saved Templates"
          data-oid="kc-0nzu"
        >
          Saved Templates
        </h2>
        <div className="text-center text-gray-400" data-oid="srhr-ex">
          <p data-oid="0ib02u9">
            No saved templates yet. Create and save a template to see it here.
          </p>
        </div>
      </div>
    </div>
  );

  const renderWizardChecklist = () => (
    <div className="space-y-6" data-oid="1_vd01n">
      <div className="text-center" data-oid="4ggg3_f">
        <h1
          className="holographic-title text-3xl mb-4"
          data-text="Template Builder Wizard"
          data-oid="0me3l98"
        >
          Template Builder Wizard
        </h1>
        <p className="text-gray-400" data-oid="1irf0sz">
          Complete each step to build your custom COMET Scanner template
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" data-oid="0-gkajk">
        {/* Wizard Steps */}
        <div className="space-y-4" data-oid="3hd5h34">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="Wizard Steps"
            data-oid="umqvuie"
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
                data-oid="vvd.5ob"
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="drob1i5"
                >
                  <div data-oid="x:kr54z">
                    <h4 className="font-semibold" data-oid="l4uk-5i">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="exqa5-8">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="j8up_hk">
                    {step.completed ? "✓" : currentStep === step.id ? "→" : "○"}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* AI Steps */}
        <div className="space-y-4" data-oid="u-fm3n4">
          <h3
            className="holographic-subtitle text-xl mb-4"
            data-text="AI-Powered Steps"
            data-oid=".szkoul"
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
                data-oid="7y.s5w."
              >
                <div
                  className="flex items-center justify-between"
                  data-oid="pvpjlpa"
                >
                  <div data-oid="2ertkbg">
                    <h4 className="font-semibold" data-oid=".jt1:l3">
                      {step.title}
                    </h4>
                    <p className="text-sm opacity-80" data-oid="mb_x_pd">
                      {step.description}
                    </p>
                  </div>
                  <div className="text-2xl" data-oid="8n:jt3w">
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
      <div className="futuristic-container p-6" data-oid="9i1z2mk">
        <h3
          className="holographic-subtitle text-lg mb-4"
          data-text="Progress Summary"
          data-oid="d.yvewr"
        >
          Progress Summary
        </h3>
        <div className="flex items-center space-x-4" data-oid="eci3_t7">
          <div
            className="flex-1 bg-slate-700 rounded-full h-3"
            data-oid="1akt76m"
          >
            <div
              className="bg-gradient-to-r from-cyan-500 to-purple-500 h-3 rounded-full transition-all duration-500"
              style={{
                width: `${(wizardSteps.filter((s) => s.completed).length / wizardSteps.length) * 100}%`,
              }}
              data-oid="_yqyrig"
            ></div>
          </div>
          <span className="text-cyan-300 font-semibold" data-oid="jahsvr1">
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
            data-oid="el4b2b2"
          />
        );

      case "scanner-variations":
        return (
          <ScannerVariationsStep
            onComplete={() => markStepCompleted("scanner-variations")}
            data-oid=":v8726u"
          />
        );

      case "content-management":
        return (
          <ContentManagementStep
            onComplete={() => markStepCompleted("content-management")}
            data-oid="4ro5e-s"
          />
        );

      case "ai-ticker-generation":
        return (
          <AITickerGenerationStep
            onComplete={() => markStepCompleted("ai-ticker-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="7guh8pz"
          />
        );

      case "ai-name-generation":
        return (
          <AINameGenerationStep
            onComplete={() => markStepCompleted("ai-name-generation")}
            onCodeUpdate={onCodeUpdate}
            data-oid="x65d:oc"
          />
        );

      case "ai-function-creation":
        return (
          <AIFunctionCreationStep
            onComplete={() => markStepCompleted("ai-function-creation")}
            onCodeUpdate={onCodeUpdate}
            data-oid=".15mea-"
          />
        );

      default:
        return null;
    }
  };

  if (!template) {
    return (
      <div className="futuristic-container p-8 text-center" data-oid="b96.k99">
        <h2
          className="holographic-subtitle text-2xl mb-4"
          data-text="No Template Selected"
          data-oid="c5w.tzk"
        >
          No Template Selected
        </h2>
        <p className="text-gray-400" data-oid="x-r3-ee">
          Please select a template from the gallery to begin.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="em3fa83">
      {currentStep === "method-selection" && renderMethodSelection()}
      {currentStep === "wizard-checklist" && renderWizardChecklist()}
      {currentStep !== "method-selection" &&
        currentStep !== "wizard-checklist" && (
          <div data-oid="6skrz8u">
            <button
              onClick={() => setCurrentStep("wizard-checklist")}
              className="mb-6 text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="d6i3npt"
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
    <div className="futuristic-container p-8" data-oid="kipyx1a">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Image Management"
        data-oid="o5p8qk6"
      >
        Image Management
      </h2>
      <div className="space-y-6" data-oid="lnp_9m5">
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="ladprh6"
        >
          <div className="space-y-4" data-oid="js0sjdx">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="rcwirxc"
            >
              Banner Image
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="8vrsln4"
            >
              <p className="text-gray-400 mb-4" data-oid="epdczll">
                Upload banner image for your scanner
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="lh-b6br"
              >
                Choose File
              </button>
            </div>
          </div>
          <div className="space-y-4" data-oid="_q6ienq">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="4.62kgz"
            >
              Preview Images
            </h3>
            <div
              className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
              data-oid="6z0flb5"
            >
              <p className="text-gray-400 mb-4" data-oid="hbq2m1o">
                Upload preview images showing scanner output
              </p>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="h3ehq4x"
              >
                Choose Files
              </button>
            </div>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="8yw5jb2"
        >
          Complete Image Management
        </button>
      </div>
    </div>
  );
}

function ScannerVariationsStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="hmmc5o8">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Scanner Variations"
        data-oid="mkf0c:o"
      >
        Scanner Variations
      </h2>
      <div className="space-y-6" data-oid="0tbf4g.">
        <p className="text-gray-400" data-oid="sjp2-o2">
          Configure different scanner parameter variations
        </p>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          data-oid="j9c9pln"
        >
          <div className="space-y-4" data-oid="u-1odl0">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="ofpt09s"
            >
              Timeframe Settings
            </label>
            <select className="futuristic-input w-full" data-oid="49:_ovr">
              <option data-oid=":k92yid">1 minute</option>
              <option data-oid="8ovu9ya">5 minutes</option>
              <option data-oid="uvr00-9">15 minutes</option>
              <option data-oid="olpbuo-">1 hour</option>
              <option data-oid="mwzjphw">4 hours</option>
              <option data-oid="5973bie">1 day</option>
            </select>
          </div>
          <div className="space-y-4" data-oid="0mlu957">
            <label
              className="block text-cyan-300 font-semibold"
              data-oid="7_s_59c"
            >
              Sensitivity Level
            </label>
            <select className="futuristic-input w-full" data-oid="vco6tsg">
              <option data-oid="ahtjeg8">Low</option>
              <option data-oid="4a9prrb">Medium</option>
              <option data-oid="2mz8yjy">High</option>
              <option data-oid="u5bu.dk">Extreme</option>
            </select>
          </div>
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="rj3s2_9"
        >
          Complete Scanner Variations
        </button>
      </div>
    </div>
  );
}

function ContentManagementStep({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="futuristic-container p-8" data-oid="yfev91:">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="Home Page Content"
        data-oid="nr.p3fl"
      >
        Home Page Content
      </h2>
      <div className="space-y-6" data-oid="xda90kw">
        <div className="space-y-4" data-oid="9h.nync">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="hskwmg6"
          >
            Scanner Description
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Describe what your scanner does and how it helps traders..."
            data-oid="vffdn1z"
          />
        </div>
        <div className="space-y-4" data-oid="2giet-c">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="stcpf5y"
          >
            Usage Instructions
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Provide instructions on how to use this scanner effectively..."
            data-oid=".qxlb:4"
          />
        </div>
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          data-oid="qohx62e"
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
    <div className="futuristic-container p-8" data-oid="j3at0a0">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Ticker Generation"
        data-oid="2betafn"
      >
        AI Ticker Generation
      </h2>
      <div className="space-y-6" data-oid="1j2si8z">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="dub8h8-"
        />

        <div className="space-y-4" data-oid="3gw14z7">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="fojfw5j"
          >
            Enter Assets to Scan
          </label>
          <textarea
            className="futuristic-input w-full h-32"
            placeholder="Enter asset symbols, one per line (e.g., BTCUSDT, ETHUSDT, ADAUSDT...)"
            value={assets}
            onChange={(e) => setAssets(e.target.value)}
            disabled={isLoading}
            data-oid="9i-9.8l"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="wsqd0u4"
          >
            <strong data-oid="x5ljf7m">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateTickerCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading || !assets.trim()}
          data-oid="mt__647"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid=":-7:5jh"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Ticker Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="h0ytpnr">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="jz.o.3f"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="fsb3tf."
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="3d6cdbx"
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
    <div className="futuristic-container p-8" data-oid="6ik_toh">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Name Generation"
        data-oid="ofh87r8"
      >
        AI Name Generation
      </h2>
      <div className="space-y-6" data-oid="fpoiit1">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="o90y0v."
        />

        <div className="space-y-4" data-oid="hzim2pb">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="xbi0a6w"
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
            data-oid="-.dh98y"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="fcte5xt"
          >
            <strong data-oid="9tja7og">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateNameCode}
          className="futuristic-button px-6 py-3"
          disabled={isLoading}
          data-oid="zd2jq7j"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="aoi2fub"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Name Code with AI"
          )}
        </button>
        {generatedCode && (
          <div className="space-y-4" data-oid="vw3wp7d">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="q-easa2"
            >
              Generated Code:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="dmtrn2v"
            >
              {generatedCode}
            </pre>
          </div>
        )}
        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="-bry5nz"
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
    <div className="futuristic-container p-8" data-oid="vqs6mdo">
      <h2
        className="holographic-subtitle text-2xl mb-6"
        data-text="AI Function Creation"
        data-oid="ztp89.p"
      >
        AI Function Creation
      </h2>
      <div className="space-y-6" data-oid="2nmk7cb">
        <AIProviderSelector
          selectedProvider={selectedProvider}
          onProviderChange={setSelectedProvider}
          disabled={isLoading}
          data-oid="g0xw4n3"
        />

        <div className="space-y-4" data-oid="fp.mks7">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="le.cxxl"
          >
            Function Creation Method
          </label>
          <div className="space-y-3" data-oid="gase0zc">
            <label className="flex items-center space-x-3" data-oid="7qwhwjk">
              <input
                type="radio"
                name="functionType"
                value="idea"
                checked={functionType === "idea"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="oeaune4"
              />

              <span data-oid="c9s8hia">Describe an indicator idea</span>
            </label>
            <label className="flex items-center space-x-3" data-oid="xw4i62r">
              <input
                type="radio"
                name="functionType"
                value="existing"
                checked={functionType === "existing"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="fwn-zac"
              />

              <span data-oid="p9nw2q8">
                Convert existing Pine Script indicator
              </span>
            </label>
            <label className="flex items-center space-x-3" data-oid="ze9e_5b">
              <input
                type="radio"
                name="functionType"
                value="codebase"
                checked={functionType === "codebase"}
                onChange={(e) => setFunctionType(e.target.value as any)}
                className="text-cyan-500"
                data-oid="4tfgreo"
              />

              <span data-oid="ht77h5q">Extract from existing codebase</span>
            </label>
          </div>
        </div>

        <div className="space-y-4" data-oid="imv1wvf">
          <label
            className="block text-cyan-300 font-semibold"
            data-oid="qzgua26"
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
            data-oid="c3lhsn6"
          />
        </div>

        {error && (
          <div
            className="p-4 bg-red-900/50 border border-red-500 rounded-lg text-red-300"
            data-oid="xoz-zft"
          >
            <strong data-oid=".nfrgye">Error:</strong> {error}
          </div>
        )}

        <button
          onClick={handleGenerateFunction}
          className="futuristic-button px-6 py-3"
          disabled={!userInput.trim() || isLoading}
          data-oid="pqgm44c"
        >
          {isLoading ? (
            <>
              <div
                className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400 inline-block mr-2"
                data-oid="7j5gje_"
              ></div>
              Generating with {selectedProvider}...
            </>
          ) : (
            "🤖 Generate Custom Function with AI"
          )}
        </button>

        {generatedCode && (
          <div className="space-y-4" data-oid="qnc1o-m">
            <h3
              className="text-lg font-semibold text-green-300"
              data-oid="ke0cl7b"
            >
              Generated Function:
            </h3>
            <pre
              className="bg-slate-900 p-4 rounded border border-green-500/30 text-green-300 text-sm overflow-x-auto"
              data-oid="glwa6o_"
            >
              {generatedCode}
            </pre>
          </div>
        )}

        <button
          onClick={onComplete}
          className="futuristic-button px-6 py-3"
          disabled={!generatedCode}
          data-oid="q906h_t"
        >
          Complete Function Creation
        </button>
      </div>
    </div>
  );
}
