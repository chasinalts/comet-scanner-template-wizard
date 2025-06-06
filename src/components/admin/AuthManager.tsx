'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { User } from '@supabase/supabase-js';

interface UserSession {
  id: string;
  user_id: string;
  session_data: any;
  expires_at: string;
  created_at: string;
  updated_at: string;
}

interface UserProfile {
  id: string;
  email: string;
  role: string;
  is_active: boolean;
  last_login: string | null;
  created_at: string;
}

interface AuthManagerProps {
  onAuthUpdate?: () => void;
}

export default function AuthManager({ onAuthUpdate }: AuthManagerProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [sessions, setSessions] = useState<UserSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'users' | 'sessions' | 'settings'>('users');
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUserData, setNewUserData] = useState({
    email: '',
    password: '',
    role: 'user'
  });

  const roles = ['admin', 'editor', 'user', 'viewer'];

  useEffect(() => {
    getCurrentUser();
    fetchUsers();
    fetchSessions();
  }, []);

  const getCurrentUser = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      setCurrentUser(user);
    } catch (err) {
      console.error('Error getting current user:', err);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      // Note: This assumes a user_profiles table exists. If not, we'll need to create it.
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        if (error.code === '42P01') {
          setError('User profiles table not found. Please create the table first.');
          setUsers([]);
        } else {
          throw error;
        }
      } else {
        setUsers(data || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const fetchSessions = async () => {
    try {
      const { data, error } = await supabase
        .from('user_sessions')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) {
        console.error('Error fetching sessions:', error);
      } else {
        setSessions(data || []);
      }
    } catch (err) {
      console.error('Error fetching sessions:', err);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);
      
      // Create user in Supabase Auth
      const { data, error } = await supabase.auth.admin.createUser({
        email: newUserData.email,
        password: newUserData.password,
        email_confirm: true
      });

      if (error) throw error;

      // Create user profile
      if (data.user) {
        const { error: profileError } = await supabase
          .from('user_profiles')
          .insert([
            {
              id: data.user.id,
              email: newUserData.email,
              role: newUserData.role,
              is_active: true,
              created_at: new Date().toISOString()
            }
          ]);

        if (profileError) {
          console.error('Error creating user profile:', profileError);
        }
      }

      // Reset form and refresh data
      setNewUserData({ email: '', password: '', role: 'user' });
      setShowCreateUser(false);
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create user');
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: string) => {
    try {
      setError(null);
      const { error } = await supabase
        .from('user_profiles')
        .update({ role: newRole })
        .eq('id', userId);

      if (error) throw error;
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user role');
    }
  };

  const handleToggleUserStatus = async (userId: string, isActive: boolean) => {
    try {
      setError(null);
      const { error } = await supabase
        .from('user_profiles')
        .update({ is_active: !isActive })
        .eq('id', userId);

      if (error) throw error;
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update user status');
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (!confirm('Are you sure you want to delete this user? This action cannot be undone.')) return;

    try {
      setError(null);
      
      // Delete from auth (requires admin privileges)
      const { error: authError } = await supabase.auth.admin.deleteUser(userId);
      if (authError) throw authError;

      // Delete user profile
      const { error: profileError } = await supabase
        .from('user_profiles')
        .delete()
        .eq('id', userId);

      if (profileError) {
        console.error('Error deleting user profile:', profileError);
      }

      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete user');
    }
  };

  const handleInvalidateSession = async (sessionId: string) => {
    try {
      setError(null);
      const { error } = await supabase
        .from('user_sessions')
        .delete()
        .eq('id', sessionId);

      if (error) throw error;
      await fetchSessions();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to invalidate session');
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const isExpired = (expiresAt: string) => {
    return new Date(expiresAt) < new Date();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Authentication Manager</h2>
        <div className="flex space-x-2">
          {currentUser && (
            <span className="text-sm text-slate-400">
              Logged in as: {currentUser.email}
            </span>
          )}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
          {error}
          {error.includes('table not found') && (
            <div className="mt-2 text-sm">
              <p>SQL to create the user_profiles table:</p>
              <pre className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto">
{`CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Tabs */}
      <div className="flex space-x-1 bg-slate-800 p-1 rounded-lg">
        {(['users', 'sessions', 'settings'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'bg-cyan-500 text-white'
                : 'text-slate-300 hover:text-white hover:bg-slate-700'
            }`}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">User Management</h3>
            <button
              onClick={() => setShowCreateUser(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Create User
            </button>
          </div>

          {/* Create User Form */}
          {showCreateUser && (
            <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Create New User</h4>
              <form onSubmit={handleCreateUser} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cyan-300 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={newUserData.email}
                      onChange={(e) => setNewUserData({ ...newUserData, email: e.target.value })}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-cyan-300 text-sm font-medium mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={newUserData.password}
                      onChange={(e) => setNewUserData({ ...newUserData, password: e.target.value })}
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                      required
                      minLength={6}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-cyan-300 text-sm font-medium mb-2">
                    Role
                  </label>
                  <select
                    value={newUserData.role}
                    onChange={(e) => setNewUserData({ ...newUserData, role: e.target.value })}
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  >
                    {roles.map(role => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Create User
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateUser(false)}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Users List */}
          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Email</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Role</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Status</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Last Login</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Created</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-slate-700/50">
                      <td className="px-4 py-3 text-white">{user.email}</td>
                      <td className="px-4 py-3">
                        <select
                          value={user.role}
                          onChange={(e) => handleUpdateUserRole(user.id, e.target.value)}
                          className="bg-slate-600 border border-slate-500 text-white rounded px-2 py-1 text-sm"
                        >
                          {roles.map(role => (
                            <option key={role} value={role}>{role}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          user.is_active 
                            ? 'bg-green-500/20 text-green-300' 
                            : 'bg-red-500/20 text-red-300'
                        }`}>
                          {user.is_active ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-slate-300 text-sm">
                        {user.last_login ? formatDate(user.last_login) : 'Never'}
                      </td>
                      <td className="px-4 py-3 text-slate-300 text-sm">
                        {formatDate(user.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleToggleUserStatus(user.id, user.is_active)}
                            className={`px-2 py-1 rounded text-xs transition-colors ${
                              user.is_active
                                ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                                : 'bg-green-500 hover:bg-green-600 text-white'
                            }`}
                          >
                            {user.is_active ? 'Deactivate' : 'Activate'}
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition-colors"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Sessions Tab */}
      {activeTab === 'sessions' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-white">Active Sessions</h3>
            <button
              onClick={fetchSessions}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Refresh
            </button>
          </div>

          <div className="bg-slate-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700">
                  <tr>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">User ID</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Created</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Expires</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Status</th>
                    <th className="px-4 py-3 text-left text-cyan-300 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700">
                  {sessions.map((session) => (
                    <tr key={session.id} className="hover:bg-slate-700/50">
                      <td className="px-4 py-3 text-white font-mono text-sm">
                        {session.user_id.substring(0, 8)}...
                      </td>
                      <td className="px-4 py-3 text-slate-300 text-sm">
                        {formatDate(session.created_at)}
                      </td>
                      <td className="px-4 py-3 text-slate-300 text-sm">
                        {formatDate(session.expires_at)}
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          isExpired(session.expires_at)
                            ? 'bg-red-500/20 text-red-300'
                            : 'bg-green-500/20 text-green-300'
                        }`}>
                          {isExpired(session.expires_at) ? 'Expired' : 'Active'}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleInvalidateSession(session.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition-colors"
                        >
                          Invalidate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === 'settings' && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Authentication Settings</h3>
          
          <div className="bg-slate-800 border border-slate-700 rounded-lg p-6">
            <h4 className="text-md font-semibold text-white mb-4">Security Configuration</h4>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-cyan-300 font-medium">Require Email Confirmation</label>
                  <p className="text-slate-400 text-sm">Users must confirm their email before accessing the system</p>
                </div>
                <input type="checkbox" defaultChecked className="toggle" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-cyan-300 font-medium">Enable Two-Factor Authentication</label>
                  <p className="text-slate-400 text-sm">Require 2FA for admin users</p>
                </div>
                <input type="checkbox" className="toggle" />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-cyan-300 font-medium">Session Timeout (hours)</label>
                  <p className="text-slate-400 text-sm">Automatically log out inactive users</p>
                </div>
                <input 
                  type="number" 
                  defaultValue={24} 
                  min={1} 
                  max={168}
                  className="bg-slate-700 border border-slate-600 text-white rounded px-3 py-1 w-20"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors">
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}