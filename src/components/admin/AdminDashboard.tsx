"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="8e09a:o"
    >
      <div className="container mx-auto px-6 py-3" data-oid="u_fed:y">
        <div className="flex space-x-6" data-oid="x426thp">
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
              data-oid="x8gkstm"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="ushbudh">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="cfvakws"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid="g79zv_o"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="rjk-2fu"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="6dxpe_g">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="f25uuai"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="ax92:x6"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="p6ocvkr">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="v-:wfdu"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="buaw68_"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="g1nu_2g"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="nz3x6gj"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="o751hfl"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="9pck..."
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="ts6aefc">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="evhz-79"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="rv.w7.m">
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
              data-oid="ccq_-y0"
            >
              <div className="flex items-center space-x-4" data-oid="xdll1at">
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
                  data-oid="t6pu1er"
                ></div>
                <div data-oid="51-_8lj">
                  <p className="text-white" data-oid="pxm2wl1">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="as9x_g6">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="rfy7vbq">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="9ew-l0i">
      <div className="futuristic-container p-8" data-oid="0p.vael">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="6ceear5"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="2d82zps"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="g:witwy">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid=".146zqp"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="je4k.xo">
              <div data-oid=".d3cq2:">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="vfn1lus"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="94id0s-"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="8ig-w4z"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="0q21h05">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="6.h:389"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="um84:7g">
              <div data-oid="zfyzn3q">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="30:nbsc"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid=".ok4-jo"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="c-nn59f"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="7n.6azk">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="bkrmbbt"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="e_hgvyu">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="_eu.xfg"
            >
              <div data-oid="objgi2p">
                <h4 className="font-semibold text-white" data-oid="8-s_rm:">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="om_q05n">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="5y46lss">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="w128n-d"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="7we7r0k"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="eh4mjk:"
            >
              <div data-oid="n:2zw2l">
                <h4 className="font-semibold text-white" data-oid="f:i72vc">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="i0fz33a">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="ffwxdmk">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="wh3f4nr"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="xx-7cbq"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="gg0y09e">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="zd40r.1">
      <div className="futuristic-container p-8" data-oid="e2xmqkg">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="sm3o6-j"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="ow4j-20"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="h1z8ya2">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="kys0a3v"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="vbf_ad8">
              <div data-oid="b11.8qz">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="qpozmbt"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="hkqmzxv"
                />
              </div>

              <div data-oid="piptuuz">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid=":7eoxyy"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="u1o:rt7">
                  <option data-oid="s41vo.2">Multiple Choice</option>
                  <option data-oid="f14p1uh">True/False</option>
                  <option data-oid="2r5.m7m">Text Input</option>
                  <option data-oid="hsbxu7v">Number Input</option>
                </select>
              </div>

              <div data-oid="hul3ox-">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="4zzd6g_"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="lskx:il"
                >
                  <p className="text-gray-400 mb-4" data-oid="s2:d-4q">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="752816i"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="ugj21_s">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="7fifdpd"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid=":fq35r5"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="2dcct57"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="t8hwi_u">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="fzmk9j9"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid="x9ivg_1"
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
                  data-oid="folsmsm"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="hn7_uoa"
                  >
                    <div data-oid="bwom99l">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="8a4hnar"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid="n42:tje">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="jywqg_f">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="r16qtkp"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="saj9_v:"
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
    <div className="space-y-8" data-oid="s0a:j0z">
      <div className="futuristic-container p-8" data-oid="t8u16xh">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="k:2960q"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="rtpc23c">
          <button className="futuristic-button px-6 py-3" data-oid="j_0r4gd">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="b-pt6nz"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="ym70ncs">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="tjz0_7e"
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
                data-oid="b9a7_:_"
              >
                <div className="flex items-center space-x-3" data-oid="_1:o1ef">
                  <div className="text-yellow-400 text-xl" data-oid="e0x:66o">
                    📁
                  </div>
                  <span className="text-white" data-oid="42hriu9">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="gl674og">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="snuraea"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid=":29_e-2"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid="5__tl8g"
                >
                  <div className="text-gray-400 text-center" data-oid="q7bhlge">
                    <div className="text-2xl mb-2" data-oid="4nme_sl">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="z09f5v:">
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
    <div className="space-y-8" data-oid="wfwuwgs">
      <div className="futuristic-container p-8" data-oid="c3gnj-w">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="kuw:lzr"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="x4oh4r_">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="pudb-qu"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="q07a6p6"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="hcmqes3"
              >
                127
              </div>
              <div className="text-gray-400" data-oid="21u.:j.">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="9zsgk2q"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="c.d4d8k"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="x60wr4g">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="89tfy.s"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="iekr8gu"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="d5_o.fr">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="8oleb8t">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid=":cc56kq"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="4hi1:en">
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
                  data-oid="kdi9sr."
                >
                  <div data-oid="-5b-5-p">
                    <div
                      className="text-white font-semibold"
                      data-oid="sxj7lys"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="pilc59_">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="c-ccx76">
                    <div className="text-cyan-400" data-oid="byitpks">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="05g2_ej"
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
    <div data-oid="pns26k4">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="pe3dzl1">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
