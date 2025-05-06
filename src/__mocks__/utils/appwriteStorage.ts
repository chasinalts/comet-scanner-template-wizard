// Mock for appwriteStorage.ts
import { vi } from 'vitest';

// Mock data
const mockFiles = [
  {
    $id: 'file-1',
    name: 'file1.jpg',
    mimeType: 'image/jpeg',
    sizeOriginal: 1024,
    chunksTotal: 1,
    chunksUploaded: 1,
  },
  {
    $id: 'file-2',
    name: 'file2.jpg',
    mimeType: 'image/jpeg',
    sizeOriginal: 2048,
    chunksTotal: 1,
    chunksUploaded: 1,
  },
];

// Mock functions
export const uploadFile = vi.fn().mockImplementation((bucketId, file, fileId, permissions) => {
  return Promise.resolve({
    $id: fileId || 'new-file-id',
    name: file.name || 'new-file.jpg',
    mimeType: file.type || 'image/jpeg',
    sizeOriginal: file.size || 1024,
    chunksTotal: 1,
    chunksUploaded: 1,
  });
});

export const getFilePreview = vi.fn().mockImplementation((bucketId, fileId) => {
  return `https://example.com/preview/${fileId}.jpg`;
});

export const getFileDownload = vi.fn().mockImplementation((bucketId, fileId) => {
  return `https://example.com/download/${fileId}.jpg`;
});

export const listFiles = vi.fn().mockResolvedValue({
  files: mockFiles,
  total: mockFiles.length,
});

export const deleteFile = vi.fn().mockResolvedValue(true);

// Export the mock functions
export default {
  uploadFile,
  getFilePreview,
  getFileDownload,
  listFiles,
  deleteFile,
};
