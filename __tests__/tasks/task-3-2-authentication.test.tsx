import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AuthManager from "@/components/admin/AuthManager";

describe("Task 3.2: Authentication System", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("AuthManager renders correctly", () => {
    render(<AuthManager />);

    expect(screen.getByText("Authentication Manager")).toBeInTheDocument();
  });

  test("Tab navigation works", () => {
    render(<AuthManager />);

    const usersTab = screen.getByText("Users");
    const sessionsTab = screen.getByText("Sessions");
    const settingsTab = screen.getByText("Settings");

    expect(usersTab).toBeInTheDocument();
    expect(sessionsTab).toBeInTheDocument();
    expect(settingsTab).toBeInTheDocument();

    // Test tab switching
    fireEvent.click(sessionsTab);
    expect(screen.getByText("Active Sessions")).toBeInTheDocument();

    fireEvent.click(settingsTab);
    expect(screen.getByText("Authentication Settings")).toBeInTheDocument();
  });

  test("Create user form appears when button clicked", () => {
    render(<AuthManager />);

    const createUserButton = screen.getByText("Create User");
    fireEvent.click(createUserButton);

    expect(screen.getByText("Create New User")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Role")).toBeInTheDocument();
  });

  test("Role options are available", () => {
    render(<AuthManager />);

    const createUserButton = screen.getByText("Create User");
    fireEvent.click(createUserButton);

    const roleSelect = screen.getByDisplayValue("user");
    expect(roleSelect).toBeInTheDocument();

    // Test role options
    const expectedRoles = ["admin", "editor", "user", "viewer"];

    expectedRoles.forEach((role) => {
      fireEvent.change(roleSelect, { target: { value: role } });
      expect(roleSelect.value).toBe(role);
    });
  });

  test("Password requirements are enforced", () => {
    render(<AuthManager />);

    const createUserButton = screen.getByText("Create User");
    fireEvent.click(createUserButton);

    const passwordInput = screen.getByLabelText("Password");
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(passwordInput).toHaveAttribute("required");
    expect(passwordInput).toHaveAttribute("minLength", "6");
  });

  test("Security settings are configurable", () => {
    render(<AuthManager />);

    const settingsTab = screen.getByText("Settings");
    fireEvent.click(settingsTab);

    expect(screen.getByText("Security Configuration")).toBeInTheDocument();
    expect(screen.getByText("Require Email Confirmation")).toBeInTheDocument();
    expect(
      screen.getByText("Enable Two-Factor Authentication"),
    ).toBeInTheDocument();
    expect(screen.getByText("Session Timeout (hours)")).toBeInTheDocument();
  });

  test("Session timeout is configurable", () => {
    render(<AuthManager />);

    const settingsTab = screen.getByText("Settings");
    fireEvent.click(settingsTab);

    const timeoutInput = screen.getByDisplayValue("24");
    expect(timeoutInput).toBeInTheDocument();
    expect(timeoutInput).toHaveAttribute("type", "number");
    expect(timeoutInput).toHaveAttribute("min", "1");
    expect(timeoutInput).toHaveAttribute("max", "168");
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
              message: 'relation "user_profiles" does not exist',
            },
          }),
        ),
      })),
    });

    render(<AuthManager />);

    await waitFor(() => {
      expect(
        screen.getByText(/User profiles table not found/),
      ).toBeInTheDocument();
      expect(
        screen.getByText(/CREATE TABLE user_profiles/),
      ).toBeInTheDocument();
    });
  });

  test("Current user display works", () => {
    // Mock current user
    const mockSupabase = require("@/lib/supabaseClient").supabase;
    mockSupabase.auth.getUser.mockResolvedValue({
      data: { user: { email: "test@example.com" } },
      error: null,
    });

    render(<AuthManager />);

    expect(screen.getByText(/Logged in as:/)).toBeInTheDocument();
  });
});
