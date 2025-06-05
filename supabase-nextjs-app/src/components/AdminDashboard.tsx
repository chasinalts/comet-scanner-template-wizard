"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="ncqwnwi"
    >
      <div className="container mx-auto px-6 py-3" data-oid="-xu:cuz">
        <div className="flex space-x-6" data-oid="obj0:q0">
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
              data-oid="q2gg-7d"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="gup0:kd">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="k1j6.op"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid="hblqn33"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="xmjf-q0"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="bw73u.q">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="xlf3erp"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="e.20vym"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid=":17zuxj">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="y-4c92-"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="3b0:.y7"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="3-bs5hm"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="zi5r8wx"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="qb6dcs1"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="y3djw4w"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="1gtq7fi">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="w0f4ejg"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="c9eiesx">
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
              data-oid="x36c648"
            >
              <div className="flex items-center space-x-4" data-oid="i_ljk6b">
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
                  data-oid="6u2gqd8"
                ></div>
                <div data-oid="3e22t3y">
                  <p className="text-white" data-oid="32f-ym1">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="d2brxhj">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="ul6k6py">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="0c3:q3p">
      <div className="futuristic-container p-8" data-oid="6_xuzqu">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="dglq.k_"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="s6mt.wj"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="0a1d5aa">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="c7dele4"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="8u6_h9y">
              <div data-oid="8.nav_u">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="a1:iehq"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="23t_ymb"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="0cje9jl"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="_xicozv">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="1-d-yt."
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="wuyt6:5">
              <div data-oid=":qc0l3s">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="kfhpb_o"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="0brg-le"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="s:546kt"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="zpxhh4n">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="5.7dzge"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="tz8tqan">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="6s8cs7r"
            >
              <div data-oid="yuqltnf">
                <h4 className="font-semibold text-white" data-oid="kro20d_">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="lv-joji">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="-qosr5h">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="rg4k9c8"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="cw:e4ye"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="jx6h9_c"
            >
              <div data-oid="dor2:2m">
                <h4 className="font-semibold text-white" data-oid="f_mbhnn">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="ynomyvm">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="8857xb:">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid=".470hmt"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid=":or8ufc"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="b4qls84">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="9w_9-vq">
      <div className="futuristic-container p-8" data-oid="uh6dk79">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="-teqegs"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="nbva56g"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="7m8cw67">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="10nmgfn"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="5rg_lc2">
              <div data-oid="-5qu10_">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="w8hy_1:"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="gudi-2o"
                />
              </div>

              <div data-oid="xa:-qp5">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="d7phwck"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="6q800ye">
                  <option data-oid="xuez2en">Multiple Choice</option>
                  <option data-oid="lhfk2ci">True/False</option>
                  <option data-oid="4ygns:0">Text Input</option>
                  <option data-oid="xul:plq">Number Input</option>
                </select>
              </div>

              <div data-oid="zneurtg">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="3:n267x"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="g0w3l7l"
                >
                  <p className="text-gray-400 mb-4" data-oid=".fozk5m">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="iavp_pz"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="5y-78v3">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="ynkit-_"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="_6ystbj"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="_s4hepq"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid=":z1qoa-">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid=":j-i14u"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid="wkmwqi2"
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
                  data-oid="0bgw0ng"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="jje_5mu"
                  >
                    <div data-oid="t3lgv1p">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="xdaj7s-"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid="gbtlkw:">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="08wqqzl">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="dmttdwj"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="q2nxemw"
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
    <div className="space-y-8" data-oid="7upokm-">
      <div className="futuristic-container p-8" data-oid="o0vs03r">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="-ia-brd"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="dj_0hea">
          <button className="futuristic-button px-6 py-3" data-oid="52832-b">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="szjspff"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="ozol_u_">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid=":-kioc1"
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
                data-oid="4_17r54"
              >
                <div className="flex items-center space-x-3" data-oid="im6hxxm">
                  <div className="text-yellow-400 text-xl" data-oid="c.:wa3z">
                    📁
                  </div>
                  <span className="text-white" data-oid="qfwqzqv">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="_s9qorq">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="vuaqlne"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="83n.c2l"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid=":xbqpr5"
                >
                  <div className="text-gray-400 text-center" data-oid="kxkw:n5">
                    <div className="text-2xl mb-2" data-oid="v31u2.j">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="_dlg1rq">
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
    <div className="space-y-8" data-oid="h6ypcf9">
      <div className="futuristic-container p-8" data-oid="npil:w6">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid=".aqtlz5"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="h.2iw7g">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="gby-xt0"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="uhkqrlp"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="t8m:pie"
              >
                127
              </div>
              <div className="text-gray-400" data-oid="97_0h-c">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="1dru-uh"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="t94qwlq"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="l7gerut">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="mgst_t5"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="5.hwlgr"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="3482qr.">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="11pcj8u">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="8sbn1wl"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="mhjvlsb">
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
                  data-oid="l8du0sr"
                >
                  <div data-oid="8_31.bl">
                    <div
                      className="text-white font-semibold"
                      data-oid="371ti9k"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="9wjr9mw">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="dbeub2:">
                    <div className="text-cyan-400" data-oid="u0ju6gy">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="9o1zj-g"
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
    <div data-oid="v80126m">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="t_o6lbp">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
