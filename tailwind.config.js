/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "big-noodle": ['"Big Noodle Titling"', "sans-serif"],
        "big-sprout": ['"Sprout Extra Bold"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
