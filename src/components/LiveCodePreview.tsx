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
        data-oid="ta-ouru"
      >
        <h3
          className="text-lg font-semibold text-white mb-4"
          data-oid="rt8a_71"
        >
          Live Preview
        </h3>
        <div className="text-gray-400 text-center py-8" data-oid="lhwacwv">
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
      data-oid="1zah2wq"
    >
      <h3 className="text-lg font-semibold text-white mb-4" data-oid="pmi.exx">
        Live Preview
      </h3>

      <div className="space-y-4" data-oid="l8ii3hu">
        {/* Preview iframe */}
        <div
          className="border border-gray-600 rounded-lg overflow-hidden"
          data-oid="lu.8me7"
        >
          <iframe
            srcDoc={combinedCode}
            className="w-full h-96 bg-white"
            title="Live Preview"
            sandbox="allow-scripts allow-same-origin"
            data-oid="hzca:0b"
          />
        </div>

        {/* Code tabs */}
        <div className="space-y-2" data-oid="h85.i63">
          {/* HTML */}
          {processedHtml && (
            <details className="bg-slate-700 rounded-lg" data-oid="q8wp97.">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="-rh3_8c"
              >
                HTML
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="grz0v11">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="r6h68jw"
                >
                  <code data-oid="qut21em">{processedHtml}</code>
                </pre>
              </div>
            </details>
          )}

          {/* CSS */}
          {processedCss && (
            <details className="bg-slate-700 rounded-lg" data-oid="9t31p8z">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="byjq3g_"
              >
                CSS
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="sm-dx69">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid=":qsv7-h"
                >
                  <code data-oid="hsyxgtx">{processedCss}</code>
                </pre>
              </div>
            </details>
          )}

          {/* JavaScript */}
          {processedJs && (
            <details className="bg-slate-700 rounded-lg" data-oid="u__3_13">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="xmu56bd"
              >
                JavaScript
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="463vo_t">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="bm9_bp-"
                >
                  <code data-oid="ss:yxvy">{processedJs}</code>
                </pre>
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
