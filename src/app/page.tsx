"use client";
import { useState } from "react";
import TemplateGallery from "@/components/user/TemplateGallery";
import TemplateWizard from "@/components/user/TemplateWizard";
import LiveCodePreview from "@/components/user/LiveCodePreview";
import InvisibleAdminButton from "@/components/InvisibleAdminButton";
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
    <div className="min-h-screen futuristic-grid-bg" data-oid="a3c22ow">
      {/* Invisible Admin Button */}
      <InvisibleAdminButton data-oid="bmctq4r" />

      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="i-m1idq"
      >
        <div className="container mx-auto px-6 py-4" data-oid="4bmsabr">
          <div className="flex items-center justify-between" data-oid="3::9_yp">
            <h1
              className="holographic-title text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono tracking-wider"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
              data-oid="itj:qjc"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="iiw0o0w">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid="hpt5j_:"
              >
                Owner: chasecambre@gmail.com
              </span>
              <div className="w-80" data-oid="44hhfao">
                <CacheClearButton data-oid="y_g7aff" />
              </div>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="wi17duj"
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
        data-oid="-vo24ek"
      >
        <div className="container mx-auto px-6 py-3" data-oid="uoxfp.k">
          <div className="flex space-x-6" data-oid="u:36mnt">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="g1cr6do"
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
              data-oid="5c_.ko0"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="cb8ypzk">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="7sqe950"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="t8hbezq">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="ho:dwyu"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="pa04dg9"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="7ikkx7e">
            <LiveCodePreview code={generatedCode} data-oid="g4jt.t3" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="e7xkncn"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="uyebu51"
        >
          <p className="text-gray-400" data-oid="3n81bg0">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
