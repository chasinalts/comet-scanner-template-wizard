import { render, screen, fireEvent } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Task 1.2: User Interface Separation", () => {
  test("Main page renders user-only components", () => {
    render(<HomePage data-oid="ue2.--j" />);

    // Check for main user interface elements
    expect(
      screen.getByText("COMET SCANNER TEMPLATE WIZARD"),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Owner: chasecambre@gmail.com"),
    ).toBeInTheDocument();
    expect(screen.getByText("Home Screen")).toBeInTheDocument();
    expect(screen.getByText("Template Wizard")).toBeInTheDocument();
  });

  test("Navigation between gallery and wizard views works", () => {
    render(<HomePage data-oid="emreqwi" />);

    const galleryButton = screen.getByText("Home Screen");
    const wizardButton = screen.getByText("Template Wizard");

    // Initially gallery should be active
    expect(galleryButton).toHaveClass("bg-cyan-500/30");

    // Click wizard button
    fireEvent.click(wizardButton);
    expect(wizardButton).toHaveClass("bg-cyan-500/30");
  });

  test("InvisibleAdminButton is present but not visible admin elements", () => {
    render(<HomePage data-oid="w.89n9c" />);

    // Should have invisible admin button
    expect(screen.getByText("Admin")).toBeInTheDocument();

    // Should not have visible admin elements in main interface
    expect(screen.queryByText("Admin Dashboard")).not.toBeInTheDocument();
    expect(screen.queryByText("Section Manager")).not.toBeInTheDocument();
  });

  test("Clean user interface without admin clutter", () => {
    render(<HomePage data-oid="3luahr." />);

    // Check that only user-facing elements are present
    const userElements = [
      "COMET SCANNER TEMPLATE WIZARD",
      "Home Screen",
      "Template Wizard",
      "Owner: chasecambre@gmail.com",
    ];

    userElements.forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });

    // Admin elements should not be present
    const adminElements = [
      "Section Manager",
      "Template Manager",
      "Code Snippet Manager",
      "Image Manager",
    ];

    adminElements.forEach((element) => {
      expect(screen.queryByText(element)).not.toBeInTheDocument();
    });
  });
});
