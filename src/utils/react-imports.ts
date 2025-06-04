/**
 * Centralized React imports for consistent usage across the project
 * Optimized for Node.js v22+ and modern React 18+ patterns with ESM
 * 
 * Node.js v22 provides excellent ESM support and React 18+ uses modern export patterns.
 * This utility follows current best practices:
 * - Named imports for better tree-shaking
 * - Consistent import patterns across the codebase
 * - TypeScript-first approach with proper type exports
 * - ESM-compatible structure for Node.js v22+
 */

// Core React import - using default import as recommended for React 18+
import React from 'react';

// Named imports for hooks and utilities - optimal for tree-shaking in Node.js v22
import {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
  useReducer,
  createContext,
  forwardRef,
  Fragment,
  Component,
  Suspense,
  lazy,
  startTransition,
  useDeferredValue,
  useId,
  useTransition,
} from 'react';

// Type imports - separated for clarity and better TypeScript performance
import type {
  ReactNode,
  RefObject,
  ChangeEvent,
  FormEvent,
  ErrorInfo,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  DragEvent,
  JSX,
} from 'react';

// Re-export React
export default React;

// Re-export commonly used hooks and React 18+ features
export {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useContext,
  useReducer,
  createContext,
  forwardRef,
  Fragment,
  Component,
  Suspense,
  lazy,
  startTransition,
  useDeferredValue,
  useId,
  useTransition
};

// Re-export types
export type {
  ReactNode,
  RefObject,
  ChangeEvent,
  FormEvent,
  ErrorInfo,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  DragEvent,
  JSX
};

