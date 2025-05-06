import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ToastProvider } from '../components/ui/Toast';
import AdminDashboard from '../pages/AdminDashboard';
import Home from '../pages/Home';
import { handleImageUpload } from '../utils/imageHandlers';
import { listFiles } from '../utils/supabaseImageStorage';

// Import test mocks
import '../setupTests';

// Mock AuthContext
const mockUser = {
  id: 'test-user',
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

const renderWithProviders = (ui: React.ReactElement, { currentUser = mockUser } = {}) => {
  return render(
    <AuthContext.Provider value={{
      currentUser,
      session: {},
      login: vi.fn(),
      signup: vi.fn(),
      sendPasswordResetEmail: vi.fn(),
      logout: vi.fn(),
      isLoading: false,
    } as any}>
      <ThemeProvider>
        <ToastProvider>
          <MemoryRouter>{ui}</MemoryRouter>
        </ToastProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

describe('Image Upload Flow Integration', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock URL.createObjectURL
    global.URL.createObjectURL = vi.fn().mockReturnValue('blob:test-url');
    global.URL.revokeObjectURL = vi.fn();
  });

  it('should upload a banner image from admin dashboard and display it on home page', async () => {
    // First render the admin dashboard
    const { unmount } = renderWithProviders(<AdminDashboard />);

    // Wait for the dashboard to load
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });

    // Find the banner image upload input
    const bannerUploadInput = screen.getByLabelText(/upload banner/i);

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
      'test-user',
      expect.any(String)
    );

    // Unmount the dashboard
    unmount();

    // Now render the home page
    renderWithProviders(<Home />);

    // Check that listFiles is called to fetch the banner
    expect(listFiles).toHaveBeenCalledWith('banner');

    // Wait for the banner to be displayed
    await waitFor(() => {
      const bannerImage = screen.getByAltText(/comet scanner banner/i);
      expect(bannerImage).toBeInTheDocument();
      expect(bannerImage).toHaveAttribute('src', expect.stringContaining('banner'));
    });
  });

  it('should upload gallery images from admin dashboard and display them on home page', async () => {
    // First render the admin dashboard
    const { unmount } = renderWithProviders(<AdminDashboard />);

    // Wait for the dashboard to load
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });

    // Find the gallery image upload input
    const galleryUploadInput = screen.getByLabelText(/upload gallery/i);

    // Create mock files
    const mockFile1 = new File(['test1'], 'gallery1.jpg', { type: 'image/jpeg' });
    const mockFile2 = new File(['test2'], 'gallery2.jpg', { type: 'image/jpeg' });

    // Upload the gallery images
    await act(async () => {
      fireEvent.change(galleryUploadInput, { target: { files: [mockFile1, mockFile2] } });
    });

    // Check that handleImageUpload was called for each file
    expect(handleImageUpload).toHaveBeenCalledTimes(2);

    // Unmount the dashboard
    unmount();

    // Now render the home page
    renderWithProviders(<Home />);

    // Check that listFiles is called to fetch the gallery images
    expect(listFiles).toHaveBeenCalledWith('gallery');

    // Wait for the gallery images to be displayed
    await waitFor(() => {
      const galleryImages = screen.getAllByAltText(/comet gallery/i);
      expect(galleryImages.length).toBeGreaterThan(0);

      // Check that the gallery images have the correct src attributes
      galleryImages.forEach(img => {
        expect(img).toHaveAttribute('src', expect.stringContaining('gallery'));
      });
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
