import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ToastProvider } from '../components/ui/Toast';
import Home from '../pages/Home';

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
  default: ({ children, onClick }) => (
    <button data-testid="button" onClick={onClick}>{children}</button>
  ),
}));

// Mock the API calls
vi.mock('../utils/supabaseImageStorage', () => ({
  listFiles: vi.fn().mockImplementation(async (bucketType) => {
    const response = await fetch(`/api/images?type=${bucketType}`);
    return response.json();
  }),
}));

vi.mock('../utils/databaseService', () => ({
  databaseService: {
    list: vi.fn().mockImplementation(async (collection, filters) => {
      if (collection === 'content') {
        const response = await fetch('/api/content');
        return response.json();
      }
      return [];
    }),
    get: vi.fn().mockImplementation(async (collection, id) => {
      const response = await fetch(`/api/${collection}/${id}`);
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

describe('Image Retrieval and Rendering', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch and display banner images', async () => {
    renderWithProviders(<Home />);

    // Wait for the banner image to be displayed
    await waitFor(() => {
      const bannerImages = screen.getAllByTestId('lazy-image');
      expect(bannerImages.length).toBeGreaterThan(0);

      // Check that at least one banner image has the correct URL
      const bannerImageSrcs = bannerImages.map(img => img.getAttribute('src'));
      expect(bannerImageSrcs).toContain('https://example.com/banner/image1.jpg');
    });
  });

  it('should fetch and display gallery images', async () => {
    renderWithProviders(<Home />);

    // Wait for the gallery images to be displayed
    await waitFor(() => {
      const galleryImages = screen.getAllByTestId('lazy-image');
      expect(galleryImages.length).toBeGreaterThan(0);

      // Check that at least one gallery image has the correct URL
      const galleryImageSrcs = galleryImages.map(img => img.getAttribute('src'));
      expect(galleryImageSrcs).toContain('https://example.com/gallery/image1.jpg');
      expect(galleryImageSrcs).toContain('https://example.com/gallery/image2.jpg');
    });
  });

  it('should fetch and display COMET description', async () => {
    renderWithProviders(<Home />);

    // Wait for the COMET description to be displayed
    await waitFor(() => {
      expect(screen.getByText(/COMET .* is a revolutionary system/)).toBeInTheDocument();
    });
  });

  it('should handle error when fetching images', async () => {
    // Override the default handler to simulate an error
    server.use(
      http.get('/api/images', () => {
        return new HttpResponse(
          JSON.stringify({ error: 'Server error' }),
          { status: 500 }
        );
      })
    );

    renderWithProviders(<Home />);

    // Wait for the error message to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Error loading images/i) ||
             screen.getByText(/Failed to load/i) ||
             screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    });
  });

  it('should handle empty image list', async () => {
    // Override the default handler to return empty arrays
    server.use(
      http.get('/api/images', () => {
        return HttpResponse.json([]);
      })
    );

    renderWithProviders(<Home />);

    // Wait for the empty state message to be displayed
    await waitFor(() => {
      expect(screen.getByText(/No images found/i) ||
             screen.getByText(/No images available/i) ||
             screen.getByText(/Empty gallery/i)).toBeInTheDocument();
    });
  });

  it('should not display template wizard button for unauthenticated users', async () => {
    renderWithProviders(<Home />, { currentUser: null });

    // Wait for the component to render
    await waitFor(() => {
      const wizardButtons = screen.queryAllByText(/template wizard/i);
      expect(wizardButtons.length).toBe(0);
    });
  });
});
