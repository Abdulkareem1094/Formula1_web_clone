/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      space:{
        2:'2px'
      },
      colors:{
        primary:'#e10600',
        button2:'#15151e',
        textgray:'#a19498',
        bordergray:'#d0d0d2',
        green:'#006341',
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
      },
      fontFamily:{
        titilliumWebBold:'TitilliumWeb-Bold',
        titilliumWebRegular:'TitilliumWeb-Regular',
        titilliumWebSemiBold:'TitilliumWeb-SemiBold',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}