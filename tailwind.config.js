// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Links
        'base-text-weak-light': '#6B7280',
        'base-text-strong-light': '#111827',
        'base-text-weak-dark': '#9CA3AF',
        'base-text-strong-dark': '#F9FAFB',
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        '.link': {
          '@apply focus:outline-none rounded hover:underline': {},
          color: theme('colors.base-text-weak-light'),
          
          '.dark &': {
            color: theme('colors.base-text-weak-dark'),
          },
          '&:hover': {
            color: theme('colors.base-text-strong-light'),
          },
          '.dark &:hover': {
            color: theme('colors.base-text-strong-dark'),
          },
        },

      });
    },
  ],
};