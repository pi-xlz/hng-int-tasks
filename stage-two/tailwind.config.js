/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        DM: ['DM\\ Sans', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        // Simple 8 row grid
        8: 'repeat(2, 300px)',
      },
      colors: {
        'clr-primary-100': 'rgba(190, 18, 60, 1)',
        'clr-text-100': 'rgba(17, 24, 39, 1)',
        'clr-text-200': 'rgba(51, 51, 51, 1)',
        'clr-text-300': 'rgba(156, 163, 175, 1)',
        'clr-white': 'rgba(255, 255, 255, 1)',
        'clr-black': 'rgba(0, 0, 0, 1)',
        'clr-accent-100': 'rgba(248, 231, 235, 0.4)',
        'clr-accent-200': 'rgba(190, 18, 60, 0.2)',
        'clr-accent-300': 'rgba(243, 244, 246, 0.5)',
        'clr-accent-400': 'rgba(232, 232, 232, 1)',
        'clr-border-100': 'rgba(199, 199, 199, 1)',
      },
    },
  },
  plugins: [],
};
