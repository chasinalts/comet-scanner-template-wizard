import React from "react";
import { AIProvider } from "@/lib/aiService";

interface AIProviderSelectorProps {
  selectedProvider: AIProvider;
  onProviderChange: (provider: AIProvider) => void;
  disabled?: boolean;
}

const providers: { value: AIProvider; label: string; description: string }[] = [
  {
    value: "openai",
    label: "OpenAI GPT-4",
    description: "Most versatile and reliable for code generation",
  },
  {
    value: "claude",
    label: "Anthropic Claude",
    description: "Excellent for complex logic and detailed explanations",
  },
  {
    value: "gemini",
    label: "Google Gemini",
    description: "Fast and efficient for technical tasks",
  },
  {
    value: "openrouter",
    label: "OpenRouter",
    description: "Access to multiple models through one API",
  },
];

export function AIProviderSelector({
  selectedProvider,
  onProviderChange,
  disabled = false,
}: AIProviderSelectorProps) {
  return (
    <div className="space-y-4" data-oid="ms9.1uv">
      <label className="block text-cyan-300 font-semibold" data-oid="gfzd2v:">
        AI Provider
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3" data-oid="_v9xe6.">
        {providers.map((provider) => (
          <div
            key={provider.value}
            className={`
              relative p-4 rounded-lg border-2 cursor-pointer transition-all duration-200
              ${
                selectedProvider === provider.value
                  ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20"
                  : "border-slate-600 bg-slate-800/50 hover:border-slate-500"
              }
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
            onClick={() => !disabled && onProviderChange(provider.value)}
            data-oid="-k:e.27"
          >
            <div className="flex items-start space-x-3" data-oid=":efkeqi">
              <div
                className={`
                w-4 h-4 rounded-full border-2 mt-1 transition-all duration-200
                ${
                  selectedProvider === provider.value
                    ? "border-cyan-400 bg-cyan-400"
                    : "border-slate-500"
                }
              `}
                data-oid="64sltu9"
              />

              <div className="flex-1" data-oid="rxes-5v">
                <h3
                  className={`
                  font-semibold transition-colors duration-200
                  ${
                    selectedProvider === provider.value
                      ? "text-cyan-300"
                      : "text-slate-300"
                  }
                `}
                  data-oid="w2y2f4:"
                >
                  {provider.label}
                </h3>
                <p className="text-sm text-slate-400 mt-1" data-oid="b__:bkl">
                  {provider.description}
                </p>
              </div>
            </div>

            {selectedProvider === provider.value && (
              <div
                className="absolute inset-0 rounded-lg border-2 border-cyan-400 animate-pulse"
                data-oid="9gcly9q"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
