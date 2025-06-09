import { render, screen, fireEvent } from "@testing-library/react";
import AdminDashboard from "@/components/AdminDashboard";

describe("Task 1.3: Admin Dashboard Components", () => {
  test("AdminDashboard renders all required tabs", () => {
    render(<AdminDashboard />);

    const expectedTabs = [
      "Overview",
      "Sections",
      "Templates",
      "Code Snippets",
      "Master Code",
      "Images",
      "Authentication",
      "Settings",
    ];

    expectedTabs.forEach((tab) => {
      expect(screen.getByText(tab)).toBeInTheDocument();
    });
  });

  test("Tab navigation works correctly", () => {
    render(<AdminDashboard />);

    // Initially Overview should be active
    expect(screen.getByText("System Overview")).toBeInTheDocument();

    // Click on Sections tab
    fireEvent.click(screen.getByText("Sections"));
    expect(screen.getByText("Section Manager")).toBeInTheDocument();

    // Click on Templates tab
    fireEvent.click(screen.getByText("Templates"));
    expect(screen.getByText("Template Manager")).toBeInTheDocument();
  });

  test("Overview tab displays system stats", () => {
    render(<AdminDashboard />);

    expect(screen.getByText("System Overview")).toBeInTheDocument();
    expect(screen.getByText("Total Templates")).toBeInTheDocument();
    expect(screen.getByText("Active Sections")).toBeInTheDocument();
    expect(screen.getByText("Code Snippets")).toBeInTheDocument();
    expect(screen.getByText("Total Users")).toBeInTheDocument();
  });

  test("Quick action buttons work", () => {
    render(<AdminDashboard />);

    // Test quick action to sections
    const manageSectionsButton = screen.getByText("Manage Sections");
    fireEvent.click(manageSectionsButton);
    expect(screen.getByText("Section Manager")).toBeInTheDocument();
  });

  test("System status indicators are present", () => {
    render(<AdminDashboard />);

    expect(screen.getByText("System Status")).toBeInTheDocument();
    expect(screen.getByText(/Database:/)).toBeInTheDocument();
    expect(screen.getByText(/API:/)).toBeInTheDocument();
    expect(screen.getByText(/Storage:/)).toBeInTheDocument();
  });
});
