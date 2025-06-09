import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SectionManager from "@/components/admin/SectionManager";

describe("Task 2.4: Wizard Configuration Interface", () => {
  test("SectionManager renders correctly", () => {
    render(<SectionManager data-oid="hll5dke" />);

    expect(screen.getByText("Section Manager")).toBeInTheDocument();
    expect(screen.getByText("Create Section")).toBeInTheDocument();
  });

  test("Create section form appears when button clicked", () => {
    render(<SectionManager data-oid="nhk_wsc" />);

    const createButton = screen.getByText("Create Section");
    fireEvent.click(createButton);

    expect(screen.getByText("Create New Section")).toBeInTheDocument();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Question Type")).toBeInTheDocument();
    expect(screen.getByLabelText("Order Index")).toBeInTheDocument();
  });

  test("Question type options are available", () => {
    render(<SectionManager data-oid="jjn-sl6" />);

    const createButton = screen.getByText("Create Section");
    fireEvent.click(createButton);

    const questionTypeSelect = screen.getByDisplayValue("multiple_choice");
    expect(questionTypeSelect).toBeInTheDocument();

    // Test question type options
    const expectedTypes = [
      "multiple_choice",
      "text_input",
      "boolean",
      "slider",
    ];

    expectedTypes.forEach((type) => {
      fireEvent.change(questionTypeSelect, { target: { value: type } });
      expect(questionTypeSelect.value).toBe(type);
    });
  });

  test("Options textarea appears for multiple choice questions", () => {
    render(<SectionManager data-oid="r.:o7_3" />);

    const createButton = screen.getByText("Create Section");
    fireEvent.click(createButton);

    // Should show options textarea for multiple choice (default)
    expect(screen.getByLabelText("Options (one per line)")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Option 1\nOption 2\nOption 3"),
    ).toBeInTheDocument();
  });

  test("Code snippets JSON editor is present", () => {
    render(<SectionManager data-oid="t4zggvv" />);

    const createButton = screen.getByText("Create Section");
    fireEvent.click(createButton);

    const codeSnippetsTextarea = screen.getByLabelText(
      "Code Snippets (JSON format)",
    );
    expect(codeSnippetsTextarea).toBeInTheDocument();
    expect(codeSnippetsTextarea).toHaveClass("font-mono");
  });

  test("Image assignments section appears for multiple choice", async () => {
    render(<SectionManager data-oid="jt:qdss" />);

    const createButton = screen.getByText("Create Section");
    fireEvent.click(createButton);

    // Add some options first
    const optionsTextarea = screen.getByLabelText("Options (one per line)");
    fireEvent.change(optionsTextarea, {
      target: { value: "Option 1\nOption 2\nOption 3" },
    });

    await waitFor(() => {
      expect(screen.getByText("Image Assignments")).toBeInTheDocument();
    });
  });

  test("Order index is numeric and configurable", () => {
    render(<SectionManager data-oid="8u67_-z" />);

    const createButton = screen.getByText("Create Section");
    fireEvent.click(createButton);

    const orderInput = screen.getByLabelText("Order Index");
    expect(orderInput).toBeInTheDocument();
    expect(orderInput).toHaveAttribute("type", "number");
    expect(orderInput).toHaveAttribute("min", "0");
  });

  test("Active checkbox is present", () => {
    render(<SectionManager data-oid="y.tv26k" />);

    const createButton = screen.getByText("Create Section");
    fireEvent.click(createButton);

    const activeCheckbox = screen.getByLabelText("Active");
    expect(activeCheckbox).toBeInTheDocument();
    expect(activeCheckbox).toHaveAttribute("type", "checkbox");
    expect(activeCheckbox).toBeChecked(); // Should be checked by default
  });

  test("Form validation requires title and description", () => {
    render(<SectionManager data-oid="7skkzyi" />);

    const createButton = screen.getByText("Create Section");
    fireEvent.click(createButton);

    const titleInput = screen.getByLabelText("Title");
    const descriptionInput = screen.getByLabelText("Description");

    expect(titleInput).toHaveAttribute("required");
    expect(descriptionInput).toHaveAttribute("required");
  });
});
