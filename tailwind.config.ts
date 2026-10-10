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
        paper: '#F4F1EA',
        ink: '#16181D',
        muted: '#5B5F66',
        rule: '#D9D4C7',
        navy: '#0B2545',
        rust: '#B4532A',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-instrument)', 'Helvetica Neue', 'sans-serif'],
        mono: ['var(--font-mono)', 'Menlo', 'monospace'],
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
