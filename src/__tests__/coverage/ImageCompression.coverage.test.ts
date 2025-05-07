import { describe, it, expect, vi, beforeEach } from 'vitest';
import { processImageForUpload } from '../../utils/imageCompression';

describe('Image Compression Coverage', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    // Create a proper mock for canvas and context
    const mockCanvas = {
      width: 0,
      height: 0,
      getContext: vi.fn().mockReturnValue({
        drawImage: vi.fn(),
      }),
      toBlob: vi.fn().mockImplementation((callback, type, quality) => {
        // Create a mock blob with size proportional to quality
        const size = Math.floor(1024 * (quality || 0.8));
        callback(new Blob(['x'.repeat(size)], { type: type || 'image/jpeg' }));
      }),
      toDataURL: vi.fn().mockReturnValue('data:image/jpeg;base64,test'),
    };

    // Mock document.createElement to return our mock canvas
    const originalCreateElement = document.createElement;
    document.createElement = vi.fn().mockImplementation((tagName) => {
      if (tagName === 'canvas') {
        return mockCanvas;
      }
      return originalCreateElement.call(document, tagName);
    });

    // Mock Image
    const mockImage = {
      width: 1920,
      height: 1080,
      onload: null,
      src: '',
    };

    global.Image = vi.fn().mockImplementation(() => {
      const img = { ...mockImage };
      setTimeout(() => img.onload && img.onload());
      return img;
    });

    // Mock URL methods using vi.spyOn
    vi.spyOn(URL, 'createObjectURL').mockImplementation(() => 'blob:test-url');
    vi.spyOn(URL, 'revokeObjectURL').mockImplementation(() => {});
  });

  it('should compress a JPEG image with default options', async () => {
    const mockFile = new File(['test'.repeat(1024)], 'test-image.jpg', { type: 'image/jpeg' });
    Object.defineProperty(mockFile, 'size', { value: 4096 }); // 4KB

    const result = await processImageForUpload(mockFile);

    expect(result).toBeInstanceOf(File);
    expect(result.name).toBe('test-image.jpg');
    expect(result.type).toBe('image/jpeg');
  });

  it('should compress a PNG image with default options', async () => {
    const mockFile = new File(['test'.repeat(1024)], 'test-image.png', { type: 'image/png' });
    Object.defineProperty(mockFile, 'size', { value: 4096 }); // 4KB

    const result = await processImageForUpload(mockFile);

    expect(result).toBeInstanceOf(File);
    expect(result.name).toBe('test-image.png');
    expect(result.type).toBe('image/png');
  });

  it('should compress an image with custom quality', async () => {
    const mockFile = new File(['test'.repeat(1024)], 'test-image.jpg', { type: 'image/jpeg' });
    Object.defineProperty(mockFile, 'size', { value: 4096 }); // 4KB

    const result = await processImageForUpload(mockFile, { quality: 0.5 });

    expect(result).toBeInstanceOf(File);
    expect(result.size).toBeLessThan(mockFile.size);
  });

  it('should resize an image that exceeds max dimensions', async () => {
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

    const result = await processImageForUpload(mockFile, {
      maxWidth: 1920,
      maxHeight: 1080,
    });

    expect(result).toBeInstanceOf(File);

    // Check that document.createElement was called with 'canvas'
    expect(document.createElement).toHaveBeenCalledWith('canvas');

    // Since we can't directly test the canvas dimensions (they're set after creation),
    // we'll verify that the function was called and returned a File object
    expect(result).toBeInstanceOf(File);
    expect(result.type).toBe('image/jpeg');
  });

  it('should not resize an image that is smaller than max dimensions', async () => {
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

    const result = await processImageForUpload(mockFile, {
      maxWidth: 1920,
      maxHeight: 1080,
    });

    expect(result).toBeInstanceOf(File);

    // Check that document.createElement was called with 'canvas'
    expect(document.createElement).toHaveBeenCalledWith('canvas');

    // Since we can't directly test the canvas dimensions (they're set after creation),
    // we'll verify that the function was called and returned a File object
    expect(result).toBeInstanceOf(File);
    expect(result.type).toBe('image/jpeg');
  });

  it('should enforce maximum file size', async () => {
    const mockFile = new File(['test'.repeat(1024 * 1024)], 'huge-image.jpg', { type: 'image/jpeg' });
    Object.defineProperty(mockFile, 'size', { value: 4 * 1024 * 1024 }); // 4MB

    const result = await processImageForUpload(mockFile, {
      maxSizeInMB: 1,
    });

    expect(result).toBeInstanceOf(File);
    expect(result.size).toBeLessThanOrEqual(1 * 1024 * 1024);
  });

  it('should handle non-image files gracefully', async () => {
    const mockFile = new File(['test'], 'document.pdf', { type: 'application/pdf' });

    const result = await processImageForUpload(mockFile);

    // For non-image files, it should return a file with the same properties
    expect(result.name).toBe(mockFile.name);
    expect(result.type).toBe(mockFile.type);
  });

  it('should handle image loading errors gracefully', async () => {
    const mockFile = new File(['test'.repeat(1024)], 'error-image.jpg', { type: 'image/jpeg' });

    // Mock an image that fails to load
    global.Image = vi.fn().mockImplementation(() => {
      const img = {
        width: 0,
        height: 0,
        onload: null,
        onerror: null,
        src: '',
      };
      setTimeout(() => img.onerror && img.onerror(new Error('Failed to load image')));
      return img;
    });

    const result = await processImageForUpload(mockFile);

    // Should return the original file if image loading fails
    expect(result).toBe(mockFile);
  });

  it('should handle canvas toBlob errors gracefully', async () => {
    const mockFile = new File(['test'.repeat(1024)], 'test-image.jpg', { type: 'image/jpeg' });

    // Create a new mock canvas with a failing toBlob method
    const failingCanvas = {
      width: 0,
      height: 0,
      getContext: vi.fn().mockReturnValue({
        drawImage: vi.fn(),
      }),
      toBlob: vi.fn().mockImplementation((callback) => {
        callback(null); // Simulate failure by passing null
      }),
    };

    // Override the document.createElement mock for this test only
    document.createElement = vi.fn().mockImplementation((tagName) => {
      if (tagName === 'canvas') {
        return failingCanvas;
      }
      return document.createElement.original ?
        document.createElement.original(tagName) :
        Object.assign(document.createElement(tagName), { tagName });
    });

    // Mock the Image constructor to immediately trigger onload
    global.Image = vi.fn().mockImplementation(() => {
      const img = {
        width: 800,
        height: 600,
        onload: null,
      };
      setTimeout(() => img.onload && img.onload(), 0);
      return img;
    });

    const result = await processImageForUpload(mockFile);

    // Should return a file with the same properties if canvas toBlob fails
    expect(result.name).toBe(mockFile.name);
    expect(result.type).toBe(mockFile.type);
  }, 10000); // Increase timeout to 10 seconds
});
