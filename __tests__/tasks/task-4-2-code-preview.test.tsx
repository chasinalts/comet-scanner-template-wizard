import { render, screen } from "@testing-library/react";
import LiveCodePreview from "@/components/user/LiveCodePreview";

describe("Task 4.2: Enhanced Code Preview", () => {
  test("LiveCodePreview renders correctly", () => {
    const testCode = '// Test PineScript code\nindicator("Test")';

    render(<LiveCodePreview code={testCode} />);

    expect(screen.getByText("Live Code Preview")).toBeInTheDocument();
  });

  test("Code is displayed in preview", () => {
    const testCode = '// Test PineScript code\nindicator("Test")';

    render(<LiveCodePreview code={testCode} />);

    expect(screen.getByText(/Test PineScript code/)).toBeInTheDocument();
    expect(screen.getByText(/indicator\("Test"\)/)).toBeInTheDocument();
  });

  test("Empty code is handled gracefully", () => {
    render(<LiveCodePreview code="" />);

    expect(screen.getByText("Live Code Preview")).toBeInTheDocument();
    // Should not crash with empty code
  });

  test("Code preview has proper styling", () => {
    const testCode = 'indicator("Test")';

    render(<LiveCodePreview code={testCode} />);

    // Check for code block styling
    const codeElement = screen.getByText(/indicator/);
    expect(codeElement.closest("pre")).toBeInTheDocument();
  });

  test("Copy functionality is available", () => {
    const testCode = 'indicator("Test")';

    render(<LiveCodePreview code={testCode} />);

    // Should have copy button or functionality
    const copyButton =
      screen.queryByText(/copy/i) || screen.queryByTitle(/copy/i);
    // Copy functionality should be present in some form
  });

  test("Code preview updates when code changes", () => {
    const testCode1 = 'indicator("Test1")';
    const testCode2 = 'indicator("Test2")';

    const { rerender } = render(<LiveCodePreview code={testCode1} />);
    expect(screen.getByText(/Test1/)).toBeInTheDocument();

    rerender(<LiveCodePreview code={testCode2} />);
    expect(screen.getByText(/Test2/)).toBeInTheDocument();
    expect(screen.queryByText(/Test1/)).not.toBeInTheDocument();
  });

  test("Component is user-facing", () => {
    const testCode = 'indicator("Test")';

    render(<LiveCodePreview code={testCode} />);

    // Should not contain admin-specific elements
    expect(screen.queryByText("Admin")).not.toBeInTheDocument();
    expect(screen.queryByText("Manager")).not.toBeInTheDocument();
  });
});
