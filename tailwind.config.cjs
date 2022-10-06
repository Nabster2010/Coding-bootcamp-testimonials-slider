/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        DarkBlue: "hsl(240, 38%, 20%)",
        GrayishBlue: "hsl(240, 18%, 77%)",
      },
      fontFamily: {
        Inter: "Inter, sans-serif",
      },
    },
  },

  plugins: [],
};
