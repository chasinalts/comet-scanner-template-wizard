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
    <div className="min-h-screen bg-slate-900 text-white" data-oid="l:42j3u">
      <div className="container mx-auto px-4 py-8" data-oid="2g5ra.:">
        {/* Header */}
        <div className="mb-8" data-oid="w58o63k">
          <h1
            className="text-3xl font-bold text-cyan-400 mb-2"
            data-oid="ov1jp7-"
          >
            Admin Dashboard
          </h1>
          <p className="text-slate-300" data-oid="4y4cfwn">
            Manage templates, sections, code snippets, and system settings
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg mb-8"
          data-oid="sv2d9-s"
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
              data-oid="g_3_1zu"
            >
              <span data-oid="3wndysx">{tab.icon}</span>
              <span data-oid="-xw09vp">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800 rounded-lg p-6" data-oid="mro2w7m">
          {activeTab === "overview" && (
            <div data-oid="80kb8ul">
              <h2 className="text-2xl font-bold mb-6" data-oid="gvfev4e">
                System Overview
              </h2>

              {/* Stats Grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                data-oid="43nqiuk"
              >
                <div
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-6 rounded-lg"
                  data-oid="4s1_p1d"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="19uzqe:"
                  >
                    <div data-oid="p0apdc5">
                      <h3
                        className="text-lg font-semibold text-cyan-400 mb-2"
                        data-oid="lcwqeip"
                      >
                        Total Templates
                      </h3>
                      <p className="text-3xl font-bold" data-oid="8qu8btt">
                        {stats.totalTemplates}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="jlxm3f4">
                      📄
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-lg"
                  data-oid="syindtb"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="i-okd_a"
                  >
                    <div data-oid="._uv35p">
                      <h3
                        className="text-lg font-semibold text-green-400 mb-2"
                        data-oid="7:fxjde"
                      >
                        Active Sections
                      </h3>
                      <p className="text-3xl font-bold" data-oid="x0:8t4f">
                        {stats.activeSections}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid=".dc5s3t">
                      📝
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-lg"
                  data-oid="aakqep8"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="lcp7doo"
                  >
                    <div data-oid=".lz6t8s">
                      <h3
                        className="text-lg font-semibold text-purple-400 mb-2"
                        data-oid="184wyfk"
                      >
                        Code Snippets
                      </h3>
                      <p className="text-3xl font-bold" data-oid="wb.zbiq">
                        {stats.codeSnippets}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="x_3hd.d">
                      💻
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-lg"
                  data-oid="nvcr4dj"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="i:amcs2"
                  >
                    <div data-oid="xuv-4ib">
                      <h3
                        className="text-lg font-semibold text-orange-400 mb-2"
                        data-oid="_y8.sl7"
                      >
                        Total Users
                      </h3>
                      <p className="text-3xl font-bold" data-oid="jfo:fm:">
                        {stats.totalUsers}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="yzz0cc2">
                      👥
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                data-oid="2h0tduh"
              >
                <button
                  onClick={() => setActiveTab("sections")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="cdf34u-"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="84cqld-"
                  >
                    Manage Sections
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="q96pbzn">
                    Create and organize template sections
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("templates")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="w8na3dn"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="a2ge5nk"
                  >
                    Manage Templates
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="_.g_-6d">
                    Create and edit code templates
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("snippets")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="lc12l.0"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="odhmbln"
                  >
                    Code Snippets
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="tjc4kq5">
                    Manage reusable code snippets
                  </p>
                </button>
              </div>

              {/* System Status */}
              <div
                className="mt-8 bg-slate-700 border border-slate-600 rounded-lg p-6"
                data-oid="xdr2sj4"
              >
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  data-oid="p62pt07"
                >
                  System Status
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  data-oid="cf::.j:"
                >
                  <div
                    className="flex items-center space-x-3"
                    data-oid="my56p_7"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="g9-dcm4"
                    ></div>
                    <span className="text-slate-300" data-oid="5grcq8y">
                      Database:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="cnb2k3k"
                      >
                        Connected
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="8eepd6d"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="_zd2q9e"
                    ></div>
                    <span className="text-slate-300" data-oid="4l8gwde">
                      API:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="jdx2l_2"
                      >
                        Online
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="6nfs_6_"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="36bpvaz"
                    ></div>
                    <span className="text-slate-300" data-oid=":jr-r1k">
                      Storage:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="v.0b.jl"
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
              data-oid="qssu4yr"
            />
          )}

          {activeTab === "templates" && (
            <TemplateManager
              onTemplateUpdate={handleDataUpdate}
              data-oid="mu-ue_7"
            />
          )}

          {activeTab === "snippets" && (
            <CodeSnippetManager
              onSnippetUpdate={handleDataUpdate}
              data-oid="ar_-jcy"
            />
          )}

          {activeTab === "auth" && (
            <AuthManager onAuthUpdate={handleDataUpdate} data-oid="l0u8dpb" />
          )}

          {activeTab === "settings" && (
            <div data-oid="av0r9q.">
              <h2 className="text-2xl font-bold mb-6" data-oid="omwyb0j">
                System Settings
              </h2>

              <div className="space-y-6" data-oid="wueurtv">
                {/* General Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="w0yoesr"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="hmnsk-a"
                  >
                    General Settings
                  </h3>
                  <div className="space-y-4" data-oid="b9e1m0j">
                    <div
                      className="flex items-center justify-between"
                      data-oid="ftm1ve."
                    >
                      <div data-oid="7hnyq-g">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="cqnqhye"
                        >
                          Enable Live Preview
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="b3usqr3"
                        >
                          Allow real-time template preview
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="2ya0mx6"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="1dk3s2d"
                    >
                      <div data-oid="15vyus:">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="pcpsy9u"
                        >
                          Auto-save Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="s8n3y5v"
                        >
                          Automatically save template changes
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="5zimj:p"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="7.t3c21"
                    >
                      <div data-oid="d2jta4r">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid=":.mne6c"
                        >
                          Enable Syntax Highlighting
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="9rhyuw9"
                        >
                          Highlight code syntax in templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="486r:wf"
                      />
                    </div>
                  </div>
                </div>

                {/* Performance Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="rdpxjnm"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="_nkttql"
                  >
                    Performance Settings
                  </h3>
                  <div className="space-y-4" data-oid="3w68w8d">
                    <div
                      className="flex items-center justify-between"
                      data-oid="w28xdjc"
                    >
                      <div data-oid="viqna4f">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="v-j7w6_"
                        >
                          Cache Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="_pw-qc_"
                        >
                          Cache frequently used templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="0g1m2vi"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="1cmk7qo"
                    >
                      <div data-oid="8.:x334">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="b5mzpnd"
                        >
                          Lazy Load Components
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="lex6pto"
                        >
                          Load components only when needed
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="o0-j6tg"
                      />
                    </div>
                  </div>
                </div>

                {/* Backup Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="tu7w:n9"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="san_vbe"
                  >
                    Backup & Export
                  </h3>
                  <div className="space-y-4" data-oid="oc_5sb3">
                    <div
                      className="flex items-center justify-between"
                      data-oid="c33l_4k"
                    >
                      <div data-oid="c-yx7m2">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="u43x11r"
                        >
                          Auto Backup
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="2.cjmva"
                        >
                          Automatically backup data daily
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="bmf.rhk"
                      />
                    </div>

                    <div className="flex space-x-4 mt-4" data-oid="gw24y-x">
                      <button
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="0w3m36."
                      >
                        Export All Data
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid=".fdtgjd"
                      >
                        Create Backup
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="7g0t:l1"
                      >
                        Import Data
                      </button>
                    </div>
                  </div>
                </div>

                {/* Save Settings */}
                <div className="flex justify-end" data-oid="sivedo2">
                  <button
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="fmvhsek"
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
