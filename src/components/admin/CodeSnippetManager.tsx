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
      <div className="flex items-center justify-center p-8" data-oid="-fpoilw">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="o7:j7no"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="r0nfv8d">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="j84lj6s">
        <h2 className="text-2xl font-bold text-white" data-oid=".5eefrc">
          Code Snippet Manager
        </h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          data-oid="b_ps8p1"
        >
          Create Snippet
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="5lmnypm"
        >
          {error}
          {error.includes("table not found") && (
            <div className="mt-2 text-sm" data-oid="mcb05jy">
              <p data-oid="8ulrp:e">SQL to create the table:</p>
              <pre
                className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto"
                data-oid="d8-cjra"
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
      <div className="flex space-x-4" data-oid="vb49sbf">
        <div data-oid="n44e3lf">
          <label
            className="block text-cyan-300 text-sm font-medium mb-1"
            data-oid=".eb2chg"
          >
            Category
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
            data-oid="k0dpdkt"
          >
            <option value="all" data-oid="bx5cu9a">
              All Categories
            </option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category} data-oid="o3xk68:">
                {category}
              </option>
            ))}
          </select>
        </div>
        <div data-oid=".q3a_b2">
          <label
            className="block text-cyan-300 text-sm font-medium mb-1"
            data-oid="x7mcwbp"
          >
            Language
          </label>
          <select
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
            className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
            data-oid="ranr-yy"
          >
            <option value="all" data-oid="7zu_xn2">
              All Languages
            </option>
            {uniqueLanguages.map((language) => (
              <option key={language} value={language} data-oid="0_qi9sq">
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
          data-oid="l4qy8is"
        >
          <h3
            className="text-xl font-semibold text-white mb-4"
            data-oid="6dy926u"
          >
            {editingSnippet ? "Edit Code Snippet" : "Create New Code Snippet"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="98da7t8"
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid="9ixkq7l"
            >
              <div data-oid="1r0yfx3">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="0.z0.mf"
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
                  data-oid="np_r0q2"
                />
              </div>

              <div data-oid="a9b8:jm">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="rzbs9k_"
                >
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  data-oid="3dwsd80"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} data-oid="a9fsy8z">
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid="yrl7g64"
            >
              <div data-oid="sy6..-m">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="ewvlpzb"
                >
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  data-oid="q44z_5q"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} data-oid="xn0.489">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div data-oid="10mcbrd">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="amtmh8j"
                >
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags?.join(", ") || ""}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  placeholder="react, hook, utility"
                  data-oid="isgldr0"
                />
              </div>
            </div>

            <div data-oid="7x0bh5w">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="k:2oten"
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
                data-oid="x5_1198"
              />
            </div>

            <div data-oid="6dc88r-">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="-fcujuf"
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
                data-oid="eb7o_qp"
              />
            </div>

            <div className="flex items-center" data-oid="ty24ui1">
              <input
                type="checkbox"
                id="snippet_is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
                data-oid="tegf17a"
              />

              <label
                htmlFor="snippet_is_active"
                className="text-cyan-300 text-sm"
                data-oid="1vz9q8c"
              >
                Active
              </label>
            </div>

            <div className="flex space-x-4" data-oid="klf6dlw">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="fg:ofba"
              >
                {editingSnippet ? "Update" : "Create"} Snippet
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="ah4bfi3"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Snippets List */}
      <div className="space-y-4" data-oid="hlqfpm0">
        {filteredSnippets.length === 0 ? (
          <div className="text-center text-slate-400 py-8" data-oid="_96.ejw">
            {snippets.length === 0
              ? "No code snippets found. Create your first snippet to get started."
              : "No snippets match the current filters."}
          </div>
        ) : (
          filteredSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              data-oid="8.uc0t_"
            >
              <div
                className="flex justify-between items-start mb-3"
                data-oid="a34bb:u"
              >
                <div className="flex-1" data-oid="5uke:bw">
                  <div
                    className="flex items-center space-x-2 mb-2"
                    data-oid="5p9wd46"
                  >
                    <h3
                      className="text-lg font-semibold text-white"
                      data-oid="8z56mfo"
                    >
                      {snippet.name}
                    </h3>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="2h.piw5"
                    >
                      {snippet.language}
                    </span>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="lw2ripa"
                    >
                      {snippet.category}
                    </span>
                    {!snippet.is_active && (
                      <span
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded"
                        data-oid="aj6i7bl"
                      >
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2" data-oid="grtd-2x">
                    {snippet.description}
                  </p>
                  {snippet.tags.length > 0 && (
                    <div
                      className="flex flex-wrap gap-1 mb-2"
                      data-oid="nwhmm6v"
                    >
                      {snippet.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded"
                          data-oid=".ra2nm."
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2" data-oid="frizqty">
                  <button
                    onClick={() => copyToClipboard(snippet.code)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    title="Copy code"
                    data-oid=":i:nwgx"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleEdit(snippet)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="n_ovr6t"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(snippet.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="crmnlhg"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Code Preview */}
              <details data-oid="hbv6okn">
                <summary
                  className="text-cyan-300 cursor-pointer text-sm hover:text-cyan-200 mb-2"
                  data-oid="73z3vvv"
                >
                  View Code
                </summary>
                <pre
                  className="bg-slate-900 border border-slate-600 rounded p-3 text-xs text-slate-300 overflow-x-auto"
                  data-oid="gt-z21r"
                >
                  <code data-oid="i4q19j9">{snippet.code}</code>
                </pre>
              </details>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
