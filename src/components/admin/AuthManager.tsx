"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

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
  const [activeTab, setActiveTab] = useState<"users" | "sessions" | "settings">(
    "users",
  );
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUserData, setNewUserData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const roles = ["admin", "editor", "user", "viewer"];

  useEffect(() => {
    getCurrentUser();
    fetchUsers();
    fetchSessions();
  }, []);

  const getCurrentUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrentUser(user);
    } catch (err) {
      console.error("Error getting current user:", err);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      // Note: This assumes a user_profiles table exists. If not, we'll need to create it.
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        if (error.code === "42P01") {
          setError(
            "User profiles table not found. Please create the table first.",
          );
          setUsers([]);
        } else {
          throw error;
        }
      } else {
        setUsers(data || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const fetchSessions = async () => {
    try {
      const { data, error } = await supabase
        .from("user_sessions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

      if (error) {
        console.error("Error fetching sessions:", error);
      } else {
        setSessions(data || []);
      }
    } catch (err) {
      console.error("Error fetching sessions:", err);
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
        email_confirm: true,
      });

      if (error) throw error;

      // Create user profile
      if (data.user) {
        const { error: profileError } = await supabase
          .from("user_profiles")
          .insert([
            {
              id: data.user.id,
              email: newUserData.email,
              role: newUserData.role,
              is_active: true,
              created_at: new Date().toISOString(),
            },
          ]);

        if (profileError) {
          console.error("Error creating user profile:", profileError);
        }
      }

      // Reset form and refresh data
      setNewUserData({ email: "", password: "", role: "user" });
      setShowCreateUser(false);
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create user");
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: string) => {
    try {
      setError(null);
      const { error } = await supabase
        .from("user_profiles")
        .update({ role: newRole })
        .eq("id", userId);

      if (error) throw error;
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update user role",
      );
    }
  };

  const handleToggleUserStatus = async (userId: string, isActive: boolean) => {
    try {
      setError(null);
      const { error } = await supabase
        .from("user_profiles")
        .update({ is_active: !isActive })
        .eq("id", userId);

      if (error) throw error;
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update user status",
      );
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this user? This action cannot be undone.",
      )
    )
      return;

    try {
      setError(null);

      // Delete from auth (requires admin privileges)
      const { error: authError } = await supabase.auth.admin.deleteUser(userId);
      if (authError) throw authError;

      // Delete user profile
      const { error: profileError } = await supabase
        .from("user_profiles")
        .delete()
        .eq("id", userId);

      if (profileError) {
        console.error("Error deleting user profile:", profileError);
      }

      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete user");
    }
  };

  const handleInvalidateSession = async (sessionId: string) => {
    try {
      setError(null);
      const { error } = await supabase
        .from("user_sessions")
        .delete()
        .eq("id", sessionId);

      if (error) throw error;
      await fetchSessions();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to invalidate session",
      );
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
      <div className="flex items-center justify-center p-8" data-oid="jzjlvuw">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="y:gm:x2"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="80ao7m.">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="ebve5dy">
        <h2 className="text-2xl font-bold text-white" data-oid="sajv.zl">
          Authentication Manager
        </h2>
        <div className="flex space-x-2" data-oid="4ci3wxt">
          {currentUser && (
            <span className="text-sm text-slate-400" data-oid=":594v.r">
              Logged in as: {currentUser.email}
            </span>
          )}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="gerw57:"
        >
          {error}
          {error.includes("table not found") && (
            <div className="mt-2 text-sm" data-oid="p1v7hmq">
              <p data-oid="uz6aw_l">SQL to create the user_profiles table:</p>
              <pre
                className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto"
                data-oid="k0tq:0w"
              >
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
      <div
        className="flex space-x-1 bg-slate-800 p-1 rounded-lg"
        data-oid="gvg64ut"
      >
        {(["users", "sessions", "settings"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-cyan-500 text-white"
                : "text-slate-300 hover:text-white hover:bg-slate-700"
            }`}
            data-oid="n0x853-"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="space-y-4" data-oid="ciodkyb">
          <div className="flex justify-between items-center" data-oid="f7nx_xe">
            <h3 className="text-lg font-semibold text-white" data-oid="kobpk7k">
              User Management
            </h3>
            <button
              onClick={() => setShowCreateUser(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
              data-oid="6syh_q_"
            >
              Create User
            </button>
          </div>

          {/* Create User Form */}
          {showCreateUser && (
            <div
              className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
              data-oid="y73jzxh"
            >
              <h4
                className="text-lg font-semibold text-white mb-4"
                data-oid="wp1im0x"
              >
                Create New User
              </h4>
              <form
                onSubmit={handleCreateUser}
                className="space-y-4"
                data-oid="lazfoys"
              >
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  data-oid="3caw:.0"
                >
                  <div data-oid="akqtozb">
                    <label
                      className="block text-cyan-300 text-sm font-medium mb-2"
                      data-oid="v6pirgx"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={newUserData.email}
                      onChange={(e) =>
                        setNewUserData({
                          ...newUserData,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                      required
                      data-oid="e3gybyt"
                    />
                  </div>
                  <div data-oid="1vcklnk">
                    <label
                      className="block text-cyan-300 text-sm font-medium mb-2"
                      data-oid="d.oug4h"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={newUserData.password}
                      onChange={(e) =>
                        setNewUserData({
                          ...newUserData,
                          password: e.target.value,
                        })
                      }
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                      required
                      minLength={6}
                      data-oid="zhmp.un"
                    />
                  </div>
                </div>
                <div data-oid="pnxu0j0">
                  <label
                    className="block text-cyan-300 text-sm font-medium mb-2"
                    data-oid="_mvj-:7"
                  >
                    Role
                  </label>
                  <select
                    value={newUserData.role}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, role: e.target.value })
                    }
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                    data-oid="og4jr5d"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role} data-oid="_4w-7o2">
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex space-x-4" data-oid="ph5-g51">
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="_q8ax16"
                  >
                    Create User
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateUser(false)}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="nzia85x"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Users List */}
          <div
            className="bg-slate-800 rounded-lg overflow-hidden"
            data-oid="kxgz_u2"
          >
            <div className="overflow-x-auto" data-oid="tslom66">
              <table className="w-full" data-oid="1v:4:fs">
                <thead className="bg-slate-700" data-oid="fw877di">
                  <tr data-oid="d7j2ts7">
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="-d:x7:z"
                    >
                      Email
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="refnv9c"
                    >
                      Role
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="z24:r6h"
                    >
                      Status
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="mbd080_"
                    >
                      Last Login
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="mnvw_rv"
                    >
                      Created
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="9ink1o6"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700" data-oid="rix8g8f">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-slate-700/50"
                      data-oid="rkuxc.j"
                    >
                      <td className="px-4 py-3 text-white" data-oid="cyapdzh">
                        {user.email}
                      </td>
                      <td className="px-4 py-3" data-oid="q9txkfz">
                        <select
                          value={user.role}
                          onChange={(e) =>
                            handleUpdateUserRole(user.id, e.target.value)
                          }
                          className="bg-slate-600 border border-slate-500 text-white rounded px-2 py-1 text-sm"
                          data-oid="j7-nam8"
                        >
                          {roles.map((role) => (
                            <option key={role} value={role} data-oid="f0qjzvy">
                              {role}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3" data-oid="4hcmtcq">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            user.is_active
                              ? "bg-green-500/20 text-green-300"
                              : "bg-red-500/20 text-red-300"
                          }`}
                          data-oid="oox5mt-"
                        >
                          {user.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="usbab_5"
                      >
                        {user.last_login
                          ? formatDate(user.last_login)
                          : "Never"}
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="g8d3lhv"
                      >
                        {formatDate(user.created_at)}
                      </td>
                      <td className="px-4 py-3" data-oid="fjps:dj">
                        <div className="flex space-x-2" data-oid="3fp3xq_">
                          <button
                            onClick={() =>
                              handleToggleUserStatus(user.id, user.is_active)
                            }
                            className={`px-2 py-1 rounded text-xs transition-colors ${
                              user.is_active
                                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                                : "bg-green-500 hover:bg-green-600 text-white"
                            }`}
                            data-oid="b0t63ws"
                          >
                            {user.is_active ? "Deactivate" : "Activate"}
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition-colors"
                            data-oid="qgry-16"
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
      {activeTab === "sessions" && (
        <div className="space-y-4" data-oid="_76qzvo">
          <div className="flex justify-between items-center" data-oid="izwb2dw">
            <h3 className="text-lg font-semibold text-white" data-oid="cn9ozl_">
              Active Sessions
            </h3>
            <button
              onClick={fetchSessions}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
              data-oid="_:sd:8q"
            >
              Refresh
            </button>
          </div>

          <div
            className="bg-slate-800 rounded-lg overflow-hidden"
            data-oid="si6iky7"
          >
            <div className="overflow-x-auto" data-oid="ctp7.tr">
              <table className="w-full" data-oid="m9ixq8f">
                <thead className="bg-slate-700" data-oid="q61-jo-">
                  <tr data-oid="9bf:tq6">
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid=".fw:_l8"
                    >
                      User ID
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="7tia-1z"
                    >
                      Created
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="df5rw47"
                    >
                      Expires
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="pc69s4."
                    >
                      Status
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="d8-eggn"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700" data-oid="7e101l8">
                  {sessions.map((session) => (
                    <tr
                      key={session.id}
                      className="hover:bg-slate-700/50"
                      data-oid="766hcdp"
                    >
                      <td
                        className="px-4 py-3 text-white font-mono text-sm"
                        data-oid="51fl2qg"
                      >
                        {session.user_id.substring(0, 8)}...
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="ll2j:dc"
                      >
                        {formatDate(session.created_at)}
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="c2rsqfe"
                      >
                        {formatDate(session.expires_at)}
                      </td>
                      <td className="px-4 py-3" data-oid="gs-tgax">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            isExpired(session.expires_at)
                              ? "bg-red-500/20 text-red-300"
                              : "bg-green-500/20 text-green-300"
                          }`}
                          data-oid="ajorihe"
                        >
                          {isExpired(session.expires_at) ? "Expired" : "Active"}
                        </span>
                      </td>
                      <td className="px-4 py-3" data-oid="wji.q49">
                        <button
                          onClick={() => handleInvalidateSession(session.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition-colors"
                          data-oid="pu67p8c"
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
      {activeTab === "settings" && (
        <div className="space-y-4" data-oid="ihereg_">
          <h3 className="text-lg font-semibold text-white" data-oid="2f3sjjb">
            Authentication Settings
          </h3>

          <div
            className="bg-slate-800 border border-slate-700 rounded-lg p-6"
            data-oid=".39fl58"
          >
            <h4
              className="text-md font-semibold text-white mb-4"
              data-oid="2cj7la8"
            >
              Security Configuration
            </h4>

            <div className="space-y-4" data-oid="6.qa6_r">
              <div
                className="flex items-center justify-between"
                data-oid="1bxbaht"
              >
                <div data-oid="t:8bnvn">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid="6:5z711"
                  >
                    Require Email Confirmation
                  </label>
                  <p className="text-slate-400 text-sm" data-oid="f8oj--p">
                    Users must confirm their email before accessing the system
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle"
                  data-oid="so3j:ka"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="1zyz:69"
              >
                <div data-oid="7ijnyaf">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid="4-3nn.g"
                  >
                    Enable Two-Factor Authentication
                  </label>
                  <p className="text-slate-400 text-sm" data-oid="ncsjdh-">
                    Require 2FA for admin users
                  </p>
                </div>
                <input type="checkbox" className="toggle" data-oid="b3mh:tb" />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="g7-bf79"
              >
                <div data-oid="5nv.d9s">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid="ki3p2c-"
                  >
                    Session Timeout (hours)
                  </label>
                  <p className="text-slate-400 text-sm" data-oid="rfr4d_g">
                    Automatically log out inactive users
                  </p>
                </div>
                <input
                  type="number"
                  defaultValue={24}
                  min={1}
                  max={168}
                  className="bg-slate-700 border border-slate-600 text-white rounded px-3 py-1 w-20"
                  data-oid="v.hfnp."
                />
              </div>
            </div>

            <div className="mt-6" data-oid="ywnh5v9">
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                data-oid="_m_ja38"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
