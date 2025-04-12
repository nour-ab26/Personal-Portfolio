import defaultTheme from 'tailwindcss/defaultTheme'; // Import default theme

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Add your custom fonts here, extending the default sans-serif stack
        sans: ['Inter', ...defaultTheme.fontFamily.sans], // Body font
        heading: ['Lexend', ...defaultTheme.fontFamily.sans], // Heading font
      },
      colors: {
        // Define our custom violet color for easier use
        'violet-flask': '#8B5CF6',
        // You can add other palette colors here too
        'dark-bg': '#111827',
        'light-text': '#E5E7EB',
        'subtle-grey': '#374151',
      }
    },
  },
  plugins: [],
}