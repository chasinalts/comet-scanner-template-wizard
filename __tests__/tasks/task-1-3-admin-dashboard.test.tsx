import { render, screen, fireEvent } from "@testing-library/react";
import AdminDashboard from "@/components/AdminDashboard";

describe("Task 1.3: Admin Dashboard Components", () => {
  test("AdminDashboard renders all required tabs", () => {
    render(<AdminDashboard data-oid="__3rnw0" />);

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
    render(<AdminDashboard data-oid="rrgcrtc" />);

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
    render(<AdminDashboard data-oid="4ga4bz5" />);

    expect(screen.getByText("System Overview")).toBeInTheDocument();
    expect(screen.getByText("Total Templates")).toBeInTheDocument();
    expect(screen.getByText("Active Sections")).toBeInTheDocument();
    expect(screen.getByText("Code Snippets")).toBeInTheDocument();
    expect(screen.getByText("Total Users")).toBeInTheDocument();
  });

  test("Quick action buttons work", () => {
    render(<AdminDashboard data-oid="v4f4jr2" />);

    // Test quick action to sections
    const manageSectionsButton = screen.getByText("Manage Sections");
    fireEvent.click(manageSectionsButton);
    expect(screen.getByText("Section Manager")).toBeInTheDocument();
  });

  test("System status indicators are present", () => {
    render(<AdminDashboard data-oid="2byr0u4" />);

    expect(screen.getByText("System Status")).toBeInTheDocument();
    expect(screen.getByText(/Database:/)).toBeInTheDocument();
    expect(screen.getByText(/API:/)).toBeInTheDocument();
    expect(screen.getByText(/Storage:/)).toBeInTheDocument();
  });
});
