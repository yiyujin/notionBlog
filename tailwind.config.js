/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', //just in time
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}",
  ],
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
