"use client";

import { useState } from "react";

type AdminView = "overview" | "templates" | "questions" | "media" | "users";

export default function AdminDashboard() {
  const [currentView, setCurrentView] = useState<AdminView>("overview");

  const renderNavigation = () => (
    <nav className="bg-slate-800 bg-opacity-40 backdrop-blur-sm border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-3">
        <div className="flex space-x-6">
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
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );

  const renderOverview = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stats Cards */}
        <div className="futuristic-container p-6 text-center">
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Total Templates"
          >
            Total Templates
          </h3>
          <div className="text-3xl font-bold text-cyan-400">3</div>
        </div>

        <div className="futuristic-container p-6 text-center">
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Active Users"
          >
            Active Users
          </h3>
          <div className="text-3xl font-bold text-green-400">127</div>
        </div>

        <div className="futuristic-container p-6 text-center">
          <h3
            className="holographic-text text-lg mb-2"
            data-text="Questions Created"
          >
            Questions Created
          </h3>
          <div className="text-3xl font-bold text-purple-400">45</div>
        </div>

        <div className="futuristic-container p-6 text-center">
          <h3 className="holographic-text text-lg mb-2" data-text="Media Files">
            Media Files
          </h3>
          <div className="text-3xl font-bold text-yellow-400">89</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="futuristic-container p-8">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Recent Activity"
        >
          Recent Activity
        </h2>
        <div className="space-y-4">
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
            >
              <div className="flex items-center space-x-4">
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
                ></div>
                <div>
                  <p className="text-white">{activity.action}</p>
                  <p className="text-gray-400 text-sm">by {activity.user}</p>
                </div>
              </div>
              <span className="text-gray-400 text-sm">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTemplateBuilder = () => (
    <div className="space-y-8">
      <div className="futuristic-container p-8">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Template Builder Dashboard"
        >
          Template Builder Dashboard
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Master Template Upload */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-300">
              Master Template
            </h3>
            <div className="space-y-4">
              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Upload Complete Pine Script Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Paste your complete Pine Script code here..."
                />
              </div>
              <button className="futuristic-button px-6 py-3">
                Save Master Template
              </button>
            </div>
          </div>

          {/* Base Code */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-300">Base Code</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Code Included in Every Template
                </label>
                <textarea
                  className="futuristic-input w-full h-40"
                  placeholder="Enter base code that appears in every generated template..."
                />
              </div>
              <button className="futuristic-button px-6 py-3">
                Save Base Code
              </button>
            </div>
          </div>
        </div>

        {/* Code Snippets */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold text-cyan-300 mb-4">
            Code Snippets
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600">
              <div>
                <h4 className="font-semibold text-white">RSI Condition</h4>
                <p className="text-gray-400 text-sm">
                  Adds RSI-based filtering logic
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="futuristic-button px-3 py-1 text-sm">
                  Edit
                </button>
                <button className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50">
                  Delete
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded border border-slate-600">
              <div>
                <h4 className="font-semibold text-white">
                  Volume Spike Detection
                </h4>
                <p className="text-gray-400 text-sm">
                  Identifies unusual volume activity
                </p>
              </div>
              <div className="flex space-x-2">
                <button className="futuristic-button px-3 py-1 text-sm">
                  Edit
                </button>
                <button className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50">
                  Delete
                </button>
              </div>
            </div>

            <button className="futuristic-button px-6 py-3">
              + Add New Code Snippet
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderQuestionDesigner = () => (
    <div className="space-y-8">
      <div className="futuristic-container p-8">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Visual Question Designer"
        >
          Visual Question Designer
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Question Creation */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-300">
              Create New Question
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Question Text
                </label>
                <input
                  type="text"
                  className="futuristic-input w-full"
                  placeholder="Enter your question..."
                />
              </div>

              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Question Type
                </label>
                <select className="futuristic-input w-full">
                  <option>Multiple Choice</option>
                  <option>True/False</option>
                  <option>Text Input</option>
                  <option>Number Input</option>
                </select>
              </div>

              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Preview Image
                </label>
                <div className="border-2 border-dashed border-cyan-500/50 rounded-lg p-8 text-center">
                  <p className="text-gray-400 mb-4">
                    Upload image showing chart effect
                  </p>
                  <button className="futuristic-button px-4 py-2">
                    Choose Image
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-cyan-300 font-semibold mb-2">
                  Associated Code
                </label>
                <textarea
                  className="futuristic-input w-full h-32"
                  placeholder="Enter Pine Script code for this answer choice..."
                />
              </div>

              <button className="futuristic-button px-6 py-3">
                Create Question
              </button>
            </div>
          </div>

          {/* Existing Questions */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-cyan-300">
              Existing Questions
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto">
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
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        {question.text}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {question.type} • {question.answers} answer(s)
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="futuristic-button px-3 py-1 text-sm">
                        Edit
                      </button>
                      <button className="bg-red-500/20 text-red-300 px-3 py-1 rounded text-sm border border-red-500/50">
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
    <div className="space-y-8">
      <div className="futuristic-container p-8">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="Media Library"
        >
          Media Library
        </h2>

        <div className="mb-6">
          <button className="futuristic-button px-6 py-3">
            + Upload New Media
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Media folders */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-300">Folders</h3>
            {[
              "Banners",
              "Gallery Images",
              "Question Previews",
              "Chart Examples",
            ].map((folder) => (
              <div
                key={folder}
                className="p-4 bg-slate-800/50 rounded border border-slate-600 cursor-pointer hover:border-cyan-500/50 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-yellow-400 text-xl">📁</div>
                  <span className="text-white">{folder}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Recent uploads */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-cyan-300">
              Recent Uploads
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-square bg-slate-800/50 rounded border border-slate-600 flex items-center justify-center"
                >
                  <div className="text-gray-400 text-center">
                    <div className="text-2xl mb-2">🖼️</div>
                    <div className="text-xs">Image {index + 1}</div>
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
    <div className="space-y-8">
      <div className="futuristic-container p-8">
        <h2
          className="holographic-subtitle text-2xl mb-6"
          data-text="User Management"
        >
          User Management
        </h2>

        <div className="space-y-6">
          {/* User stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center">
              <div className="text-2xl font-bold text-green-400">127</div>
              <div className="text-gray-400">Total Users</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center">
              <div className="text-2xl font-bold text-cyan-400">23</div>
              <div className="text-gray-400">Active Today</div>
            </div>
            <div className="p-4 bg-slate-800/50 rounded border border-slate-600 text-center">
              <div className="text-2xl font-bold text-purple-400">89</div>
              <div className="text-gray-400">Templates Created</div>
            </div>
          </div>

          {/* User list */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-cyan-300">
              Recent Users
            </h3>
            <div className="space-y-2">
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
                >
                  <div>
                    <div className="text-white font-semibold">{user.email}</div>
                    <div className="text-gray-400 text-sm">
                      Last active: {user.lastActive}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400">
                      {user.templates} templates
                    </div>
                    <button className="text-red-400 hover:text-red-300 text-sm">
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
    <div>
      {renderNavigation()}

      <main className="container mx-auto px-6 py-8">
        {currentView === "overview" && renderOverview()}
        {currentView === "templates" && renderTemplateBuilder()}
        {currentView === "questions" && renderQuestionDesigner()}
        {currentView === "media" && renderMediaLibrary()}
        {currentView === "users" && renderUserManagement()}
      </main>
    </div>
  );
}
