"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="2_jdyc4"
    >
      <div className="container mx-auto px-6 py-3" data-oid="sqy:nwi">
        <div className="flex space-x-6" data-oid="ef:pio2">
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
              data-oid="nqkhiw0"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid="zt0dl54">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="wnrnmmv"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid=".32zwhl"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="9:wsj00"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="6l37pp_">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="0a0.62j"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="4_eh:xf"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="0miuhmu">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="f6kpusb"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="jdmt_pt"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="mkqq:.s"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="bk6cbnu"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="6qu3yvc"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="l7nvtvq"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid="jy4ik5u">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="f7wggld"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="2u3fnxs">
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
              data-oid="bt7ijb8"
            >
              <div className="flex items-center space-x-4" data-oid="3djfskg">
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
                  data-oid="xbsr:4k"
                ></div>
                <div data-oid="oi7bieg">
                  <p className="text-white" data-oid="jq8lm_f">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="wyj4dcs">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="370.gh0">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="qth--.a">
      <div className="futuristic-container p-8" data-oid="61fv_20">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="sdhnqv9"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="qg8sl.z"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="dx4pz0h">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="3wcon8n"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="qjj10bx">
              <div data-oid="9x:83qi">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="4vlq47r"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="cbpl-b1"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="s5hhs8i"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid="k3o38.o">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="0t1o_km"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="bvalsik">
              <div data-oid="qotm9eb">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="fvykkgv"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="2.nrw48"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="lgyeqfc"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="c.gh:eo">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="5od6j-e"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="hhqqpai">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="mk-6vi8"
            >
              <div data-oid="h2vkk_k">
                <h4 className="font-semibold text-white" data-oid="jimjrda">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="9eliq57">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="aqrgc-r">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid=".x3hnsv"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="jiwafg:"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="z1dhg:c"
            >
              <div data-oid="_o0:f5a">
                <h4 className="font-semibold text-white" data-oid="n15_vbt">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="wtiai60">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="vzhs88i">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="6fnis25"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid=".p59ue:"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid="fxswy_5">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="-_sdz8w">
      <div className="futuristic-container p-8" data-oid="xr4l0c.">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="lhpw_h2"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="29:25uf"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="-g7c96o">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="24nvsju"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="9-yjl:o">
              <div data-oid="_.w00f3">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="dj9s9rb"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="f8csr5b"
                />
              </div>

              <div data-oid="q80xwzh">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="l5bf8yr"
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="xhvp:ww">
                  <option data-oid=".d::me.">Multiple Choice</option>
                  <option data-oid="g5kp0hy">True/False</option>
                  <option data-oid="ue98h_r">Text Input</option>
                  <option data-oid="8qdk.2i">Number Input</option>
                </select>
              </div>

              <div data-oid="t705qa:">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="e2u14eg"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="rd2ioz_"
                >
                  <p className="text-gray-400 mb-4" data-oid="l2h9uhe">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="x_rob-4"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="ddm9prf">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="uxdr1yz"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="w3rqsnt"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="mp_al-v"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="cbb_mx-">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="zd3gnk6"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid=".6_ivps"
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
                  data-oid="z-6xk2."
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="pju:oyw"
                  >
                    <div data-oid="2xmscvo">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="0qz33re"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid="dkd00v8">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="q:1glyh">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="f5kaho9"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="tmoflp3"
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
    <div className="space-y-8" data-oid="v07:o4n">
      <div className="futuristic-container p-8" data-oid="aylbdev">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="qy6xndp"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="10.dyh.">
          <button className="futuristic-button px-6 py-3" data-oid="g2dlifd">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="_zzqq9c"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="ppzli:c">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="j40aqne"
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
                data-oid="3pctybw"
              >
                <div className="flex items-center space-x-3" data-oid="fouh0ew">
                  <div className="text-yellow-400 text-xl" data-oid="b.7tg5k">
                    📁
                  </div>
                  <span className="text-white" data-oid="-83x0hf">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="fulfciw">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="4tzd7lu"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="hrz7p.6"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid="-6g:6ty"
                >
                  <div className="text-gray-400 text-center" data-oid="pqcp2v4">
                    <div className="text-2xl mb-2" data-oid="h3:ew6w">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="bgpg78b">
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
    <div className="space-y-8" data-oid="y6s:7uy">
      <div className="futuristic-container p-8" data-oid="wjmnk:6">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="127cn04"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="cfrotv8">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="b1p0:dk"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="773u.:r"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="n_fxrn."
              >
                127
              </div>
              <div className="text-gray-400" data-oid="1v7t.k0">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="c0adbz:"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="fuosq58"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="6jgm8_y">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="m_dgbkl"
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="5ad-:e9"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="wzo0y02">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="5a_4dt3">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="yy6kcng"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="cw6qp_d">
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
                  data-oid="e1vak_0"
                >
                  <div data-oid="pdz-k_5">
                    <div
                      className="text-white font-semibold"
                      data-oid="0:jl_aj"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="c4t65kz">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="3hx-mzm">
                    <div className="text-cyan-400" data-oid=":ug_uqd">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="_tkct4u"
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
    <div data-oid="39ltvpy">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="5d6tk23">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
