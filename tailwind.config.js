/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#4b2aad",
        secondary: "#201445",
        terciary: "#9c8881",
        textPrimary: "#1a1715",
        textButton: "#fdfbf9",
      },
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1065px",
        lg: "1200px",
        xl: "1700px",
      },
    },
  },
  plugins: [],
};
