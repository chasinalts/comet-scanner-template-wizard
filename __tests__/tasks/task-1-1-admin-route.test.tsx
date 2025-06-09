import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AdminPage from "@/app/admin/page";
import InvisibleAdminButton from "@/components/InvisibleAdminButton";

describe("Task 1.1: Admin Route Structure", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Admin page renders login form when not authenticated", () => {
    render(<AdminPage data-oid=":xuco_." />);

    expect(screen.getByText("Admin Access")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /access admin panel/i }),
    ).toBeInTheDocument();
  });

  test("Dynamic password authentication works", async () => {
    render(<AdminPage data-oid="iqjp5re" />);

    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", {
      name: /access admin panel/i,
    });

    // Enter any password
    fireEvent.change(passwordInput, { target: { value: "testpassword123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Admin Dashboard")).toBeInTheDocument();
    });

    // Check if password was stored in localStorage
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "adminPassword",
      "testpassword123",
    );
  });

  test("InvisibleAdminButton renders on non-admin pages", () => {
    // Mock pathname to be non-admin
    jest.spyOn(require("next/navigation"), "usePathname").mockReturnValue("/");

    render(<InvisibleAdminButton data-oid="vqn89rg" />);

    expect(screen.getByText("Admin")).toBeInTheDocument();
    expect(
      screen.getByTitle("Drag to move, resize from bottom-right corner"),
    ).toBeInTheDocument();
  });

  test("InvisibleAdminButton does not render on admin pages", () => {
    // Mock pathname to be admin
    jest
      .spyOn(require("next/navigation"), "usePathname")
      .mockReturnValue("/admin");

    const { container } = render(<InvisibleAdminButton data-oid="g_lz6pu" />);

    expect(container.firstChild).toBeNull();
  });

  test("Admin logout functionality works", async () => {
    render(<AdminPage data-oid=":0.w3ab" />);

    // Login first
    const passwordInput = screen.getByLabelText("Password");
    const submitButton = screen.getByRole("button", {
      name: /access admin panel/i,
    });

    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Admin Dashboard")).toBeInTheDocument();
    });

    // Test logout
    const logoutButton = screen.getByRole("button", { name: /logout/i });
    fireEvent.click(logoutButton);

    await waitFor(() => {
      expect(screen.getByText("Admin Access")).toBeInTheDocument();
    });
  });
});
