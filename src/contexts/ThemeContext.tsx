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