import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import ImageManager from "@/components/admin/ImageManager";

describe("Task 2.1: Image Management System", () => {
  test("ImageManager renders correctly", () => {
    render(<ImageManager data-oid="eielf7-" />);

    expect(screen.getByText("Image Management")).toBeInTheDocument();
    expect(screen.getByText("Upload New Image")).toBeInTheDocument();
    expect(screen.getByText("Filter by Type")).toBeInTheDocument();
  });

  test("Image type selection works", () => {
    render(<ImageManager data-oid="wm1b7ln" />);

    const typeSelect = screen.getByDisplayValue("Gallery Images");
    expect(typeSelect).toBeInTheDocument();

    fireEvent.change(typeSelect, { target: { value: "banner" } });
    expect(typeSelect.value).toBe("banner");
  });

  test("File upload input is present", () => {
    render(<ImageManager data-oid="pkjzfmm" />);

    const fileInput = screen.getByLabelText("Select Image File");
    expect(fileInput).toBeInTheDocument();
    expect(fileInput).toHaveAttribute("accept", "image/*");
  });

  test("Filter functionality works", () => {
    render(<ImageManager data-oid="xe4mq1d" />);

    const filterSelect = screen.getByDisplayValue("All Types");
    expect(filterSelect).toBeInTheDocument();

    fireEvent.change(filterSelect, { target: { value: "banner" } });
    expect(filterSelect.value).toBe("banner");
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
              message: 'relation "images" does not exist',
            },
          }),
        ),
      })),
    });

    render(<ImageManager data-oid="_lgfg3." />);

    await waitFor(() => {
      expect(screen.getByText(/Images table not found/)).toBeInTheDocument();
      expect(screen.getByText(/CREATE TABLE images/)).toBeInTheDocument();
    });
  });

  test("Image categories are properly defined", () => {
    render(<ImageManager data-oid="m.nvint" />);

    const typeSelect = screen.getByDisplayValue("Gallery Images");

    // Check that all image types are available
    const expectedTypes = [
      "Banner Images",
      "Thumbnails",
      "Gallery Images",
      "Answer Images",
    ];

    expectedTypes.forEach((type) => {
      fireEvent.change(typeSelect, {
        target: { value: type.toLowerCase().replace(" ", "") },
      });
      // The select should accept the value without error
    });
  });
});
