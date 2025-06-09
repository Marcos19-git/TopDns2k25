/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        winner: ['"Winner Sans Cond"', "sans-serif"],
        ArabotoBlack: ['"Araboto Black"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
