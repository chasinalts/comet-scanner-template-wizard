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
      data-oid="hr6c-t_"
    >
      <div
        className="bg-slate-900/95 backdrop-blur-md border border-cyan-500/50 rounded-lg"
        data-oid="n8sfd9z"
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-4 border-b border-cyan-500/30"
          data-oid="j_hbp8d"
        >
          <h3
            className={`text-cyan-400 font-semibold ${
              isMinimized ? "hidden" : "block"
            }`}
            data-oid="a5vlcoq"
          >
            Live Preview
          </h3>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
            data-oid="ya:36e."
          >
            {isMinimized ? "📖" : "📕"}
          </button>
        </div>

        {!isMinimized && (
          <>
            {/* Code Display */}
            <div className="p-4" data-oid="o49wqk1">
              <div
                className="bg-slate-950 rounded border border-slate-700 max-h-96 overflow-y-auto"
                data-oid="icys3oz"
              >
                <div className="p-3" data-oid="zqf148r">
                  {processedCode ? (
                    <pre
                      className="text-green-400 text-xs font-mono whitespace-pre-wrap"
                      data-oid="bl9-9.."
                    >
                      {processedCode}
                    </pre>
                  ) : (
                    <div className="text-xs text-gray-400" data-oid="zf4ga0b">
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
              data-oid="f5lkfu3"
            >
              <div className="grid grid-cols-2 gap-2" data-oid="_maax71">
                <button
                  onClick={handleCopyCode}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-3 py-2 text-sm rounded transition-colors"
                  disabled={!processedCode.trim()}
                  data-oid="vdl3d.f"
                >
                  📋 Copy
                </button>
                <button
                  onClick={handleExportCode}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 text-sm rounded transition-colors"
                  disabled={!processedCode.trim()}
                  data-oid="ysmmooo"
                >
                  📥 Export
                </button>
              </div>
            </div>

            {/* Code Statistics */}
            <div className="p-4 border-t border-cyan-500/30" data-oid="nmk9mt-">
              <div
                className="text-xs text-gray-400 space-y-1"
                data-oid="qw8tnpn"
              >
                <div data-oid="8isl.ne">
                  Lines: {processedCode.split("\n").length}
                </div>
                <div data-oid="9hcpask">Characters: {processedCode.length}</div>
                <div data-oid="030n5jy">
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
