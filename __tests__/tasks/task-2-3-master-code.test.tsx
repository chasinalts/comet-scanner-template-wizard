import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import MasterCodeManager from "@/components/admin/MasterCodeManager";

describe("Task 2.3: Master Code Repository", () => {
  test("MasterCodeManager renders correctly", () => {
    render(<MasterCodeManager />);

    expect(screen.getByText("Master Code Repository")).toBeInTheDocument();
    expect(screen.getByText("Copy Full Master Code")).toBeInTheDocument();
    expect(screen.getByText("Add Code Block")).toBeInTheDocument();
  });

  test("Filter by category works", () => {
    render(<MasterCodeManager />);

    const filterSelect = screen.getByDisplayValue("All Categories");
    expect(filterSelect).toBeInTheDocument();

    fireEvent.change(filterSelect, { target: { value: "core" } });
    expect(filterSelect.value).toBe("core");
  });

  test("Create code block form appears when button clicked", () => {
    render(<MasterCodeManager />);

    const addButton = screen.getByText("Add Code Block");
    fireEvent.click(addButton);

    expect(screen.getByText("Create New Code Block")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Category")).toBeInTheDocument();
    expect(screen.getByLabelText("Order Index")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Dependencies (comma-separated)"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText("PineScript Code")).toBeInTheDocument();
  });

  test("Category options are predefined", () => {
    render(<MasterCodeManager />);

    const addButton = screen.getByText("Add Code Block");
    fireEvent.click(addButton);

    const categorySelect = screen.getByDisplayValue("core");
    expect(categorySelect).toBeInTheDocument();

    // Test category options
    const expectedCategories = [
      "core",
      "indicators",
      "alerts",
      "plotting",
      "inputs",
      "calculations",
      "conditions",
      "utilities",
    ];

    expectedCategories.forEach((category) => {
      fireEvent.change(categorySelect, { target: { value: category } });
      expect(categorySelect.value).toBe(category);
    });
  });

  test("Dependencies input handles comma-separated values", () => {
    render(<MasterCodeManager />);

    const addButton = screen.getByText("Add Code Block");
    fireEvent.click(addButton);

    const depsInput = screen.getByPlaceholderText("block1, block2, block3");
    expect(depsInput).toBeInTheDocument();

    fireEvent.change(depsInput, {
      target: { value: "core_init, variables, functions" },
    });
    expect(depsInput.value).toBe("core_init, variables, functions");
  });

  test("Order index is numeric input", () => {
    render(<MasterCodeManager />);

    const addButton = screen.getByText("Add Code Block");
    fireEvent.click(addButton);

    const orderInput = screen.getByLabelText("Order Index");
    expect(orderInput).toBeInTheDocument();
    expect(orderInput).toHaveAttribute("type", "number");
    expect(orderInput).toHaveAttribute("min", "0");
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
              message: 'relation "master_code_blocks" does not exist',
            },
          }),
        ),
      })),
    });

    render(<MasterCodeManager />);

    await waitFor(() => {
      expect(
        screen.getByText(/Master code blocks table not found/),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/CREATE TABLE master_code_blocks/),
      ).toBeInTheDocument();
    });
  });

  test("Copy full master code button is functional", () => {
    // Mock clipboard API
    const mockWriteText = jest.fn();
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });

    render(<MasterCodeManager />);

    const copyButton = screen.getByText("Copy Full Master Code");
    fireEvent.click(copyButton);

    expect(mockWriteText).toHaveBeenCalled();
  });
});
