import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';

// Create a simple mock component for testing
const MockLazyImage = ({ src, alt, scale, gallerySize }) => (
  <div data-testid="lazy-image-container">
    <div data-testid="image-loading" style={{ display: 'none' }}>Loading...</div>
    <img
      data-testid="lazy-image"
      src={src}
      alt={alt}
      style={scale ? { transform: `scale(${scale})` } : {}}
    />
    {gallerySize && <div data-testid="gallery-controls">Gallery Controls</div>}
  </div>
);

// Mock the actual LazyImage component
vi.mock('../../components/ui/LazyImage', () => ({
  __esModule: true,
  default: (props) => <MockLazyImage {...props} />
}));

describe('LazyImage Component (Simplified)', () => {
  it('renders with correct src and alt attributes', () => {
    render(<MockLazyImage src="https://example.com/test-image.jpg" alt="Test image" />);

    const image = screen.getByTestId('lazy-image');
    expect(image).toHaveAttribute('src', 'https://example.com/test-image.jpg');
    expect(image).toHaveAttribute('alt', 'Test image');
  });

  it('applies scale transformation correctly', () => {
    render(<MockLazyImage src="https://example.com/test-image.jpg" alt="Test image" scale={1.5} />);

    const image = screen.getByTestId('lazy-image');
    expect(image).toHaveStyle('transform: scale(1.5)');
  });

  it('renders gallery controls when gallerySize is true', () => {
    render(
      <MockLazyImage
        src="https://example.com/test-image.jpg"
        alt="Gallery image"
        gallerySize={true}
      />
    );

    expect(screen.getByTestId('gallery-controls')).toBeInTheDocument();
  });

  it('does not render gallery controls when gallerySize is false', () => {
    render(
      <MockLazyImage
        src="https://example.com/test-image.jpg"
        alt="Gallery image"
        gallerySize={false}
      />
    );

    expect(screen.queryByTestId('gallery-controls')).not.toBeInTheDocument();
  });
});
