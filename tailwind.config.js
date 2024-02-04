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
    },
    fontSize: {
      "5xl": "1.5rem",
      base: "1rem",
      xl: "1.25rem",
      "xl-8": "1.3rem",
      mid: "1.06rem",
      "sm-9": "0.87rem",
      "mid-4": "1.09rem",
      "2xs": "0.69rem",
      "13xl": "2rem",
      "7xl": "1.63rem",
      lgi: "1.19rem",
      mini: "0.94rem",
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};