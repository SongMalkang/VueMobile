const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  darkMode: 'class',
  theme: {},
  plugins: [require("@tailwindcss/forms")],
}
