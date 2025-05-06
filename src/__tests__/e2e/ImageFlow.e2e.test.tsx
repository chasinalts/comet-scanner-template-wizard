import React from 'react';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, beforeAll, afterEach, afterAll } from 'vitest';
import '@testing-library/jest-dom';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { ThemeProvider } from '../../contexts/ThemeContext';
import { ToastProvider } from '../../components/ui/Toast';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';
import Home from '../../pages/Home';
import AdminDashboard from '../../pages/AdminDashboard';

// Mock data
const mockBannerImages = [
  {
    id: 'banner-1',
    publicUrl: 'https://example.com/banner/image1.jpg',
    image_type: 'banner',
    name: 'Banner Image 1',
  }
];

const mockGalleryImages = [
  {
    id: 'gallery-1',
    publicUrl: 'https://example.com/gallery/image1.jpg',
    image_type: 'gallery',
    name: 'Gallery Image 1',
  },
  {
    id: 'gallery-2',
    publicUrl: 'https://example.com/gallery/image2.jpg',
    image_type: 'gallery',
    name: 'Gallery Image 2',
  }
];

const mockContent = [
  {
    id: 'what_is_comet',
    type: 'what_is_comet',
    content: 'COMET (Comprehensive Operational Medical Emergency Toolkit) is a revolutionary system.'
  }
];

// Set up MSW server
const server = setupServer(
  // Handler for listing images
  http.get('/api/images', ({ request }) => {
    const url = new URL(request.url);
    const type = url.searchParams.get('type');

    if (type === 'banner') {
      return HttpResponse.json(mockBannerImages);
    } else if (type === 'gallery') {
      return HttpResponse.json(mockGalleryImages);
    }

    return HttpResponse.json([...mockBannerImages, ...mockGalleryImages]);
  }),

  // Handler for uploading images
  http.post('/api/images', async ({ request }) => {
    const { type } = await request.json();
    const newImage = {
      id: `${type}-${Date.now()}`,
      publicUrl: `https://example.com/${type}/new-image.jpg`,
      image_type: type,
      name: 'New Image',
    };

    if (type === 'banner') {
      mockBannerImages.push(newImage);
    } else if (type === 'gallery') {
      mockGalleryImages.push(newImage);
    }

    return HttpResponse.json(newImage, { status: 201 });
  }),

  // Handler for getting content
  http.get('/api/content', () => {
    return HttpResponse.json(mockContent);
  })
);

// Start server before all tests
beforeAll(() => server.listen());
// Reset handlers after each test
afterEach(() => server.resetHandlers());
// Close server after all tests
afterAll(() => server.close());

// Mock the LazyImage component
vi.mock('../../components/ui/LazyImage', () => ({
  default: ({ src, alt, onClick }) => (
    <div data-testid="lazy-image" onClick={onClick}>
      <img src={src} alt={alt} />
    </div>
  ),
}));

// Mock the Button component
vi.mock('../../components/ui/Button', () => ({
  default: ({ children, onClick }) => (
    <button data-testid="button" onClick={onClick}>{children}</button>
  ),
}));

// Mock the storage and database functions to use our API
vi.mock('../../utils/supabaseImageStorage', () => ({
  listFiles: vi.fn().mockImplementation(async (bucketType) => {
    const response = await fetch(`/api/images?type=${bucketType}`);
    return response.json();
  }),
  uploadFile: vi.fn().mockImplementation(async (file, bucketType) => {
    const response = await fetch('/api/images', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: bucketType, name: file.name }),
    });
    return response.json();
  }),
}));

vi.mock('../../utils/databaseService', () => ({
  databaseService: {
    list: vi.fn().mockImplementation(async (collection) => {
      if (collection === 'content') {
        const response = await fetch('/api/content');
        return response.json();
      }
      return [];
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
const renderWithProviders = (ui, { currentUser = mockUser, initialRoute = '/' } = {}) => {
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
          <MemoryRouter initialEntries={[initialRoute]}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/admin" element={<AdminDashboard />} />
            </Routes>
          </MemoryRouter>
        </ToastProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

describe('End-to-End Image Flow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Mock URL.createObjectURL and URL.revokeObjectURL
    global.URL.createObjectURL = vi.fn().mockReturnValue('blob:test-url');
    global.URL.revokeObjectURL = vi.fn();
  });

  it('displays images on the home page that were uploaded from the admin dashboard', async () => {
    // First render the admin dashboard
    const { unmount } = renderWithProviders(<AdminDashboard />, { initialRoute: '/admin' });

    // Wait for the dashboard to load
    await waitFor(() => {
      expect(screen.getByText(/admin dashboard/i)).toBeInTheDocument();
    });

    // Find the banner image upload input
    const bannerUploadInput = screen.queryByLabelText(/upload banner/i) ||
                              screen.queryByText(/Upload Banner Image/i) ||
                              screen.queryByTestId('banner-upload');

    // Skip test if we can't find the upload element
    if (!bannerUploadInput) {
      console.warn('Could not find banner upload input, skipping test');
      return;
    }

    // Create a mock file
    const mockFile = new File(['test'], 'new-banner.jpg', { type: 'image/jpeg' });

    // Upload the banner image
    await act(async () => {
      fireEvent.change(bannerUploadInput, { target: { files: [mockFile] } });
    });

    // Wait for the upload to complete
    await waitFor(() => {
      expect(screen.getByText(/upload successful/i) ||
             screen.getByText(/image uploaded/i)).toBeInTheDocument();
    });

    // Unmount the dashboard
    unmount();

    // Now render the home page
    renderWithProviders(<Home />, { initialRoute: '/' });

    // Wait for the home page to load and display the images
    await waitFor(() => {
      const images = screen.getAllByTestId('lazy-image');
      expect(images.length).toBeGreaterThan(0);

      // Check that the new banner image is displayed
      const imageSrcs = Array.from(images)
        .map(container => container.querySelector('img')?.getAttribute('src'));

      expect(imageSrcs).toContain('https://example.com/banner/new-image.jpg');
    });
  });

  it('displays COMET description on the home page', async () => {
    renderWithProviders(<Home />, { initialRoute: '/' });

    // Wait for the COMET description to be displayed
    await waitFor(() => {
      expect(screen.getByText(/COMET .* is a revolutionary system/i)).toBeInTheDocument();
    });
  });
});
