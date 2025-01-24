/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        seagreen: {
          "100": "#016e49",
          "200": "rgba(1, 110, 73, 0.31)",
        },
        whitesmoke: {
          "100": "#f1f4f7",
          "200": "#f2f2f2",
        },
        black: "#000",
        sienna: "rgba(139, 61, 61, 0.25)",
        darkgray: {
          "100": "#9ea1a1",
          "200": "#969696",
        },
        gray: "rgba(0, 0, 0, 0.54)",
        red: "#ff0004",
        darkslategray: "#0b2b23",
        lime: "#00ff00",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        garet: "Garet",
        h1: "Inter",
        rubik: "Rubik",
        montserrat: "Montserrat",
      },
      borderRadius: {
        "3xs": "10px",
        "6xs": "7px",
        xl: "20px",
        "62xl": "81px",
        "sm-4": "13.4px",
      },
    },
    fontSize: {
      mini: "15px",
      smi: "13px",
      sm: "14px",
      "3xs": "10px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      "11xl": "30px",
      "2xs": "11px",
      "xs-4": "11.4px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq350small: {
        raw: "screen and (max-width: 350px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
