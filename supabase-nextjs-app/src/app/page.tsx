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
    <div className="min-h-screen futuristic-grid-bg" data-oid=":coilgb">
      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="34q8c1s"
      >
        <div className="container mx-auto px-6 py-4" data-oid="vipdw.1">
          <div className="flex items-center justify-between" data-oid="3f:403p">
            <h1
              className="holographic-title text-3xl"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              data-oid="o93z13c"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="ztkq1rb">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid="fqbbkzn"
              >
                Owner: chasecambre@gmail.com
              </span>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="yl81pxc"
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
        data-oid="096mo12"
      >
        <div className="container mx-auto px-6 py-3" data-oid="zghv_z9">
          <div className="flex space-x-6" data-oid="dg1458t">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="m..uc-t"
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
              data-oid="_m9:18i"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="ls1_d1n">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="to-lga7"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="ey1l6ib">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid=":laj9si"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="wv-_.4g"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="svjv7-o">
            <LiveCodePreview code={generatedCode} data-oid="zo4_i.j" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="ic39i-f"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="kds7hfq"
        >
          <p className="text-gray-400" data-oid="hpd:4_d">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
