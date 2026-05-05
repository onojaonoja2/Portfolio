// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0B0F19',
        'dark-surface': '#1A1F2C',
        'dark-border': '#2D3748',
        violet: {
          400: '#9F7AEA',
          600: '#805AD5',
          800: '#553C9A',
        },
        indigo: {
          400: '#7F9CF5',
          600: '#5A67D8',
          800: '#434190',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
}