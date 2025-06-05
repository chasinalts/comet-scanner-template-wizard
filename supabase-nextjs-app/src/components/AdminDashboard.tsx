"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="8sc_u0t"
    >
      <div className="container mx-auto px-6 py-3" data-oid="-rc7a-1">
        <div className="flex space-x-6" data-oid="si26mcg">
          {[
            { id: "overview", label: "Overview" },
            { id: "templates", label: "Template Builder Dashboard" },
            { id: "questions", label: "Visual Question Designer" },
            { id: "media", label: "Media Library" },
            { id: "users", label: "User Management" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id as AdminView)}
              className={`px-4 py-2 rounded transition-all ${
                currentView === item.id
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-500/50"
                  : "text-gray-300 hover:text-cyan-300"
              }`}
              data-oid="ua2algj"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="1rc75y2">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="lyb-wsy"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid=":r81xd3"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="s:xyoab"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="6.evq.g">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="315:_u_"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="duz9vf:"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="0ncd.6w">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="tmugv.g"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="_lv:wh7"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="py9:kaw"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="petv7t2"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="dm2:.ex"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="3bikh98"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="tgr222q">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="-dq1h2:"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="nehi9:9">
          {[
            {
              action: "New template created",
              user: "Admin",
              time: "2 hours ago",
              type: "template",
            },
            {
              action: "Question updated",
              user: "Admin",
              time: "4 hours ago",
              type: "question",
            },
            {
              action: "Media file uploaded",
              user: "Admin",
              time: "1 day ago",
              type: "media",
            },
            {
              action: "User completed wizard",
              user: "user@example.com",
              time: "2 days ago",
              type: "user",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="ejktlm1"
            >
              <div className="flex items-center space-x-4" data-oid="6sotzj5">
                <div
                  className={`w-3 h-3 rounded-full ${
                    activity.type === "template"
                      ? "bg-cyan-400"
                      : activity.type === "question"
                        ? "bg-purple-400"
                        : activity.type === "media"
                          ? "bg-yellow-400"
                          : "bg-green-400"
                  }`}
                  data-oid="dxpsk78"
                ></div>
                <div data-oid="6:ft-y8">
                  <p className="text-white" data-oid="-zdacnh">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid=".wprx-3">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="69_z8sd">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="5x45kgf">
      <div className="futuristic-container p-8" data-oid="hmpiwge">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="gld..d3"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="n273_q3"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="umcr888">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="dhah7sd"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="6lz0nrf">
              <div data-oid="3mkf9:m">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="feefsvy"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="ijd2pfn"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="d0hj.p4"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="0widman">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="f4b4sp2"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="m3c6nwa">
              <div data-oid="6ma.lo9">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="j6uypwi"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="7__:6jl"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="ros8p7g"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="jp15a-3">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="6nc3-9o"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="eg97xf1">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="jte6sg1"
            >
              <div data-oid="wvkmlsq">
                <h4 className="font-semibold text-white" data-oid="pwks6pq">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="ogorws:">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="ovongvd">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="_qqj8kv"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid=".pi31cu"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="z8v8sxq"
            >
              <div data-oid="6shdoe_">
                <h4 className="font-semibold text-white" data-oid="d4mujuw">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="oio83n:">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="i3nb8gw">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="x3agrdb"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid=".-ojzvo"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="v_pqd9t">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="5.ny.1z">
      <div className="futuristic-container p-8" data-oid="_47:w9-">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="nz-_rgs"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="ubjngw."
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="u0k18nf">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="_4:_6ke"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="40r328g">
              <div data-oid="clibw5d">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="lfnmqg0"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="69kkumj"
                />
              </div>

              <div data-oid="l-n:5f5">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="qkuvmw-"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="41ma1ri">
                  <option data-oid="62dvfop">Multiple Choice</option>
                  <option data-oid="68:xyi.">True/False</option>
                  <option data-oid="sw.8ge3">Text Input</option>
                  <option data-oid="t2vlhb7">Number Input</option>
                </select>
              </div>

              <div data-oid="1i2z_i_">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="kh-05rc"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="b5ki9.h"
                >
                  <p className="text-gray-400 mb-4" data-oid="zdh240a">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="o.k6.vz"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="8culyco">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="4likut8"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="5u9uyye"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="wquzuko"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="x52x:y3">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="khfrxtj"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid="14jbd-9"
            >
              {[
                {
                  id: 1,
                  text: "What timeframe should the scanner use?",
                  type: "Multiple Choice",
                  answers: 4,
                },
                {
                  id: 2,
                  text: "Enable RSI filtering?",
                  type: "True/False",
                  answers: 2,
                },
                {
                  id: 3,
                  text: "Minimum volume threshold",
                  type: "Number Input",
                  answers: 1,
                },
                {
                  id: 4,
                  text: "Alert message format",
                  type: "Text Input",
                  answers: 1,
                },
              ].map((question) => (
                <div
                  key={question.id}
                  className="p-4 bg-slate-800/50 rounded border border-slate-600"
                  data-oid="uxybkpl"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="7hj291p"
                  >
                    <div data-oid="d:2spao">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="421kcp7"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid=":37rxwb">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="n1odepg">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="hyhq3:3"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="8h87sm9"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderMediaLibrary = () => (
    <div className="space-y-8" data-oid="m0tpwcr">
      <div className="futuristic-container p-8" data-oid="61oe2xe">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="qk:ki2e"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="gi-f106">
          <button className="futuristic-button px-6 py-3" data-oid="g_gb0j9">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="3soob-b"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="86zr7re">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="zqixkwq"
            >
              Folders
            </h3>
            {[
              "Banners",
              "Gallery Images",
              "Question Previews",
              "Chart Examples",
            ].map((folder) => (
              <div
                key={folder}
                className="p-4 bg-slate-800/50 rounded border border-slate-600 cursor-pointer hover:border-cyan-500/50 transition-colors"
                data-oid="lqj6gy7"
              >
                <div className="flex items-center space-x-3" data-oid="0hpp:dx">
                  <div className="text-yellow-400 text-xl" data-oid="flg7mfo">
                    📁
                  </div>
                  <span className="text-white" data-oid="y3xybzf">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="pjm1iif">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="ixjkh23"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="wwa:9y2"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid="wgoy._b"
                >
                  <div className="text-gray-400 text-center" data-oid="bbk2rrr">
                    <div className="text-2xl mb-2" data-oid=".-zciv7">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="tp8ioqf">
                      Image {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUserManagement = () => (
    <div className="space-y-8" data-oid="hat0_i5">
      <div className="futuristic-container p-8" data-oid="gsmv9qi">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="2f.cdpe"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="_e1w_cn">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="a5:ula6"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="s.ye19x"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="vrpmdho"
              >
                127
              </div>
              <div className="text-gray-400" data-oid="t28tvek">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="bht:0ts"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="y_tevqu"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="bvm_y8u">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="tt46jvx"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="r7tz6l5"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="xv0_0ah">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="l:6u9zp">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="u57hbzb"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="gc2p7ve">
              {[
                {
                  email: "trader1@example.com",
                  lastActive: "2 hours ago",
                  templates: 3,
                },
                {
                  email: "investor@example.com",
                  lastActive: "1 day ago",
                  templates: 1,
                },
                {
                  email: "analyst@example.com",
                  lastActive: "3 days ago",
                  templates: 7,
                },
                {
                  email: "user@example.com",
                  lastActive: "1 week ago",
                  templates: 0,
                },
              ].map((user, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
                  data-oid="_k0yoxw"
                >
                  <div data-oid="0u.:k94">
                    <div
                      className="text-white font-semibold"
                      data-oid="1n4s4j8"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="3b64547">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="igokep.">
                    <div className="text-cyan-400" data-oid="7.l89l-">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="ekrgfwi"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div data-oid=":y.71y.">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid=".p01wmx">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
