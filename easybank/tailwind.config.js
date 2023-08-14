/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-blue" : "hsl(233, 26%, 24%)",
        "primary-green" : "hsl(136, 65%, 51%)",
        "primary-cyan" : "hsl(192, 70%, 51%)",
        "neutral-grayish" : "hsl(233, 8%, 62%)",
        "neutral-blue" : "hsl(220, 16%, 96%)",
        "neutral-gray" : "hsl(0, 0%, 98%)",
        "neutral-white" : "hsl(0, 0%, 100%)",
      }, 
      fontFamily: {
        "public-sans": ['Public Sans', 'sans-serif']
      }, 
      screens: {
        "tablet": '481px',
        "laptop": "769px",
        "desktop": "1025px",
        "widescreen": "1201px", 
      }
    },
  },
  plugins: [],
}

