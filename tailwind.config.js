/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#D87D4A",
        secondary: "#fbaf85",
        tertiary: "#000000",
        white: "#FFFFFF",
        "white-100": "#FAFAFA",
        "white-200": "#F1F1F1",
        black: "#000000",
        "black-100": "#101010",
      },
    },
  },
  plugins: [],
};
