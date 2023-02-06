/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/modules/**/*.{js,ts,jsx,tsx}",
    "./src/core/styles/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      colors: {
        DarkBackground:"#161617",
        DarkBorder:"#404040",
        LightBorder:"#D5D5D5",
        DarkActionColor: "#1C92FF",
        LightActionColor:"#613CEA",
        DarkFontColor1:"#B3B3B3",
        DarkFontColor2:"#FFFFFF",
        DarkOddsButton:"#292929",
        BannerFontColor:"#FFFFFF",
        DarkSecondaryBackground : "#282B2E",
        DarkBetSlipColor:"#161617",
        transparent:"transparent",
        DarkActionColorTransparent:"#425faa"
      },
      fontFamily: {
        inter:'Inter'
      },
      fontSize:{
        normal: ['1.125rem', '1.375rem'],
        bold: ['1.25rem', '1.5rem'],
        sub: ['0.75rem', '0.9375rem'],
        bannersub: ['1rem', '1.19rem'],
        extrabold:['1.875rem', '2.27rem']
      }
  },
  plugins: [],
};
