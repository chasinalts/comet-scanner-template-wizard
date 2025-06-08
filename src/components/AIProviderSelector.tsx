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
    <div className="space-y-4" data-oid="wsr6ys1">
      <label className="block text-cyan-300 font-semibold" data-oid="uvbsx00">
        AI Provider
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3" data-oid="zhkl8l2">
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
            data-oid="jy-atuf"
          >
            <div className="flex items-start space-x-3" data-oid="p69ng-0">
              <div
                className={`
                w-4 h-4 rounded-full border-2 mt-1 transition-all duration-200
                ${
                  selectedProvider === provider.value
                    ? "border-cyan-400 bg-cyan-400"
                    : "border-slate-500"
                }
              `}
                data-oid="dk1zlzj"
              />

              <div className="flex-1" data-oid="bzqgbi_">
                <h3
                  className={`
                  font-semibold transition-colors duration-200
                  ${
                    selectedProvider === provider.value
                      ? "text-cyan-300"
                      : "text-slate-300"
                  }
                `}
                  data-oid="chm:thc"
                >
                  {provider.label}
                </h3>
                <p className="text-sm text-slate-400 mt-1" data-oid="53t1l7e">
                  {provider.description}
                </p>
              </div>
            </div>

            {selectedProvider === provider.value && (
              <div
                className="absolute inset-0 rounded-lg border-2 border-cyan-400 animate-pulse"
                data-oid="n6vm6fn"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
