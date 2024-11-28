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
      },
    },
  },
  plugins: [require("daisyui")],
};
