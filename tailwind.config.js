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
        "white-300": "#F2F2F2",
        black: "#000000",
        "black-100": "#101010",
      },
      backgroundImage: {
        "home-bg": "url('./assets/home/desktop/image-hero.jpg')",
        "home-bg-tablet": "url('./assets/home/tablet/image-header.jpg')",
        "zx7-speaker": "url('./assets/home/desktop/image-speaker-zx7.jpg')",
        "zx7-speaker-tablet":
          "url('./assets/home/tablet/image-speaker-zx7.jpg')",
      },
    },
    letterSpacing: {
      1: "10px",
    },
  },
  plugins: [],
};
