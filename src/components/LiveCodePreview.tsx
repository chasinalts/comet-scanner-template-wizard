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
        data-oid="gmshbnt"
      >
        <h3
          className="text-lg font-semibold text-white mb-4"
          data-oid="cdmo1hw"
        >
          Live Preview
        </h3>
        <div className="text-gray-400 text-center py-8" data-oid="xl8nbq9">
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
      data-oid="6o4lc41"
    >
      <h3 className="text-lg font-semibold text-white mb-4" data-oid="57nil9n">
        Live Preview
      </h3>

      <div className="space-y-4" data-oid="_d6wfro">
        {/* Preview iframe */}
        <div
          className="border border-gray-600 rounded-lg overflow-hidden"
          data-oid="te9y9u9"
        >
          <iframe
            srcDoc={combinedCode}
            className="w-full h-96 bg-white"
            title="Live Preview"
            sandbox="allow-scripts allow-same-origin"
            data-oid="b89s-_k"
          />
        </div>

        {/* Code tabs */}
        <div className="space-y-2" data-oid="d7w7:-h">
          {/* HTML */}
          {processedHtml && (
            <details className="bg-slate-700 rounded-lg" data-oid="mmhl0j-">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="edg0p6:"
              >
                HTML
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="8.leirm">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="sn.ul8t"
                >
                  <code data-oid="58d72sg">{processedHtml}</code>
                </pre>
              </div>
            </details>
          )}

          {/* CSS */}
          {processedCss && (
            <details className="bg-slate-700 rounded-lg" data-oid="9n3nayk">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="jqam.bx"
              >
                CSS
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid=":_h5f6t">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid="_4gc98-"
                >
                  <code data-oid="2q90td9">{processedCss}</code>
                </pre>
              </div>
            </details>
          )}

          {/* JavaScript */}
          {processedJs && (
            <details className="bg-slate-700 rounded-lg" data-oid="hzkv9s3">
              <summary
                className="cursor-pointer p-3 text-white font-medium hover:bg-slate-600"
                data-oid="mtq5wk8"
              >
                JavaScript
              </summary>
              <div className="p-3 border-t border-gray-600" data-oid="sp5w0ig">
                <pre
                  className="text-sm text-gray-300 overflow-x-auto"
                  data-oid=".xzs9k8"
                >
                  <code data-oid="4tt-iy_">{processedJs}</code>
                </pre>
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  );
}
