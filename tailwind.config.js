// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class', // This enables class-based dark mode
    theme: {
      extend: {
        colors: {
          // Define your custom dark mode colors (optional)
          'dark-bg': '#121212',
          'dark-surface': '#1E1E1E',
          'dark-border': '#333333',
        },
      },
    },
    plugins: [],
  }