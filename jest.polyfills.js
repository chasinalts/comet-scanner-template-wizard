// Polyfills for Jest testing environment

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
