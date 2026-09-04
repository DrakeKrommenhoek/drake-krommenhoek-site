import type { Config } from 'tailwindcss';

/**
 * Tokens live in app/globals.css as CSS custom properties and are surfaced here so
 * utilities stay in sync with them. Nothing in the app should hard-code a hex value.
 */
const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: 'rgb(var(--paper) / <alpha-value>)',
        'paper-sunk': 'rgb(var(--paper-sunk) / <alpha-value>)',
        rule: 'rgb(var(--rule) / <alpha-value>)',
        ink: 'rgb(var(--ink) / <alpha-value>)',
        'ink-2': 'rgb(var(--ink-2) / <alpha-value>)',
        'ink-3': 'rgb(var(--ink-3) / <alpha-value>)',
        night: 'rgb(var(--night) / <alpha-value>)',
        'night-raised': 'rgb(var(--night-raised) / <alpha-value>)',
        'night-rule': 'rgb(var(--night-rule) / <alpha-value>)',
        'night-ink': 'rgb(var(--night-ink) / <alpha-value>)',
        'night-ink-2': 'rgb(var(--night-ink-2) / <alpha-value>)',
        clay: 'rgb(var(--clay) / <alpha-value>)',
        'clay-deep': 'rgb(var(--clay-deep) / <alpha-value>)',
        'clay-soft': 'rgb(var(--clay-soft) / <alpha-value>)',
        'clay-lift': 'rgb(var(--clay-lift) / <alpha-value>)',
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Iowan Old Style', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        meta: ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.11em' }],
        'meta-lg': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.09em' }],
      },
      maxWidth: {
        prose: '38rem',
        measure: '62ch',
        shell: '78rem',
      },
      transitionTimingFunction: {
        entrance: 'cubic-bezier(0.22, 0.61, 0.24, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
