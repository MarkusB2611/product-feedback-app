/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      md: "768px",
      lg: "1440px",
    },
    extend: {
      boxShadow: {
        select: "0px 10px 40px -7px rgba(55, 63, 104, 0.350492)",
      },
      colors: {
        background: "hsl(230deg 60% 98% / <alpha-value>)",
        "border-select": "hsl(231deg 33% 34% / <alpha-value>)",
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
        h3: [
          "18px",
          {
            lineHeight: "26px",
            letterSpacing: "-0.25px",
            fontWeight: "700",
          },
        ],
        h4: [
          "14px",
          {
            lineHeight: "20px",
            letterSpacing: "-0.20px",
            fontWeight: "700",
          },
        ],
        body1: [
          "16px",
          {
            lineHeight: "23px",
            fontWeight: "400",
          },
        ],
        body2: [
          "15px",
          {
            lineHeight: "22px",
            fontWeight: "400",
          },
        ],
        body3: [
          "13px",
          {
            lineHeight: "19px",
            fontWeight: "600",
          },
        ],
      },
      backgroundImage: {
        "gradient-desktop": "url('/desktop/background-header.png')",
        "gradient-tablet": "url('/tablet/background-header.png')",
        "gradient-mobile": "url('/mobile/background-header.png')",
      },
    },
  },
  plugins: [],
};
