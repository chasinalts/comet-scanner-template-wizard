// Theme context that manages the application's visual theme (always set to futuristic)
import { createContext, useContext, useEffect, ReactNode } from 'react';

type Theme = 'futuristic';

interface ThemeContextType {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Always use futuristic theme
  const theme: Theme = 'futuristic';

  useEffect(() => {
    localStorage.setItem('theme', theme);

    // Always remove light class and set dark class
    document.documentElement.classList.remove('light');
    document.documentElement.className = 'dark';

    // Always add futuristic-theme class to body
    document.body.classList.add('futuristic-theme');

    // Force background color
    document.body.style.backgroundColor = '#0f172a';
    document.documentElement.style.backgroundColor = '#0f172a';

    // Create a style element to ensure background color
    const styleEl = document.createElement('style');
    styleEl.textContent = `
      html, body, #root {
        background-color: #0f172a !important;
        min-height: 100vh;
      }
    `;
    document.head.appendChild(styleEl);

    return () => {
      // No cleanup needed as we always want dark theme
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};