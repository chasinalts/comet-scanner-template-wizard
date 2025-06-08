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
    <div className="min-h-screen futuristic-grid-bg" data-oid="n27rh01">
      {/* Invisible Admin Button */}
      <InvisibleAdminButton data-oid="ab9tqmc" />

      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="xgqm2gp"
      >
        <div className="container mx-auto px-6 py-4" data-oid="v4yn9qg">
          <div className="flex items-center justify-between" data-oid="4zc:yeg">
            <h1
              className="holographic-title text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 font-mono tracking-wider"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              style={{ textShadow: "0 0 10px rgba(34, 211, 238, 0.5)" }}
              data-oid="509rhr."
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="5jyhbon">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid="8eb.:fp"
              >
                Owner: chasecambre@gmail.com
              </span>
              <div className="w-80" data-oid="nla:2pm">
                <CacheClearButton data-oid="9:gsc:1" />
              </div>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="8xoehqc"
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
        data-oid="d-ag3ca"
      >
        <div className="container mx-auto px-6 py-3" data-oid="x2ls4l0">
          <div className="flex space-x-6" data-oid="ogu4voi">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="t.eshbt"
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
              data-oid="z89ibxk"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="b72ne5l">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="p2obbbr"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="3i5-vnl">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="o23.g21"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="xjue1ix"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="dirc5q:">
            <LiveCodePreview code={generatedCode} data-oid="0wj1lj_" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="f.0r:z8"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="0-_0po1"
        >
          <p className="text-gray-400" data-oid="0_4841q">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
