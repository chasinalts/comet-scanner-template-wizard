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
    <div className="min-h-screen futuristic-grid-bg" data-oid="k_pwnoq">
      {/* Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="44pwg:n"
      >
        <div className="container mx-auto px-6 py-4" data-oid="84b_b95">
          <div className="flex items-center justify-between" data-oid="s-9-rtb">
            <h1
              className="holographic-title text-3xl"
              data-text="COMET SCANNER TEMPLATE WIZARD"
              data-oid="gi5274g"
            >
              COMET SCANNER TEMPLATE WIZARD
            </h1>
            <div className="flex items-center space-x-4" data-oid="y_c8d..">
              <span
                className="holographic-text"
                data-text="Owner: chasecambre@gmail.com"
                data-oid=".wu3:1z"
              >
                Owner: chasecambre@gmail.com
              </span>
              <button
                className="futuristic-button px-4 py-2"
                data-oid="azzpq-2"
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
        data-oid=".9765zv"
      >
        <div className="container mx-auto px-6 py-3" data-oid="0ryuz1a">
          <div className="flex space-x-6" data-oid="h59k0qf">
            <button
              onClick={() => setCurrentView("gallery")}
              className={`px-4 py-2 rounded transition-all ${
                currentView === "gallery"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="0rawix."
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
              data-oid="kov9asg"
            >
              Template Wizard
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8" data-oid="0j3rbqs">
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          data-oid="zpv992o"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-2" data-oid="ete0.87">
            {currentView === "gallery" ? (
              <TemplateGallery
                onStartWizard={handleStartWizard}
                data-oid="eo:sgqn"
              />
            ) : (
              <TemplateWizard
                template={selectedTemplate}
                onCodeUpdate={handleCodeUpdate}
                data-oid="54qg04x"
              />
            )}
          </div>

          {/* Live Code Preview Sidebar */}
          <div className="lg:col-span-1" data-oid="91ggetv">
            <LiveCodePreview code={generatedCode} data-oid="t8jzzx2" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="bg-slate-900 bg-opacity-50 border-t border-cyan-500/30 mt-16"
        data-oid="t6f6-lr"
      >
        <div
          className="container mx-auto px-6 py-4 text-center"
          data-oid="nq7nab8"
        >
          <p className="text-gray-400" data-oid="r97egtg">
            © 2025 COMET Scanner Wizard | Version 1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
