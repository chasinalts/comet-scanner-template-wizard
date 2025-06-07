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
      <div className="flex items-center justify-center p-8" data-oid="uy:510p">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="ra29.s9"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="ttrc755">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="gltg:1l">
        <h2 className="text-2xl font-bold text-white" data-oid="om:2ket">
          Authentication Manager
        </h2>
        <div className="flex space-x-2" data-oid="utpdfe3">
          {currentUser && (
            <span className="text-sm text-slate-400" data-oid="eanqyqu">
              Logged in as: {currentUser.email}
            </span>
          )}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="_4v::k2"
        >
          {error}
          {error.includes("table not found") && (
            <div className="mt-2 text-sm" data-oid=":rsl_dy">
              <p data-oid="f7tkp.i">SQL to create the user_profiles table:</p>
              <pre
                className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto"
                data-oid="ukwva7q"
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
        data-oid="g084xyk"
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
            data-oid="-y:myr5"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="space-y-4" data-oid="crs-s8e">
          <div className="flex justify-between items-center" data-oid="sgia5:3">
            <h3 className="text-lg font-semibold text-white" data-oid="9ch:eht">
              User Management
            </h3>
            <button
              onClick={() => setShowCreateUser(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
              data-oid="tp1x9xv"
            >
              Create User
            </button>
          </div>

          {/* Create User Form */}
          {showCreateUser && (
            <div
              className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
              data-oid="j0t.jra"
            >
              <h4
                className="text-lg font-semibold text-white mb-4"
                data-oid=":r:0m-:"
              >
                Create New User
              </h4>
              <form
                onSubmit={handleCreateUser}
                className="space-y-4"
                data-oid="xedv9u4"
              >
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  data-oid="fiwz.f4"
                >
                  <div data-oid="b1yd7xs">
                    <label
                      className="block text-cyan-300 text-sm font-medium mb-2"
                      data-oid="_1odt:6"
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
                      data-oid="odpmz81"
                    />
                  </div>
                  <div data-oid="uqplak9">
                    <label
                      className="block text-cyan-300 text-sm font-medium mb-2"
                      data-oid="qa9k561"
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
                      data-oid="b5fr6rd"
                    />
                  </div>
                </div>
                <div data-oid="156h9mx">
                  <label
                    className="block text-cyan-300 text-sm font-medium mb-2"
                    data-oid="b5m1vz6"
                  >
                    Role
                  </label>
                  <select
                    value={newUserData.role}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, role: e.target.value })
                    }
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                    data-oid=":j:jxjd"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role} data-oid="0:wgj8s">
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex space-x-4" data-oid="x:g:akk">
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="w6nwyw0"
                  >
                    Create User
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateUser(false)}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="do_0dv4"
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
            data-oid="u4lqs20"
          >
            <div className="overflow-x-auto" data-oid="m2ee606">
              <table className="w-full" data-oid="rug_jq9">
                <thead className="bg-slate-700" data-oid="sftuz4j">
                  <tr data-oid="q4.71ny">
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="s9ts1uu"
                    >
                      Email
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="7.kfef-"
                    >
                      Role
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="ky4fvmm"
                    >
                      Status
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="tft0m-:"
                    >
                      Last Login
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="-n5qumm"
                    >
                      Created
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="f80:y9t"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700" data-oid="y6xq2s5">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-slate-700/50"
                      data-oid="hoh:0b."
                    >
                      <td className="px-4 py-3 text-white" data-oid="em6fnu-">
                        {user.email}
                      </td>
                      <td className="px-4 py-3" data-oid="hg7.l_z">
                        <select
                          value={user.role}
                          onChange={(e) =>
                            handleUpdateUserRole(user.id, e.target.value)
                          }
                          className="bg-slate-600 border border-slate-500 text-white rounded px-2 py-1 text-sm"
                          data-oid="c6y3q9c"
                        >
                          {roles.map((role) => (
                            <option key={role} value={role} data-oid="6ckki40">
                              {role}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3" data-oid="zqdgx1c">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            user.is_active
                              ? "bg-green-500/20 text-green-300"
                              : "bg-red-500/20 text-red-300"
                          }`}
                          data-oid="k8m_52."
                        >
                          {user.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="j4-br3z"
                      >
                        {user.last_login
                          ? formatDate(user.last_login)
                          : "Never"}
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="c76aece"
                      >
                        {formatDate(user.created_at)}
                      </td>
                      <td className="px-4 py-3" data-oid="3i971:l">
                        <div className="flex space-x-2" data-oid="mp19cph">
                          <button
                            onClick={() =>
                              handleToggleUserStatus(user.id, user.is_active)
                            }
                            className={`px-2 py-1 rounded text-xs transition-colors ${
                              user.is_active
                                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                                : "bg-green-500 hover:bg-green-600 text-white"
                            }`}
                            data-oid="yg-bvj1"
                          >
                            {user.is_active ? "Deactivate" : "Activate"}
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition-colors"
                            data-oid="m8gw2xh"
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
        <div className="space-y-4" data-oid="406a:4t">
          <div className="flex justify-between items-center" data-oid="r6deeq-">
            <h3 className="text-lg font-semibold text-white" data-oid="m8v65un">
              Active Sessions
            </h3>
            <button
              onClick={fetchSessions}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
              data-oid=":zmf35o"
            >
              Refresh
            </button>
          </div>

          <div
            className="bg-slate-800 rounded-lg overflow-hidden"
            data-oid="w6u56qu"
          >
            <div className="overflow-x-auto" data-oid="_lm149t">
              <table className="w-full" data-oid="4w6l9u:">
                <thead className="bg-slate-700" data-oid="f_8-ks6">
                  <tr data-oid="oqe-5eu">
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="nhmdeen"
                    >
                      User ID
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="acn9dnu"
                    >
                      Created
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid=".19iju0"
                    >
                      Expires
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="rp3x16x"
                    >
                      Status
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="a:oepek"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700" data-oid="5avdf5i">
                  {sessions.map((session) => (
                    <tr
                      key={session.id}
                      className="hover:bg-slate-700/50"
                      data-oid=".ep5.:j"
                    >
                      <td
                        className="px-4 py-3 text-white font-mono text-sm"
                        data-oid="q.5f19b"
                      >
                        {session.user_id.substring(0, 8)}...
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="451ua1o"
                      >
                        {formatDate(session.created_at)}
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="2:.4jha"
                      >
                        {formatDate(session.expires_at)}
                      </td>
                      <td className="px-4 py-3" data-oid="24j.41y">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            isExpired(session.expires_at)
                              ? "bg-red-500/20 text-red-300"
                              : "bg-green-500/20 text-green-300"
                          }`}
                          data-oid="0ovxnek"
                        >
                          {isExpired(session.expires_at) ? "Expired" : "Active"}
                        </span>
                      </td>
                      <td className="px-4 py-3" data-oid="0yqp:lw">
                        <button
                          onClick={() => handleInvalidateSession(session.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition-colors"
                          data-oid="k9rtf3t"
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
        <div className="space-y-4" data-oid=":h4.f9w">
          <h3 className="text-lg font-semibold text-white" data-oid="-cl3:fw">
            Authentication Settings
          </h3>

          <div
            className="bg-slate-800 border border-slate-700 rounded-lg p-6"
            data-oid="a:sma7k"
          >
            <h4
              className="text-md font-semibold text-white mb-4"
              data-oid="78523ys"
            >
              Security Configuration
            </h4>

            <div className="space-y-4" data-oid="u6sv_xa">
              <div
                className="flex items-center justify-between"
                data-oid="z7pytgo"
              >
                <div data-oid="55em.lh">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid="e6d._y_"
                  >
                    Require Email Confirmation
                  </label>
                  <p className="text-slate-400 text-sm" data-oid="dnx-icc">
                    Users must confirm their email before accessing the system
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle"
                  data-oid="573ruju"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="hcc6.8d"
              >
                <div data-oid="2rlylgq">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid="b9.bj14"
                  >
                    Enable Two-Factor Authentication
                  </label>
                  <p className="text-slate-400 text-sm" data-oid="9-j01-q">
                    Require 2FA for admin users
                  </p>
                </div>
                <input type="checkbox" className="toggle" data-oid="ik6vvlj" />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="06cnpke"
              >
                <div data-oid="7603m:_">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid="k7qumjk"
                  >
                    Session Timeout (hours)
                  </label>
                  <p className="text-slate-400 text-sm" data-oid="036oh46">
                    Automatically log out inactive users
                  </p>
                </div>
                <input
                  type="number"
                  defaultValue={24}
                  min={1}
                  max={168}
                  className="bg-slate-700 border border-slate-600 text-white rounded px-3 py-1 w-20"
                  data-oid="gw305e9"
                />
              </div>
            </div>

            <div className="mt-6" data-oid=".03g.ab">
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                data-oid="hvk8k67"
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
