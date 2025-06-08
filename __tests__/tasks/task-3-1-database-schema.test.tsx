import {
  Database,
  Section,
  Template,
  SectionInsert,
  TemplateInsert,
} from "@/types/supabaseDb";

describe("Task 3.1: Supabase Schema Design", () => {
  test("Database type structure is properly defined", () => {
    // Test that the Database type has the expected structure
    const mockDatabase: Database = {
      public: {
        Tables: {
          sections: {
            Row: {
              id: "test-id",
              title: "Test Section",
              description: "Test Description",
              question_type: "multiple_choice",
              options: ["Option 1", "Option 2"],
              code_snippets: { option1: "code1" },
              image_assignments: { option1: "image-id-1" },
              order_index: 0,
              is_active: true,
              created_at: "2025-01-01T00:00:00Z",
              updated_at: "2025-01-01T00:00:00Z",
            },
            Insert: {
              title: "Test Section",
              description: "Test Description",
              question_type: "multiple_choice",
              code_snippets: {},
              order_index: 0,
            },
            Update: {
              title: "Updated Section",
            },
          },
          templates: {
            Row: {
              id: "template-id",
              name: "Test Template",
              description: "Test Template Description",
              master_code: "template code",
              section_ids: ["section-1", "section-2"],
              is_active: true,
              created_at: "2025-01-01T00:00:00Z",
              updated_at: "2025-01-01T00:00:00Z",
            },
            Insert: {
              name: "Test Template",
              description: "Test Template Description",
              master_code: "template code",
              section_ids: [],
            },
            Update: {
              name: "Updated Template",
            },
          },
          user_sessions: {
            Row: {
              id: "session-id",
              template_id: "template-id",
              user_answers: {},
              completed_sections: [],
              generated_code: "",
              progress_state: "not_started",
              created_at: "2025-01-01T00:00:00Z",
              updated_at: "2025-01-01T00:00:00Z",
            },
            Insert: {
              template_id: "template-id",
            },
            Update: {
              progress_state: "completed",
            },
          },
        },
        Views: {},
        Functions: {},
        Enums: {},
        CompositeTypes: {},
      },
    };

    expect(mockDatabase.public.Tables.sections).toBeDefined();
    expect(mockDatabase.public.Tables.templates).toBeDefined();
    expect(mockDatabase.public.Tables.user_sessions).toBeDefined();
  });

  test("Section type includes image_assignments field", () => {
    const mockSection: Section = {
      id: "test-id",
      title: "Test Section",
      description: "Test Description",
      question_type: "multiple_choice",
      options: ["Option 1", "Option 2"],
      code_snippets: { option1: "code1" },
      image_assignments: { option1: "image-id-1" },
      order_index: 0,
      is_active: true,
      created_at: "2025-01-01T00:00:00Z",
      updated_at: "2025-01-01T00:00:00Z",
    };

    expect(mockSection.image_assignments).toBeDefined();
    expect(typeof mockSection.image_assignments).toBe("object");
  });

  test("Question types are properly constrained", () => {
    const validQuestionTypes: Array<Section["question_type"]> = [
      "multiple_choice",
      "text_input",
      "boolean",
      "slider",
    ];

    validQuestionTypes.forEach((type) => {
      const section: Partial<Section> = {
        question_type: type,
      };
      expect(section.question_type).toBe(type);
    });
  });

  test("Template type includes section_ids array", () => {
    const mockTemplate: Template = {
      id: "template-id",
      name: "Test Template",
      description: "Test Description",
      master_code: "template code",
      section_ids: ["section-1", "section-2"],
      is_active: true,
      created_at: "2025-01-01T00:00:00Z",
      updated_at: "2025-01-01T00:00:00Z",
    };

    expect(Array.isArray(mockTemplate.section_ids)).toBe(true);
    expect(mockTemplate.section_ids).toHaveLength(2);
  });

  test("Insert types have proper optional fields", () => {
    const sectionInsert: SectionInsert = {
      title: "Test Section",
      description: "Test Description",
      question_type: "multiple_choice",
      code_snippets: {},
      order_index: 0,
    };

    const templateInsert: TemplateInsert = {
      name: "Test Template",
      description: "Test Description",
      master_code: "code",
      section_ids: [],
    };

    expect(sectionInsert.title).toBeDefined();
    expect(templateInsert.name).toBeDefined();
  });

  test("Progress state enum is properly defined", () => {
    const validProgressStates = [
      "not_started",
      "in_progress",
      "completed",
      "paused",
    ] as const;

    validProgressStates.forEach((state) => {
      const session: Partial<
        Database["public"]["Tables"]["user_sessions"]["Row"]
      > = {
        progress_state: state,
      };
      expect(session.progress_state).toBe(state);
    });
  });
});
