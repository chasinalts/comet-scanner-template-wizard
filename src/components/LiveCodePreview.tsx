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
        data-oid="gb8a.55"
      >
        <h3
          className="text-lg font-semibold text-white mb-4"
          data-oid="g6p3rvm"
        >
          Live Preview
        </h3>
        <div className="text-gray-400 text-center py-8" data-oid="yuj2u9_">
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
      data-oid="jvxyg2w"
    >
      <h3 className="text-lg font-semibold text-white mb-4" data-oid="2iup1:r">
        Live Preview
      </h3>

      <div className="space-y-4" data-oid="2lpxrkk">
        {/* Preview iframe */}
        <div
          className="border border-gray-600 rounded-lg overflow-hidden"
          data-oid=":cbzl.7"
        >
          <iframe
            srcDoc={combinedCode}
            className="w-full h-96 bg-white"
            title="Live Preview"
            sandbox="allow-scripts allow-same-origin"
            data-oid="jt9m0l5"
          />
        </div>

        {/* Code tabs */}
        <div className="space-y-2" data-oid="51g0_l8">
          {/* HTML */}
          {processedHtml && (
            <details className="bg-slate-700 rounded-lg" data-oid="_1-239e">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="wr:xc32"
              >
                HTML
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="kb2e5so">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="u5fd2i."
                >
                  <code data-oid="6o85seo">{processedHtml}</code>
                </pre>
              </div>
            </details>
          )}

          {/* CSS */}
          {processedCss && (
            <details className="bg-slate-700 rounded-lg" data-oid="lc724:g">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="zm9hbkz"
              >
                CSS
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="15_dntv">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="-t80e_s"
                >
                  <code data-oid="oybn3pe">{processedCss}</code>
                </pre>
              </div>
            </details>
          )}

          {/* JavaScript */}
          {processedJs && (
            <details className="bg-slate-700 rounded-lg" data-oid="vwz-jb7">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="11sv3_p"
              >
                JavaScript
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="0j4n98-">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="g7gqtbc"
                >
                  <code data-oid="dcvyz8w">{processedJs}</code>
                </pre>
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
