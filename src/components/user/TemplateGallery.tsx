"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Template {
  id: string;
  name: string;
  description: string;
  banner_image: string;
  category: string;
  tags: string[];
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  estimated_time: string;
  sections: {
    id: string;
    name: string;
    description: string;
  }[];
}

interface TemplateGalleryProps {
  onStartWizard: (template: Template) => void;
}

export default function TemplateGallery({
  onStartWizard,
}: TemplateGalleryProps) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Mock data for now - replace with actual API call
    const mockTemplates: Template[] = [
      {
        id: "1",
        name: "Basic Scanner",
        description: "A simple COMET scanner for beginners",
        banner_image: "/images/basic-scanner.jpg",
        category: "Basic",
        tags: ["beginner", "simple", "scanner"],
        difficulty: "Beginner",
        estimated_time: "30 minutes",
        sections: [
          {
            id: "1",
            name: "Setup",
            description: "Initial configuration",
          },
          {
            id: "2",
            name: "Scanning",
            description: "Core scanning functionality",
          },
        ],
      },
      {
        id: "2",
        name: "Advanced Analytics",
        description: "Complex analytics with multiple indicators",
        banner_image: "/images/advanced-analytics.jpg",
        category: "Advanced",
        tags: ["advanced", "analytics", "indicators"],
        difficulty: "Advanced",
        estimated_time: "2 hours",
        sections: [
          {
            id: "3",
            name: "Data Collection",
            description: "Advanced data gathering",
          },
          {
            id: "4",
            name: "Analysis",
            description: "Complex analytical processes",
          },
        ],
      },
      {
        id: "3",
        name: "Real-time Monitor",
        description: "Live market monitoring system",
        banner_image: "/images/realtime-monitor.jpg",
        category: "Intermediate",
        tags: ["realtime", "monitoring", "live"],
        difficulty: "Intermediate",
        estimated_time: "1 hour",
        sections: [
          {
            id: "5",
            name: "Connection",
            description: "Real-time data connection",
          },
          {
            id: "6",
            name: "Display",
            description: "Live data visualization",
          },
        ],
      },
    ];

    setTimeout(() => {
      setTemplates(mockTemplates);
      setLoading(false);
    }, 1000);
  }, []);

  const categories = ["All", "Basic", "Intermediate", "Advanced"];

  const filteredTemplates = templates.filter(
    (template) =>
      selectedCategory === "All" || template.category === selectedCategory,
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "text-green-400";
      case "Intermediate":
        return "text-yellow-400";
      case "Advanced":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  if (loading) {
    return (
      <div
        className="flex items-center justify-center min-h-[400px]"
        data-oid=".ay-gh0"
      >
        <div className="text-center" data-oid="q8j6lc3">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"
            data-oid="99v--kw"
          ></div>
          <p className="text-cyan-300" data-oid="-k.16lg">
            Loading templates...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8" data-oid="xioxg5k">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center" data-oid="iyq._z4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                : "bg-slate-800 text-cyan-300 hover:bg-slate-700 border border-cyan-500/30"
            }`}
            data-oid="iz1zi7h"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-oid="78xm9jx"
      >
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="futuristic-container group hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => onStartWizard(template)}
            data-oid="63ocglc"
          >
            {/* Template Image */}
            <div
              className="relative h-48 mb-4 rounded-lg overflow-hidden"
              data-oid="6xnr96s"
            >
              <div
                className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center"
                data-oid="3haxou:"
              >
                <div className="text-6xl text-cyan-400/30" data-oid="wj1eh2.">
                  ⚡
                </div>
              </div>
              <div className="absolute top-4 right-4" data-oid="82z_0r-">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-sm ${getDifficultyColor(
                    template.difficulty,
                  )}`}
                  data-oid="pv.pdvm"
                >
                  {template.difficulty}
                </span>
              </div>
            </div>

            {/* Template Info */}
            <div className="space-y-4" data-oid="q6:h.fa">
              <div data-oid="emu_xzj">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  data-oid="i9nthst"
                >
                  {template.name}
                </h3>
                <p className="text-slate-300 text-sm" data-oid="qkpyeoy">
                  {template.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2" data-oid="gt235:8">
                {template.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs"
                    data-oid="y0ukuze"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Estimated Time */}
              <div
                className="flex items-center text-sm text-slate-400"
                data-oid="7guqpzh"
              >
                <span className="mr-2" data-oid="k_m8rb1">
                  ⏱️
                </span>
                <span data-oid=".9jxeed">{template.estimated_time}</span>
              </div>

              {/* Sections Preview */}
              <div className="space-y-2" data-oid="0xh5e5x">
                <h4
                  className="text-sm font-semibold text-cyan-300"
                  data-oid="stzxqd_"
                >
                  Includes:
                </h4>
                <ul className="space-y-1" data-oid="q.ospr4">
                  {template.sections.slice(0, 2).map((section) => (
                    <li
                      key={section.id}
                      className="text-xs text-slate-400 flex items-center"
                      data-oid="koldgt3"
                    >
                      <span
                        className="w-1 h-1 bg-cyan-400 rounded-full mr-2"
                        data-oid="f9964zu"
                      ></span>
                      {section.name}
                    </li>
                  ))}
                  {template.sections.length > 2 && (
                    <li className="text-xs text-slate-500" data-oid="u9l7rvd">
                      +{template.sections.length - 2} more sections
                    </li>
                  )}
                </ul>
              </div>

              {/* Start Button */}
              <button
                className="w-full mt-4 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform group-hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
                onClick={(e) => {
                  e.stopPropagation();
                  onStartWizard(template);
                }}
                data-oid="a--i8r_"
              >
                Start Building
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12" data-oid="q7t9.1e">
          <div className="text-6xl text-slate-600 mb-4" data-oid=".n95g7c">
            📋
          </div>
          <h3
            className="text-xl font-semibold text-slate-400 mb-2"
            data-oid="6arlmrm"
          >
            No templates found
          </h3>
          <p className="text-slate-500" data-oid="00iy003">
            Try selecting a different category or check back later for new
            templates.
          </p>
        </div>
      )}
    </div>
  );
}
