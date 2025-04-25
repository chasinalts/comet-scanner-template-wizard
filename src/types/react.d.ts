// Type definitions for React
import * as React from 'react';

// This augments the 'react' module to ensure our custom imports work correctly
declare module 'react' {
  // Re-export all React exports
  export * from 'react';

  // Explicitly export commonly used hooks
  export const useState: typeof React.useState;
  export const useEffect: typeof React.useEffect;
  export const useRef: typeof React.useRef;
  export const useCallback: typeof React.useCallback;
  export const useMemo: typeof React.useMemo;
  export const useContext: typeof React.useContext;
  export const useReducer: typeof React.useReducer;
  export const createContext: typeof React.createContext;
  export const forwardRef: typeof React.forwardRef;
  export const Fragment: typeof React.Fragment;
  export const Component: typeof React.Component;

  // Types
  export type ReactNode = React.ReactNode;
  export type RefObject<T> = React.RefObject<T>;
  export type ChangeEvent<T> = React.ChangeEvent<T>;
  export type FormEvent<T> = React.FormEvent<T>;
  export type ErrorInfo = React.ErrorInfo;
  export type InputHTMLAttributes<T> = React.InputHTMLAttributes<T>;
  export type SelectHTMLAttributes<T> = React.SelectHTMLAttributes<T>;
  export type DragEvent<T> = React.DragEvent<T>;

  // Fix for JSX type
  export namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    interface ElementClass extends React.Component<any> {
      render(): React.ReactNode;
    }
    interface ElementAttributesProperty { props: {}; }
    interface ElementChildrenAttribute { children: {}; }

    interface IntrinsicAttributes extends React.Attributes {}
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}

    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }

  // Default export
  export default React;
}
