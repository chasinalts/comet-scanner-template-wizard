import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ToastProvider } from '../components/ui/Toast';
import AdminDashboard from '../pages/AdminDashboard';
import { handleImageUpload } from '../utils/imageHandlers';

// Mock components that might cause issues in tests
vi.mock('../components/ui/LazyImage', () => ({
  default: ({ src, alt, className, onClick }) => (
    <div data-testid="lazy-image-container">
      <img
        data-testid="lazy-image"
        src={src}
        alt={alt}
        className={className}
        onClick={onClick}
      />
    </div>
  ),
}));

vi.mock('../components/ui/HolographicText', () => ({
  default: ({ children }) => <div data-testid="holographic-text">{children}</div>,
}));

vi.mock('../components/ui/Button', () => ({
  default: ({ children, onClick, disabled }) => (
    <button data-testid="button" onClick={onClick} disabled={disabled}>{children}</button>
  ),
}));

// Mock the API calls
vi.mock('../utils/supabaseImageStorage', () => ({
  listFiles: vi.fn().mockImplementation(async (bucketType) => {
    const response = await fetch(`/api/images?type=${bucketType}`);
    return response.json();
  }),
  deleteFile: vi.fn().mockImplementation(async (id) => {
    const response = await fetch(`/api/images/${id}`, { method: 'DELETE' });
    return response.json();
  }),
}));

vi.mock('../utils/imageHandlers', () => ({
  handleImageUpload: vi.fn().mockImplementation(async (file, type, onSuccess, onError, userId) => {
    try {
      const response = await fetch('/api/images', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ type, userId }),
      });

      if (!response.ok) {
        throw new Error('Upload failed');
      }

      const data = await response.json();
      onSuccess(data.id, data.publicUrl);
      return data;
    } catch (error) {
      onError(error);
      throw error;
    }
  }),
  resizeImage: vi.fn().mockImplementation((src) => Promise.resolve({
    src,
    width: 800,
    height: 600,
  })),
}));

vi.mock('../utils/databaseService', () => ({
  databaseService: {
    list: vi.fn().mockImplementation(async (collection, filters) => {
      if (collection === 'content') {
        const response = await fetch('/api/content');
        return response.json();
      } else if (collection === 'user_profiles') {
        const response = await fetch('/api/users');
        return response.json();
      }
      return [];
    }),
    get: vi.fn().mockImplementation(async (collection, id) => {
      const response = await fetch(`/api/${collection}/${id}`);
      return response.json();
    }),
    update: vi.fn().mockImplementation(async (collection, id, data) => {
      const response = await fetch(`/api/${collection}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      return response.json();
    }),
  },
}));

// Mock user for AuthContext
const mockUser = {
  id: 'user-123',
  email: 'user@example.com',
  is_owner: true,
  permissions: {
    content_management: true,
    user_management: true,
    system_configuration: true,
    media_uploads: true,
    security_settings: true,
    site_customization: true,
  },
};

// Helper function to render with providers
const renderWithProviders = (ui, { currentUser = mockUser } = {}) => {
  return render(
    <AuthContext.Provider value={{
      currentUser,
      session: {},
      login: vi.fn(),
      signup: vi.fn(),
      sendPasswordResetEmail: vi.fn(),
      logout: vi.fn(),
      isLoading: false,
    }}>
      <ThemeProvider>
        <ToastProvider>
          <MemoryRouter>{ui}</MemoryRouter>
        </ToastProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

describe('Image Upload and Storage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock URL.createObjectURL
    global.URL.createObjectURL = vi.fn().mockReturnValue('blob:test-url');
    global.URL.revokeObjectURL = vi.fn();
  });

  it('should display image upload sections for owner users', async () => {
    renderWithProviders(<AdminDashboard />);

    // Wait for the dashboard to load
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();

      // Check that the image upload sections are visible
      expect(screen.getByText(/banner image/i)).toBeInTheDocument();
      expect(screen.getByText(/gallery images/i)).toBeInTheDocument();
    });
  });

  it('should upload a banner image', async () => {
    renderWithProviders(<AdminDashboard />);

    // Wait for the dashboard to load
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });

    // Find the banner image upload input
    const bannerUploadInput = screen.getByLabelText(/upload banner/i) ||
                              screen.getByTestId('banner-upload-input');

    // Create a mock file
    const mockFile = new File(['test'], 'banner.jpg', { type: 'image/jpeg' });

    // Upload the banner image
    await act(async () => {
      fireEvent.change(bannerUploadInput, { target: { files: [mockFile] } });
    });

    // Check that handleImageUpload was called with the correct parameters
    expect(handleImageUpload).toHaveBeenCalledWith(
      mockFile,
      'banner',
      expect.any(Function),
      expect.any(Function),
      'user-123',
      expect.any(String)
    );

    // Wait for the success message
    await waitFor(() => {
      expect(screen.getByText(/image uploaded successfully/i) ||
             screen.getByText(/upload successful/i) ||
             screen.getByText(/banner updated/i)).toBeInTheDocument();
    });
  });

  it('should upload gallery images', async () => {
    renderWithProviders(<AdminDashboard />);

    // Wait for the dashboard to load
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });

    // Find the gallery image upload input
    const galleryUploadInput = screen.getByLabelText(/upload gallery/i) ||
                               screen.getByTestId('gallery-upload-input');

    // Create mock files
    const mockFile1 = new File(['test1'], 'gallery1.jpg', { type: 'image/jpeg' });
    const mockFile2 = new File(['test2'], 'gallery2.jpg', { type: 'image/jpeg' });

    // Upload the gallery images
    await act(async () => {
      fireEvent.change(galleryUploadInput, { target: { files: [mockFile1, mockFile2] } });
    });

    // Check that handleImageUpload was called for each file
    expect(handleImageUpload).toHaveBeenCalledTimes(2);

    // Wait for the success message
    await waitFor(() => {
      expect(screen.getByText(/images uploaded successfully/i) ||
             screen.getByText(/upload successful/i) ||
             screen.getByText(/gallery updated/i)).toBeInTheDocument();
    });
  });

  it('should handle upload errors', async () => {
    // Override the default handler to simulate an error
    server.use(
      http.post('/api/images', () => {
        return new HttpResponse(
          JSON.stringify({ error: 'Server error' }),
          { status: 500 }
        );
      })
    );

    renderWithProviders(<AdminDashboard />);

    // Wait for the dashboard to load
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });

    // Find the banner image upload input
    const bannerUploadInput = screen.getByLabelText(/upload banner/i) ||
                              screen.getByTestId('banner-upload-input');

    // Create a mock file
    const mockFile = new File(['test'], 'banner.jpg', { type: 'image/jpeg' });

    // Upload the banner image
    await act(async () => {
      fireEvent.change(bannerUploadInput, { target: { files: [mockFile] } });
    });

    // Wait for the error message
    await waitFor(() => {
      expect(screen.getByText(/upload failed/i) ||
             screen.getByText(/error uploading image/i) ||
             screen.getByText(/failed to upload/i)).toBeInTheDocument();
    });
  });

  it('should delete an image', async () => {
    renderWithProviders(<AdminDashboard />);

    // Wait for the dashboard to load and images to be displayed
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
      expect(screen.getAllByTestId('lazy-image').length).toBeGreaterThan(0);
    });

    // Find and click a delete button
    const deleteButtons = screen.getAllByText(/delete/i);
    expect(deleteButtons.length).toBeGreaterThan(0);

    await act(async () => {
      fireEvent.click(deleteButtons[0]);
    });

    // Confirm deletion (if there's a confirmation dialog)
    const confirmButton = screen.getByText(/confirm/i) ||
                          screen.getByText(/yes/i) ||
                          screen.getByText(/ok/i);

    await act(async () => {
      fireEvent.click(confirmButton);
    });

    // Wait for the success message
    await waitFor(() => {
      expect(screen.getByText(/image deleted successfully/i) ||
             screen.getByText(/delete successful/i) ||
             screen.getByText(/removed successfully/i)).toBeInTheDocument();
    });
  });

  it('should not allow non-owner users to upload images', async () => {
    // Render the admin dashboard with a non-owner user
    renderWithProviders(<AdminDashboard />, {
      currentUser: {
        ...mockUser,
        is_owner: false,
        permissions: {
          ...mockUser.permissions,
          media_uploads: false,
        },
      },
    });

    // Wait for the dashboard to load
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });

    // Check that the image upload sections are not visible
    expect(screen.queryByLabelText(/upload banner/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/upload gallery/i)).not.toBeInTheDocument();
  });
});
