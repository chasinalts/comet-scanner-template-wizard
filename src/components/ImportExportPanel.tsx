"use client";

import { useState } from "react";
import { Template } from "../types/template";

interface ImportExportPanelProps {
  templates: Template[];
  onImport: (templates: Template[]) => void;
}

export default function ImportExportPanel({
  templates,
  onImport,
}: ImportExportPanelProps) {
  const [isImporting, setIsImporting] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);

  const handleExport = () => {
    const dataStr = JSON.stringify(templates, null, 2);
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr);

    const exportFileDefaultName = `templates-${new Date().toISOString().split("T")[0]}.json`;

    const linkElement = document.createElement("a");
    linkElement.setAttribute("href", dataUri);
    linkElement.setAttribute("download", exportFileDefaultName);
    linkElement.click();
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    setImportError(null);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const content = e.target?.result as string;
        const importedTemplates = JSON.parse(content) as Template[];

        // Basic validation
        if (!Array.isArray(importedTemplates)) {
          throw new Error(
            "Invalid file format: expected an array of templates",
          );
        }

        // Validate each template has required fields
        for (const template of importedTemplates) {
          if (!template.id || !template.name || !template.master_code) {
            throw new Error(
              "Invalid template format: missing required fields (id, name, master_code)",
            );
          }
        }

        onImport(importedTemplates);
        setIsImporting(false);
      } catch (error) {
        setImportError(
          error instanceof Error ? error.message : "Failed to import templates",
        );
        setIsImporting(false);
      }
    };

    reader.onerror = () => {
      setImportError("Failed to read file");
      setIsImporting(false);
    };

    reader.readAsText(file);
  };

  return (
    <div
      className="bg-slate-800 border border-gray-600 rounded-lg p-6"
      data-oid="9r0ct6m"
    >
      <h3 className="text-lg font-semibold text-white mb-4" data-oid="lb2xff6">
        Import/Export Templates
      </h3>

      <div className="space-y-4" data-oid="-yvbzg3">
        {/* Export */}
        <div data-oid="cibcytz">
          <button
            onClick={handleExport}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            disabled={templates.length === 0}
            data-oid="_c7j3c7"
          >
            Export Templates ({templates.length})
          </button>
          <p className="text-sm text-gray-400 mt-1" data-oid="-p4jxiy">
            Download all templates as JSON file
          </p>
        </div>

        {/* Import */}
        <div data-oid="ccxnq9-">
          <label className="block" data-oid="hppjn.q">
            <span className="sr-only" data-oid="5urw9-o">
              Import templates
            </span>
            <input
              type="file"
              accept=".json"
              onChange={handleImport}
              disabled={isImporting}
              className="block w-full text-sm text-gray-400
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-green-500 file:text-white
                hover:file:bg-green-600
                file:disabled:bg-gray-600
                file:disabled:cursor-not-allowed
                disabled:cursor-not-allowed"
              data-oid="9xm98a6"
            />
          </label>
          <p className="text-sm text-gray-400 mt-1" data-oid="v:ojrxv">
            {isImporting
              ? "Importing..."
              : "Select JSON file to import templates"}
          </p>
        </div>

        {/* Error display */}
        {importError && (
          <div
            className="bg-red-900/50 border border-red-500 rounded-md p-3"
            data-oid="gyvqba9"
          >
            <p className="text-red-200 text-sm" data-oid="vmaz8kd">
              {importError}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
