/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      frontFamily: {
        sans: "inter, system, sans-serif",
      },
      colors: {
        brand: "rgb(var(--color-brand)/<alpha-value)",
      },
    },
  },
  plugins: [],
};
