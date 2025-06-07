"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav
      className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20"
      data-oid="klr7u2v"
    >
      <div className="container mx-auto px-6 py-3" data-oid="5ubhhls">
        <div className="flex space-x-6" data-oid="6:juiac">
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
              data-oid="yvnq1.o"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8" data-oid=".4ktc.j">
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        data-oid="q_yti:e"
      >
        {/* Stats Cards */}
        <div
          className="futuristic-container p-6 text-center"
          data-oid="t37mjlf"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
            data-oid="xwa:iwd"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400" data-oid="ftgt.u5">
            3
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="za63:tk"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
            data-oid="liib:-z"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400" data-oid="3c5pifl">
            127
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="w91m0wh"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
            data-oid="lcml71w"
          >
            Questions Created
          </h3>
          <div
            className="text-3xl font-bold text-purple-400"
            data-oid="vk.6-w9"
          >
            45
          </div>
        </div>

        <div
          className="futuristic-container p-6 text-center"
          data-oid="sb1z5o2"
        >
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Media Files"
            data-oid="qgburif"
          >
            Media Files
          </h3>
          <div
            className="text-3xl font-bold text-yellow-400"
            data-oid="24zwsth"
          >
            89
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8" data-oid=":bly7ye">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
          data-oid="hirxq8g"
        >
          Recent Activity
        </h2>
        <div className="space-y-4" data-oid="7c_bf1:">
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
              data-oid="yh30kiw"
            >
              <div className="flex items-center space-x-4" data-oid="p7es-n-">
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
                  data-oid="y9nw-bg"
                ></div>
                <div data-oid="bzklfr2">
                  <p className="text-white" data-oid="m-yygtf">
                    {activity.action}
                  </p>
                  <p className="text-gray-400 text-sm" data-oid="g:25.k-">
                    by {activity.user}
                  </p>
                </div>
              </div>
              <span className="text-gray-400 text-sm" data-oid="9c7a2z3">
                {activity.time}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8" data-oid="k.ohxee">
      <div className="futuristic-container p-8" data-oid="gwtg2s_">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
          data-oid="6i3x2iw"
        >
          Template Builder Dashboard
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="pu9u_jf"
        >
          {/* Master Template Upload */}
          <div className="space-y-6" data-oid="bptdddb">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="qy9fgap"
            >
              Master Template
            </h3>
            <div className="space-y-4" data-oid="069c4bq">
              <div data-oid="g.hkau2">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="cfk5s3l"
                >
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                  data-oid="h8z7zro"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="lpf43-7"
              >
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6" data-oid=".6sah8h">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="igzrk5x"
            >
              Base Code
            </h3>
            <div className="space-y-4" data-oid="2lclb.x">
              <div data-oid="n18vlii">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="vv6ju40"
                >
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                  data-oid="l_hn3vo"
                />
              </div>
              <button
                className="futuristic-button px-6 py-3"
                data-oid="w5mc.5b"
              >
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8" data-oid="xi2qxki">
          <h3
            className="text-xl font-semibold text-cyan-300 mb-4"
            data-oid="6xfapiu"
          >
            Code Snippets
          </h3>
          <div className="space-y-4" data-oid="03rz8..">
            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="hf23d:1"
            >
              <div data-oid="z2:tz2g">
                <h4 className="font-semibold text-white" data-oid="lqn2ct.">
                  RSI Condition
                </h4>
                <p className="text-gray-400 text-sm" data-oid="7c00bwf">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2" data-oid="ejs2san">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="3r436x2"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="zxs_ede"
                >
                  Delete
                </button>
              </div>
            </div>

            <div
              className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600"
              data-oid="m5ir0i2"
            >
              <div data-oid=":r41mc2">
                <h4 className="font-semibold text-white" data-oid="st.tu.5">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm" data-oid="7o1satg">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2" data-oid="6v2i-xd">
                <button
                  className="futuristic-button px-3 py-1 text-sm"
                  data-oid="k-zdnci"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                  data-oid="sgy2hnl"
                >
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3" data-oid=":d3dvny">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8" data-oid="0rpvrtn">
      <div className="futuristic-container p-8" data-oid=":5jk0vi">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
          data-oid="58gan7y"
        >
          Visual Question Designer
        </h2>

        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          data-oid="nyv83ly"
        >
          {/* Question Creation */}
          <div className="space-y-6" data-oid="c72hx2.">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="ykw3i6u"
            >
              Create New Question
            </h3>

            <div className="space-y-4" data-oid="p5u9zn_">
              <div data-oid="cw._i9i">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="grl8tcf"
                >
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                  data-oid="gis1dub"
                />
              </div>

              <div data-oid="b_n2y1x">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="r.sk..."
                >
                  Question Type
                </label>
                <select className="futuristic-input w-full" data-oid="n0q_2cr">
                  <option data-oid="lvfnow3">Multiple Choice</option>
                  <option data-oid="3qp_va9">True/False</option>
                  <option data-oid=":w47234">Text Input</option>
                  <option data-oid="3whsn.n">Number Input</option>
                </select>
              </div>

              <div data-oid="179ii2q">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="y-jj08d"
                >
                  Preview Image
                </label>
                <div
                  className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center"
                  data-oid="h8w8qgy"
                >
                  <p className="text-gray-400 mb-4" data-oid="57a-w9u">
                    Upload image showing chart effect
                  </p>
                  <button
                    className="futuristic-button px-4 py-2"
                    data-oid="ngkelho"
                  >
                    Choose Image
                  </button>
                </div>
              </div>

              <div data-oid="vqbupiw">
                <label
                  className="block text-cyan-300 font-semibold mb-2"
                  data-oid="gyx3cm7"
                >
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                  data-oid="3f7rz2p"
                />
              </div>

              <button
                className="futuristic-button px-6 py-3"
                data-oid="uk3zil8"
              >
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6" data-oid="vzjlj24">
            <h3
              className="text-xl font-semibold text-cyan-300"
              data-oid="dlq5w1b"
            >
              Existing Questions
            </h3>

            <div
              className="space-y-4 max-h-96 overflow-y-auto"
              data-oid="e6sw8sl"
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
                  data-oid="unfzayb"
                >
                  <div
                    className="flex items-start justify-between"
                    data-oid="l3.5hfu"
                  >
                    <div data-oid="vkmx1yz">
                      <h4
                        className="font-semibold text-white mb-1"
                        data-oid="q5p1tr6"
                      >
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm" data-oid=":33pv-w">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2" data-oid="k-:ihna">
                      <button
                        className="futuristic-button px-3 py-1 text-sm"
                        data-oid="6rraxl7"
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50"
                        data-oid="thay_z0"
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
    <div className="space-y-8" data-oid="h2nd753">
      <div className="futuristic-container p-8" data-oid="2jr5uft">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
          data-oid="aenmtob"
        >
          Media Library
        </h2>

        <div className="mb-6" data-oid="k157-0z">
          <button className="futuristic-button px-6 py-3" data-oid=":3tc.21">
            + Upload New Media
          </button>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          data-oid="1m7zxkp"
        >
          {/* Media folders */}
          <div className="space-y-4" data-oid="41wmimu">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="ru8d4bl"
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
                data-oid="dpjgc1u"
              >
                <div className="flex items-center space-x-3" data-oid="v2d2--4">
                  <div className="text-yellow-400 text-xl" data-oid="7pggf6i">
                    📁
                  </div>
                  <span className="text-white" data-oid="sgpmtyr">
                    {folder}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4" data-oid="3a45xx3">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="--7rp38"
            >
              Recent Uploads
            </h3>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
              data-oid="t8dz9_."
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                  data-oid="vzequs6"
                >
                  <div className="text-gray-400 text-center" data-oid="u:.xm7t">
                    <div className="text-2xl mb-2" data-oid=":plkepj">
                      🖼️
                    </div>
                    <div className="text-xs" data-oid="_.qwkbz">
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
    <div className="space-y-8" data-oid="5fgpga9">
      <div className="futuristic-container p-8" data-oid="glp9n4b">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
          data-oid="7efk4t9"
        >
          User Management
        </h2>

        <div className="space-y-6" data-oid="9bbw:0n">
          {/* User stats */}
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-oid="w3out85"
          >
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="txfi-cj"
            >
              <div
                className="text-2xl font-bold text-green-400"
                data-oid="wzk8bmj"
              >
                127
              </div>
              <div className="text-gray-400" data-oid="ty15_6i">
                Total Users
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="8m-hys_"
            >
              <div
                className="text-2xl font-bold text-cyan-400"
                data-oid="j5x6esm"
              >
                23
              </div>
              <div className="text-gray-400" data-oid="0_fmgfa">
                Active Today
              </div>
            </div>
            <div
              className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center"
              data-oid="r9vn4o."
            >
              <div
                className="text-2xl font-bold text-purple-400"
                data-oid="4e_rjhl"
              >
                89
              </div>
              <div className="text-gray-400" data-oid="mpbxis-">
                Templates Created
              </div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4" data-oid="5y6.3b.">
            <h3
              className="text-lg font-semibold text-cyan-300"
              data-oid="4gh32mk"
            >
              Recent Users
            </h3>
            <div className="space-y-2" data-oid="013n5f_">
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
                  data-oid="-rwl5gs"
                >
                  <div data-oid="gyl4zsk">
                    <div
                      className="text-white font-semibold"
                      data-oid=".4k9yrx"
                    >
                      {user.email}
                    </div>
                    <div className="text-gray-400 text-sm" data-oid="5b0jkb4">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right" data-oid="m8d.-ei">
                    <div className="text-cyan-400" data-oid="h6x_sap">
                      {user.templates} templates
                    </div>
                    <button
                      className="text-red-400 hover:text-red-300 text-sm"
                      data-oid="to5:xs0"
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
    <div data-oid="f9lqsp4">
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8" data-oid="7hiajmn">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
