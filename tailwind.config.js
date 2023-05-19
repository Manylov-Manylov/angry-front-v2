import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        truegray: colors.neutral,
        gray: {
          ...colors.zinc,
          750: '#333338',
          850: '#202023',
          950: '#0C0C0E',
        },
      },
    },
  },
  plugins: [],
};
