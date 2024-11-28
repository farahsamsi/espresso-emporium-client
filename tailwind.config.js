/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rancho: "Rancho",
        raleway: "Raleway",
      },
      backgroundImage: {
        navbarBg: "url('/src/assets/images/more/15.jpg')",
        bannerBg: "url('/src/assets/images/more/3.png')",
      },
      colors: {
        btnBg: "#E3B577",
      },
    },
  },
  plugins: [require("daisyui")],
};
