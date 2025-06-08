"use client";

import React, { useState } from "react";
import SectionManager from "./admin/SectionManager";
import TemplateManager from "./admin/TemplateManager";
import CodeSnippetManager from "./admin/CodeSnippetManager";
import AuthManager from "./admin/AuthManager";
import ImageManager from "./admin/ImageManager";
import MasterCodeManager from "./admin/MasterCodeManager";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [stats, setStats] = useState({
    totalTemplates: 0,
    activeSections: 0,
    totalUsers: 0,
    codeSnippets: 0,
  });

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "sections", label: "Sections", icon: "📝" },
    { id: "templates", label: "Templates", icon: "📄" },
    { id: "snippets", label: "Code Snippets", icon: "💻" },
    { id: "mastercode", label: "Master Code", icon: "🔧" },
    { id: "images", label: "Images", icon: "🖼️" },
    { id: "auth", label: "Authentication", icon: "🔐" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  const handleDataUpdate = () => {
    // This function can be called by child components to trigger a refresh
    // For now, we'll just log it, but you could implement actual stats fetching here
    console.log("Data updated, refreshing stats...");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white" data-oid="3bk97ex">
      <div className="container mx-auto px-4 py-8" data-oid="i3:e2qw">
        {/* Header */}
        <div className="mb-8" data-oid="jqrcrcq">
          <h1
            className="text-3xl font-bold text-cyan-400 mb-2"
            data-oid="pg0r1-u"
          >
            Admin Dashboard
          </h1>
          <p className="text-slate-300" data-oid="9yy2-.-">
            Manage templates, sections, code snippets, and system settings
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg mb-8"
          data-oid="ycp6_o:"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? "bg-cyan-500 text-white"
                  : "text-slate-300 hover:text-white hover:bg-slate-700"
              }`}
              data-oid="1tvtd-6"
            >
              <span data-oid="czx--gn">{tab.icon}</span>
              <span data-oid="qsj69tl">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800 rounded-lg p-6" data-oid="-z6ry_4">
          {activeTab === "overview" && (
            <div data-oid="ao0_at_">
              <h2 className="text-2xl font-bold mb-6" data-oid="rso7:99">
                System Overview
              </h2>

              {/* Stats Grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                data-oid="6h_mp_z"
              >
                <div
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-6 rounded-lg"
                  data-oid="ch6qou4"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="nk4tl75"
                  >
                    <div data-oid="wll9cvm">
                      <h3
                        className="text-lg font-semibold text-cyan-400 mb-2"
                        data-oid="m7wlevk"
                      >
                        Total Templates
                      </h3>
                      <p className="text-3xl font-bold" data-oid="kaoth_c">
                        {stats.totalTemplates}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="a4wue3w">
                      📄
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-lg"
                  data-oid="z5.gl-2"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="i2t:.bu"
                  >
                    <div data-oid="p0-mujd">
                      <h3
                        className="text-lg font-semibold text-green-400 mb-2"
                        data-oid="a3-d72y"
                      >
                        Active Sections
                      </h3>
                      <p className="text-3xl font-bold" data-oid="0:gx:sb">
                        {stats.activeSections}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid=".i1xtyq">
                      📝
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-lg"
                  data-oid="sg9pval"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid=".zlsnli"
                  >
                    <div data-oid="5q146pp">
                      <h3
                        className="text-lg font-semibold text-purple-400 mb-2"
                        data-oid="c-a:_ij"
                      >
                        Code Snippets
                      </h3>
                      <p className="text-3xl font-bold" data-oid="ni3w.7z">
                        {stats.codeSnippets}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="-0t:qzu">
                      💻
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-lg"
                  data-oid="4.5a.dv"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="2-3.8qf"
                  >
                    <div data-oid="e_s21lv">
                      <h3
                        className="text-lg font-semibold text-orange-400 mb-2"
                        data-oid="1z5l7ep"
                      >
                        Total Users
                      </h3>
                      <p className="text-3xl font-bold" data-oid="e8l8a4q">
                        {stats.totalUsers}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="3xozdfg">
                      👥
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                data-oid="rpmv62d"
              >
                <button
                  onClick={() => setActiveTab("sections")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="7f1t9jc"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="kjcirlr"
                  >
                    Manage Sections
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid=".mg52q3">
                    Create and organize template sections
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("templates")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="h6fe2ss"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="gvwiktq"
                  >
                    Manage Templates
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="qohtntt">
                    Create and edit code templates
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("snippets")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="6jmzk4m"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="ch7hx-7"
                  >
                    Code Snippets
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="w-5i1vm">
                    Manage reusable code snippets
                  </p>
                </button>
              </div>

              {/* System Status */}
              <div
                className="mt-8 bg-slate-700 border border-slate-600 rounded-lg p-6"
                data-oid="etij3:k"
              >
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  data-oid="348-hla"
                >
                  System Status
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  data-oid="gp5p:bo"
                >
                  <div
                    className="flex items-center space-x-3"
                    data-oid="rrc6re5"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="s3e.wip"
                    ></div>
                    <span className="text-slate-300" data-oid="6zc9gzt">
                      Database:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="veiugoc"
                      >
                        Connected
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="uw_v1x_"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="2pfl-zm"
                    ></div>
                    <span className="text-slate-300" data-oid="f7ne704">
                      API:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="b.0oi46"
                      >
                        Online
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="0:308m_"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="16f6saj"
                    ></div>
                    <span className="text-slate-300" data-oid="cp5s_pp">
                      Storage:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid=".dwn:b1"
                      >
                        Available
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "sections" && (
            <SectionManager
              onSectionUpdate={handleDataUpdate}
              data-oid="k6mavwb"
            />
          )}

          {activeTab === "templates" && (
            <TemplateManager
              onTemplateUpdate={handleDataUpdate}
              data-oid="hhuy56."
            />
          )}

          {activeTab === "snippets" && (
            <CodeSnippetManager
              onSnippetUpdate={handleDataUpdate}
              data-oid="x3h0it1"
            />
          )}

          {activeTab === "auth" && (
            <AuthManager onAuthUpdate={handleDataUpdate} data-oid="1f.1phh" />
          )}

          {activeTab === "settings" && (
            <div data-oid="ohadptg">
              <h2 className="text-2xl font-bold mb-6" data-oid="x86k6.s">
                System Settings
              </h2>

              <div className="space-y-6" data-oid="481u37c">
                {/* General Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="9uhnxvc"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="ij9-f1w"
                  >
                    General Settings
                  </h3>
                  <div className="space-y-4" data-oid="uk2v92t">
                    <div
                      className="flex items-center justify-between"
                      data-oid="53m.sug"
                    >
                      <div data-oid="e8z5d4-">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="nhn:7_g"
                        >
                          Enable Live Preview
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="7bjzw0:"
                        >
                          Allow real-time template preview
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="-iz:-5z"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="ynipzoj"
                    >
                      <div data-oid="u48_6yi">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="fim:ke2"
                        >
                          Auto-save Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="ckvg3gg"
                        >
                          Automatically save template changes
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="kim-89i"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="wr4un8n"
                    >
                      <div data-oid="mwc:.d:">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="dk8i3tz"
                        >
                          Enable Syntax Highlighting
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="s4htbq0"
                        >
                          Highlight code syntax in templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="uqqc12m"
                      />
                    </div>
                  </div>
                </div>

                {/* Performance Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="a_r4wty"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="mq5vt1p"
                  >
                    Performance Settings
                  </h3>
                  <div className="space-y-4" data-oid="7d-x23v">
                    <div
                      className="flex items-center justify-between"
                      data-oid="c.oxic:"
                    >
                      <div data-oid="x2-a72e">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="2nd9oqk"
                        >
                          Cache Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="b8y0vls"
                        >
                          Cache frequently used templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="dsldh6_"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid=":r_15ij"
                    >
                      <div data-oid="bwaom-j">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="0:k4l7k"
                        >
                          Lazy Load Components
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="0:q.mb5"
                        >
                          Load components only when needed
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="erdj5p-"
                      />
                    </div>
                  </div>
                </div>

                {/* Backup Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="iqmr3-o"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="y-3d9z8"
                  >
                    Backup & Export
                  </h3>
                  <div className="space-y-4" data-oid="a8w_tb-">
                    <div
                      className="flex items-center justify-between"
                      data-oid="bq7e1e5"
                    >
                      <div data-oid="mri2op4">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="9gxj8pj"
                        >
                          Auto Backup
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="voogrmo"
                        >
                          Automatically backup data daily
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="7u.74_j"
                      />
                    </div>

                    <div className="flex space-x-4 mt-4" data-oid="eky-p_d">
                      <button
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="wt7--v:"
                      >
                        Export All Data
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="wzg0r.3"
                      >
                        Create Backup
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="8cmfc1u"
                      >
                        Import Data
                      </button>
                    </div>
                  </div>
                </div>

                {/* Save Settings */}
                <div className="flex justify-end" data-oid="xr-:yhf">
                  <button
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="-0elvmz"
                  >
                    Save All Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
