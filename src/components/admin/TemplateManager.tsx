"use client";

import React, { useState, useEffect } from "react";
import {
  Template,
  TemplateInsert,
  TemplateUpdate,
  Section,
} from "@/types/supabaseDb";
import { supabase } from "@/lib/supabaseClient";

interface TemplateManagerProps {
  onTemplateUpdate?: () => void;
}

export default function TemplateManager({
  onTemplateUpdate,
}: TemplateManagerProps) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingTemplate, setEditingTemplate] = useState<Template | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState<Partial<TemplateInsert>>({
    name: "",
    description: "",
    master_code: "",
    section_ids: [],
    is_active: true,
  });

  useEffect(() => {
    fetchTemplates();
    fetchSections();
  }, []);

  const fetchTemplates = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("templates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setTemplates(data || []);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch templates",
      );
    } finally {
      setLoading(false);
    }
  };

  const fetchSections = async () => {
    try {
      const { data, error } = await supabase
        .from("sections")
        .select("*")
        .eq("is_active", true)
        .order("order_index", { ascending: true });

      if (error) throw error;
      setSections(data || []);
    } catch (err) {
      console.error("Failed to fetch sections:", err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);

      if (editingTemplate) {
        // Update existing template
        const updateData: TemplateUpdate = {
          ...formData,
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("templates")
          .update(updateData)
          .eq("id", editingTemplate.id);

        if (error) throw error;
      } else {
        // Create new template
        const insertData: TemplateInsert = {
          ...(formData as TemplateInsert),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase.from("templates").insert([insertData]);

        if (error) throw error;
      }

      // Reset form and refresh data
      resetForm();
      await fetchTemplates();
      onTemplateUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save template");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this template?")) return;

    try {
      setError(null);
      const { error } = await supabase.from("templates").delete().eq("id", id);

      if (error) throw error;
      await fetchTemplates();
      onTemplateUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to delete template",
      );
    }
  };

  const handleEdit = (template: Template) => {
    setEditingTemplate(template);
    setFormData({
      name: template.name,
      description: template.description,
      master_code: template.master_code,
      section_ids: template.section_ids,
      is_active: template.is_active,
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setEditingTemplate(null);
    setShowCreateForm(false);
    setFormData({
      name: "",
      description: "",
      master_code: "",
      section_ids: [],
      is_active: true,
    });
  };

  const handleSectionToggle = (sectionId: string) => {
    const currentSections = formData.section_ids || [];
    const newSections = currentSections.includes(sectionId)
      ? currentSections.filter((id) => id !== sectionId)
      : [...currentSections, sectionId];

    setFormData({ ...formData, section_ids: newSections });
  };

  const getSectionNames = (sectionIds: string[]) => {
    return sectionIds
      .map((id) => sections.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(", ");
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8" data-oid="azasg5k">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="ixgfr_i"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="oiwt7w7">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="k8:ff6l">
        <h2 className="text-2xl font-bold text-white" data-oid=":l-b3pe">
          Template Manager
        </h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          data-oid="tb17vrw"
        >
          Create Template
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="1g:n36h"
        >
          {error}
        </div>
      )}

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div
          className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
          data-oid="i:f:s:6"
        >
          <h3
            className="text-xl font-semibold text-white mb-4"
            data-oid="vc7sl5_"
          >
            {editingTemplate ? "Edit Template" : "Create New Template"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="ollj5k."
          >
            <div data-oid="-oq603e">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="pg9vlo_"
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
                data-oid="net:pox"
              />
            </div>

            <div data-oid="d-m37o3">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="be8t-8:"
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
                data-oid="gmz.9z."
              />
            </div>

            <div data-oid="-brt_xd">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="p7csiqp"
              >
                Master Code Template
              </label>
              <textarea
                value={formData.master_code}
                onChange={(e) =>
                  setFormData({ ...formData, master_code: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                rows={10}
                placeholder="Enter your master code template with placeholders like {{SECTION_ID}}..."
                required
                data-oid="akofud0"
              />
            </div>

            <div data-oid="k:502z4">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="or-gchs"
              >
                Sections ({formData.section_ids?.length || 0} selected)
              </label>
              <div
                className="bg-slate-700 border border-slate-600 rounded-lg p-4 max-h-60 overflow-y-auto"
                data-oid="up70_0."
              >
                {sections.length === 0 ? (
                  <p className="text-slate-400 text-sm" data-oid="jb36l0i">
                    No sections available. Create sections first.
                  </p>
                ) : (
                  <div className="space-y-2" data-oid="ctgq4y5">
                    {sections.map((section) => (
                      <label
                        key={section.id}
                        className="flex items-center space-x-2 cursor-pointer"
                        data-oid="hgbjp-z"
                      >
                        <input
                          type="checkbox"
                          checked={
                            formData.section_ids?.includes(section.id) || false
                          }
                          onChange={() => handleSectionToggle(section.id)}
                          className="rounded"
                          data-oid="ch.7pyo"
                        />

                        <span className="text-white text-sm" data-oid="d4k3qv5">
                          {section.title}
                        </span>
                        <span
                          className="text-xs text-slate-400"
                          data-oid="ukbgme3"
                        >
                          ({section.question_type})
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center" data-oid="n0tsk_7">
              <input
                type="checkbox"
                id="template_is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
                data-oid="gkjuysx"
              />

              <label
                htmlFor="template_is_active"
                className="text-cyan-300 text-sm"
                data-oid="a7t_s6y"
              >
                Active
              </label>
            </div>

            <div className="flex space-x-4" data-oid="excp1q-">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid=":kqf915"
              >
                {editingTemplate ? "Update" : "Create"} Template
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="pf-se2."
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Templates List */}
      <div className="space-y-4" data-oid="n.qjm01">
        {templates.length === 0 ? (
          <div className="text-center text-slate-400 py-8" data-oid="oe7dq7r">
            No templates found. Create your first template to get started.
          </div>
        ) : (
          templates.map((template) => (
            <div
              key={template.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              data-oid=".9b_dqk"
            >
              <div
                className="flex justify-between items-start"
                data-oid="-4hny83"
              >
                <div className="flex-1" data-oid="6_6jji7">
                  <div
                    className="flex items-center space-x-2 mb-2"
                    data-oid="-k5o-6m"
                  >
                    <h3
                      className="text-lg font-semibold text-white"
                      data-oid="_tiu8g:"
                    >
                      {template.name}
                    </h3>
                    {!template.is_active && (
                      <span
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded"
                        data-oid="qpmu8mj"
                      >
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2" data-oid="vc3khrx">
                    {template.description}
                  </p>
                  <div
                    className="text-sm text-slate-400 space-y-1"
                    data-oid="-6b-2vb"
                  >
                    <div data-oid="o.mom6y">
                      Sections ({template.section_ids.length}):{" "}
                      {getSectionNames(template.section_ids) || "None"}
                    </div>
                    <div data-oid="wzw4r40">
                      Created:{" "}
                      {new Date(template.created_at).toLocaleDateString()}
                    </div>
                    <div data-oid="q1a4so5">
                      Updated:{" "}
                      {new Date(template.updated_at).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Master Code Preview */}
                  <details className="mt-3" data-oid=":zrisud">
                    <summary
                      className="text-cyan-300 cursor-pointer text-sm hover:text-cyan-200"
                      data-oid="0l8ggvc"
                    >
                      View Master Code
                    </summary>
                    <pre
                      className="mt-2 bg-slate-900 border border-slate-600 rounded p-3 text-xs text-slate-300 overflow-x-auto"
                      data-oid="q2m-6gn"
                    >
                      {template.master_code}
                    </pre>
                  </details>
                </div>
                <div className="flex space-x-2" data-oid="3:vxasd">
                  <button
                    onClick={() => handleEdit(template)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="g-_e7zz"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(template.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="wn9i.rz"
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
