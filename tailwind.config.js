/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      borderRadius: {
        '6xl': '3rem',  // Puedes ajustar este valor según lo necesites
      },
      colors: {
        'je-blue': '#055FB9',
        'je-gray': '#E3E3E3',
        'je-red': '#BF4D38',
        'je-black': '#333333',
      },
    },
  },
  plugins: [],
}

