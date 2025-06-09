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
    <div className="min-h-screen futuristic-grid-bg" data-oid="5b2:9kz">
      {/* Invisible Admin Button */}
      <InvisibleAdminButton data-oid="0-14yvz" />

      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid=".qgada1"
      >
        <div className="container mx-auto px-6 py-4" data-oid="o:jcunk">
          <div className="flex items-center justify-between" data-oid="u4ys2mj">
            <h1
              className="holographic-title text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono tracking-wider"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
              data-oid="kdk3sqz"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="e7og2u3">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid="-l-tduj"
              >
                Owner: chasecambre@gmail.com
              </span>
              <div className="w-80" data-oid="2e47fix">
                <CacheClearButton data-oid="mcd-9ft" />
              </div>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="6c6f7:9"
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
        data-oid="lvwfjj9"
      >
        <div className="container mx-auto px-6 py-3" data-oid="i.8z9cz">
          <div className="flex space-x-6" data-oid="-q.9utd">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="ef6vzfg"
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
              data-oid="5ulalb-"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="ffqe25.">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid=":1sy5hv"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="6klf-jc">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="_n17875"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="4bsnxyf"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="dr.g1bm">
            <LiveCodePreview code={generatedCode} data-oid="gv-6o07" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="b0.thzv"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="zhak.55"
        >
          <p className="text-gray-400" data-oid="rdkxus.">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
