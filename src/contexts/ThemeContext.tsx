import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Theme = 'dark' | 'light' | 'futuristic';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return (savedTheme as Theme) || 'futuristic'; // Default to futuristic theme
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    // Always remove both theme classes
    document.documentElement.classList.remove('light', 'dark');
    document.body.classList.remove('futuristic-theme');

    // Set the correct theme class directly to avoid duplicates
    if (theme === 'futuristic' || theme === 'dark') {
      document.documentElement.className = 'dark';
      if (theme === 'futuristic') {
        document.body.classList.add('futuristic-theme');
      }
    } else if (theme === 'light') {
      document.documentElement.className = 'light';
    }
    // eslint-disable-next-line no-console
    console.log('Theme effect:', theme, document.documentElement.classList.value);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      if (prev === 'dark') return 'light';
      if (prev === 'light') return 'futuristic';
      return 'dark';
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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