/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#e10600',
        button2:'#1f1f27',
        textgray:'#a19498',
      },
      fontSize:{
        xxs:'10px',
      }
    },
  },
  plugins: [],
}