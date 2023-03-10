/** @type {import('tailwindcss').Config} */

const path = require("path");

const pxToRem = (px, base = 16) => `${px / base}rem`;
const spacing = {
  ...Array.from(Array(2000))
    .map((_, i) => i + 1)
    .reduce((acc, px) => {
      acc[`${px}pxr`] = pxToRem(px);
      return acc;
    }, {}),
};

module.exports = {
  // content: ["./src/**/*.{js,jsx,ts,tsx}"],
  content: [path.join(__dirname, "./src/**/*.(js|jsx|ts|tsx)")],
  theme: {
    extend: {
      spacing,
      colors: {
        "main-black": "rgba(25, 25, 25, 1)",
        "main-white": "rgba(237, 237, 237, 1)",
        "font-black": "rgba(31, 31, 31, 1)",
        "main-grey": "rgba(170, 170, 170, 1)",
        "sub-grey": "rgba(130, 130, 130, 1)",
        "third-grey": "rgba(169, 169, 169, 1)",
      },
      fontFamily: {
        spline: ["Spline Sans", "Inter", "sans-serif"],
        inter: ["Inter", "Spline Sans", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        slideDown: {
          "0%": { transform: "translateY(-20vh)" },
          "100%": { transform: "translateY(0px)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20vh)" },
          "100%": { transform: "translateY(0px)" },
        },
        zoomBlurIn: {
          "0%": { transform: "scale(2.5, 2.5)", filter: "blur(48px)" },
          "100%": { transform: "scale(1, 1)", filter: "blur(0px)" },
        },
        navSlideDown: {
          "0%": { transform: "translate3d(0,-100%,0)", opacity: 0 },
          "100%": { transform: "translate3d(0,0,0)", opacity: 1 },
        },
      },
    },
    transitionTimingFunction: {
      spring: "cubic-bezier(0,0,0.2,1)",
    },
    screens: {
      mobile: "340px",
      middleMobile: "510px",
      pad: "1080px",
      middlePad: "1250px",
      desktop: "1920px",
    },
  },
  plugins: [],
};
