import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "clr-primary-100": "rgba(4, 4, 4, 1)",
        "clr-primary-200": "rgba(27, 27, 27, 1)",
        "clr-primary-300": "rgba(121, 121, 121, 1)",
        "clr-border": "rgba(24, 24, 24, 1)",
        "clr-shadow": "0px 0px 10px 0px #4992FF",
      },
    },
  },
  plugins: [],
};
export default config;
