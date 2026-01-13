/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["nunito", "sans-serif"],
      },
      // Material Design 3 Color Tokens (Dark Theme Base)
      colors: {
        md: {
          surface: "#141218", // Dark background
          "surface-variant": "#49454F", // Card background
          primary: "#D0BCFF", // Main action color (Light Purple)
          "primary-container": "#4F378B",
          secondary: "#CCC2DC", // Less prominent text
          tertiary: "#EFB8C8", // Vibrant accents (Pinkish)
          "tertiary-container": "#633B48",
          error: "#F2B8B5",
          "on-surface": "#E6E1E5", // Main text
          "on-surface-variant": "#CAC4D0", // Subtitle text
        },
      },
      borderRadius: {
        // Material You relies heavily on large rounded corners
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
    },
  },
  plugins: [],
};
