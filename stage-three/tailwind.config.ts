import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
      },
      cursor: {
        drag: 'url(/assets/icons/drag.svg), pointer',
      },
      fontSize: {
        small: '0.75rem',
        large: '2.25rem',
        xlarge: '2.375rem',
      },
      colors: {
        'clr-background-100': 'rgba(0, 0, 0, 1)',
        'clr-background-200': 'rgba(20, 20, 20, 1)',
        'clr-background-300': 'rgba(20, 20, 20, .5)',
        'clr-background-toast': 'rgba(255, 184, 186, 1)',
        'clr-background-guide': 'rgba(219, 244, 255, 1)',
        'clr-text-100': 'rgba(255, 255, 255, 1)',
        'clr-text-200': 'rgba(121, 121, 121, 1)',
        'clr-text-300': 'rgba(56, 189, 248, .7)',
        'clr-text-danger': 'rgba(219, 0, 7, 1)',
        'clr-text-guide': 'rgba(0, 48, 143, 1)',
      },
      fontFamily: {
        Barlow: ['Barlow\\ Condensed', 'sans-serif'],
        Poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
