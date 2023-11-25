/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#DD1C1A",
      white: "#ffffff",
      black: "#121212",
      textColor: "#444444",
      textColorDark: "#333333",
      grey: "#ebebeb",
    },
    fontFamily: {
      sans: ["Sora", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
