// Polyfills for Jest testing environment - COMET Scanner Template Wizard

// Node.js built-in modules for browser environment
const { TextEncoder, TextDecoder } = require("util");
const { randomUUID } = require("crypto");
const { URL, URLSearchParams } = require("url");

// Make TextEncoder and TextDecoder available globally
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Enhanced crypto polyfill
global.crypto = {
  ...global.crypto,
  randomUUID,
  getRandomValues: (arr) => {
    if (arr instanceof Uint8Array) {
      for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(Math.random() * 256);
      }
    }
    return arr;
  },
};

// URL and URLSearchParams polyfill
global.URL = URL;
global.URLSearchParams = URLSearchParams;

// AbortController polyfill
if (!global.AbortController) {
  const { AbortController, AbortSignal } = require("abort-controller");
  global.AbortController = AbortController;
  global.AbortSignal = AbortSignal;
}

// Enhanced structuredClone polyfill
global.structuredClone =
  global.structuredClone ||
  ((obj) => {
    if (obj === null || typeof obj !== "object") return obj;
    if (obj instanceof Date) return new Date(obj.getTime());
    if (obj instanceof Array) return obj.map((item) => structuredClone(item));
    if (typeof obj === "object") {
      const cloned = {};
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          cloned[key] = structuredClone(obj[key]);
        }
      }
      return cloned;
    }
    return obj;
  });

// Enhanced performance polyfill
global.performance = {
  ...global.performance,
  now: () => Date.now(),
  mark: jest.fn(),
  measure: jest.fn(),
  clearMarks: jest.fn(),
  clearMeasures: jest.fn(),
  getEntries: jest.fn(() => []),
  getEntriesByName: jest.fn(() => []),
  getEntriesByType: jest.fn(() => []),
};

// Animation frame polyfills
global.requestAnimationFrame =
  global.requestAnimationFrame ||
  ((callback) => {
    return setTimeout(callback, 16);
  });

global.cancelAnimationFrame =
  global.cancelAnimationFrame ||
  ((id) => {
    clearTimeout(id);
  });

// Enhanced getComputedStyle polyfill
global.getComputedStyle =
  global.getComputedStyle ||
  ((element) => ({
    getPropertyValue: (prop) => "",
    getPropertyPriority: () => "",
    setProperty: jest.fn(),
    removeProperty: jest.fn(),
    item: () => "",
    length: 0,
    cssText: "",
    parentRule: null,
  }));

// Mock ResizeObserver
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Environment detection
global.__DEV__ = process.env.NODE_ENV !== "production";
global.__TEST__ = process.env.NODE_ENV === "test";
global.__PROD__ = process.env.NODE_ENV === "production"; // Polyfills for Jest testing environment

// TextEncoder/TextDecoder polyfill for Node.js environment
import { TextEncoder, TextDecoder } from "util";

// Make TextEncoder and TextDecoder available globally
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Polyfill for crypto.randomUUID
import { randomUUID } from "crypto";
global.crypto = {
  ...global.crypto,
  randomUUID,
};

// Polyfill for URL and URLSearchParams
import { URL, URLSearchParams } from "url";
global.URL = URL;
global.URLSearchParams = URLSearchParams;

// Polyfill for AbortController
import { AbortController, AbortSignal } from "abort-controller";
global.AbortController = AbortController;
global.AbortSignal = AbortSignal;

// Polyfill for structuredClone
global.structuredClone = (obj) => {
  return JSON.parse(JSON.stringify(obj));
};

// Polyfill for performance.now()
global.performance = {
  ...global.performance,
  now: () => Date.now(),
};

// Polyfill for requestAnimationFrame
global.requestAnimationFrame = (callback) => {
  return setTimeout(callback, 16);
};

global.cancelAnimationFrame = (id) => {
  clearTimeout(id);
};

// Polyfill for getComputedStyle
global.getComputedStyle = () => ({
  getPropertyValue: () => "",
});
