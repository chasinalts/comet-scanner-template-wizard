"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="k0b-0lg"
    >
      <div className="container mx-auto px-6 py-3" data-oid="5fbp:ty">
        <div className="flex space-x-6" data-oid="zqyabh0">
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
              data-oid="4:pbn7h"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="6fhc:me">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="_ck06xn"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid="hn6d:43"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="552q7cu"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="f-88och">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="4:kdnqv"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="ypeaac0"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="mdtyvnp">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="kdqq0gd"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="miz9dzf"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="2ai.ylt"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="a.zlb1r"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="aeg33s3"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="4c-icot"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="vmkln.3">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="0g_vx4p"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="bm0brnv">
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
              data-oid="g4t7ra1"
            >
              <div className="flex items-center space-x-4" data-oid="ehpekur">
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
                  data-oid="1zb.cc7"
                ></div>
                <div data-oid="xo:4n5h">
                  <p className="text-white" data-oid="48lj8cv">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="fbjk0lx">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="icsh9kd">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="jh-vov5">
      <div className="futuristic-container p-8" data-oid="_2drxuc">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="r459bm:"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="w.a-07i"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="1-ce49y">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="z1z3x:y"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="weff6pv">
              <div data-oid=".5iw:86">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="2e_9x-b"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="_tomyfe"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="yh8ccij"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="tks6ef2">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="15m3flc"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="n2qoz4g">
              <div data-oid="g.naco9">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="tus_ch5"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="5xww4qh"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="ugre1l."
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="5jqq7q4">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="w0lqaxt"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="0kx7ab3">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="ge9_4e7"
            >
              <div data-oid="6-:2n3z">
                <h4 className="font-semibold text-white" data-oid="ei_vw.w">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="1aic4:1">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="u38b.i3">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="8f8p0jr"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="u9y9y63"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid=":twmlwr"
            >
              <div data-oid="heqjkw9">
                <h4 className="font-semibold text-white" data-oid="o_k2p7h">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="ow2p1l8">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="ud:ivd4">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="q.7z-px"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="d23m1c4"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="l82wl41">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="srzjhxu">
      <div className="futuristic-container p-8" data-oid="zj7w1pt">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="3_d-u:9"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="xx3sors"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="6u8:a79">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="jbd08v:"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="wd_.wv_">
              <div data-oid="rkhw2oz">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="_yv-iyj"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="mv2-g_y"
                />
              </div>

              <div data-oid="zo7x1rn">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="tbk294w"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="y9wkr5y">
                  <option data-oid="y.rk5of">Multiple Choice</option>
                  <option data-oid="pc.rdb3">True/False</option>
                  <option data-oid="n60a0l6">Text Input</option>
                  <option data-oid="w-c.b9z">Number Input</option>
                </select>
              </div>

              <div data-oid="q4j-qzf">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="-4ggn6."
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="xwm9-nr"
                >
                  <p className="text-gray-400 mb-4" data-oid="e9ghoyy">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="cgr_cjv"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="jjv-x:q">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="h7ihph6"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="2d-uz9l"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="7c5yf3k"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="9n:.rna">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="1rb30:v"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid="x1j3v89"
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
                  data-oid="27-s1i_"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="gl.o_q."
                  >
                    <div data-oid="::0fe-m">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="31x3583"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid="4_1fovo">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="mcy8h3o">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="bhhzesi"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="rqij2ej"
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
    <div className="space-y-8" data-oid="9tas7ao">
      <div className="futuristic-container p-8" data-oid="ai7eog1">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="os_5aa6"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="704:4m.">
          <button className="futuristic-button px-6 py-3" data-oid=":n3vlke">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="2a-ixyv"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="cgn4m0e">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="d2l37xb"
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
                data-oid="8355vjg"
              >
                <div className="flex items-center space-x-3" data-oid="y407333">
                  <div className="text-yellow-400 text-xl" data-oid="u07isq-">
                    📁
                  </div>
                  <span className="text-white" data-oid="jmn72ho">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="5nc6ghg">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="8f-5g3o"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="lnab994"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid="9:j24m3"
                >
                  <div className="text-gray-400 text-center" data-oid=":z5mko0">
                    <div className="text-2xl mb-2" data-oid="ao_lqkj">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="x2.iwv3">
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
    <div className="space-y-8" data-oid="g_q7xv9">
      <div className="futuristic-container p-8" data-oid="3ihbim2">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="fd16d9."
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="tiztkfg">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="rt2pui1"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="qm85lc6"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="xs15f_u"
              >
                127
              </div>
              <div className="text-gray-400" data-oid="kad4-5t">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="p5tpvhk"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="y7:kect"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="fpqljyy">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="es411hv"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid=".urgckx"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="fzqeg_6">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="sqpc2hs">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="mfs-zzj"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="4btqvxs">
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
                  data-oid=":25h8e-"
                >
                  <div data-oid="acifntp">
                    <div
                      className="text-white font-semibold"
                      data-oid="pi2fwvm"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="bwemppe">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="b2dppbc">
                    <div className="text-cyan-400" data-oid="bukml9r">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="m.idvlx"
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
    <div data-oid="kzko:68">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="zivc:zm">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
