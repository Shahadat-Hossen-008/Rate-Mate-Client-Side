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
       lato:["Lato", "serif"],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

