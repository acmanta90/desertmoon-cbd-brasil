import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0e0e0e',
        foreground: '#f5f5f5',
        accent: '#d9b77c',
      },
      boxShadow: {
        soft: '0 20px 45px -20px rgba(0, 0, 0, 0.45)',
      },
      borderRadius: {
        soft: '1.25rem',
      },
    },
  },
  plugins: [],
};

export default config;
