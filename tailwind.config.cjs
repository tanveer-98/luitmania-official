// import {} from './src/background.jpg'
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    screens: {
      xsm: "300px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      trispace: ["Trispace", "sans-serif"],
      abril: ["Abril Fatface", "cursive"],
      raleway : ['Raleway', "sans-serif"],
      poppins : ['Poppins', "sans-serif"],
      roboto  : ['Roboto',"sans-serif"],

      
      
    },

    extend: {
      colors: {
        softBlue: "hsl(231,69% , 60%)",
        softRed: "hsl(0,94%,66%)",
        grayishBlue: "hsl(229,8%,60%)",
        veryDarkBlue: "hsl(229,31%,21%)",
        bodyColorMain: "#292929",
        mainMenu: "#383838",
        textFontColor: "#d3d3d3",
        bgcolormain :"#151617" 
      },
      backgroundImage: {
        // 'footer-texture': "url('/img/footer-texture.png')",
        dots: "url('/bg-dots.svg')",
        heroBg: "url('/background.jpg')",
        newsLetterBg: "url('/background2.jpg')",
        "gradient-mainheading": "linear-gradient(90deg, yellow 0%,  yellowgreen 70%)",
        "gradient-footer" : "linear-gradient(180deg , #3c3c3c  0% , #383838 100%)"
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        neon: "0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 40px #2196f3",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
};
