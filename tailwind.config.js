/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-blue": "#00005e",
        "light-pink": "#fff3ee",
        "dark-pink": "#f5d3cc",
      },
      fontFamily: {
        robotoFont: ["Roboto", "sans-serif"],
        latoFont: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
