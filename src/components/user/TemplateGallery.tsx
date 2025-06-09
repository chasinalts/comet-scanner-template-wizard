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
        data-oid="3:hyrzl"
      >
        <div className="text-center" data-oid="dr3w6iy">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"
            data-oid="6ndnchn"
          ></div>
          <p className="text-cyan-300" data-oid="-d3j:wl">
            Loading templates...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8" data-oid="zip1hmj">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center" data-oid="mw-j9p2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                : "bg-slate-800 text-cyan-300 hover:bg-slate-700 border border-cyan-500/30"
            }`}
            data-oid="zie4:py"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-oid="y2i7ibz"
      >
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="futuristic-container group hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => onStartWizard(template)}
            data-oid="rjrh-_p"
          >
            {/* Template Image */}
            <div
              className="relative h-48 mb-4 rounded-lg overflow-hidden"
              data-oid="5.vg.1f"
            >
              <div
                className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center"
                data-oid="1pmpia0"
              >
                <div className="text-6xl text-cyan-400/30" data-oid="9373zv5">
                  ⚡
                </div>
              </div>
              <div className="absolute top-4 right-4" data-oid="4sk.64n">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-sm ${getDifficultyColor(
                    template.difficulty,
                  )}`}
                  data-oid="8eaf4n6"
                >
                  {template.difficulty}
                </span>
              </div>
            </div>

            {/* Template Info */}
            <div className="space-y-4" data-oid="y_7yt6x">
              <div data-oid="9_-wbhi">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  data-oid="reukldi"
                >
                  {template.name}
                </h3>
                <p className="text-slate-300 text-sm" data-oid="gc4ixe2">
                  {template.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2" data-oid="6pfrsvi">
                {template.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs"
                    data-oid="um4g9ye"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Estimated Time */}
              <div
                className="flex items-center text-sm text-slate-400"
                data-oid="24.sr9l"
              >
                <span className="mr-2" data-oid="0e9nkh:">
                  ⏱️
                </span>
                <span data-oid="a5qnzdv">{template.estimated_time}</span>
              </div>

              {/* Sections Preview */}
              <div className="space-y-2" data-oid="iai4y8u">
                <h4
                  className="text-sm font-semibold text-cyan-300"
                  data-oid="8hp8ve1"
                >
                  Includes:
                </h4>
                <ul className="space-y-1" data-oid="e2yvxee">
                  {template.sections.slice(0, 2).map((section) => (
                    <li
                      key={section.id}
                      className="text-xs text-slate-400 flex items-center"
                      data-oid="alg298-"
                    >
                      <span
                        className="w-1 h-1 bg-cyan-400 rounded-full mr-2"
                        data-oid="w1dkl:n"
                      ></span>
                      {section.name}
                    </li>
                  ))}
                  {template.sections.length > 2 && (
                    <li className="text-xs text-slate-500" data-oid="zrs0yi3">
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
                data-oid="cqjpmcu"
              >
                Start Building
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12" data-oid="r3ojz4h">
          <div className="text-6xl text-slate-600 mb-4" data-oid="h9tgnqe">
            📋
          </div>
          <h3
            className="text-xl font-semibold text-slate-400 mb-2"
            data-oid="ogtde_z"
          >
            No templates found
          </h3>
          <p className="text-slate-500" data-oid="2ol-pe2">
            Try selecting a different category or check back later for new
            templates.
          </p>
        </div>
      )}
    </div>
  );
}
