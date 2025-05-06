import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeProvider } from '../contexts/ThemeContext';
import { ToastProvider } from '../components/ui/Toast';
import { WizardProvider } from '../contexts/WizardContext';
import ScannerWizard from '../pages/ScannerWizard';

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
}));

vi.mock('../utils/databaseService', () => ({
  databaseService: {
    list: vi.fn().mockImplementation(async (collection, filters) => {
      if (collection === 'templates') {
        const response = await fetch('/api/templates');
        return response.json();
      }
      return [];
    }),
    get: vi.fn().mockImplementation(async (collection, id) => {
      const response = await fetch(`/api/${collection}/${id}`);
      return response.json();
    }),
    create: vi.fn().mockImplementation(async (collection, data) => {
      const response = await fetch(`/api/${collection}`, {
        method: 'POST',
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
          <WizardProvider>
            <MemoryRouter>{ui}</MemoryRouter>
          </WizardProvider>
        </ToastProvider>
      </ThemeProvider>
    </AuthContext.Provider>
  );
};

describe('Template Wizard Flow', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch and display scanner images', async () => {
    renderWithProviders(<ScannerWizard />);

    // Wait for the scanner images to be displayed
    await waitFor(() => {
      const scannerImages = screen.getAllByTestId('lazy-image');
      expect(scannerImages.length).toBeGreaterThan(0);

      // Check that at least one scanner image has the correct URL
      const scannerImageSrcs = scannerImages.map(img => img.getAttribute('src'));
      expect(scannerImageSrcs).toContain('https://example.com/scanner/image1.jpg');
      expect(scannerImageSrcs).toContain('https://example.com/scanner/image2.jpg');
    });
  });

  it('should fetch and display templates', async () => {
    renderWithProviders(<ScannerWizard />);

    // Wait for the templates to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Basic Template/i)).toBeInTheDocument();
      expect(screen.getByText(/Advanced Template/i)).toBeInTheDocument();
    });
  });

  it('should allow selecting a scanner image', async () => {
    renderWithProviders(<ScannerWizard />);

    // Wait for the scanner images to be displayed
    await waitFor(() => {
      const scannerImages = screen.getAllByTestId('lazy-image');
      expect(scannerImages.length).toBeGreaterThan(0);
    });

    // Click on the first scanner image
    const scannerImages = screen.getAllByTestId('lazy-image');
    await act(async () => {
      fireEvent.click(scannerImages[0]);
    });

    // Check that the image is selected (this would typically add a class or visual indicator)
    // Since we're using a mock component, we can't check for CSS classes directly
    // Instead, we'll check if the next button is enabled
    await waitFor(() => {
      const nextButton = screen.getByText(/next/i);
      expect(nextButton).not.toBeDisabled();
    });
  });

  it('should allow selecting a template', async () => {
    renderWithProviders(<ScannerWizard />);

    // Wait for the scanner images to be displayed and select one
    await waitFor(() => {
      const scannerImages = screen.getAllByTestId('lazy-image');
      expect(scannerImages.length).toBeGreaterThan(0);
    });

    // Click on the first scanner image
    const scannerImages = screen.getAllByTestId('lazy-image');
    await act(async () => {
      fireEvent.click(scannerImages[0]);
    });

    // Click next button to go to template selection
    const nextButton = screen.getByText(/next/i);
    await act(async () => {
      fireEvent.click(nextButton);
    });

    // Wait for the templates to be displayed
    await waitFor(() => {
      expect(screen.getByText(/Basic Template/i)).toBeInTheDocument();
    });

    // Click on the first template
    const templateButton = screen.getByText(/Basic Template/i);
    await act(async () => {
      fireEvent.click(templateButton);
    });

    // Check that the template is selected
    await waitFor(() => {
      const nextButton = screen.getByText(/next/i);
      expect(nextButton).not.toBeDisabled();
    });
  });

  it('should allow creating a new template', async () => {
    renderWithProviders(<ScannerWizard />);

    // Wait for the scanner images to be displayed and select one
    await waitFor(() => {
      const scannerImages = screen.getAllByTestId('lazy-image');
      expect(scannerImages.length).toBeGreaterThan(0);
    });

    // Click on the first scanner image
    const scannerImages = screen.getAllByTestId('lazy-image');
    await act(async () => {
      fireEvent.click(scannerImages[0]);
    });

    // Click next button to go to template selection
    const nextButton = screen.getByText(/next/i);
    await act(async () => {
      fireEvent.click(nextButton);
    });

    // Wait for the templates to be displayed
    await waitFor(() => {
      expect(screen.getByText(/create new template/i)).toBeInTheDocument();
    });

    // Click on create new template
    const createButton = screen.getByText(/create new template/i);
    await act(async () => {
      fireEvent.click(createButton);
    });

    // Fill in the template form
    const titleInput = screen.getByLabelText(/template title/i) ||
                       screen.getByPlaceholderText(/enter title/i) ||
                       screen.getByTestId('template-title-input');

    const contentInput = screen.getByLabelText(/template content/i) ||
                         screen.getByPlaceholderText(/enter content/i) ||
                         screen.getByTestId('template-content-input');

    await act(async () => {
      fireEvent.change(titleInput, { target: { value: 'New Test Template' } });
      fireEvent.change(contentInput, { target: { value: 'This is a test template created during testing' } });
    });

    // Save the template
    const saveButton = screen.getByText(/save template/i) ||
                       screen.getByText(/create template/i);

    await act(async () => {
      fireEvent.click(saveButton);
    });

    // Check that the template was created
    await waitFor(() => {
      expect(screen.getByText(/template created successfully/i) ||
             screen.getByText(/template saved/i) ||
             screen.getByText(/New Test Template/i)).toBeInTheDocument();
    });
  });

  it('should complete the wizard flow', async () => {
    renderWithProviders(<ScannerWizard />);

    // Step 1: Select a scanner image
    await waitFor(() => {
      const scannerImages = screen.getAllByTestId('lazy-image');
      expect(scannerImages.length).toBeGreaterThan(0);
    });

    const scannerImages = screen.getAllByTestId('lazy-image');
    await act(async () => {
      fireEvent.click(scannerImages[0]);
    });

    // Click next button to go to step 2
    const nextButton1 = screen.getByText(/next/i);
    await act(async () => {
      fireEvent.click(nextButton1);
    });

    // Step 2: Select a template
    await waitFor(() => {
      expect(screen.getByText(/Basic Template/i)).toBeInTheDocument();
    });

    const templateButton = screen.getByText(/Basic Template/i);
    await act(async () => {
      fireEvent.click(templateButton);
    });

    // Click next button to go to step 3
    const nextButton2 = screen.getByText(/next/i);
    await act(async () => {
      fireEvent.click(nextButton2);
    });

    // Step 3: Review and finish
    await waitFor(() => {
      expect(screen.getByText(/review/i) || screen.getByText(/summary/i)).toBeInTheDocument();
    });

    // Click finish button
    const finishButton = screen.getByText(/finish/i) || screen.getByText(/complete/i);
    await act(async () => {
      fireEvent.click(finishButton);
    });

    // Check for success message
    await waitFor(() => {
      expect(screen.getByText(/template saved successfully/i) ||
             screen.getByText(/wizard completed/i) ||
             screen.getByText(/success/i)).toBeInTheDocument();
    });
  });

  it('should handle errors during the wizard flow', async () => {
    // Override the default handler to simulate an error when creating a template
    server.use(
      http.post('/api/templates', () => {
        return new HttpResponse(
          JSON.stringify({ error: 'Server error' }),
          { status: 500 }
        );
      })
    );

    renderWithProviders(<ScannerWizard />);

    // Complete the wizard flow until the last step
    // Step 1: Select a scanner image
    await waitFor(() => {
      const scannerImages = screen.getAllByTestId('lazy-image');
      expect(scannerImages.length).toBeGreaterThan(0);
    });

    const scannerImages = screen.getAllByTestId('lazy-image');
    await act(async () => {
      fireEvent.click(scannerImages[0]);
    });

    // Click next button to go to step 2
    const nextButton1 = screen.getByText(/next/i);
    await act(async () => {
      fireEvent.click(nextButton1);
    });

    // Step 2: Select a template
    await waitFor(() => {
      expect(screen.getByText(/Basic Template/i)).toBeInTheDocument();
    });

    const templateButton = screen.getByText(/Basic Template/i);
    await act(async () => {
      fireEvent.click(templateButton);
    });

    // Click next button to go to step 3
    const nextButton2 = screen.getByText(/next/i);
    await act(async () => {
      fireEvent.click(nextButton2);
    });

    // Step 3: Review and finish
    await waitFor(() => {
      expect(screen.getByText(/review/i) || screen.getByText(/summary/i)).toBeInTheDocument();
    });

    // Click finish button
    const finishButton = screen.getByText(/finish/i) || screen.getByText(/complete/i);
    await act(async () => {
      fireEvent.click(finishButton);
    });

    // Check for error message
    await waitFor(() => {
      expect(screen.getByText(/error/i) ||
             screen.getByText(/failed/i) ||
             screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });
});
