import React from "react";
import { render, screen, fireEvent, waitFor } from "@/test-utils";
import { setupUserEvent, createMockTemplate } from "@/test-utils";

// Example component test template
// Copy this template for new component tests

describe("ComponentName", () => {
  const user = setupUserEvent();

  // Mock data
  const mockTemplate = createMockTemplate();
  const mockProps = {
    template: mockTemplate,
    onUpdate: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Rendering", () => {
    it("renders without crashing", () => {
      render(<ComponentName {...mockProps} />);
      expect(screen.getByTestId("component-name")).toBeInTheDocument();
    });

    it("displays the correct title", () => {
      render(<ComponentName {...mockProps} />);
      expect(screen.getByText(mockTemplate.name)).toBeInTheDocument();
    });

    it("renders all required elements", () => {
      render(<ComponentName {...mockProps} />);

      expect(
        screen.getByRole("button", { name: /submit/i }),
      ).toBeInTheDocument();
      expect(screen.getByLabelText(/input field/i)).toBeInTheDocument();
    });
  });

  describe("User Interactions", () => {
    it("handles button click correctly", async () => {
      render(<ComponentName {...mockProps} />);

      const button = screen.getByRole("button", { name: /submit/i });
      await user.click(button);

      expect(mockProps.onUpdate).toHaveBeenCalledTimes(1);
    });

    it("handles form input correctly", async () => {
      render(<ComponentName {...mockProps} />);

      const input = screen.getByLabelText(/input field/i);
      await user.type(input, "test value");

      expect(input).toHaveValue("test value");
    });

    it("validates form submission", async () => {
      render(<ComponentName {...mockProps} />);

      const submitButton = screen.getByRole("button", { name: /submit/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockProps.onUpdate).toHaveBeenCalledWith(
          expect.objectContaining({
            // Expected data structure
          }),
        );
      });
    });
  });

  describe("Error Handling", () => {
    it("displays error message when API fails", async () => {
      // Mock API failure
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: false,
          status: 500,
          json: () => Promise.resolve({ error: "Server error" }),
        }),
      );

      render(<ComponentName {...mockProps} />);

      const button = screen.getByRole("button", { name: /submit/i });
      await user.click(button);

      await waitFor(() => {
        expect(screen.getByText(/error/i)).toBeInTheDocument();
      });
    });

    it("handles missing props gracefully", () => {
      const { container } = render(<ComponentName />);
      expect(container.firstChild).toBeInTheDocument();
    });
  });

  describe("Accessibility", () => {
    it("has proper ARIA labels", () => {
      render(<ComponentName {...mockProps} />);

      const button = screen.getByRole("button", { name: /submit/i });
      expect(button).toHaveAttribute("aria-label");
    });

    it("supports keyboard navigation", async () => {
      render(<ComponentName {...mockProps} />);

      const button = screen.getByRole("button", { name: /submit/i });
      button.focus();

      await user.keyboard("{Enter}");
      expect(mockProps.onUpdate).toHaveBeenCalled();
    });
  });

  describe("Performance", () => {
    it("does not re-render unnecessarily", () => {
      const renderSpy = jest.fn();
      const TestComponent = React.memo(() => {
        renderSpy();
        return <ComponentName {...mockProps} />;
      });

      const { rerender } = render(<TestComponent />);
      rerender(<TestComponent />);

      expect(renderSpy).toHaveBeenCalledTimes(1);
    });
  });
});

// Placeholder component for template
const ComponentName: React.FC<any> = () => {
  return <div data-testid="component-name">Component</div>;
};
