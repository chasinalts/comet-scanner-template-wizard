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
    <div className="min-h-screen futuristic-grid-bg" data-oid="qps8p:a">
      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="e0c.e3."
      >
        <div className="container mx-auto px-6 py-4" data-oid="e0-to.-">
          <div className="flex items-center justify-between" data-oid="3zjcpjv">
            <h1
              className="holographic-title text-3xl"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              data-oid="3b9ij40"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="9s.4epl">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid="zbd9zax"
              >
                Owner: chasecambre@gmail.com
              </span>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="hbfztb-"
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
        data-oid="d2c7.7o"
      >
        <div className="container mx-auto px-6 py-3" data-oid="i1._h69">
          <div className="flex space-x-6" data-oid="r-djp25">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="otd_jnf"
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
              data-oid="vjl3knl"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="2-oe3qb">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="b978.bd"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="ezr85bi">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="p9ke4cj"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="itac2rp"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="suui8pn">
            <LiveCodePreview code={generatedCode} data-oid="w:nk26v" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="ja62aur"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="2qt38yr"
        >
          <p className="text-gray-400" data-oid=".lkit1f">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
