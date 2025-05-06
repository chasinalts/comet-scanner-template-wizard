import { describe, it, expect, vi, beforeEach } from 'vitest';
import { processImageForUpload } from '../utils/imageCompression';

// Import test mocks
import '../setupTests';

describe('Image Compression', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should compress an image to the specified quality', async () => {
    // Create a mock file
    const mockFile = new File(['test'.repeat(1024)], 'test-image.jpg', { type: 'image/jpeg' });
    Object.defineProperty(mockFile, 'size', { value: 4096 }); // 4KB

    // Process the image with 50% quality
    const result = await processImageForUpload(mockFile, {
      quality: 0.5,
      maxWidth: 1920,
      maxHeight: 1080,
    });

    // Check that the result is a File object
    expect(result).toBeInstanceOf(File);

    // Check that the file size is reduced
    expect(result.size).toBeLessThan(mockFile.size);

    // Check that the file name and type are preserved
    expect(result.name).toBe('test-image.jpg');
    expect(result.type).toBe('image/jpeg');
  });

  it('should resize an image if it exceeds max dimensions', async () => {
    // Create a mock file
    const mockFile = new File(['test'.repeat(1024)], 'large-image.jpg', { type: 'image/jpeg' });

    // Mock a large image
    const mockImage = {
      width: 3840,
      height: 2160,
      onload: null,
      src: '',
    };

    global.Image = vi.fn().mockImplementation(() => {
      const img = { ...mockImage };
      setTimeout(() => img.onload && img.onload());
      return img;
    });

    // Process the image with max dimensions
    const result = await processImageForUpload(mockFile, {
      quality: 0.8,
      maxWidth: 1920,
      maxHeight: 1080,
    });

    // Check that the canvas was set to the correct dimensions
    expect(document.createElement).toHaveBeenCalledWith('canvas');
    const canvas = document.createElement('canvas');

    // The aspect ratio should be preserved
    expect(canvas.width).toBe(1920);
    expect(canvas.height).toBe(1080);
  });

  it('should not resize an image if it is smaller than max dimensions', async () => {
    // Create a mock file
    const mockFile = new File(['test'.repeat(1024)], 'small-image.jpg', { type: 'image/jpeg' });

    // Mock a small image
    const mockImage = {
      width: 800,
      height: 600,
      onload: null,
      src: '',
    };

    global.Image = vi.fn().mockImplementation(() => {
      const img = { ...mockImage };
      setTimeout(() => img.onload && img.onload());
      return img;
    });

    // Process the image
    const result = await processImageForUpload(mockFile, {
      quality: 0.8,
      maxWidth: 1920,
      maxHeight: 1080,
    });

    // Check that the canvas was set to the original dimensions
    expect(document.createElement).toHaveBeenCalledWith('canvas');
    const canvas = document.createElement('canvas');

    // The dimensions should be unchanged
    expect(canvas.width).toBe(800);
    expect(canvas.height).toBe(600);
  });

  it('should enforce maximum file size', async () => {
    // Create a mock file
    const mockFile = new File(['test'.repeat(1024 * 1024)], 'huge-image.jpg', { type: 'image/jpeg' });
    Object.defineProperty(mockFile, 'size', { value: 4 * 1024 * 1024 }); // 4MB

    // Process the image with max size of 1MB
    const result = await processImageForUpload(mockFile, {
      quality: 0.8,
      maxWidth: 1920,
      maxHeight: 1080,
      maxSizeInMB: 1,
    });

    // Check that the result is smaller than the max size
    expect(result.size).toBeLessThanOrEqual(1 * 1024 * 1024);
  });

  it('should handle non-image files gracefully', async () => {
    // Create a mock non-image file
    const mockFile = new File(['test'], 'document.pdf', { type: 'application/pdf' });

    // Process the file
    const result = await processImageForUpload(mockFile, {
      quality: 0.8,
      maxWidth: 1920,
      maxHeight: 1080,
    });

    // For non-image files, it should return the original file
    expect(result).toBe(mockFile);
  });
});
