/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      black: "#000000",
      primaryText: {
        DEFAULT: "#FFD700",
      },
    },
  },
  plugins: [],
};
