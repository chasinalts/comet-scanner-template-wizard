"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="8m_8m0m"
    >
      <div className="container mx-auto px-6 py-3" data-oid="s97cb5_">
        <div className="flex space-x-6" data-oid="xluuwz1">
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
              data-oid="lc5e-v6"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="e-h-.17">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="5cefkln"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid="g8.ok0."
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="q9hvyji"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="36uj:..">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="ffhbnns"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="dub31py"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="._levjg">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="tci72:."
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="ayww43w"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="st9y3_a"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="vf00bbl"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="an:fnv4"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="o6gza:7"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="92rozm2">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="m8pw3jg"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="d63ysj.">
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
              data-oid="catidxi"
            >
              <div className="flex items-center space-x-4" data-oid="dlrjxvu">
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
                  data-oid="q7azsi7"
                ></div>
                <div data-oid="3g8d08g">
                  <p className="text-white" data-oid="3a4a8fi">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="gig:4-m">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="v5w2y:f">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="eqi4bv7">
      <div className="futuristic-container p-8" data-oid="0kvmsyh">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="2gl2kdw"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="nsfloco"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="5vcxoo3">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="5r1ezb0"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="iy7974k">
              <div data-oid="dy9yn-n">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="t1szs5:"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid=".0hwdlp"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="e-4myeq"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="ow9ya-f">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="blza32e"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="eosp730">
              <div data-oid="x1en:g1">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="6lp.:hj"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="w4njl:8"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="f61kn7s"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="-h2v:n2">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid=".ked46p"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="333x-ti">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="ea3unu_"
            >
              <div data-oid="03:drzq">
                <h4 className="font-semibold text-white" data-oid="a4w0-at">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="3.4.41p">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="o25t22l">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="1xgxbng"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="k9fdwgg"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="z.621:2"
            >
              <div data-oid="gadwe5z">
                <h4 className="font-semibold text-white" data-oid="rshxzmn">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid=":uen4di">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="ydpv6f.">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="4l1q8-a"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="sf98833"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="0toj6yo">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="ryej:i3">
      <div className="futuristic-container p-8" data-oid=":i93-kh">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="6kakiry"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="cz1xl.d"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="e-6-iiu">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="3r-eyqp"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="ux2j3j6">
              <div data-oid="sbafye2">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="thtme2y"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="wk:c9kh"
                />
              </div>

              <div data-oid="auejwpz">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="2jt-42n"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="d2hqys8">
                  <option data-oid="2xi06r-">Multiple Choice</option>
                  <option data-oid="txasp6g">True/False</option>
                  <option data-oid="f.1_g7o">Text Input</option>
                  <option data-oid="_.wu3oo">Number Input</option>
                </select>
              </div>

              <div data-oid=".u2w30:">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="jnhdh_0"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="5-:z1xx"
                >
                  <p className="text-gray-400 mb-4" data-oid="264xz93">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="og9eksu"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="v6qfmbd">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="_86ooce"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="jtejxrb"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="pmc.m3m"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="x2k_yg3">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="-7ammz2"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid="t5o-5so"
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
                  data-oid="y96tfwe"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid=".rp3:uj"
                  >
                    <div data-oid="::5htx_">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="axv13dr"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid="4c_kxsa">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="n10e9q3">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="40palut"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="z7uvojz"
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
    <div className="space-y-8" data-oid="zh26fx_">
      <div className="futuristic-container p-8" data-oid="omcfif_">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid=".:8:7mx"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="-5sp_rr">
          <button className="futuristic-button px-6 py-3" data-oid="6c:bygk">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="v-04d2o"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid=":kwafww">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="uy8kzc5"
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
                data-oid="60eim2q"
              >
                <div className="flex items-center space-x-3" data-oid="ulmq1dl">
                  <div className="text-yellow-400 text-xl" data-oid="m8_-vu2">
                    📁
                  </div>
                  <span className="text-white" data-oid="e29d0-r">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="g9o5n:-">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="-2g1_:v"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="t4qmcar"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid="826902z"
                >
                  <div className="text-gray-400 text-center" data-oid="cakvizx">
                    <div className="text-2xl mb-2" data-oid="j8hr7ex">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="4o-83d_">
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
    <div className="space-y-8" data-oid="dtejsve">
      <div className="futuristic-container p-8" data-oid="x_t.v.0">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="72m6vmp"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="lp8udr_">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="l4q5:-v"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="c9:72se"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="p_eoutr"
              >
                127
              </div>
              <div className="text-gray-400" data-oid="i6:witr">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="1_pns0p"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="vabxm.m"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="bwlr20n">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="g6mosi6"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="7b62q.a"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="_exl8b9">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="48x4m-.">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="igvr8sw"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="ob1kwon">
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
                  data-oid=".:0oql1"
                >
                  <div data-oid="eaidu.8">
                    <div
                      className="text-white font-semibold"
                      data-oid="jnwzncj"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="pmcgjxf">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="._3jyn3">
                    <div className="text-cyan-400" data-oid="nwzf57a">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="d3j8ydz"
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
    <div data-oid="jh:iudz">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="0zjbm:s">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
