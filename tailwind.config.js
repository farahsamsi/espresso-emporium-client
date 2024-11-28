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
        popularProductBg: "url('/src/assets/images/more/1.png')",
        footerBg: "url('/src/assets/images/more/13.jpg')",
        footerBg2: "url('/src/assets/images/more/24.jpg')",
      },
      colors: {
        btnBg: "#E3B577",
      },
    },
  },
  plugins: [require("daisyui")],
};
