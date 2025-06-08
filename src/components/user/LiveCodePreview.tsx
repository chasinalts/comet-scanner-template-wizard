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
      data-oid="cnt:gy:"
    >
      <div
        className="futuristic-container bg-slate-900/95 backdrop-blur-md border border-cyan-500/50"
        data-oid="c-p1ws_"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b border-cyan-500/30"
          data-oid="5f2h2pc"
        >
          <h3
            className={`holographic-text font-semibold ${isMinimized ? "hidden" : "block"}`}
            data-text="Live Code Preview"
            data-oid="qdd7wak"
          >
            Live Code Preview
          </h3>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            data-oid=":fco_kk"
          >
            {isMinimized ? "📖" : "📕"}
          </button>
        </div>

        {!isMinimized && (
          <>
            {/* Code Display */}
            <div className="p-4" data-oid="a65-8k1">
              <div
                className="bg-slate-950 rounded border border-slate-700 max-h-96 overflow-y-auto"
                data-oid="d9-595j"
              >
                <div className="p-3" data-oid="cd_tdvm">
                  <div
                    className="text-xs text-gray-400 mb-2"
                    data-oid="n6aahzw"
                  >
                    // No code generated yet. Answer questions to see your
                    template build in real-time!
                  </div>
                  <pre
                    className="text-green-400 text-xs font-mono whitespace-pre-wrap"
                    data-oid="s:ujy8d"
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
              data-oid="fo3jtad"
            >
              <div className="grid grid-cols-2 gap-2" data-oid="dt:89cy">
                <button
                  onClick={handleSaveTemplate}
                  className="futuristic-button px-3 py-2 text-sm"
                  disabled={!code.trim()}
                  data-oid="9uivdd."
                >
                  💾 Save
                </button>
                <button
                  onClick={handleExportCode}
                  className="futuristic-button px-3 py-2 text-sm"
                  disabled={!code.trim()}
                  data-oid="x.j.x8r"
                >
                  📥 Export
                </button>
              </div>
              <button
                onClick={handleCopyCode}
                className="futuristic-button w-full px-3 py-2 text-sm"
                disabled={!code.trim()}
                data-oid="lbaxine"
              >
                📋 Copy to Clipboard
              </button>
            </div>

            {/* Code Statistics */}
            <div className="p-4 border-t border-cyan-500/30" data-oid="8qgsjn.">
              <div
                className="text-xs text-gray-400 space-y-1"
                data-oid="84:ogfl"
              >
                <div data-oid="at1joqt">Lines: {code.split("\n").length}</div>
                <div data-oid="sjx.9w6">Characters: {code.length}</div>
                <div data-oid=":5gv-31">
                  Status:{" "}
                  {code.trim() ? "Ready for TradingView" : "In Progress"}
                </div>
              </div>
            </div>

            {/* Saved Templates */}
            {savedTemplates.length > 0 && (
              <div
                className="p-4 border-t border-cyan-500/30"
                data-oid="1:qwsvo"
              >
                <h4
                  className="text-sm font-semibold text-cyan-300 mb-2"
                  data-oid="57.ajoz"
                >
                  Saved Templates
                </h4>
                <div className="space-y-1" data-oid="qumwor6">
                  {savedTemplates.map((template, index) => (
                    <div
                      key={index}
                      className="text-xs text-gray-400 bg-slate-800/50 px-2 py-1 rounded"
                      data-oid=":s2ziow"
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
