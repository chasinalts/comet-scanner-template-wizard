"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="lr4c.-8"
    >
      <div className="container mx-auto px-6 py-3" data-oid="ov-x-aq">
        <div className="flex space-x-6" data-oid="gojtzf6">
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
              data-oid="e524azf"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="0agefvy">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="p7bj-ht"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid="38633ts"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="r:w9ds_"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="boub496">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="iu.2wx-"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid=".mg.l0a"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="ddx8a3o">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="m_3tf8j"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="opxfyyi"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="ftqp.0o"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="v9tfufc"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="3i9:7u6"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="cjibfvf"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="vivdyv0">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="5jse:bj"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="zv:tcua">
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
              data-oid="2:y8.ye"
            >
              <div className="flex items-center space-x-4" data-oid="3ywr:9a">
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
                  data-oid="jv__2dd"
                ></div>
                <div data-oid="yeazkqc">
                  <p className="text-white" data-oid="k54nvn_">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="c2xbbnc">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="tbh.uu4">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="4dgf.76">
      <div className="futuristic-container p-8" data-oid="kp-xbqu">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="r9jdj1x"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="4f4bj9m"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="pthaf27">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="z37pw:_"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="0:q1jkx">
              <div data-oid="s2nf2cd">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="eht_21v"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="z0rsoce"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="834bl86"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="imdn61_">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="__uu07v"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="rpdo43e">
              <div data-oid="j_yhqn8">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="c0:2gev"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="9lfjo5h"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="a2cvo10"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="0fo5swy">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="y0io7hl"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="jzn.vqz">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="4k2.nyo"
            >
              <div data-oid="qfgeems">
                <h4 className="font-semibold text-white" data-oid=":jpyh7k">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="chko9nq">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="g82zu1h">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="6il0sww"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="kfzyc:7"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="uqa1tgc"
            >
              <div data-oid="hj_pepg">
                <h4 className="font-semibold text-white" data-oid="o:cehi0">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="ucampvi">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="6p8f:c0">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid=".44d3e0"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="46zjz7i"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="x.:xy1n">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="jfqb-gl">
      <div className="futuristic-container p-8" data-oid="05hqvan">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="1c4.srn"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid=".-.y9is"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="p.41xvt">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid=":f0i82d"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="-1z:vcf">
              <div data-oid="h.rz.12">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="er7nl7k"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="uf6yiw6"
                />
              </div>

              <div data-oid="951pz4c">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="0:6e9n8"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="9kp3ydu">
                  <option data-oid="78gaj1s">Multiple Choice</option>
                  <option data-oid="hj34jae">True/False</option>
                  <option data-oid="rs7.gtu">Text Input</option>
                  <option data-oid="56aut9j">Number Input</option>
                </select>
              </div>

              <div data-oid="-ie_kw5">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="z5pwzhk"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="9bmuowj"
                >
                  <p className="text-gray-400 mb-4" data-oid="q9ugh1p">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="z6lcwme"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="tvjcqjd">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="wc-qvhm"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="w5hdoea"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="3g:tjs."
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="c8095k3">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="vaqu:8s"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid="w4lod7j"
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
                  data-oid="4jtowv7"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="vssvxzq"
                  >
                    <div data-oid="1twvwz5">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="dlcnb35"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid="diehazq">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="hpq:72_">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="j3cba6n"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="_fpi2i5"
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
    <div className="space-y-8" data-oid="f1c9edr">
      <div className="futuristic-container p-8" data-oid="m.w4s8r">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="eu59ne3"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="7l-ed:f">
          <button className="futuristic-button px-6 py-3" data-oid="lg5kdwo">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="eq04l:l"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="p:uyu3c">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="z85dhaj"
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
                data-oid="458ocvw"
              >
                <div className="flex items-center space-x-3" data-oid="y0sxfqu">
                  <div className="text-yellow-400 text-xl" data-oid="8wamy:o">
                    📁
                  </div>
                  <span className="text-white" data-oid="sf0kpl.">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="icazua:">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="5wu19ov"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="sl9o-o6"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid="n9k4d4h"
                >
                  <div className="text-gray-400 text-center" data-oid="uv-rhyc">
                    <div className="text-2xl mb-2" data-oid="lqw2c65">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="fj_zvum">
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
    <div className="space-y-8" data-oid="q8oc_2r">
      <div className="futuristic-container p-8" data-oid="kp:u.l_">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="t0llx3n"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="kvj10r7">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="55d7av3"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="pg_4.ui"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="q-1bw4."
              >
                127
              </div>
              <div className="text-gray-400" data-oid="hqwexw0">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="xmgpewb"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="33ton5b"
              >
                23
              </div>
              <div className="text-gray-400" data-oid=".jhayi.">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="rzwo414"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="x67urwp"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="i5w2.b5">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="emlxumc">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="62d0pbx"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="k_x8pgh">
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
                  data-oid="ze.2fpf"
                >
                  <div data-oid=":0dm_f6">
                    <div
                      className="text-white font-semibold"
                      data-oid="tdw032w"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="8rp0:_m">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="anx732r">
                    <div className="text-cyan-400" data-oid="azdera8">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="mzdi1lu"
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
    <div data-oid="jimnal4">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="58.3m2_">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
