// React imports helper
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
  Component
} from 'react';

// Re-export React
export default React;

// Re-export React hooks and components
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
  Component
};

// Re-export React types
export type ReactNode = React.ReactNode;
export type RefObject<T> = React.RefObject<T>;
export type ChangeEvent<T> = React.ChangeEvent<T>;
export type FormEvent<T> = React.FormEvent<T>;
export type ErrorInfo = React.ErrorInfo;
export type InputHTMLAttributes<T> = React.InputHTMLAttributes<T>;
export type SelectHTMLAttributes<T> = React.SelectHTMLAttributes<T>;
export type DragEvent<T> = React.DragEvent<T>;
export type JSX = React.JSX;
