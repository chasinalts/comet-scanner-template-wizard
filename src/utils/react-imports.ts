// React imports helper
import * as React from 'react';

// Re-export React
export default React;

// Re-export commonly used hooks and types
export const {
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
} = React;

// Re-export types
export type ReactNode = React.ReactNode;
export type RefObject<T> = React.RefObject<T>;
export type ChangeEvent<T> = React.ChangeEvent<T>;
export type FormEvent<T> = React.FormEvent<T>;
export type ErrorInfo = React.ErrorInfo;
export type InputHTMLAttributes<T> = React.InputHTMLAttributes<T>;
export type SelectHTMLAttributes<T> = React.SelectHTMLAttributes<T>;
export type DragEvent<T> = React.DragEvent<T>;
export type JSX = React.JSX;
