"use client";

import { useState } from "react";
import { ImportExportState } from "@/types/supabaseDb";

interface ChecklistItem {
  id: string;
  title: string;
  completed: boolean;
}

export default function ImportExportPanel() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checklist, setChecklist] = useState<ChecklistItem[]>([
    {
      id: "overall-progress",
      title: "Overall Progress",
      completed: false,
    },
  ]);

  const handleSingleItemToggle = () => {
    setChecklist((prev) =>
      prev.map((item) => ({
        ...item,
        completed: !item.completed,
      })),
    );
  };

  const handleExport = () => {
    const exportData: ImportExportState = {
      template_id: "current-template",
      user_answers: {},
      completed_sections: [],
      progress_state: checklist[0].completed ? "completed" : "in_progress",
      generated_code: "",
      export_timestamp: new Date().toISOString(),
      app_version: "1.0.0",
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `comet-scanner-export-${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          try {
            const importData: ImportExportState = JSON.parse(
              e.target?.result as string,
            );
            setChecklist([
              {
                id: "overall-progress",
                title: "Overall Progress",
                completed: importData.progress_state === "completed",
              },
            ]);
          } catch (error) {
            console.error("Error importing data:", error);
          }
        };
        reader.readAsText(file);
      }
    };
    input.click();
  };

  const getStatusIcon = (completed: boolean) => {
    return completed ? "✅" : "⭕";
  };

  const getStatusColor = (completed: boolean) => {
    return completed ? "text-green-400" : "text-red-400";
  };

  return (
    <div className="fixed top-4 right-4 z-50" data-oid="2n:ems_">
      {/* Tab Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-slate-800 hover:bg-slate-700 text-cyan-400 px-4 py-2 rounded-t-lg border border-cyan-500/30 transition-colors"
        data-oid="9hkm_wy"
      >
        Data
      </button>

      {/* Expanded Panel */}
      {isExpanded && (
        <div
          className="bg-slate-800 border border-cyan-500/30 rounded-b-lg rounded-tl-lg p-4 min-w-[300px] shadow-lg"
          data-oid="tisnhr:"
        >
          {/* Import/Export Buttons */}
          <div className="flex gap-2 mb-4" data-oid="7keb417">
            <button
              onClick={handleImport}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded transition-colors"
              data-oid="44ide.h"
            >
              Import
            </button>
            <button
              onClick={handleExport}
              className="flex-1 bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded transition-colors"
              data-oid="_fixawj"
            >
              Export
            </button>
          </div>

          {/* Progress Checklist */}
          <div className="space-y-2" data-oid="f4m2ltp">
            {checklist.map((item) => (
              <div
                key={item.id}
                onClick={handleSingleItemToggle}
                className="flex items-center justify-between p-2 bg-slate-700 rounded cursor-pointer hover:bg-slate-600 transition-colors"
                data-oid="mlqb::0"
              >
                <span
                  className="text-center flex-1 text-cyan-100"
                  data-oid="wjct60g"
                >
                  {item.title}
                </span>
                <span
                  className={`ml-2 ${getStatusColor(item.completed)}`}
                  data-oid="o8n-3zu"
                >
                  {getStatusIcon(item.completed)}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
