/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        bolder : ['Bolder', 'sans-serif'],
        regu : ['Regular', 'san-serif'],
        semi : ['SemiBold', 'san-serif']
      }
    },
  },
  plugins: [],
}