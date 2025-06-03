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
        heading: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'violet-flask': '#8B5CF6',
        'accent-teal': '#64FFDA', // Brighter, digital teal
        'dark-bg': '#0A192F',
        'section-bg-alt': '#112240', // For cards and distinct sections
        'light-text-heading': '#CCD6F6',
        'light-text-body': '#A8B2D1',
        'border-lines': '#233554',
      },
      textShadow: {
        'neon-violet': '0 0 5px #8B5CF6, 0 0 10px #8B5CF6',
        'neon-teal': '0 0 5px #64FFDA, 0 0 10px #64FFDA',
      },
      boxShadow: {
        'card-hover': '0 10px 30px -15px rgba(2,12,27,0.7)', // Subtle dark shadow
        'violet-glow': '0 0 15px rgba(139, 92, 246, 0.3)',
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const newUtilities = {};
      Object.entries(theme('textShadow')).forEach(([key, value]) => {
        newUtilities[`.${e(`text-shadow-${key}`)}`] = { textShadow: value };
      });
      addUtilities(newUtilities);
    }
  ],
};