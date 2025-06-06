"use client";

import { useState } from "react";
import TemplateGallery from "@/components/user/TemplateGallery";
import TemplateWizard from "@/components/user/TemplateWizard";
import LiveCodePreview from "@/components/user/LiveCodePreview";

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
    <div className="min-h-screen futuristic-grid-bg" data-oid="9.bprl4">
      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="u62xoae"
      >
        <div className="container mx-auto px-6 py-4" data-oid="zb:5i3m">
          <div className="flex items-center justify-between" data-oid="tzcr2d7">
            <h1
              className="holographic-title text-3xl"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              data-oid="438wv0r"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid=".cbsggj">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid="8_.u45d"
              >
                Owner: chasecambre@gmail.com
              </span>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="_f7m37_"
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
        data-oid="vv5fxal"
      >
        <div className="container mx-auto px-6 py-3" data-oid="-ngd6f6">
          <div className="flex space-x-6" data-oid="omplw0s">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="dwcyxcl"
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
              data-oid="cm-sjwx"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="cpt9-ut">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="bdn3c:y"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid=".:b88ym">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="fdn7uqn"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="o4w3g3y"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="mx5-g71">
            <LiveCodePreview code={generatedCode} data-oid="81a97y:" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="7p2f515"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="q8d_gu3"
        >
          <p className="text-gray-400" data-oid="iomta5o">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
