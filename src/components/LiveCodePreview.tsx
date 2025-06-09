"use client";

import { useState, useEffect } from "react";
import { Template } from "../types/template";

interface LiveCodePreviewProps {
  template: Template | null;
  userAnswers: Record<string, string>;
}

export default function LiveCodePreview({
  template,
  userAnswers,
}: LiveCodePreviewProps) {
  const [processedHtml, setProcessedHtml] = useState<string>("");
  const [processedCss, setProcessedCss] = useState<string>("");
  const [processedJs, setProcessedJs] = useState<string>("");

  useEffect(() => {
    if (!template) {
      setProcessedHtml("");
      setProcessedCss("");
      setProcessedJs("");
      return;
    }

    // Process template placeholders with user answers
    const processTemplate = (content: string) => {
      let processed = content;
      Object.entries(userAnswers).forEach(([key, value]) => {
        const placeholder = `{{${key}}}`;
        processed = processed.replace(new RegExp(placeholder, "g"), value);
      });
      return processed;
    };

    setProcessedHtml(processTemplate(template.master_code || ""));
    setProcessedCss(""); // CSS not stored separately in current schema
    setProcessedJs(""); // JavaScript not stored separately in current schema
  }, [template, userAnswers]);

  if (!template) {
    return (
      <div className="bg-slate-800 border border-gray-600 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Live Preview</h3>
        <div className="text-gray-400 text-center py-8">
          Select a template to see the live preview
        </div>
      </div>
    );
  }

  const combinedCode = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Preview</title>
      <style>
        ${processedCss}
      </style>
    </head>
    <body>
      ${processedHtml}
      <script>
        ${processedJs}
      </script>
    </body>
    </html>
  `;

  return (
    <div className="bg-slate-800 border border-gray-600 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4">Live Preview</h3>

      <div className="space-y-4">
        {/* Preview iframe */}
        <div className="border border-gray-600 rounded-lg overflow-hidden">
          <iframe
            srcDoc={combinedCode}
            className="w-full h-96 bg-white"
            title="Live Preview"
            sandbox="allow-scripts allow-same-origin"
          />
        </div>

        {/* Code tabs */}
        <div className="space-y-2">
          {/* HTML */}
          {processedHtml && (
            <details className="bg-slate-700 rounded-lg">
              <summary className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600">
                HTML
              </summary>
              <div className="p-3 border-t border-gray-600">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{processedHtml}</code>
                </pre>
              </div>
            </details>
          )}

          {/* CSS */}
          {processedCss && (
            <details className="bg-slate-700 rounded-lg">
              <summary className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600">
                CSS
              </summary>
              <div className="p-3 border-t border-gray-600">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{processedCss}</code>
                </pre>
              </div>
            </details>
          )}

          {/* JavaScript */}
          {processedJs && (
            <details className="bg-slate-700 rounded-lg">
              <summary className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600">
                JavaScript
              </summary>
              <div className="p-3 border-t border-gray-600">
                <pre className="text-sm text-gray-300 overflow-x-auto">
                  <code>{processedJs}</code>
                </pre>
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
