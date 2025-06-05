"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="9t0kyq4"
    >
      <div className="container mx-auto px-6 py-3" data-oid="vr9_drw">
        <div className="flex space-x-6" data-oid="gb6gkno">
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
              data-oid="a:i-q__"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="-c_o.6t">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="kau:gdh"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid="9ibfxm-"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="85e7:s7"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="he-c581">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="gfdh:q5"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="djhcf:u"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="4_.kxak">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="mu4ih6i"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="lqevmr0"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="n_rfn9e"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="5wf9fz4"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="ve3hx3-"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="8adfa:5"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="zi-7hgo">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="i6ffa5e"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="mrnjmv3">
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
              data-oid="5df6iqy"
            >
              <div className="flex items-center space-x-4" data-oid="d86griw">
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
                  data-oid="qxb_gtu"
                ></div>
                <div data-oid="o.zjzm2">
                  <p className="text-white" data-oid="qy_9sk6">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="lz:762u">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="lbpxcom">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="jenx_mj">
      <div className="futuristic-container p-8" data-oid="ldnirn_">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="b8_5y0y"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="x7nd0_a"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="xlmel6p">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="oirqj42"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="wcu.06s">
              <div data-oid="5v3frpy">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="aqkvygk"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="mqxs7ht"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="i:dc4-h"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="hodtey2">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="i9oykip"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="fs.uo:7">
              <div data-oid="04dsaul">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="t2y2vw_"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="5kv_tia"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="31xho_-"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="tgt.o_e">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="3l443d8"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="lbrggcb">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="wmebnku"
            >
              <div data-oid="shqqxd9">
                <h4 className="font-semibold text-white" data-oid="0stxhsu">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="e1m_:ql">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="p98n53c">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="-1wopd."
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="eeds4d8"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="0dcsp9v"
            >
              <div data-oid="sugshcw">
                <h4 className="font-semibold text-white" data-oid="_9yaf81">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="k5iai6u">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="r.39lkp">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="yap2vf4"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="ixqi-uh"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="i0rwdhx">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="_1lr-ff">
      <div className="futuristic-container p-8" data-oid="bhdkdvt">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="sz0s4pc"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="0k9-1sy"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="ytzd296">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="-kruy26"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="em8a653">
              <div data-oid=".p1klm-">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid=":25p90s"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="z8dmi5t"
                />
              </div>

              <div data-oid="vva3w9f">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid=".m:-06a"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="ku81dcy">
                  <option data-oid="smb3i6d">Multiple Choice</option>
                  <option data-oid="ipxpg6i">True/False</option>
                  <option data-oid="8p56j8x">Text Input</option>
                  <option data-oid="sym958:">Number Input</option>
                </select>
              </div>

              <div data-oid="38viiww">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="5g-_ixo"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="q4yji2b"
                >
                  <p className="text-gray-400 mb-4" data-oid="w0s.xcl">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="af_1out"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="yh0fg8x">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="5yg1t:2"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="bcqg9it"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="5i:x4a-"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="q7to:ms">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="y0awmz7"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid="856u2sa"
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
                  data-oid="b.8hqcc"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="8h-iso7"
                  >
                    <div data-oid="jud3co6">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="z62d:hu"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid="b.j_62k">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="kncob34">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="-bibjen"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="bxl7qar"
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
    <div className="space-y-8" data-oid="8yycpgw">
      <div className="futuristic-container p-8" data-oid="f-499mb">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="l2ilw0z"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="55d1-mj">
          <button className="futuristic-button px-6 py-3" data-oid="ff.we.t">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="p3fy3s7"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="ejbe:lh">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid=".hlx7vg"
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
                data-oid="-a8:xku"
              >
                <div className="flex items-center space-x-3" data-oid="f5vz6b.">
                  <div className="text-yellow-400 text-xl" data-oid="szng7f8">
                    📁
                  </div>
                  <span className="text-white" data-oid=":p87hgk">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="9j86h_i">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="znp7inx"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="4twd8pw"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid="z_7c:-9"
                >
                  <div className="text-gray-400 text-center" data-oid="1llzkj_">
                    <div className="text-2xl mb-2" data-oid="27dfza0">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="d20ihe2">
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
    <div className="space-y-8" data-oid="xt8jykx">
      <div className="futuristic-container p-8" data-oid="5h:5-cw">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="hp8:us:"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="agi098l">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="_zww8cd"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="6_fm7pm"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="m_1v480"
              >
                127
              </div>
              <div className="text-gray-400" data-oid="x_ihz-s">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="q48nc89"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="olnbldt"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="n9t82ad">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="vjwk_si"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="k1x0w-u"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="i5nmgsg">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="fziv_43">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="d.wqt3p"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="s61ew8w">
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
                  data-oid="qp:52.1"
                >
                  <div data-oid="-8p98qo">
                    <div
                      className="text-white font-semibold"
                      data-oid="2s4.k2a"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="ahyg.g_">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="1r-cajz">
                    <div className="text-cyan-400" data-oid="quvdpll">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="37oyakf"
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
    <div data-oid="79g0seo">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="96p8jqd">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
