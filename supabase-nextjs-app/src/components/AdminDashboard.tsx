"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="hkfp:yu"
    >
      <div className="container mx-auto px-6 py-3" data-oid="lo04koz">
        <div className="flex space-x-6" data-oid="4pjz1ot">
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
              data-oid="dla-r98"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="ioswd84">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="734spwx"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid="gkj.l3z"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="xaza3:7"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid=".3q60:f">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="zhcb8fb"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="2fakipb"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="d1x2.o6">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="al:tpld"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="il1cypv"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="t12bl7z"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="9g_3vwj"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="oqc6rzh"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="f3f4b35"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="fkj:nrz">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="4-b:t36"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="vfxfcpb">
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
              data-oid="-y_66g0"
            >
              <div className="flex items-center space-x-4" data-oid="8s:9jo2">
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
                  data-oid="gawi4yw"
                ></div>
                <div data-oid="nv_k1m-">
                  <p className="text-white" data-oid="i.gd191">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="fpus0qj">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="_q-c-89">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="ry8cw.n">
      <div className="futuristic-container p-8" data-oid="ixkjevr">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="hc5p3v7"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="prdk68r"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="-gol_du">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="bj:m_z3"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="057ewoc">
              <div data-oid="9j43n:q">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="cg1-dny"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="gg9x.5."
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="y:46qvl"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="5028r:s">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid=".w4o_0n"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="cha2-bd">
              <div data-oid="hitu1.e">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="bk7ne:1"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="m-6-bbp"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="hbey:hc"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="af6vcrk">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="l3-tcod"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="g3h37bb">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="a6k57r0"
            >
              <div data-oid="boennv1">
                <h4 className="font-semibold text-white" data-oid="94hf6cb">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="qq10iq7">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="oxkijwz">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="qc_u-ry"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid=":54vf9v"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="p63fs0h"
            >
              <div data-oid="agmruwp">
                <h4 className="font-semibold text-white" data-oid="oeu662q">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="do_96yb">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="q8b4_:9">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="7vfxoup"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="8aya91i"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="ivagvei">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="8t6gx3q">
      <div className="futuristic-container p-8" data-oid="u:46jy:">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="zk:.r02"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="43__pgk"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="u0pnps2">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="0s5d..h"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="3:jgw3x">
              <div data-oid="yqdrhks">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="a_7t2f1"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="9iwtxdu"
                />
              </div>

              <div data-oid="qypmlo2">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="e.xe6wx"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="dl21hd8">
                  <option data-oid="4cmxk-9">Multiple Choice</option>
                  <option data-oid="3ky4-4.">True/False</option>
                  <option data-oid="bfl2emo">Text Input</option>
                  <option data-oid="wx_h1_2">Number Input</option>
                </select>
              </div>

              <div data-oid="n9v-y:0">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="j:6_h_w"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="vz-0p1e"
                >
                  <p className="text-gray-400 mb-4" data-oid="jcn2rv0">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="j5jarb5"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="f.um:ho">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="t60d0zb"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="bca4tpv"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="6gqrn_7"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="w8_4g-k">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="5.4ta.r"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid=":ljkpdh"
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
                  data-oid="2pbrlsb"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="zqv5gio"
                  >
                    <div data-oid="sm6vd8f">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="36u2-3v"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid="_27fwnc">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="54zdwc-">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="l.h-2nt"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="wnk1az_"
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
    <div className="space-y-8" data-oid="weu9fov">
      <div className="futuristic-container p-8" data-oid="i28_10y">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="ezd54vj"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="zq4nak5">
          <button className="futuristic-button px-6 py-3" data-oid="px-krai">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="sysibj-"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="wj0as93">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="4hocq29"
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
                data-oid="6diu5x."
              >
                <div className="flex items-center space-x-3" data-oid=".65z:k:">
                  <div className="text-yellow-400 text-xl" data-oid="e5:qbf9">
                    📁
                  </div>
                  <span className="text-white" data-oid="1-zzwfy">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="xb-0_2p">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="5zh1tm5"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="vqy72u7"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid=":qgeh.w"
                >
                  <div className="text-gray-400 text-center" data-oid="ggyzvly">
                    <div className="text-2xl mb-2" data-oid="kll590p">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="r0hle0c">
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
    <div className="space-y-8" data-oid="yq6rh96">
      <div className="futuristic-container p-8" data-oid="v:eiyj2">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="z4knfpa"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="ft1becx">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="fy4udxu"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid=".:tl0u5"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="gu_hwi3"
              >
                127
              </div>
              <div className="text-gray-400" data-oid="x6mq6td">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="-1o4ad7"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="e:qdad7"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="gqav51-">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="e8_0e47"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="9xfg2y6"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="qkw:xr1">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="qui3itx">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="m2_zdt5"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="tx:x8yr">
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
                  data-oid=".0i34_5"
                >
                  <div data-oid="5a_2s-6">
                    <div
                      className="text-white font-semibold"
                      data-oid="hn7p04y"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="o3di.ip">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="159nbof">
                    <div className="text-cyan-400" data-oid="oqh.q8u">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="1-ysyt2"
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
    <div data-oid="n8uiy7y">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="cy_7242">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
