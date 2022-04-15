module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        100: "#bdcceb",
        200: "#87a4df",
        300: "#4c74c5",
        400: "#2457bb",
        500: "#1245ac",
        600: "#073898", // ここを維持
        700: "#052e80",
        800: "#03163d",
        900: "#020E27",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};