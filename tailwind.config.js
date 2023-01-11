/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          grey: "#92929D",
          pink: "#FF8A62",
        },
        screens: {
          phone: "279px",
          mobile: "360px",
          tablet: "480px",
          laptop: "780px",
          laptop_l: "1000px",
          desktop: "1020px",
          xl: "1400px",
        },
      },
    },
    plugins: []
  }
  