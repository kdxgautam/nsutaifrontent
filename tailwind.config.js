/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#121212",
          "200": "#030612",
          "300": "rgba(18, 18, 18, 0.44)",
          "400": "rgba(0, 0, 0, 0.68)",
          "500": "rgba(255, 255, 255, 0.77)",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(0, 0, 0, 0.63)",
          "800": "rgba(255, 255, 255, 0.8)",
          "900": "rgba(255, 255, 255, 0.5)",
        },
        white: "#fff",
        gainsboro: "rgba(217, 217, 217, 0)",
        royalblue: "#415ed0",
        silver: "#d2b7b7",
        lightsteelblue: "#abb9ed",
        lightgray: "#d3cece",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        "josefin-sans": "'Josefin Sans'",
      },
      borderRadius: {
        "16xl": "35px",
        "31xl": "50px",
        "3xs": "10px",
      },
      animation: {
        'fade-in': 'fadeIn 0.15s ease-in-out',
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
    },
    
  },
  corePlugins: {
    preflight: false,
  },
};