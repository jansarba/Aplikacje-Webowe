/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/App.tsx"
  ],
  theme: {
    extend: {
      colors: {
        main: "#343131",
        dark: "#272525",
        darker: "#1a1919",
        darkest: "#0d0c0c",
        light: "#3B3737",
        lighter: "#413d3d",
        lightest: "#4e4a4a",
        secondary: "#A04747",
        tertiary: "#D8A25E",
        detail: "#EEDF7A",
        text: "#F1F5F9"
      }
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          'scrollbar-width': 'none',    /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      })
    }
  ],
}