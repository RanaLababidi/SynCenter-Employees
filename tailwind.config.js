/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#050064",
        pistach:"#41e0d1",
        background:"#030712",
        gray:"#111827",
        lightgray:"#212e49"

      },
      fontFamily: {
        title: ["title", "sans-serif"],
        content: ["content", "sans"],


      },
    },
  },
  plugins: [],
};
