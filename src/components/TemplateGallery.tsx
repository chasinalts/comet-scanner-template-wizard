"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Template {
  id: string;
  name: string;
  description: string;
  banner_image: string;
  preview_images: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  category: string;
}

interface TemplateGalleryProps {
  onStartWizard: (template: Template) => void;
}

export default function TemplateGallery({
  onStartWizard,
}: TemplateGalleryProps) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Mock data for demonstration
  useEffect(() => {
    const mockTemplates: Template[] = [
      {
        id: "1",
        name: "A_Traders EDGE Scanner",
        description: "Find your EDGE, Build your EDGE, Trade your EDGE",
        banner_image: "/api/placeholder/600/300",
        preview_images: [
          "/api/placeholder/200/150",
          "/api/placeholder/200/150",
        ],

        difficulty: "Intermediate",
        category: "Trading Signals",
      },
      {
        id: "2",
        name: "Momentum Scanner",
        description:
          "Identify high momentum breakout opportunities across multiple timeframes",
        banner_image: "/api/placeholder/600/300",
        preview_images: [
          "/api/placeholder/200/150",
          "/api/placeholder/200/150",
        ],

        difficulty: "Beginner",
        category: "Momentum",
      },
      {
        id: "3",
        name: "Volume Profile Scanner",
        description:
          "Advanced volume analysis for institutional-level trading insights",
        banner_image: "/api/placeholder/600/300",
        preview_images: [
          "/api/placeholder/200/150",
          "/api/placeholder/200/150",
        ],

        difficulty: "Advanced",
        category: "Volume Analysis",
      },
    ];

    setTemplates(mockTemplates);
  }, []);

  const categories = [
    "All",
    "Trading Signals",
    "Momentum",
    "Volume Analysis",
    "Technical Indicators",
  ];

  const filteredTemplates =
    selectedCategory === "All"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="text-center py-12 futuristic-container">
        <h1
          className="holographic-title text-4xl mb-6"
          data-text="COMET SCANNER TEMPLATE WIZARD"
        >
          COMET SCANNER TEMPLATE WIZARD
        </h1>

        {/* A_Traders EDGE Banner */}
        <div className="relative max-w-4xl mx-auto mb-8 rounded-lg overflow-hidden border border-cyan-500/30">
          <div className="bg-gradient-to-r from-red-600 via-black to-cyan-400 p-8 text-center">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-red-400 font-bold text-6xl italic">
                A_Traders
              </div>
              <div className="text-cyan-400 font-bold text-6xl">EDGE</div>
            </div>
            <div className="mt-4 space-y-2 text-white">
              <p className="text-xl">Find your EDGE</p>
              <p className="text-xl">Build your EDGE</p>
              <p className="text-xl">Trade your EDGE</p>
            </div>
          </div>
        </div>

        <button
          className="futuristic-button px-8 py-4 text-xl"
          onClick={() => onStartWizard(templates[0])}
        >
          START THE TEMPLATE WIZARD
        </button>
      </div>

      {/* Category Filter */}
      <div className="futuristic-container p-6">
        <h3
          className="holographic-subtitle text-xl mb-4"
          data-text="Filter by Category"
        >
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded transition-all ${
                selectedCategory === category
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "bg-slate-700/50 text-gray-300 hover:text-cyan-300 border border-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* COMET Scanner Gallery */}
      <div className="futuristic-container p-6">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="COMET Scanner Gallery"
        >
          COMET Scanner Gallery
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-slate-800/50 rounded-lg border border-cyan-500/30 overflow-hidden hover:border-cyan-400/50 transition-all duration-300 holo-glow"
            >
              <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-900">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-cyan-400 text-lg font-semibold">
                    {template.name}
                  </div>
                </div>
                <div
                  className={`absolute top-2 right-2 px-2 py-1 rounded text-xs ${
                    template.difficulty === "Beginner"
                      ? "bg-green-500/30 text-green-300"
                      : template.difficulty === "Intermediate"
                        ? "bg-yellow-500/30 text-yellow-300"
                        : "bg-red-500/30 text-red-300"
                  }`}
                >
                  {template.difficulty}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {template.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {template.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-cyan-400 bg-cyan-500/20 px-2 py-1 rounded">
                    {template.category}
                  </span>
                  <button
                    className="futuristic-button px-4 py-2 text-sm"
                    onClick={() => onStartWizard(template)}
                  >
                    Use Template
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What is COMET? Section */}
      <div className="futuristic-container p-8">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="What is COMET?"
        >
          What is COMET?
        </h2>

        <div className="space-y-6 text-gray-300">
          <div>
            <p className="text-lg mb-4">
              <strong className="text-cyan-400">COMET</strong> = Co-Integrated
              Observational Market Evaluation Tool
            </p>
            <p className="leading-relaxed">
              A COMET Scanner journeys a few steps further using the data from a
              traditional scanner by using them with different visualization
              techniques and often at very extreme settings to produce very
              revealing and predictable patterns and similarities in the edge
              cases of the price action. These "edge case" signals may be very
              far and few between for a single asset, but in my case, the Alert
              Signals start stacking up when I start to screen all 400+ futures
              assets on the Binfu Exchange (by having 10 copies of the COMET
              Scanner on the chart with a different 40 assets selected to be
              screened for each copy - each copy can screen up to 40 assets
              max).
            </p>
          </div>

          <div>
            <h3
              className="holographic-text text-xl mb-4"
              data-text="COMET Scanner Usage"
            >
              COMET Scanner Usage
            </h3>
            <p className="leading-relaxed mb-4">
              COMET Scanners are powerful tools for market analysis that help
              traders identify potential trading opportunities across multiple
              assets simultaneously. They work by applying custom filters and
              visualization techniques to price data, highlighting patterns that
              might be missed by traditional analysis methods.
            </p>

            <div className="space-y-2 text-sm">
              <p>
                <strong className="text-cyan-400">
                  Key features of COMET Scanners include:
                </strong>
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>
                  Multi-asset screening capability (up to 40 assets per scanner
                  instance)
                </li>
                <li>Custom visualization techniques for pattern recognition</li>
                <li>Extreme parameter settings to identify edge cases</li>
                <li>Real-time alerts for potential trading opportunities</li>
                <li>Configurable filters to match your trading strategy</li>
              </ul>
            </div>

            <p className="mt-4 leading-relaxed">
              The COMET Scanner Template Wizard helps you create a customized
              scanner template tailored to your specific trading needs and
              preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
