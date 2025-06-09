"use client";
import { useState } from "react";
import TemplateGallery from "@/components/user/TemplateGallery";
import TemplateWizard from "@/components/user/TemplateWizard";
import LiveCodePreview from "@/components/user/LiveCodePreview";
// REMOVED: InvisibleAdminButton import
import LivePreviewPanel from "@/components/LivePreviewPanel";
// REMOVED: CacheClearButton import

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
    <div className="min-h-screen futuristic-grid-bg">
      {/* REMOVED: InvisibleAdminButton */}

      {/* Header */}
      <header className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1
              className="holographic-title text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono tracking-wider"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4">
              {/* REMOVED: Admin email text */}
              {/* REMOVED: CacheClearButton */}
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
              >
                Owner: chasecambre@gmail.com
              </span>
              <div className="w-80">
                <CacheClearButton />
              </div>
              <button className="futuristic-button px-4 py-2">Logout</button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="container mx-auto px-6 py-3">
          <div className="flex space-x-6">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
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
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            {currentView === "gallery" ? (
              <TemplateGallery onStartWizard={handleStartWizard} />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1">
            <LiveCodePreview code={generatedCode} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16">
        <div className="container mx-auto px-6 py-4 text-center">
          <p className="text-gray-400">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
