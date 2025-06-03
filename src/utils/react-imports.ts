/**
 * Centralized React imports for consistent usage across the project
 * Optimized for Node.js v18+ and modern React patterns
 * This helps with tree-shaking and ensures consistent React usage patterns
 */
import React, {
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
  type ReactNode,
  type RefObject,
  type ChangeEvent,
  type FormEvent,
  type ErrorInfo,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type DragEvent,
  type JSX
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

