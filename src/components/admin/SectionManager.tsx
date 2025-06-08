"use client";

import React, { useState, useEffect } from "react";
import { Section, SectionInsert, SectionUpdate } from "@/types/supabaseDb";
import { supabase } from "@/lib/supabaseClient";

interface SectionManagerProps {
  onSectionUpdate?: () => void;
}

export default function SectionManager({
  onSectionUpdate,
}: SectionManagerProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState<Partial<SectionInsert>>({
    title: "",
    description: "",
    question_type: "multiple_choice",
    options: [],
    code_snippets: {},
    order_index: 0,
    is_active: true,
  });

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("sections")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) throw error;
      setSections(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch sections");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);

      if (editingSection) {
        // Update existing section
        const updateData: SectionUpdate = {
          ...formData,
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("sections")
          .update(updateData)
          .eq("id", editingSection.id);

        if (error) throw error;
      } else {
        // Create new section
        const insertData: SectionInsert = {
          ...(formData as SectionInsert),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase.from("sections").insert([insertData]);

        if (error) throw error;
      }

      // Reset form and refresh data
      resetForm();
      await fetchSections();
      onSectionUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save section");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this section?")) return;

    try {
      setError(null);
      const { error } = await supabase.from("sections").delete().eq("id", id);

      if (error) throw error;
      await fetchSections();
      onSectionUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete section");
    }
  };

  const handleEdit = (section: Section) => {
    setEditingSection(section);
    setFormData({
      title: section.title,
      description: section.description,
      question_type: section.question_type,
      options: section.options,
      code_snippets: section.code_snippets,
      order_index: section.order_index,
      is_active: section.is_active,
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setEditingSection(null);
    setShowCreateForm(false);
    setFormData({
      title: "",
      description: "",
      question_type: "multiple_choice",
      options: [],
      code_snippets: {},
      order_index: sections.length,
      is_active: true,
    });
  };

  const handleOptionsChange = (value: string) => {
    const options = value.split("\n").filter((opt) => opt.trim());
    setFormData({ ...formData, options });
  };

  const handleCodeSnippetsChange = (value: string) => {
    try {
      const codeSnippets = JSON.parse(value);
      setFormData({ ...formData, code_snippets: codeSnippets });
    } catch {
      // Invalid JSON, keep current state
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8" data-oid=".:tduyd">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="t94rc-o"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="lwca27j">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="mk4ze7c">
        <h2 className="text-2xl font-bold text-white" data-oid="y7vq.nq">
          Section Manager
        </h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          data-oid="828h59-"
        >
          Create Section
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="rr84kwo"
        >
          {error}
        </div>
      )}

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div
          className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
          data-oid="wr2w.sk"
        >
          <h3
            className="text-xl font-semibold text-white mb-4"
            data-oid="bzz05ur"
          >
            {editingSection ? "Edit Section" : "Create New Section"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid=":hg265i"
          >
            <div data-oid="ga7h4wr">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="oq-h.km"
              >
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                required
                data-oid="y-e7wcb"
              />
            </div>

            <div data-oid="66z_2h9">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="3-yqukk"
              >
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                rows={3}
                required
                data-oid="b0h-h7i"
              />
            </div>

            <div data-oid=".n4iwan">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="li2_c.g"
              >
                Question Type
              </label>
              <select
                value={formData.question_type}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    question_type: e.target.value as any,
                  })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                data-oid="leolbhl"
              >
                <option value="multiple_choice" data-oid=".wcen8a">
                  Multiple Choice
                </option>
                <option value="text_input" data-oid="qp_bdts">
                  Text Input
                </option>
                <option value="boolean" data-oid="7mbl16-">
                  Boolean
                </option>
                <option value="slider" data-oid="q7jpa06">
                  Slider
                </option>
              </select>
            </div>

            {formData.question_type === "multiple_choice" && (
              <div data-oid="u6:nc9z">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="it-cn6r"
                >
                  Options (one per line)
                </label>
                <textarea
                  value={formData.options?.join("\n") || ""}
                  onChange={(e) => handleOptionsChange(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  rows={4}
                  placeholder="Option 1\nOption 2\nOption 3"
                  data-oid="5c9w0jv"
                />
              </div>
            )}

            <div data-oid="xxa.70h">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="zyblmd8"
              >
                Code Snippets (JSON format)
              </label>
              <textarea
                value={JSON.stringify(formData.code_snippets, null, 2)}
                onChange={(e) => handleCodeSnippetsChange(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                rows={6}
                placeholder='{\n  "option1": "code for option 1",\n  "option2": "code for option 2"\n}'
                data-oid="vnud:.t"
              />
            </div>

            <div data-oid="uhp-mge">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="qqd15.j"
              >
                Order Index
              </label>
              <input
                type="number"
                value={formData.order_index}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    order_index: parseInt(e.target.value),
                  })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                min="0"
                data-oid=":pq8jqc"
              />
            </div>

            <div className="flex items-center" data-oid="w_lb7dh">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
                data-oid="7tjoxae"
              />

              <label
                htmlFor="is_active"
                className="text-cyan-300 text-sm"
                data-oid="-r:wc1k"
              >
                Active
              </label>
            </div>

            <div className="flex space-x-4" data-oid="orgro__">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="26ifhv-"
              >
                {editingSection ? "Update" : "Create"} Section
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="4jfs416"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Sections List */}
      <div className="space-y-4" data-oid="oqkv.u4">
        {sections.length === 0 ? (
          <div className="text-center text-slate-400 py-8" data-oid="68q.ap7">
            No sections found. Create your first section to get started.
          </div>
        ) : (
          sections.map((section) => (
            <div
              key={section.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              data-oid="4m5k:xr"
            >
              <div
                className="flex justify-between items-start"
                data-oid="kp04nfu"
              >
                <div className="flex-1" data-oid="12:2dz.">
                  <div
                    className="flex items-center space-x-2 mb-2"
                    data-oid="mv0zmwd"
                  >
                    <h3
                      className="text-lg font-semibold text-white"
                      data-oid="xncwin_"
                    >
                      {section.title}
                    </h3>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="u9uo49p"
                    >
                      {section.question_type}
                    </span>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="jrzcfhq"
                    >
                      Order: {section.order_index}
                    </span>
                    {!section.is_active && (
                      <span
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded"
                        data-oid="o6_xhef"
                      >
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2" data-oid="r.rwzqw">
                    {section.description}
                  </p>
                  {section.options && section.options.length > 0 && (
                    <div className="text-sm text-slate-400" data-oid="f885rv.">
                      Options: {section.options.join(", ")}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2" data-oid="569kknk">
                  <button
                    onClick={() => handleEdit(section)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="zi65ftm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(section.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="quger_3"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
