import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme); // Persist theme
  }, [theme]);

  // Toggle theme handler
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transition duration-300"
    >
      {theme === 'light' ? (
        <Moon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <Sun className="h-6 w-6 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
