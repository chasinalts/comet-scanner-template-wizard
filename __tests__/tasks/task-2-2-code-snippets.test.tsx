import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CodeSnippetManager from "@/components/admin/CodeSnippetManager";

describe("Task 2.2: Code Snippet Management", () => {
  test("CodeSnippetManager renders correctly", () => {
    render(<CodeSnippetManager data-oid="d73rl2l" />);

    expect(screen.getByText("Code Snippet Manager")).toBeInTheDocument();
    expect(screen.getByText("Create Snippet")).toBeInTheDocument();
  });

  test("Filter controls are present", () => {
    render(<CodeSnippetManager data-oid="5w704zj" />);

    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Language")).toBeInTheDocument();
    expect(screen.getByDisplayValue("All Categories")).toBeInTheDocument();
    expect(screen.getByDisplayValue("All Languages")).toBeInTheDocument();
  });

  test("Create snippet form appears when button clicked", () => {
    render(<CodeSnippetManager data-oid="rkd4v69" />);

    const createButton = screen.getByText("Create Snippet");
    fireEvent.click(createButton);

    expect(screen.getByText("Create New Code Snippet")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Language")).toBeInTheDocument();
    expect(screen.getByLabelText("Category")).toBeInTheDocument();
    expect(screen.getByLabelText("Code")).toBeInTheDocument();
  });

  test("Language options are available", () => {
    render(<CodeSnippetManager data-oid="c-zv_kb" />);

    const createButton = screen.getByText("Create Snippet");
    fireEvent.click(createButton);

    const languageSelect = screen.getByDisplayValue("javascript");
    expect(languageSelect).toBeInTheDocument();

    // Test some language options
    fireEvent.change(languageSelect, { target: { value: "typescript" } });
    expect(languageSelect.value).toBe("typescript");
  });

  test("Category options are available", () => {
    render(<CodeSnippetManager data-oid="ifi9z3m" />);

    const createButton = screen.getByText("Create Snippet");
    fireEvent.click(createButton);

    const categorySelect = screen.getByDisplayValue("utility");
    expect(categorySelect).toBeInTheDocument();

    // Test category change
    fireEvent.change(categorySelect, { target: { value: "component" } });
    expect(categorySelect.value).toBe("component");
  });

  test("Shows table creation SQL when table not found", async () => {
    // Mock error response for missing table
    const mockSupabase = require("@/lib/supabaseClient").supabase;
    mockSupabase.from.mockReturnValue({
      select: jest.fn(() => ({
        order: jest.fn(() =>
          Promise.resolve({
            data: null,
            error: {
              code: "42P01",
              message: 'relation "code_snippets" does not exist',
            },
          }),
        ),
      })),
    });

    render(<CodeSnippetManager data-oid="p..ohn7" />);

    await waitFor(() => {
      expect(
        screen.getByText(/Code snippets table not found/),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/CREATE TABLE code_snippets/),
      ).toBeInTheDocument();
    });
  });

  test("Tags input handles comma-separated values", () => {
    render(<CodeSnippetManager data-oid="3wie5uq" />);

    const createButton = screen.getByText("Create Snippet");
    fireEvent.click(createButton);

    const tagsInput = screen.getByPlaceholderText("react, hook, utility");
    expect(tagsInput).toBeInTheDocument();

    fireEvent.change(tagsInput, {
      target: { value: "react, typescript, component" },
    });
    expect(tagsInput.value).toBe("react, typescript, component");
  });
});
