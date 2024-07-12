/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "header-gradient":
          "linear-gradient(to bottom, #FFFFFF 0%, #f3eeed 67%, #f9eae5 100%)",
        "button1-gradient":
          "linear-gradient(to bottom, #FC9767 0%, #EC6728 70%, #DA3822 100%)",
        "button2-gradient":
          "linear-gradient(to bottom, #E3E3E3 0%, #F8F8F8 43%, #E9E9E9 100%)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      colors: {
        orange1: "#EC6728",
      },
    },
  },
  plugins: [],
};
