/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      rubik: ["Rubik", "sans-serif"],
      times: ['"Times New Roman"', 'Times', 'serif'], // custom font
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
