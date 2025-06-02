import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        heading: ['Lexend', ...defaultTheme.fontFamily.sans], // Using Lexend for headings
      },
      colors: {
        'violet-flask': '#8B5CF6',
        'deep-indigo': '#1E1B4B', // For Navbar scrolled bg
        'dark-bg': '#111827',     // Main dark background
        'light-text': '#E5E7EB',   // Main light text
        'subtle-grey': '#374151', // For cards or secondary elements
        'accent-teal': '#34D399',
        'accent-pink': '#EC4899',
      }
    },
  },
  plugins: [],
}