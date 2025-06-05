"use client";

import { useState } from "react";
import TemplateGallery from "@/components/TemplateGallery";
import TemplateWizard from "@/components/TemplateWizard";
import LiveCodePreview from "@/components/LiveCodePreview";

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
    <div className="min-h-screen futuristic-grid-bg" data-oid="rpkyc4o">
      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="8gpiq-q"
      >
        <div className="container mx-auto px-6 py-4" data-oid="39o2wu_">
          <div className="flex items-center justify-between" data-oid="r4x04cz">
            <h1
              className="holographic-title text-3xl"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              data-oid="6i02:qg"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="or5rp4v">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid="fnq3cp."
              >
                Owner: chasecambre@gmail.com
              </span>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="lu6:kpk"
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
        data-oid="vjj18w0"
      >
        <div className="container mx-auto px-6 py-3" data-oid="szpdwl2">
          <div className="flex space-x-6" data-oid="ck8reul">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="q0._si9"
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
              data-oid="x19t10z"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="25d_79m">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="xxtix.r"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="6th3:fa">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="_icwwdb"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="uvwuc7f"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="c6.-t_5">
            <LiveCodePreview code={generatedCode} data-oid="5umg1zx" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="p8agy26"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid=":azta0a"
        >
          <p className="text-gray-400" data-oid="7pt.d02">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
