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
    <div className="min-h-screen bg-slate-900 text-white" data-oid="krq9dm1">
      <div className="container mx-auto px-4 py-8" data-oid="0aztd-i">
        {/* Header */}
        <div className="mb-8" data-oid="_l8iu18">
          <h1
            className="text-3xl font-bold text-cyan-400 mb-2"
            data-oid="r_..w.g"
          >
            Admin Dashboard
          </h1>
          <p className="text-slate-300" data-oid="ys3t-p1">
            Manage templates, sections, code snippets, and system settings
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg mb-8"
          data-oid="v44u5gl"
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
              data-oid="azhz6kr"
            >
              <span data-oid="2zuk__z">{tab.icon}</span>
              <span data-oid="9rolhs_">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800 rounded-lg p-6" data-oid="cqu9d1q">
          {activeTab === "overview" && (
            <div data-oid="0o68r:w">
              <h2 className="text-2xl font-bold mb-6" data-oid="ry46td7">
                System Overview
              </h2>

              {/* Stats Grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                data-oid="jfpwi-q"
              >
                <div
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-6 rounded-lg"
                  data-oid="6mdjl5g"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="i-9olqb"
                  >
                    <div data-oid="kkefxex">
                      <h3
                        className="text-lg font-semibold text-cyan-400 mb-2"
                        data-oid="doah6-1"
                      >
                        Total Templates
                      </h3>
                      <p className="text-3xl font-bold" data-oid="z_beav.">
                        {stats.totalTemplates}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="heo063a">
                      📄
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-lg"
                  data-oid="-d9i7.1"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid=":4.r4y0"
                  >
                    <div data-oid="t5:_h5h">
                      <h3
                        className="text-lg font-semibold text-green-400 mb-2"
                        data-oid="ip2je07"
                      >
                        Active Sections
                      </h3>
                      <p className="text-3xl font-bold" data-oid="kvkoaym">
                        {stats.activeSections}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="ji2bgx:">
                      📝
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-lg"
                  data-oid=":v5fv3s"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="b-kety_"
                  >
                    <div data-oid="cxfaeq1">
                      <h3
                        className="text-lg font-semibold text-purple-400 mb-2"
                        data-oid="1j0hzpv"
                      >
                        Code Snippets
                      </h3>
                      <p className="text-3xl font-bold" data-oid="27w6bxa">
                        {stats.codeSnippets}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="kyrkg9l">
                      💻
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-lg"
                  data-oid="5.xstue"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="4zvr:0y"
                  >
                    <div data-oid="f29t.b2">
                      <h3
                        className="text-lg font-semibold text-orange-400 mb-2"
                        data-oid="-6kp1iw"
                      >
                        Total Users
                      </h3>
                      <p className="text-3xl font-bold" data-oid="muq1i2v">
                        {stats.totalUsers}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="gqapa:2">
                      👥
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                data-oid="calfxgy"
              >
                <button
                  onClick={() => setActiveTab("sections")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="yva55:."
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="0vf_gs7"
                  >
                    Manage Sections
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="m_mdl8_">
                    Create and organize template sections
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("templates")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="51lpzxe"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="cnnnce-"
                  >
                    Manage Templates
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="_1.99o9">
                    Create and edit code templates
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("snippets")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="00slvln"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="b6e0_ky"
                  >
                    Code Snippets
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="sj3b-1a">
                    Manage reusable code snippets
                  </p>
                </button>
              </div>

              {/* System Status */}
              <div
                className="mt-8 bg-slate-700 border border-slate-600 rounded-lg p-6"
                data-oid="t50_gb."
              >
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  data-oid="j:n8iqx"
                >
                  System Status
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  data-oid="-fbvs1:"
                >
                  <div
                    className="flex items-center space-x-3"
                    data-oid="o8c2uuc"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="8gq-gzf"
                    ></div>
                    <span className="text-slate-300" data-oid="g3k7t8t">
                      Database:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="reuj-t_"
                      >
                        Connected
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="kd4fc2p"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="oh3hq3:"
                    ></div>
                    <span className="text-slate-300" data-oid="gq8kedv">
                      API:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid=".tk4k:i"
                      >
                        Online
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="k_6e.em"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="myuihkc"
                    ></div>
                    <span className="text-slate-300" data-oid="26qyptp">
                      Storage:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="7s:h17o"
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
              data-oid="0zyv_rs"
            />
          )}

          {activeTab === "templates" && (
            <TemplateManager
              onTemplateUpdate={handleDataUpdate}
              data-oid="0ctsyxe"
            />
          )}

          {activeTab === "snippets" && (
            <CodeSnippetManager
              onSnippetUpdate={handleDataUpdate}
              data-oid="ozn37ul"
            />
          )}

          {activeTab === "auth" && (
            <AuthManager onAuthUpdate={handleDataUpdate} data-oid="f-z1muh" />
          )}

          {activeTab === "settings" && (
            <div data-oid="s8oeyqq">
              <h2 className="text-2xl font-bold mb-6" data-oid="-3r.5w2">
                System Settings
              </h2>

              <div className="space-y-6" data-oid="3n:s4w7">
                {/* General Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="h46snze"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="fsad0fx"
                  >
                    General Settings
                  </h3>
                  <div className="space-y-4" data-oid=".-4o3jw">
                    <div
                      className="flex items-center justify-between"
                      data-oid="320gpvj"
                    >
                      <div data-oid="hv7ezz0">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="pu7q9mc"
                        >
                          Enable Live Preview
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="m0ngkjp"
                        >
                          Allow real-time template preview
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="8a8cs4."
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="gxrx18u"
                    >
                      <div data-oid="pkfn7uh">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="v26yu00"
                        >
                          Auto-save Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid=":xppds0"
                        >
                          Automatically save template changes
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="zma-juv"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="dvem:qi"
                    >
                      <div data-oid="ia4jvg5">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="69.qd2q"
                        >
                          Enable Syntax Highlighting
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="eubaujz"
                        >
                          Highlight code syntax in templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="n7wmbj."
                      />
                    </div>
                  </div>
                </div>

                {/* Performance Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="_uig:w0"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="i:n57hf"
                  >
                    Performance Settings
                  </h3>
                  <div className="space-y-4" data-oid="h39dvmn">
                    <div
                      className="flex items-center justify-between"
                      data-oid="0fo.pfk"
                    >
                      <div data-oid="ihl952i">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="06496np"
                        >
                          Cache Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="nbrhomf"
                        >
                          Cache frequently used templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="34kc.fo"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="u6d58ca"
                    >
                      <div data-oid="7sk8-ua">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="lt5kphd"
                        >
                          Lazy Load Components
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="sph1l9a"
                        >
                          Load components only when needed
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="rhbo2:6"
                      />
                    </div>
                  </div>
                </div>

                {/* Backup Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="r-f.7tz"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="qc09c-j"
                  >
                    Backup & Export
                  </h3>
                  <div className="space-y-4" data-oid="1ysioa:">
                    <div
                      className="flex items-center justify-between"
                      data-oid="w4dqykr"
                    >
                      <div data-oid="n-fy5l_">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="bsjg7ug"
                        >
                          Auto Backup
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="-0x0e4d"
                        >
                          Automatically backup data daily
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="p3jfq5q"
                      />
                    </div>

                    <div className="flex space-x-4 mt-4" data-oid="tuivd:k">
                      <button
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="9dgqjpt"
                      >
                        Export All Data
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="qg7aswc"
                      >
                        Create Backup
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="iqfpzix"
                      >
                        Import Data
                      </button>
                    </div>
                  </div>
                </div>

                {/* Save Settings */}
                <div className="flex justify-end" data-oid="oyqiv:n">
                  <button
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="997me9w"
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
