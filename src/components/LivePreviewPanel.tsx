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
      data-oid="9v_o9yg"
    >
      <div
        className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/50 rounded-lg"
        data-oid="gji:l:a"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b border-cyan-500/30"
          data-oid="wqrwu-d"
        >
          <h3
            className={`text-cyan-400 font-semibold ${
              isMinimized ? "hidden" : "block"
            }`}
            data-oid="in8cb-k"
          >
            Live Preview
          </h3>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            data-oid="budpe4h"
          >
            {isMinimized ? "📖" : "📕"}
          </button>
        </div>

        {!isMinimized && (
          <>
            {/* Code Display */}
            <div className="p-4" data-oid="ghfeh..">
              <div
                className="bg-slate-950 rounded border border-slate-700 max-h-96 overflow-y-auto"
                data-oid="ij7xy7c"
              >
                <div className="p-3" data-oid="14hnws6">
                  {processedCode ? (
                    <pre
                      className="text-green-400 text-xs font-mono whitespace-pre-wrap"
                      data-oid="ugpqe2k"
                    >
                      {processedCode}
                    </pre>
                  ) : (
                    <div className="text-xs text-gray-400" data-oid="5x89ivh">
                      {template
                        ? "No code generated yet. Answer questions to see your template build in real-time!"
                        : "Select a template to see the live preview..."}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div
              className="p-4 border-t border-cyan-500/30 space-y-3"
              data-oid="vjp_etc"
            >
              <div className="grid grid-cols-2 gap-2" data-oid="u.n8_e:">
                <button
                  onClick={handleCopyCode}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 text-sm rounded transition-colors"
                  disabled={!processedCode.trim()}
                  data-oid="b6c6cj0"
                >
                  📋 Copy
                </button>
                <button
                  onClick={handleExportCode}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm rounded transition-colors"
                  disabled={!processedCode.trim()}
                  data-oid="3n39pz3"
                >
                  📥 Export
                </button>
              </div>
            </div>

            {/* Code Statistics */}
            <div className="p-4 border-t border-cyan-500/30" data-oid="lnfkzpw">
              <div
                className="text-xs text-gray-400 space-y-1"
                data-oid="tl019b0"
              >
                <div data-oid="h9a6hv:">
                  Lines: {processedCode.split("\n").length}
                </div>
                <div data-oid=":30qz6_">Characters: {processedCode.length}</div>
                <div data-oid="076_obh">
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
