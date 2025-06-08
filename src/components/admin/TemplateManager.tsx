"use client";

import React, { useState, useEffect } from "react";
import {
  Template,
  TemplateInsert,
  TemplateUpdate,
  Section,
} from "@/types/supabaseDb";
import { supabase } from "@/lib/supabaseClient";
import ImportExportPanel from "@/components/ImportExportPanel";

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

  const handleImport = async (importedTemplates: Template[]) => {
    try {
      // Import templates to database
      for (const template of importedTemplates) {
        const { id, created_at, updated_at, ...templateData } = template;
        await supabase.from("templates").insert(templateData);
      }
      // Refresh templates list
      await fetchTemplates();
      if (onTemplateUpdate) onTemplateUpdate();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to import templates",
      );
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8" data-oid="_r0268u">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="pta1mdt"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="6.2f6k5">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="mk0f_67">
        <h2 className="text-2xl font-bold text-white" data-oid="t_0vgz:">
          Template Manager
        </h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          data-oid="efhr77m"
        >
          Create Template
        </button>
      </div>

      {/* Import/Export Panel */}
      <ImportExportPanel
        templates={templates}
        onImport={handleImport}
        data-oid="y4dpm16"
      />

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="-cldfnh"
        >
          {error}
        </div>
      )}

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div
          className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
          data-oid="w2p4wj4"
        >
          <h3
            className="text-xl font-semibold text-white mb-4"
            data-oid="b0m0w.7"
          >
            {editingTemplate ? "Edit Template" : "Create New Template"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="h-7dd:f"
          >
            <div data-oid="23yp5ub">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="m_8m7.m"
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
                data-oid="hl:2.u9"
              />
            </div>

            <div data-oid="jb6j9jy">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid=":7_c62f"
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
                data-oid="xiu:.uy"
              />
            </div>

            <div data-oid="p6kb7b0">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="r43yd.e"
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
                data-oid="1:y6p5c"
              />
            </div>

            <div data-oid="163jv1z">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="816oiiz"
              >
                Sections ({formData.section_ids?.length || 0} selected)
              </label>
              <div
                className="bg-slate-700 border border-slate-600 rounded-lg p-4 max-h-60 overflow-y-auto"
                data-oid="b-q0bvs"
              >
                {sections.length === 0 ? (
                  <p className="text-slate-400 text-sm" data-oid="3uxt3h6">
                    No sections available. Create sections first.
                  </p>
                ) : (
                  <div className="space-y-2" data-oid="_nfp91z">
                    {sections.map((section) => (
                      <label
                        key={section.id}
                        className="flex items-center space-x-2 cursor-pointer"
                        data-oid="3f0kv9x"
                      >
                        <input
                          type="checkbox"
                          checked={
                            formData.section_ids?.includes(section.id) || false
                          }
                          onChange={() => handleSectionToggle(section.id)}
                          className="rounded"
                          data-oid="plz8q4k"
                        />

                        <span className="text-white text-sm" data-oid="9_sr8hp">
                          {section.title}
                        </span>
                        <span
                          className="text-xs text-slate-400"
                          data-oid="rk3sqvf"
                        >
                          ({section.question_type})
                        </span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex items-center" data-oid="hoz1_39">
              <input
                type="checkbox"
                id="template_is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
                data-oid="izucc7d"
              />

              <label
                htmlFor="template_is_active"
                className="text-cyan-300 text-sm"
                data-oid="jaad4s1"
              >
                Active
              </label>
            </div>

            <div className="flex space-x-4" data-oid="2szmxh.">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="4.2t89l"
              >
                {editingTemplate ? "Update" : "Create"} Template
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="rrig5ml"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Templates List */}
      <div className="space-y-4" data-oid="ez-wdw5">
        {templates.length === 0 ? (
          <div className="text-center text-slate-400 py-8" data-oid="lwdws4.">
            No templates found. Create your first template to get started.
          </div>
        ) : (
          templates.map((template) => (
            <div
              key={template.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              data-oid="q2l:bf0"
            >
              <div
                className="flex justify-between items-start"
                data-oid="6ocbm0x"
              >
                <div className="flex-1" data-oid="dzy.xfs">
                  <div
                    className="flex items-center space-x-2 mb-2"
                    data-oid="1bour16"
                  >
                    <h3
                      className="text-lg font-semibold text-white"
                      data-oid="n.vxqa9"
                    >
                      {template.name}
                    </h3>
                    {!template.is_active && (
                      <span
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded"
                        data-oid="_j:rk2d"
                      >
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2" data-oid="b_uf2:z">
                    {template.description}
                  </p>
                  <div
                    className="text-sm text-slate-400 space-y-1"
                    data-oid="28__q_9"
                  >
                    <div data-oid="2wysbfn">
                      Sections ({template.section_ids.length}):{" "}
                      {getSectionNames(template.section_ids) || "None"}
                    </div>
                    <div data-oid="hv6woc5">
                      Created:{" "}
                      {new Date(template.created_at).toLocaleDateString()}
                    </div>
                    <div data-oid="m0srqxo">
                      Updated:{" "}
                      {new Date(template.updated_at).toLocaleDateString()}
                    </div>
                  </div>

                  {/* Master Code Preview */}
                  <details className="mt-3" data-oid="4d83y2a">
                    <summary
                      className="text-cyan-300 cursor-pointer text-sm hover:text-cyan-200"
                      data-oid="bzkaov3"
                    >
                      View Master Code
                    </summary>
                    <pre
                      className="mt-2 bg-slate-900 border border-slate-600 rounded p-3 text-xs text-slate-300 overflow-x-auto"
                      data-oid="ynwv.:e"
                    >
                      {template.master_code}
                    </pre>
                  </details>
                </div>
                <div className="flex space-x-2" data-oid="qjaaoi.">
                  <button
                    onClick={() => handleEdit(template)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="seqr_8r"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(template.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="g3jo_71"
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
