"use client";

import { useState, useEffect } from "react";

interface LiveCodePreviewProps {
  code: string;
}

export default function LiveCodePreview({ code }: LiveCodePreviewProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [savedTemplates, setSavedTemplates] = useState<string[]>([]);

  const handleSaveTemplate = () => {
    const templateName = prompt("Enter a name for this template:");
    if (templateName && code.trim()) {
      setSavedTemplates((prev) => [...prev, templateName]);
      // In a real app, this would save to the database
      alert(`Template "${templateName}" saved successfully!`);
    }
  };

  const handleExportCode = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "comet_scanner_template.pine";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <div
      className={`fixed right-4 top-20 transition-all duration-300 z-50 ${
        isMinimized ? "w-12" : "w-96"
      }`}
      data-oid="455ea13"
    >
      <div
        className="futuristic-container bg-slate-900/95 backdrop-blur-md border border-cyan-500/50"
        data-oid="yi2f:-3"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b border-cyan-500/30"
          data-oid="g5ebqso"
        >
          <h3
            className={`holographic-text font-semibold ${isMinimized ? "hidden" : "block"}`}
            data-text="Live Code Preview"
            data-oid="33-lghx"
          >
            Live Code Preview
          </h3>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            data-oid="ebfix8_"
          >
            {isMinimized ? "📖" : "📕"}
          </button>
        </div>

        {!isMinimized && (
          <>
            {/* Code Display */}
            <div className="p-4" data-oid="fvjlwi6">
              <div
                className="bg-slate-950 rounded border border-slate-700 max-h-96 overflow-y-auto"
                data-oid="hvz-fe9"
              >
                <div className="p-3" data-oid="0dl4dcr">
                  <div
                    className="text-xs text-gray-400 mb-2"
                    data-oid="9rn_4eb"
                  >
                    // No code generated yet. Answer questions to see your
                    template build in real-time!
                  </div>
                  <pre
                    className="text-green-400 text-xs font-mono whitespace-pre-wrap"
                    data-oid="vpj.-cz"
                  >
                    {code ||
                      "// Your Pine Script code will appear here as you progress through the wizard..."}
                  </pre>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="p-4 border-t border-cyan-500/30 space-y-3"
              data-oid="_f7wcme"
            >
              <div className="grid grid-cols-2 gap-2" data-oid="w-u7qh8">
                <button
                  onClick={handleSaveTemplate}
                  className="futuristic-button px-3 py-2 text-sm"
                  disabled={!code.trim()}
                  data-oid="61k6i82"
                >
                  💾 Save
                </button>
                <button
                  onClick={handleExportCode}
                  className="futuristic-button px-3 py-2 text-sm"
                  disabled={!code.trim()}
                  data-oid="op63g7v"
                >
                  📥 Export
                </button>
              </div>
              <button
                onClick={handleCopyCode}
                className="futuristic-button w-full px-3 py-2 text-sm"
                disabled={!code.trim()}
                data-oid="lgdu0yj"
              >
                📋 Copy to Clipboard
              </button>
            </div>

            {/* Code Statistics */}
            <div className="p-4 border-t border-cyan-500/30" data-oid="::469w7">
              <div
                className="text-xs text-gray-400 space-y-1"
                data-oid="euihb55"
              >
                <div data-oid="pvdw0vb">Lines: {code.split("\n").length}</div>
                <div data-oid="535jp4n">Characters: {code.length}</div>
                <div data-oid="qhytwca">
                  Status:{" "}
                  {code.trim() ? "Ready for TradingView" : "In Progress"}
                </div>
              </div>
            </div>

            {/* Saved Templates */}
            {savedTemplates.length > 0 && (
              <div
                className="p-4 border-t border-cyan-500/30"
                data-oid="hz-q25h"
              >
                <h4
                  className="text-sm font-semibold text-cyan-300 mb-2"
                  data-oid="-98--g2"
                >
                  Saved Templates
                </h4>
                <div className="space-y-1" data-oid=".:o4eq1">
                  {savedTemplates.map((template, index) => (
                    <div
                      key={index}
                      className="text-xs text-gray-400 bg-slate-800/50 px-2 py-1 rounded"
                      data-oid="3hj_5l4"
                    >
                      {template}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
