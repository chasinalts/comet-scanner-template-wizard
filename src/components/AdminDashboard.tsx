'use client';

import React, { useState } from 'react';
import SectionManager from './admin/SectionManager';
import TemplateManager from './admin/TemplateManager';
import CodeSnippetManager from './admin/CodeSnippetManager';
import AuthManager from './admin/AuthManager';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [stats, setStats] = useState({
    totalTemplates: 0,
    activeSections: 0,
    totalUsers: 0,
    codeSnippets: 0
  });

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'sections', label: 'Sections', icon: '📝' },
    { id: 'templates', label: 'Templates', icon: '📄' },
    { id: 'snippets', label: 'Code Snippets', icon: '💻' },
    { id: 'auth', label: 'Authentication', icon: '🔐' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  const handleDataUpdate = () => {
    // This function can be called by child components to trigger a refresh
    // For now, we'll just log it, but you could implement actual stats fetching here
    console.log('Data updated, refreshing stats...');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-cyan-400 mb-2">Admin Dashboard</h1>
          <p className="text-slate-300">Manage templates, sections, code snippets, and system settings</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-1 bg-slate-800 p-1 rounded-lg mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-800 rounded-lg p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">System Overview</h2>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Total Templates</h3>
                      <p className="text-3xl font-bold">{stats.totalTemplates}</p>
                    </div>
                    <div className="text-3xl">📄</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-green-400 mb-2">Active Sections</h3>
                      <p className="text-3xl font-bold">{stats.activeSections}</p>
                    </div>
                    <div className="text-3xl">📝</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-purple-400 mb-2">Code Snippets</h3>
                      <p className="text-3xl font-bold">{stats.codeSnippets}</p>
                    </div>
                    <div className="text-3xl">💻</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 p-6 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-orange-400 mb-2">Total Users</h3>
                      <p className="text-3xl font-bold">{stats.totalUsers}</p>
                    </div>
                    <div className="text-3xl">👥</div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <button
                  onClick={() => setActiveTab('sections')}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                >
                  <h4 className="font-semibold text-cyan-400 mb-2">Manage Sections</h4>
                  <p className="text-slate-300 text-sm">Create and organize template sections</p>
                </button>
                
                <button
                  onClick={() => setActiveTab('templates')}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                >
                  <h4 className="font-semibold text-cyan-400 mb-2">Manage Templates</h4>
                  <p className="text-slate-300 text-sm">Create and edit code templates</p>
                </button>
                
                <button
                  onClick={() => setActiveTab('snippets')}
                  className="bg-slate-700 hover:bg-slate-600 border border-slate-600 hover:border-cyan-500/50 p-4 rounded-lg transition-all text-left"
                >
                  <h4 className="font-semibold text-cyan-400 mb-2">Code Snippets</h4>
                  <p className="text-slate-300 text-sm">Manage reusable code snippets</p>
                </button>
              </div>

              {/* System Status */}
              <div className="mt-8 bg-slate-700 border border-slate-600 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4">System Status</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-300">Database: <span className="text-green-400 font-semibold">Connected</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-300">API: <span className="text-green-400 font-semibold">Online</span></span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-300">Storage: <span className="text-green-400 font-semibold">Available</span></span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'sections' && (
            <SectionManager onSectionUpdate={handleDataUpdate} />
          )}

          {activeTab === 'templates' && (
            <TemplateManager onTemplateUpdate={handleDataUpdate} />
          )}

          {activeTab === 'snippets' && (
            <CodeSnippetManager onSnippetUpdate={handleDataUpdate} />
          )}

          {activeTab === 'auth' && (
            <AuthManager onAuthUpdate={handleDataUpdate} />
          )}

          {activeTab === 'settings' && (
            <div>
              <h2 className="text-2xl font-bold mb-6">System Settings</h2>
              
              <div className="space-y-6">
                {/* General Settings */}
                <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">General Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-cyan-300 font-medium">Enable Live Preview</label>
                        <p className="text-slate-400 text-sm">Allow real-time template preview</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-cyan-300 font-medium">Auto-save Templates</label>
                        <p className="text-slate-400 text-sm">Automatically save template changes</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-cyan-300 font-medium">Enable Syntax Highlighting</label>
                        <p className="text-slate-400 text-sm">Highlight code syntax in templates</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                  </div>
                </div>

                {/* Performance Settings */}
                <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Performance Settings</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-cyan-300 font-medium">Cache Templates</label>
                        <p className="text-slate-400 text-sm">Cache frequently used templates</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-cyan-300 font-medium">Lazy Load Components</label>
                        <p className="text-slate-400 text-sm">Load components only when needed</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                  </div>
                </div>

                {/* Backup Settings */}
                <div className="bg-slate-700 border border-slate-600 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Backup & Export</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-cyan-300 font-medium">Auto Backup</label>
                        <p className="text-slate-400 text-sm">Automatically backup data daily</p>
                      </div>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    
                    <div className="flex space-x-4 mt-4">
                      <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors">
                        Export All Data
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
                        Create Backup
                      </button>
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors">
                        Import Data
                      </button>
                    </div>
                  </div>
                </div>

                {/* Save Settings */}
                <div className="flex justify-end">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors">
                    Save All Settings
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
