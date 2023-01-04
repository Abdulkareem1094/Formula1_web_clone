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
        button2:'#15151e',
        textgray:'#a19498',
        bordergray:'#d0d0d2',
      },
      fontSize:{
        xxs:'10px',
        ms:'11px',
      },
      borderWidth:{
        1:'1px'
      },
      boxShadow:{
        xxs:'0 2px 0 0 rgba(0,0,0,.2)',
      }
    },
  },
  plugins: [],
}