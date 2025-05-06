import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  handleImageUpload,
  handleAppwriteImageUpload,
  handleSupabaseImageUpload,
  resizeImage
} from '../utils/imageHandlers';
import { uploadFile as uploadFileToAppwrite } from '../utils/appwriteStorage';
import { uploadFile as uploadFileToSupabase } from '../utils/supabaseImageStorage';
import { processImageForUpload } from '../utils/imageCompression';

// Import test mocks
import '../setupTests';

describe('Image Handlers', () => {
  // Create a mock file
  const mockFile = new File(['test'], 'test-image.jpg', { type: 'image/jpeg' });

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock URL.createObjectURL
    global.URL.createObjectURL = vi.fn().mockReturnValue('blob:test-url');
  });

  describe('handleImageUpload', () => {
    it('should use Appwrite by default', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();

      await handleImageUpload(mockFile, 'banner', onSuccess, onError, 'user-123');

      expect(uploadFileToAppwrite).toHaveBeenCalled();
      expect(uploadFileToSupabase).not.toHaveBeenCalled();
      expect(onSuccess).toHaveBeenCalledWith('appwrite-file-id', expect.any(String));
    });

    it('should use Supabase when specified', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();

      await handleImageUpload(mockFile, 'banner', onSuccess, onError, 'user-123', 'supabase');

      expect(uploadFileToSupabase).toHaveBeenCalled();
      expect(uploadFileToAppwrite).not.toHaveBeenCalled();
      expect(onSuccess).toHaveBeenCalledWith('supabase-file-id', expect.any(String));
    });

    it('should call onError when upload fails', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();

      // Mock an upload error
      vi.mocked(uploadFileToAppwrite).mockRejectedValueOnce(new Error('Upload failed'));

      await handleImageUpload(mockFile, 'banner', onSuccess, onError, 'user-123');

      expect(onError).toHaveBeenCalledWith(expect.any(Error));
      expect(onSuccess).not.toHaveBeenCalled();
    });
  });

  describe('handleAppwriteImageUpload', () => {
    it('should upload an image to Appwrite', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();

      await handleAppwriteImageUpload(mockFile, 'banner', onSuccess, onError, 'user-123');

      expect(uploadFileToAppwrite).toHaveBeenCalledWith(mockFile, 'banner', 'user-123');
      expect(onSuccess).toHaveBeenCalledWith('appwrite-file-id', expect.any(String));
    });
  });

  describe('handleSupabaseImageUpload', () => {
    it('should upload an image to Supabase', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();

      await handleSupabaseImageUpload(mockFile, 'banner', onSuccess, onError, 'user-123');

      // Check that the file was processed
      expect(processImageForUpload).toHaveBeenCalledWith(mockFile, expect.any(Object));

      // Check that the file was uploaded to Supabase
      expect(uploadFileToSupabase).toHaveBeenCalled();

      // Check that the success callback was called
      expect(onSuccess).toHaveBeenCalledWith('supabase-file-id', expect.any(String));
    });

    it('should map scanner type to gallery bucket', async () => {
      const onSuccess = vi.fn();

      await handleSupabaseImageUpload(mockFile, 'scanner', onSuccess, undefined, 'user-123');

      // Check that the scanner type was mapped to gallery bucket
      expect(uploadFileToSupabase).toHaveBeenCalledWith(
        expect.any(Object),
        'gallery', // Should be mapped from 'scanner' to 'gallery'
        'user-123',
        undefined
      );
    });
  });

  describe('resizeImage', () => {
    it('should resize an image with the specified dimensions', async () => {
      // Mock the Image object
      const originalImage = new Image();
      Object.defineProperty(originalImage, 'width', { value: 1000 });
      Object.defineProperty(originalImage, 'height', { value: 800 });

      // Mock the canvas and context
      const mockContext = {
        drawImage: vi.fn(),
        canvas: {
          toDataURL: vi.fn().mockReturnValue('data:image/jpeg;base64,test'),
          toBlob: vi.fn().mockImplementation((callback) => callback(new Blob(['test'], { type: 'image/jpeg' }))),
        },
      };

      // Mock document.createElement to return our mock canvas
      const originalCreateElement = document.createElement;
      document.createElement = vi.fn().mockImplementation((tagName) => {
        if (tagName === 'canvas') {
          return {
            getContext: () => mockContext,
            width: 0,
            height: 0,
          };
        }
        return originalCreateElement.call(document, tagName);
      });

      // Mock the Image constructor
      global.Image = vi.fn().mockImplementation(() => {
        const img = originalImage;
        setTimeout(() => img.onload && img.onload());
        return img;
      });

      const result = await resizeImage('https://example.com/test-image.jpg', {
        width: 500,
        height: 400,
      });

      // Restore mocks
      document.createElement = originalCreateElement;

      expect(result).toEqual(expect.objectContaining({
        width: 500,
        height: 400,
      }));
    });
  });
});
