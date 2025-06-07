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
      data-oid="-8fikwk"
    >
      <div
        className="futuristic-container bg-slate-900/95 backdrop-blur-md border border-cyan-500/50"
        data-oid="ss91k6d"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b border-cyan-500/30"
          data-oid="jrm_6u1"
        >
          <h3
            className={`holographic-text font-semibold ${isMinimized ? "hidden" : "block"}`}
            data-text="Live Code Preview"
            data-oid="ottms1d"
          >
            Live Code Preview
          </h3>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            data-oid="xvmxfw8"
          >
            {isMinimized ? "📖" : "📕"}
          </button>
        </div>

        {!isMinimized && (
          <>
            {/* Code Display */}
            <div className="p-4" data-oid="u7d624d">
              <div
                className="bg-slate-950 rounded border border-slate-700 max-h-96 overflow-y-auto"
                data-oid="o04oj-k"
              >
                <div className="p-3" data-oid="hbpmmzd">
                  <div
                    className="text-xs text-gray-400 mb-2"
                    data-oid="1au.jbb"
                  >
                    // No code generated yet. Answer questions to see your
                    template build in real-time!
                  </div>
                  <pre
                    className="text-green-400 text-xs font-mono whitespace-pre-wrap"
                    data-oid="1oimr9t"
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
              data-oid="tl8yg_2"
            >
              <div className="grid grid-cols-2 gap-2" data-oid="65dtd-:">
                <button
                  onClick={handleSaveTemplate}
                  className="futuristic-button px-3 py-2 text-sm"
                  disabled={!code.trim()}
                  data-oid="-8hiwa9"
                >
                  💾 Save
                </button>
                <button
                  onClick={handleExportCode}
                  className="futuristic-button px-3 py-2 text-sm"
                  disabled={!code.trim()}
                  data-oid="6yeqkn4"
                >
                  📥 Export
                </button>
              </div>
              <button
                onClick={handleCopyCode}
                className="futuristic-button w-full px-3 py-2 text-sm"
                disabled={!code.trim()}
                data-oid="bl0fqi_"
              >
                📋 Copy to Clipboard
              </button>
            </div>

            {/* Code Statistics */}
            <div className="p-4 border-t border-cyan-500/30" data-oid="hj_bkt7">
              <div
                className="text-xs text-gray-400 space-y-1"
                data-oid="_k50.jg"
              >
                <div data-oid="._dglx3">Lines: {code.split("\n").length}</div>
                <div data-oid="y0ad3aj">Characters: {code.length}</div>
                <div data-oid="vhzm.fe">
                  Status:{" "}
                  {code.trim() ? "Ready for TradingView" : "In Progress"}
                </div>
              </div>
            </div>

            {/* Saved Templates */}
            {savedTemplates.length > 0 && (
              <div
                className="p-4 border-t border-cyan-500/30"
                data-oid="2_hnq7o"
              >
                <h4
                  className="text-sm font-semibold text-cyan-300 mb-2"
                  data-oid="l1lw-w3"
                >
                  Saved Templates
                </h4>
                <div className="space-y-1" data-oid="k0v4-28">
                  {savedTemplates.map((template, index) => (
                    <div
                      key={index}
                      className="text-xs text-gray-400 bg-slate-800/50 px-2 py-1 rounded"
                      data-oid="40berbh"
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
