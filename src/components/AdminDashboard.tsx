"use client";

import React, { useState } from "react";
import SectionManager from "./admin/SectionManager";
import TemplateManager from "./admin/TemplateManager";
import CodeSnippetManager from "./admin/CodeSnippetManager";
import AuthManager from "./admin/AuthManager";

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
    { id: "auth", label: "Authentication", icon: "🔐" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  const handleDataUpdate = () => {
    // This function can be called by child components to trigger a refresh
    // For now, we'll just log it, but you could implement actual stats fetching here
    console.log("Data updated, refreshing stats...");
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white" data-oid=":qpv1f0">
      <div className="container mx-auto px-4 py-8" data-oid="-n4usbj">
        {/* Header */}
        <div className="mb-8" data-oid="5c-jg9.">
          <h1
            className="text-3xl font-bold text-cyan-400 mb-2"
            data-oid="omcy7dy"
          >
            Admin Dashboard
          </h1>
          <p className="text-slate-300" data-oid="3a05-k.">
            Manage templates, sections, code snippets, and system settings
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg mb-8"
          data-oid="d2eqjx1"
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
              data-oid="_t:wml4"
            >
              <span data-oid="ua_a60m">{tab.icon}</span>
              <span data-oid="9ymg1sz">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800 rounded-lg p-6" data-oid="x43az8a">
          {activeTab === "overview" && (
            <div data-oid="_kis.e.">
              <h2 className="text-2xl font-bold mb-6" data-oid="xj_6ryd">
                System Overview
              </h2>

              {/* Stats Grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                data-oid=":--vozg"
              >
                <div
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-6 rounded-lg"
                  data-oid="3xxsyoa"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="gk30.qu"
                  >
                    <div data-oid="-ztfbme">
                      <h3
                        className="text-lg font-semibold text-cyan-400 mb-2"
                        data-oid="bpop-bx"
                      >
                        Total Templates
                      </h3>
                      <p className="text-3xl font-bold" data-oid="wqqnang">
                        {stats.totalTemplates}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="jd03m_j">
                      📄
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-lg"
                  data-oid="h-.t9ac"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="gulcute"
                  >
                    <div data-oid="k9y1hat">
                      <h3
                        className="text-lg font-semibold text-green-400 mb-2"
                        data-oid="vp5uar_"
                      >
                        Active Sections
                      </h3>
                      <p className="text-3xl font-bold" data-oid="z9myd3o">
                        {stats.activeSections}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="db315ak">
                      📝
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-lg"
                  data-oid="vaf0n3j"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="xen06kc"
                  >
                    <div data-oid="2ek6umm">
                      <h3
                        className="text-lg font-semibold text-purple-400 mb-2"
                        data-oid="mz3.ejb"
                      >
                        Code Snippets
                      </h3>
                      <p className="text-3xl font-bold" data-oid="mjesmex">
                        {stats.codeSnippets}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="1:sjqfu">
                      💻
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-lg"
                  data-oid="0_b2nwf"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="thlz2d7"
                  >
                    <div data-oid="qh8aofs">
                      <h3
                        className="text-lg font-semibold text-orange-400 mb-2"
                        data-oid="e3-h0la"
                      >
                        Total Users
                      </h3>
                      <p className="text-3xl font-bold" data-oid="l5calnu">
                        {stats.totalUsers}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="jl6ja_m">
                      👥
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                data-oid="qlbi0oh"
              >
                <button
                  onClick={() => setActiveTab("sections")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="9.5q58y"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid=".vx_5lt"
                  >
                    Manage Sections
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="w1etlfw">
                    Create and organize template sections
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("templates")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="ey6:dzl"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="h6epx89"
                  >
                    Manage Templates
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="h7i5vs0">
                    Create and edit code templates
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("snippets")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="s5xq2l2"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="dw8v1hq"
                  >
                    Code Snippets
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="ub.tzqi">
                    Manage reusable code snippets
                  </p>
                </button>
              </div>

              {/* System Status */}
              <div
                className="mt-8 bg-slate-700 border border-slate-600 rounded-lg p-6"
                data-oid="c-69y-w"
              >
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  data-oid="fz2u6rl"
                >
                  System Status
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  data-oid="ogfozl0"
                >
                  <div
                    className="flex items-center space-x-3"
                    data-oid=":p9a2up"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="w4woyi2"
                    ></div>
                    <span className="text-slate-300" data-oid="z.0hkk:">
                      Database:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="sagp3.q"
                      >
                        Connected
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="ln_mvla"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="wv.m:f3"
                    ></div>
                    <span className="text-slate-300" data-oid="1080c0:">
                      API:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="z.306kj"
                      >
                        Online
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="gco5ggo"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="es3ed0i"
                    ></div>
                    <span className="text-slate-300" data-oid="bhu32bg">
                      Storage:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="2:a0n.l"
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
              data-oid="e2jusv6"
            />
          )}

          {activeTab === "templates" && (
            <TemplateManager
              onTemplateUpdate={handleDataUpdate}
              data-oid="y3ud42c"
            />
          )}

          {activeTab === "snippets" && (
            <CodeSnippetManager
              onSnippetUpdate={handleDataUpdate}
              data-oid="avh1in1"
            />
          )}

          {activeTab === "auth" && (
            <AuthManager onAuthUpdate={handleDataUpdate} data-oid="85t4bui" />
          )}

          {activeTab === "settings" && (
            <div data-oid="yjpf4s7">
              <h2 className="text-2xl font-bold mb-6" data-oid="_q72:8.">
                System Settings
              </h2>

              <div className="space-y-6" data-oid="dd2k62u">
                {/* General Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="-2l9mxr"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="e05svv-"
                  >
                    General Settings
                  </h3>
                  <div className="space-y-4" data-oid="v2.3jde">
                    <div
                      className="flex items-center justify-between"
                      data-oid="0roiec4"
                    >
                      <div data-oid="_ssb8ng">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="nn81.k-"
                        >
                          Enable Live Preview
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="g8yt-cw"
                        >
                          Allow real-time template preview
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="zewrtsi"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="96:d2fp"
                    >
                      <div data-oid="m630m30">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="r2wawz_"
                        >
                          Auto-save Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="qbewa:q"
                        >
                          Automatically save template changes
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="nmft6cs"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="en1ywvn"
                    >
                      <div data-oid="ju5u_ss">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="jzty86y"
                        >
                          Enable Syntax Highlighting
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="u:g942:"
                        >
                          Highlight code syntax in templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="e9w.qfr"
                      />
                    </div>
                  </div>
                </div>

                {/* Performance Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid=":2vcbjt"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="n8hjqsk"
                  >
                    Performance Settings
                  </h3>
                  <div className="space-y-4" data-oid="zfy-67u">
                    <div
                      className="flex items-center justify-between"
                      data-oid="jt8r63n"
                    >
                      <div data-oid="ony4yb1">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="8lr-0iw"
                        >
                          Cache Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="lphnwfx"
                        >
                          Cache frequently used templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="vn8incx"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="d:3azdi"
                    >
                      <div data-oid="mxre8_1">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="5san84p"
                        >
                          Lazy Load Components
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid=".c3rz4g"
                        >
                          Load components only when needed
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid=".scvnjv"
                      />
                    </div>
                  </div>
                </div>

                {/* Backup Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="j1o7vcg"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="c8j-rvq"
                  >
                    Backup & Export
                  </h3>
                  <div className="space-y-4" data-oid="1cacx4a">
                    <div
                      className="flex items-center justify-between"
                      data-oid="mednkk1"
                    >
                      <div data-oid="dsvd76r">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="9.ka9i9"
                        >
                          Auto Backup
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="78e3joa"
                        >
                          Automatically backup data daily
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="g2jfpq3"
                      />
                    </div>

                    <div className="flex space-x-4 mt-4" data-oid="0h3_rmf">
                      <button
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="tq7cf5j"
                      >
                        Export All Data
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="sgniavn"
                      >
                        Create Backup
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="1z90-3f"
                      >
                        Import Data
                      </button>
                    </div>
                  </div>
                </div>

                {/* Save Settings */}
                <div className="flex justify-end" data-oid=".o37.4u">
                  <button
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="y8_1oho"
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
