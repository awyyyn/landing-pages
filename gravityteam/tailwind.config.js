/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white-2': '#E5E5E5',
        'black-2': '#141619',
      }, 
    },
  },
  plugins: [],
}

