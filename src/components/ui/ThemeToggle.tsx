import { useTheme } from '../../contexts/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  // Get the appropriate background and text colors based on theme
  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80';
      case 'light':
        return 'bg-white/80 text-gray-800 hover:bg-gray-100/80';
      case 'futuristic':
        return 'bg-blue-900/60 text-cyan-300 hover:bg-blue-800/70 border border-cyan-500/50 shadow-[0_0_10px_rgba(0,200,255,0.3)]';
      default:
        return 'bg-gray-800/80 text-yellow-400 hover:bg-gray-700/80';
    }
  };

  // Get the appropriate icon based on theme
  const getThemeIcon = () => {
    switch (theme) {
      case 'dark':
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        );
      case 'light':
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        );
      case 'futuristic':
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      data-testid="theme-toggle"
      className={`
        fixed top-4 right-4 p-2 rounded-full
        flex items-center justify-center
        backdrop-blur-sm
        ${getThemeClasses()}
        shadow-lg
        transition-colors
        z-50
      `}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      {getThemeIcon()}
    </motion.button>
  );
};

export default ThemeToggle;