import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const isDark = () => document.documentElement.classList.contains('dark');

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(isDark);

  useEffect(() => {
    const observer = new MutationObserver(() => setDarkMode(isDark()));

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    const next = !isDark();
    document.documentElement.classList.toggle('dark', next);
    document.documentElement.style.colorScheme = next ? 'dark' : 'light';

    try {
      localStorage.setItem('darkMode', String(next));
    } catch {
      /* storage can be unavailable in private mode */
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-[2px] border border-line text-ink transition-colors duration-200 hover:border-accent hover:text-accent"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={darkMode}
    >
      {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
};

export default DarkModeToggle;
