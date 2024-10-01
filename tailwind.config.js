/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        dmSans: ['DM Sans', 'sans-serif'],

      },
      colors:{
        blueViolet: "#7a38fe",
        pictonBlue: "#3eb1fc",
        cadetBlue:"#aeb1c0",
        charCoal:"#333b54",
        richBack:"#070b24",

      }
    },
  },
  plugins: [],
}