/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  important:"#root",
  theme: {
    extend: {
      fontFamily: {
       poppins: [ "Poppins", "serif"],
       montserrat:["Montserrat", "serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark', 'synthwave'], 
  },
}

