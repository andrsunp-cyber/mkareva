import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        cream: '#f7f1e6',
        'cream-dark': '#ede4d2',
        sand: '#f1e9d8',
        ink: '#1f1e1c',
        muted: '#6b665d',
        accent: '#b08968',
        'accent-dark': '#8f6c4e',
        blush: '#e9c8c0',
        'blush-soft': '#f7e6e1',
        'dark-bg': '#13110f',
        'dark-surface': '#1c1916',
        'dark-surface-2': '#26221e',
        'dark-border': '#3a3530',
        'dark-text': '#f0ebe3',
        'dark-muted': '#a39a8c'
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};

export default config;
