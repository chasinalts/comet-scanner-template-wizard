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
        data-oid="::3o_6r"
      >
        <div className="text-center" data-oid="u-jv501">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"
            data-oid="6m_51cr"
          ></div>
          <p className="text-cyan-300" data-oid="kqs4fyn">
            Loading templates...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8" data-oid="6g0c_gr">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center" data-oid="ahdkn1l">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
              selectedCategory === category
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg"
                : "bg-slate-800 text-cyan-300 hover:bg-slate-700 border border-cyan-500/30"
            }`}
            data-oid="g8ehytk"
          >
            {category}
          </button>
        ))}
      </div>

      {/* Templates Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        data-oid="1nsbeh6"
      >
        {filteredTemplates.map((template) => (
          <div
            key={template.id}
            className="futuristic-container group hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => onStartWizard(template)}
            data-oid="vk5atzt"
          >
            {/* Template Image */}
            <div
              className="relative h-48 mb-4 rounded-lg overflow-hidden"
              data-oid="xwf_jle"
            >
              <div
                className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center"
                data-oid="jtl.dpz"
              >
                <div className="text-6xl text-cyan-400/30" data-oid="dt0yqal">
                  ⚡
                </div>
              </div>
              <div className="absolute top-4 right-4" data-oid="38alvii">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 backdrop-blur-sm ${getDifficultyColor(
                    template.difficulty,
                  )}`}
                  data-oid=":t__7zx"
                >
                  {template.difficulty}
                </span>
              </div>
            </div>

            {/* Template Info */}
            <div className="space-y-4" data-oid="f_d54yl">
              <div data-oid="am9x1jd">
                <h3
                  className="text-xl font-bold text-white mb-2"
                  data-oid="cgmlnt8"
                >
                  {template.name}
                </h3>
                <p className="text-slate-300 text-sm" data-oid="_1q:09w">
                  {template.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2" data-oid="8kuuimd">
                {template.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-cyan-500/20 text-cyan-300 rounded text-xs"
                    data-oid="jg:m5j."
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Estimated Time */}
              <div
                className="flex items-center text-sm text-slate-400"
                data-oid="r0slhi-"
              >
                <span className="mr-2" data-oid="lqinajv">
                  ⏱️
                </span>
                <span data-oid="q6lq:k_">{template.estimated_time}</span>
              </div>

              {/* Sections Preview */}
              <div className="space-y-2" data-oid="01w7y_j">
                <h4
                  className="text-sm font-semibold text-cyan-300"
                  data-oid="vc.8q8f"
                >
                  Includes:
                </h4>
                <ul className="space-y-1" data-oid="mfmshaf">
                  {template.sections.slice(0, 2).map((section) => (
                    <li
                      key={section.id}
                      className="text-xs text-slate-400 flex items-center"
                      data-oid="upn1tc9"
                    >
                      <span
                        className="w-1 h-1 bg-cyan-400 rounded-full mr-2"
                        data-oid="si.xirj"
                      ></span>
                      {section.name}
                    </li>
                  ))}
                  {template.sections.length > 2 && (
                    <li className="text-xs text-slate-500" data-oid="ndoktnd">
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
                data-oid="41lvsuv"
              >
                Start Building
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredTemplates.length === 0 && (
        <div className="text-center py-12" data-oid="f2k92n2">
          <div className="text-6xl text-slate-600 mb-4" data-oid="6-7_vfz">
            📋
          </div>
          <h3
            className="text-xl font-semibold text-slate-400 mb-2"
            data-oid="8yxk34q"
          >
            No templates found
          </h3>
          <p className="text-slate-500" data-oid="mcr91f-">
            Try selecting a different category or check back later for new
            templates.
          </p>
        </div>
      )}
    </div>
  );
}
