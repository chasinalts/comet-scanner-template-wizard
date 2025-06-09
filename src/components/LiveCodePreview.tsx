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
      <div
        className="bg-slate-800 border border-gray-600 rounded-lg p-6"
        data-oid="t11rg:i"
      >
        <h3
          className="text-lg font-semibold text-white mb-4"
          data-oid="3i.l5r5"
        >
          Live Preview
        </h3>
        <div className="text-gray-400 text-center py-8" data-oid="6x3-e7g">
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
    <div
      className="bg-slate-800 border border-gray-600 rounded-lg p-6"
      data-oid="h_xxkeu"
    >
      <h3 className="text-lg font-semibold text-white mb-4" data-oid="0-p9.sn">
        Live Preview
      </h3>

      <div className="space-y-4" data-oid="dk4np2c">
        {/* Preview iframe */}
        <div
          className="border border-gray-600 rounded-lg overflow-hidden"
          data-oid="viz9.c5"
        >
          <iframe
            srcDoc={combinedCode}
            className="w-full h-96 bg-white"
            title="Live Preview"
            sandbox="allow-scripts allow-same-origin"
            data-oid="-izlk7u"
          />
        </div>

        {/* Code tabs */}
        <div className="space-y-2" data-oid="jym_aka">
          {/* HTML */}
          {processedHtml && (
            <details className="bg-slate-700 rounded-lg" data-oid="xzzwfr1">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="2fae6ns"
              >
                HTML
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="-whqdhu">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="4z7su0k"
                >
                  <code data-oid="v:of-qn">{processedHtml}</code>
                </pre>
              </div>
            </details>
          )}

          {/* CSS */}
          {processedCss && (
            <details className="bg-slate-700 rounded-lg" data-oid="866dso2">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="h6yz_54"
              >
                CSS
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="1lel578">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="vl1o4ys"
                >
                  <code data-oid="n6i7h_e">{processedCss}</code>
                </pre>
              </div>
            </details>
          )}

          {/* JavaScript */}
          {processedJs && (
            <details className="bg-slate-700 rounded-lg" data-oid="6pkrq_h">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="52ql6ml"
              >
                JavaScript
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="0fi9ny4">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="uzscfns"
                >
                  <code data-oid="4r8ybgj">{processedJs}</code>
                </pre>
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
