import type { Config } from 'tailwindcss'
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        dm: {
          bg: "#0e0e0e",
          surface: "#141414",
          text: "#f2f2f2",
          subtext: "#cfcfcf",
          accent: "#d9b77c"
        }
      },
      borderRadius: {
        '2xl': '1rem'
      }
    },
  },
  plugins: [],
}
export default config
