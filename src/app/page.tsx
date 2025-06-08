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
    <div className="min-h-screen futuristic-grid-bg" data-oid="3.312qj">
      {/* Invisible Admin Button */}
      <InvisibleAdminButton data-oid="hl51413" />

      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="04g15ex"
      >
        <div className="container mx-auto px-6 py-4" data-oid="9.m0:8l">
          <div className="flex items-center justify-between" data-oid="q.uxxat">
            <h1
              className="holographic-title text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono tracking-wider"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
              data-oid="f2.yho9"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="69lkh6m">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid=".r9ytuw"
              >
                Owner: chasecambre@gmail.com
              </span>
              <div className="w-80" data-oid="jwm9b1c">
                <CacheClearButton data-oid="m4:p:a2" />
              </div>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="ukd9pci"
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
        data-oid=".9i__w1"
      >
        <div className="container mx-auto px-6 py-3" data-oid="4-xr7u4">
          <div className="flex space-x-6" data-oid="z.0_nx3">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="l_5k:ux"
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
              data-oid="9k2c840"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="9ufow2t">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="z-fc_4k"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="u2_3i:r">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="73:rdm7"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="fb0v_cf"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="9m.iy3m">
            <LiveCodePreview code={generatedCode} data-oid="5gk7cyd" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="qyhq9ep"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="4q43q_0"
        >
          <p className="text-gray-400" data-oid="f3igjet">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
