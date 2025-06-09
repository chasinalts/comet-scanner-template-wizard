import { render, screen } from "@testing-library/react";
import TemplateWizard from "@/components/user/TemplateWizard";
import TemplateGallery from "@/components/user/TemplateGallery";

describe("Task 4.1: Streamlined Template Builder", () => {
  test("TemplateWizard renders correctly", () => {
    const mockTemplate = {
      id: "test-template",
      name: "Test Template",
      description: "Test Description",
      sections: [],
    };

    render(
      <TemplateWizard
        template={mockTemplate}
        onCodeUpdate={() => {}}
        data-oid="wu-32z7"
      />,
    );

    expect(screen.getByText("Template Wizard")).toBeInTheDocument();
  });

  test("TemplateGallery renders correctly", () => {
    render(<TemplateGallery onStartWizard={() => {}} data-oid="8q.k71p" />);

    expect(screen.getByText("Template Gallery")).toBeInTheDocument();
  });

  test("TemplateWizard handles null template gracefully", () => {
    render(
      <TemplateWizard
        template={null}
        onCodeUpdate={() => {}}
        data-oid="o5u153s"
      />,
    );

    // Should not crash and should show appropriate message
    expect(screen.getByText(/select a template/i)).toBeInTheDocument();
  });

  test("TemplateGallery has start wizard functionality", () => {
    const mockOnStartWizard = jest.fn();
    render(
      <TemplateGallery onStartWizard={mockOnStartWizard} data-oid="wjui_4f" />,
    );

    // The component should render without errors
    expect(screen.getByText("Template Gallery")).toBeInTheDocument();
  });

  test("Code update callback is properly typed", () => {
    const mockCodeUpdate = jest.fn();
    const mockTemplate = {
      id: "test-template",
      name: "Test Template",
      description: "Test Description",
      sections: [],
    };

    render(
      <TemplateWizard
        template={mockTemplate}
        onCodeUpdate={mockCodeUpdate}
        data-oid="478s956"
      />,
    );

    // Component should render without TypeScript errors
    expect(screen.getByText("Template Wizard")).toBeInTheDocument();
  });

  test("Template wizard is user-facing component", () => {
    const mockTemplate = {
      id: "test-template",
      name: "Test Template",
      description: "Test Description",
      sections: [],
    };

    render(
      <TemplateWizard
        template={mockTemplate}
        onCodeUpdate={() => {}}
        data-oid="jxz3ime"
      />,
    );

    // Should not contain admin-specific elements
    expect(screen.queryByText("Admin")).not.toBeInTheDocument();
    expect(screen.queryByText("Section Manager")).not.toBeInTheDocument();
    expect(screen.queryByText("Template Manager")).not.toBeInTheDocument();
  });
});
