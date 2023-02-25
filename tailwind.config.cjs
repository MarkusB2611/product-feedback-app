/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(230deg 60% 98% / <alpha-value>)",
      },
      fontFamily: {
        Jost: ["Jost", "sans-serif"],
      },
      fontSize: {
        h1: [
          "24px",
          {
            lineHeight: "35px",
            letterSpacing: "-0.33px",
            fontWeight: "700",
          },
        ],
        h2: [
          "20px",
          {
            lineHeight: "29px",
            letterSpacing: "-0.25px",
            fontWeight: "700",
          },
        ],
        body2: [
          "15px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
      },
      backgroundImage: {
        "gradient-desktop": "url('/desktop/background-header.png')",
      },
    },
  },
  plugins: [],
};
