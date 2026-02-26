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
        'wl-blue': {
          DEFAULT: '#002147',
          light: '#003580',
          lighter: '#4A90E2',
          lightest: '#EDF3FB',
        },
        'cream': '#F7F5F0',
        'gold': '#9B8B5E',
        'gold-light': '#C4AE78',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.2em',
      },
    },
  },
  plugins: [],
};
export default config;
