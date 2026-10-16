import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black and white. Values live in app/globals.css so light and dark mode swap in one place.
        paper: 'rgb(var(--paper) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        rule: 'rgb(var(--rule) / <alpha-value>)',
        wash: 'rgb(var(--wash) / <alpha-value>)',
        // Former W&L navy accent, now the same as ink. Kept as a name so links and buttons keep working.
        navy: 'rgb(var(--ink) / <alpha-value>)',
        rust: '#B4532A',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-instrument)', 'Helvetica Neue', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      maxWidth: {
        page: '76rem',
        prose: '38rem',
      },
    },
  },
  plugins: [],
};
export default config;
