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

// Named imports for hooks and utilities - optimal for tree-shaking in Node.js v22
import {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useContext,
  useReducer,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  memo,
  createContext,
  Fragment,
  Component,
  StrictMode,
  Suspense,
  lazy,
  startTransition,
  useTransition,
  useDeferredValue,
  useId,
  useSyncExternalStore,
  useInsertionEffect,
  createElement,
  cloneElement,
  isValidElement
} from 'react';
import * as React from 'react';

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

// Re-export everything for centralized access
  export {
    useState,
    useEffect,
    useCallback,
    useMemo,
    useRef,
    useContext,
    useReducer,
    useLayoutEffect,
    useImperativeHandle,
    forwardRef,
    memo,
    createContext,
    Fragment,
    StrictMode,
    Suspense,
    lazy,
    startTransition,
    useTransition,
    useDeferredValue,
    useId,
    useSyncExternalStore,
    useInsertionEffect,
    createElement,
    cloneElement,
    isValidElement
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

