"use client";

import { useState, useEffect } from "react";
import { Template } from "../types/template";

interface LivePreviewPanelProps {
  template: Template | null;
  userAnswers: Record<string, string>;
}

export default function LivePreviewPanel({
  template,
  userAnswers,
}: LivePreviewPanelProps) {
  const [processedCode, setProcessedCode] = useState<string>("");
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    if (!template) {
      setProcessedCode("");
      return;
    }

    // Process template with user answers
    let processed = template.master_code || "";
    Object.entries(userAnswers).forEach(([key, value]) => {
      const placeholder = `{{${key}}}`;
      processed = processed.replace(new RegExp(placeholder, "g"), value);
    });

    setProcessedCode(processed);
  }, [template, userAnswers]);

  const handleCopyCode = () => {
    if (processedCode) {
      navigator.clipboard.writeText(processedCode);
      alert("Code copied to clipboard!");
    }
  };

  const handleExportCode = () => {
    if (processedCode) {
      const blob = new Blob([processedCode], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${template?.name || "template"}.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div
      className={`fixed right-4 top-20 transition-all duration-300 z-50 ${
        isMinimized ? "w-12" : "w-96"
      }`}
    >
      <div className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/50 rounded-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-cyan-500/30">
          <h3
            className={`text-cyan-400 font-semibold ${
              isMinimized ? "hidden" : "block"
            }`}
          >
            Live Preview
          </h3>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {isMinimized ? "📖" : "📕"}
          </button>
        </div>

        {!isMinimized && (
          <>
            {/* Code Display */}
            <div className="p-4">
              <div className="bg-slate-950 rounded border border-slate-700 max-h-96 overflow-y-auto">
                <div className="p-3">
                  {processedCode ? (
                    <pre className="text-green-400 text-xs font-mono whitespace-pre-wrap">
                      {processedCode}
                    </pre>
                  ) : (
                    <div className="text-xs text-gray-400">
                      {template
                        ? "No code generated yet. Answer questions to see your template build in real-time!"
                        : "Select a template to see the live preview..."}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="p-4 border-t border-cyan-500/30 space-y-3">
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={handleCopyCode}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 text-sm rounded transition-colors"
                  disabled={!processedCode.trim()}
                >
                  📋 Copy
                </button>
                <button
                  onClick={handleExportCode}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm rounded transition-colors"
                  disabled={!processedCode.trim()}
                >
                  📥 Export
                </button>
              </div>
            </div>

            {/* Code Statistics */}
            <div className="p-4 border-t border-cyan-500/30">
              <div className="text-xs text-gray-400 space-y-1">
                <div>Lines: {processedCode.split("\n").length}</div>
                <div>Characters: {processedCode.length}</div>
                <div>
                  Status: {processedCode.trim() ? "Ready" : "In Progress"}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
