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
    <div className="min-h-screen bg-slate-900 text-white" data-oid="k0qybqf">
      <div className="container mx-auto px-4 py-8" data-oid="4s_s-4a">
        {/* Header */}
        <div className="mb-8" data-oid="9q98tkg">
          <h1
            className="text-3xl font-bold text-cyan-400 mb-2"
            data-oid="joc97ws"
          >
            Admin Dashboard
          </h1>
          <p className="text-slate-300" data-oid="vhj0iyw">
            Manage templates, sections, code snippets, and system settings
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg mb-8"
          data-oid="z8m7v.t"
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
              data-oid="pz.g0ih"
            >
              <span data-oid="s187y:x">{tab.icon}</span>
              <span data-oid="4t-sj9m">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800 rounded-lg p-6" data-oid="d0tken1">
          {activeTab === "overview" && (
            <div data-oid="-yiilss">
              <h2 className="text-2xl font-bold mb-6" data-oid="81uow.u">
                System Overview
              </h2>

              {/* Stats Grid */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
                data-oid="enajb1v"
              >
                <div
                  className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-6 rounded-lg"
                  data-oid="tlz3f0s"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="pkn..s0"
                  >
                    <div data-oid="28ronox">
                      <h3
                        className="text-lg font-semibold text-cyan-400 mb-2"
                        data-oid="x9y..cd"
                      >
                        Total Templates
                      </h3>
                      <p className="text-3xl font-bold" data-oid="rnnra4j">
                        {stats.totalTemplates}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="7jh2qy4">
                      📄
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-lg"
                  data-oid="t623r1c"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="a.rvd4d"
                  >
                    <div data-oid="qx9tglv">
                      <h3
                        className="text-lg font-semibold text-green-400 mb-2"
                        data-oid="0rp7:_c"
                      >
                        Active Sections
                      </h3>
                      <p className="text-3xl font-bold" data-oid=":u3mnam">
                        {stats.activeSections}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="9nwlw:0">
                      📝
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-lg"
                  data-oid="8cu.nkv"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="3s.i-4v"
                  >
                    <div data-oid="wh9j1hw">
                      <h3
                        className="text-lg font-semibold text-purple-400 mb-2"
                        data-oid="1:t1xpz"
                      >
                        Code Snippets
                      </h3>
                      <p className="text-3xl font-bold" data-oid="ph62ra6">
                        {stats.codeSnippets}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="-fhhjnu">
                      💻
                    </div>
                  </div>
                </div>

                <div
                  className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-lg"
                  data-oid="ofjbm8n"
                >
                  <div
                    className="flex items-center justify-between"
                    data-oid="b:cm1uc"
                  >
                    <div data-oid="o9f9sni">
                      <h3
                        className="text-lg font-semibold text-orange-400 mb-2"
                        data-oid="9h7jgwp"
                      >
                        Total Users
                      </h3>
                      <p className="text-3xl font-bold" data-oid="9woo4fp">
                        {stats.totalUsers}
                      </p>
                    </div>
                    <div className="text-3xl" data-oid="-g:zl6h">
                      👥
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                data-oid="d8pyzvy"
              >
                <button
                  onClick={() => setActiveTab("sections")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="jhgw7g1"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="thv2.y7"
                  >
                    Manage Sections
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="c41-syt">
                    Create and organize template sections
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("templates")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="c83tbfi"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="_q4p1xh"
                  >
                    Manage Templates
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="1ib8zc1">
                    Create and edit code templates
                  </p>
                </button>

                <button
                  onClick={() => setActiveTab("snippets")}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                  data-oid="lgc66vh"
                >
                  <h4
                    className="font-semibold text-cyan-400 mb-2"
                    data-oid="s9vmvtm"
                  >
                    Code Snippets
                  </h4>
                  <p className="text-slate-300 text-sm" data-oid="r2s44h.">
                    Manage reusable code snippets
                  </p>
                </button>
              </div>

              {/* System Status */}
              <div
                className="mt-8 bg-slate-700 border border-slate-600 rounded-lg p-6"
                data-oid="bpm9knz"
              >
                <h3
                  className="text-lg font-semibold text-white mb-4"
                  data-oid="7psm5h0"
                >
                  System Status
                </h3>
                <div
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                  data-oid=":fy_f93"
                >
                  <div
                    className="flex items-center space-x-3"
                    data-oid="83ky1i9"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="qtm38ya"
                    ></div>
                    <span className="text-slate-300" data-oid=":yjpkgo">
                      Database:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="ldd-x_p"
                      >
                        Connected
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="n-v:d5g"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="jlv.fe-"
                    ></div>
                    <span className="text-slate-300" data-oid="be:yaua">
                      API:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid="nb2jqw."
                      >
                        Online
                      </span>
                    </span>
                  </div>
                  <div
                    className="flex items-center space-x-3"
                    data-oid="8empu9f"
                  >
                    <div
                      className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                      data-oid="zgebho-"
                    ></div>
                    <span className="text-slate-300" data-oid="q5rl0j9">
                      Storage:{" "}
                      <span
                        className="text-green-400 font-semibold"
                        data-oid=":bte8_h"
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
              data-oid="tx.6xf3"
            />
          )}

          {activeTab === "templates" && (
            <TemplateManager
              onTemplateUpdate={handleDataUpdate}
              data-oid="xmskxmi"
            />
          )}

          {activeTab === "snippets" && (
            <CodeSnippetManager
              onSnippetUpdate={handleDataUpdate}
              data-oid="f4tewiz"
            />
          )}

          {activeTab === "auth" && (
            <AuthManager onAuthUpdate={handleDataUpdate} data-oid="2_s4ir9" />
          )}

          {activeTab === "settings" && (
            <div data-oid="n:.tx93">
              <h2 className="text-2xl font-bold mb-6" data-oid="lfj7jl0">
                System Settings
              </h2>

              <div className="space-y-6" data-oid=":u7ei2e">
                {/* General Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="31ni2gv"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid=":r5xb3a"
                  >
                    General Settings
                  </h3>
                  <div className="space-y-4" data-oid="riwzmtg">
                    <div
                      className="flex items-center justify-between"
                      data-oid="yyv3rpl"
                    >
                      <div data-oid="zh9n4:q">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="afp9pnz"
                        >
                          Enable Live Preview
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="lwei_sn"
                        >
                          Allow real-time template preview
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="2cfy.l:"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="8_lma1c"
                    >
                      <div data-oid="gboedgw">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="0vkph7p"
                        >
                          Auto-save Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="cph9zue"
                        >
                          Automatically save template changes
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="mws1ewa"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="s-y8dv9"
                    >
                      <div data-oid="5jsnf2_">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="99_z7za"
                        >
                          Enable Syntax Highlighting
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="z6ct5r_"
                        >
                          Highlight code syntax in templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="x7jt::x"
                      />
                    </div>
                  </div>
                </div>

                {/* Performance Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid=".ehvqcr"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="3lo5i.7"
                  >
                    Performance Settings
                  </h3>
                  <div className="space-y-4" data-oid="t:avral">
                    <div
                      className="flex items-center justify-between"
                      data-oid="uyyzgqd"
                    >
                      <div data-oid=":gv6sdn">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="k3-j_e6"
                        >
                          Cache Templates
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="ipux-l5"
                        >
                          Cache frequently used templates
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="slnvpw1"
                      />
                    </div>

                    <div
                      className="flex items-center justify-between"
                      data-oid="qf6br31"
                    >
                      <div data-oid="p:m8._4">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="4_.9x1u"
                        >
                          Lazy Load Components
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="c823iep"
                        >
                          Load components only when needed
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="pj:5.c2"
                      />
                    </div>
                  </div>
                </div>

                {/* Backup Settings */}
                <div
                  className="bg-slate-700 border border-slate-600 rounded-lg p-6"
                  data-oid="dif3:4p"
                >
                  <h3
                    className="text-lg font-semibold text-white mb-4"
                    data-oid="-t6g7ha"
                  >
                    Backup & Export
                  </h3>
                  <div className="space-y-4" data-oid="yf2-4aw">
                    <div
                      className="flex items-center justify-between"
                      data-oid="exytzr5"
                    >
                      <div data-oid="49hy4xb">
                        <label
                          className="text-cyan-300 font-medium"
                          data-oid="4rmfy31"
                        >
                          Auto Backup
                        </label>
                        <p
                          className="text-slate-400 text-sm"
                          data-oid="347l195"
                        >
                          Automatically backup data daily
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        defaultChecked
                        className="toggle"
                        data-oid="6m6:gm9"
                      />
                    </div>

                    <div className="flex space-x-4 mt-4" data-oid="en4k1iu">
                      <button
                        className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="wntx4f4"
                      >
                        Export All Data
                      </button>
                      <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="jmezniu"
                      >
                        Create Backup
                      </button>
                      <button
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
                        data-oid="gzeyfg1"
                      >
                        Import Data
                      </button>
                    </div>
                  </div>
                </div>

                {/* Save Settings */}
                <div className="flex justify-end" data-oid="moys3ao">
                  <button
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="qp4eatf"
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
