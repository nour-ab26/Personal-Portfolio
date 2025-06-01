// client/tailwind.config.js
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
        heading: ['Space Grotesk', ...defaultTheme.fontFamily.sans], // Or Syne, DM Sans
      },
      colors: {
        'violet-flask': '#7C3AED', // More electric violet
        'deep-indigo': '#1E1B4B',
        'light-text': '#F8F9FA',
        'subtle-grey': '#374151',
        'accent-teal': '#34D399',
        'accent-pink': '#EC4899',
      }
    },
  },
  plugins: [],
}