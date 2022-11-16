
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {

      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'] 
      },

      colors: {
        primary:"#7F746E",
        secondary:"#9E7359",
        bg_color:"#EEEEEE",
        paid:"#EDF8F7",
        failed:"#FDEEE9",
        pending:"#FFFAEE"
      }
    },
  },
  plugins: [],
}
