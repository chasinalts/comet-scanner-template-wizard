"use client";

import { useState } from "react";
import TemplateGallery from "@/components/user/TemplateGallery";
import TemplateWizard from "@/components/user/TemplateWizard";
import LiveCodePreview from "@/components/user/LiveCodePreview";
import InvisibleAdminButton from "@/components/InvisibleAdminButton";
import ImportExportPanel from "@/components/ImportExportPanel";
import LivePreviewPanel from "@/components/LivePreviewPanel";
import CacheClearButton from "@/components/CacheClearButton";

export default function HomePage() {
  const [currentView, setCurrentView] = useState<"gallery" | "wizard">(
    "gallery",
  );
  const [selectedTemplate, setSelectedTemplate] = useState<any>(null);
  const [generatedCode, setGeneratedCode] = useState<string>("");

  const handleStartWizard = (template: any) => {
    setSelectedTemplate(template);
    setCurrentView("wizard");
  };

  const handleCodeUpdate = (code: string) => {
    setGeneratedCode(code);
  };

  return (
    <div className="min-h-screen futuristic-grid-bg" data-oid="xt:ur9z">
      {/* Invisible Admin Button */}
      <InvisibleAdminButton data-oid="zjj6a_-" />
      <ImportExportPanel data-oid="x7qi.3-" />
      <LivePreviewPanel data-oid="_zbdlii" />

      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="4nux0hj"
      >
        <div className="container mx-auto px-6 py-4" data-oid="666zvxi">
          <div className="flex items-center justify-between" data-oid="f_d1l-c">
            <h1
              className="holographic-title text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono tracking-wider"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
              data-oid="ef:jv52"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="dbbz42w">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid="g4cuh8x"
              >
                Owner: chasecambre@gmail.com
              </span>
              <div className="w-80" data-oid="iet_dxj">
                <CacheClearButton data-oid="9:96j4x" />
              </div>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="jk:y8:4"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav
        className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
        data-oid="oo4iwfn"
      >
        <div className="container mx-auto px-6 py-3" data-oid="9r5bo3l">
          <div className="flex space-x-6" data-oid="h:5lej0">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="2ypsokm"
            >
              Home Screen
            </button>
            <button
              onClick={() => setCurrentView("wizard")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "wizard"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="ysn-5yo"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="qagrozc">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="hd0jhg7"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="v0-o258">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="qox2w:0"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="gh.sg1k"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="c-y7778">
            <LiveCodePreview code={generatedCode} data-oid="0mfkzf4" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="59chiwu"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="k10anzz"
        >
          <p className="text-gray-400" data-oid="3gonc36">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
