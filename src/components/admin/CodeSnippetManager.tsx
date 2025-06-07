"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface CodeSnippet {
  id: string;
  name: string;
  description: string;
  code: string;
  language: string;
  category: string;
  tags: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface CodeSnippetInsert {
  name: string;
  description: string;
  code: string;
  language: string;
  category: string;
  tags: string[];
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

interface CodeSnippetManagerProps {
  onSnippetUpdate?: () => void;
}

export default function CodeSnippetManager({
  onSnippetUpdate,
}: CodeSnippetManagerProps) {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingSnippet, setEditingSnippet] = useState<CodeSnippet | null>(
    null,
  );
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterLanguage, setFilterLanguage] = useState<string>("all");
  const [formData, setFormData] = useState<Partial<CodeSnippetInsert>>({
    name: "",
    description: "",
    code: "",
    language: "javascript",
    category: "utility",
    tags: [],
    is_active: true,
  });

  const categories = [
    "utility",
    "component",
    "hook",
    "api",
    "styling",
    "configuration",
    "other",
  ];

  const languages = [
    "javascript",
    "typescript",
    "html",
    "css",
    "json",
    "python",
    "bash",
    "sql",
  ];

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = async () => {
    try {
      setLoading(true);
      // Note: This assumes a code_snippets table exists. If not, we'll need to create it.
      const { data, error } = await supabase
        .from("code_snippets")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        // If table doesn't exist, we'll show a message
        if (error.code === "42P01") {
          setError(
            "Code snippets table not found. Please create the table first.",
          );
          setSnippets([]);
        } else {
          throw error;
        }
      } else {
        setSnippets(data || []);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch code snippets",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);

      if (editingSnippet) {
        // Update existing snippet
        const updateData = {
          ...formData,
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("code_snippets")
          .update(updateData)
          .eq("id", editingSnippet.id);

        if (error) throw error;
      } else {
        // Create new snippet
        const insertData: CodeSnippetInsert = {
          ...(formData as CodeSnippetInsert),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("code_snippets")
          .insert([insertData]);

        if (error) throw error;
      }

      // Reset form and refresh data
      resetForm();
      await fetchSnippets();
      onSnippetUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save code snippet",
      );
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this code snippet?")) return;

    try {
      setError(null);
      const { error } = await supabase
        .from("code_snippets")
        .delete()
        .eq("id", id);

      if (error) throw error;
      await fetchSnippets();
      onSnippetUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to delete code snippet",
      );
    }
  };

  const handleEdit = (snippet: CodeSnippet) => {
    setEditingSnippet(snippet);
    setFormData({
      name: snippet.name,
      description: snippet.description,
      code: snippet.code,
      language: snippet.language,
      category: snippet.category,
      tags: snippet.tags,
      is_active: snippet.is_active,
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setEditingSnippet(null);
    setShowCreateForm(false);
    setFormData({
      name: "",
      description: "",
      code: "",
      language: "javascript",
      category: "utility",
      tags: [],
      is_active: true,
    });
  };

  const handleTagsChange = (value: string) => {
    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    setFormData({ ...formData, tags });
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const filteredSnippets = snippets.filter((snippet) => {
    const categoryMatch =
      filterCategory === "all" || snippet.category === filterCategory;
    const languageMatch =
      filterLanguage === "all" || snippet.language === filterLanguage;
    return categoryMatch && languageMatch;
  });

  const uniqueCategories = [...new Set(snippets.map((s) => s.category))];
  const uniqueLanguages = [...new Set(snippets.map((s) => s.language))];

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8" data-oid="572x_05">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="q88my0n"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="3:uyav3">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="woa4ka4">
        <h2 className="text-2xl font-bold text-white" data-oid="3939.la">
          Code Snippet Manager
        </h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          data-oid="71hvabp"
        >
          Create Snippet
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="jsq9gqg"
        >
          {error}
          {error.includes("table not found") && (
            <div className="mt-2 text-sm" data-oid="gu_qci5">
              <p data-oid="ghqf8mj">SQL to create the table:</p>
              <pre
                className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto"
                data-oid=".nlm:sz"
              >
                {`CREATE TABLE code_snippets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  code TEXT NOT NULL,
  language TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Filters */}
      <div className="flex space-x-4" data-oid="8w2bkm5">
        <div data-oid="1kxg3cb">
          <label
            className="block text-cyan-300 text-sm font-medium mb-1"
            data-oid="db6voi8"
          >
            Category
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
            data-oid="6.fn8hx"
          >
            <option value="all" data-oid="1rh1irf">
              All Categories
            </option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category} data-oid="zn0-r_o">
                {category}
              </option>
            ))}
          </select>
        </div>
        <div data-oid="_.c5z.k">
          <label
            className="block text-cyan-300 text-sm font-medium mb-1"
            data-oid="vjb.gxi"
          >
            Language
          </label>
          <select
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
            className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
            data-oid="080:rhh"
          >
            <option value="all" data-oid="4313jue">
              All Languages
            </option>
            {uniqueLanguages.map((language) => (
              <option key={language} value={language} data-oid="f:oni3z">
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div
          className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
          data-oid="-_efa-n"
        >
          <h3
            className="text-xl font-semibold text-white mb-4"
            data-oid="itpndvj"
          >
            {editingSnippet ? "Edit Code Snippet" : "Create New Code Snippet"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="qg4xqi4"
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid="t39_2i0"
            >
              <div data-oid="-f1tdll">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="0:ys57m"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  required
                  data-oid="_qo-mn."
                />
              </div>

              <div data-oid="sshmt-d">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="zejzz9o"
                >
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  data-oid="aw.hd_2"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} data-oid="-pyrsoz">
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid=".esxkl7"
            >
              <div data-oid="6vsb_xa">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="ni939b8"
                >
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  data-oid="hxwnopr"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} data-oid="9ruv9vt">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div data-oid="w6gm8px">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="z2f1m_u"
                >
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags?.join(", ") || ""}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  placeholder="react, hook, utility"
                  data-oid="80:c917"
                />
              </div>
            </div>

            <div data-oid="_5l6ci4">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="lz9xfuu"
              >
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                rows={2}
                required
                data-oid="mg.1716"
              />
            </div>

            <div data-oid="gg22fbp">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="io-o0pd"
              >
                Code
              </label>
              <textarea
                value={formData.code}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                rows={10}
                required
                data-oid="dxjtceb"
              />
            </div>

            <div className="flex items-center" data-oid="q2j.a1i">
              <input
                type="checkbox"
                id="snippet_is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
                data-oid="e0epqoh"
              />

              <label
                htmlFor="snippet_is_active"
                className="text-cyan-300 text-sm"
                data-oid="xjeu427"
              >
                Active
              </label>
            </div>

            <div className="flex space-x-4" data-oid="6k::-yl">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="9rbqf9d"
              >
                {editingSnippet ? "Update" : "Create"} Snippet
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="irezsxc"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Snippets List */}
      <div className="space-y-4" data-oid="nn6xs:y">
        {filteredSnippets.length === 0 ? (
          <div className="text-center text-slate-400 py-8" data-oid="2k6a_z5">
            {snippets.length === 0
              ? "No code snippets found. Create your first snippet to get started."
              : "No snippets match the current filters."}
          </div>
        ) : (
          filteredSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              data-oid="zcy_zht"
            >
              <div
                className="flex justify-between items-start mb-3"
                data-oid="8h9yfck"
              >
                <div className="flex-1" data-oid=".ajajv3">
                  <div
                    className="flex items-center space-x-2 mb-2"
                    data-oid="wffrjn5"
                  >
                    <h3
                      className="text-lg font-semibold text-white"
                      data-oid="s:zgxz4"
                    >
                      {snippet.name}
                    </h3>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="4kuwv1g"
                    >
                      {snippet.language}
                    </span>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="xgl.3ix"
                    >
                      {snippet.category}
                    </span>
                    {!snippet.is_active && (
                      <span
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded"
                        data-oid="rii04.w"
                      >
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2" data-oid="ysm3p83">
                    {snippet.description}
                  </p>
                  {snippet.tags.length > 0 && (
                    <div
                      className="flex flex-wrap gap-1 mb-2"
                      data-oid="1fyyokd"
                    >
                      {snippet.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded"
                          data-oid="05_jxjf"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2" data-oid="zp3g:30">
                  <button
                    onClick={() => copyToClipboard(snippet.code)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    title="Copy code"
                    data-oid="-ny_y5j"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleEdit(snippet)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="kr_c1cb"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(snippet.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid=".v-b2i5"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Code Preview */}
              <details data-oid="855rame">
                <summary
                  className="text-cyan-300 cursor-pointer text-sm hover:text-cyan-200 mb-2"
                  data-oid="ouyt5-w"
                >
                  View Code
                </summary>
                <pre
                  className="bg-slate-900 border border-slate-600 rounded p-3 text-xs text-slate-300 overflow-x-auto"
                  data-oid="gtvbow."
                >
                  <code data-oid="xz:2c60">{snippet.code}</code>
                </pre>
              </details>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
