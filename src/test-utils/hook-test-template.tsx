import { renderHook, act, waitFor } from "@testing-library/react";
import { setupMockEnvironment, mockFetchResponse } from "@/test-utils";

// Example hook test template
// Copy this template for new hook tests

describe("useHookName", () => {
  setupMockEnvironment();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe("Initial State", () => {
    it("returns correct initial values", () => {
      const { result } = renderHook(() => useHookName());

      expect(result.current.data).toBeNull();
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBeNull();
    });

    it("accepts initial parameters", () => {
      const initialValue = "test";
      const { result } = renderHook(() => useHookName(initialValue));

      expect(result.current.value).toBe(initialValue);
    });
  });

  describe("Data Fetching", () => {
    it("fetches data successfully", async () => {
      const mockData = { id: 1, name: "Test" };
      mockFetchResponse(mockData);

      const { result } = renderHook(() => useHookName());

      act(() => {
        result.current.fetchData();
      });

      expect(result.current.loading).toBe(true);

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toEqual(mockData);
        expect(result.current.error).toBeNull();
      });
    });

    it("handles fetch errors correctly", async () => {
      const errorMessage = "Fetch failed";
      mockFetchResponse({ error: errorMessage }, false, 500);

      const { result } = renderHook(() => useHookName());

      act(() => {
        result.current.fetchData();
      });

      await waitFor(() => {
        expect(result.current.loading).toBe(false);
        expect(result.current.data).toBeNull();
        expect(result.current.error).toBe(errorMessage);
      });
    });
  });

  describe("State Updates", () => {
    it("updates state correctly", () => {
      const { result } = renderHook(() => useHookName());

      act(() => {
        result.current.updateValue("new value");
      });

      expect(result.current.value).toBe("new value");
    });

    it("resets state correctly", () => {
      const { result } = renderHook(() => useHookName("initial"));

      act(() => {
        result.current.updateValue("changed");
      });

      expect(result.current.value).toBe("changed");

      act(() => {
        result.current.reset();
      });

      expect(result.current.value).toBe("initial");
    });
  });

  describe("Side Effects", () => {
    it("cleans up on unmount", () => {
      const cleanupSpy = jest.fn();

      const { unmount } = renderHook(() => {
        React.useEffect(() => {
          return cleanupSpy;
        }, []);

        return useHookName();
      });

      unmount();
      expect(cleanupSpy).toHaveBeenCalled();
    });

    it("handles dependency changes correctly", () => {
      const { result, rerender } = renderHook(
        ({ dependency }) => useHookName(dependency),
        { initialProps: { dependency: "initial" } },
      );

      expect(result.current.value).toBe("initial");

      rerender({ dependency: "updated" });
      expect(result.current.value).toBe("updated");
    });
  });

  describe("Error Boundaries", () => {
    it("handles errors gracefully", () => {
      const consoleSpy = jest.spyOn(console, "error").mockImplementation();

      const { result } = renderHook(() => {
        // Simulate error condition
        if (Math.random() > 0.5) {
          throw new Error("Test error");
        }
        return useHookName();
      });

      // Test should not crash
      expect(result.error).toBeUndefined();

      consoleSpy.mockRestore();
    });
  });
});

// Placeholder hook for template
const useHookName = (initialValue?: any) => {
  const [value, setValue] = React.useState(initialValue);
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/data");
      const result = await response.json();
      setData(result);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const updateValue = (newValue: any) => setValue(newValue);
  const reset = () => setValue(initialValue);

  return {
    value,
    data,
    loading,
    error,
    fetchData,
    updateValue,
    reset,
  };
};
