/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "fullscreen": {"min" : "1280px", "max" : "1530px"},
      },
      maxWidth: {
        "1530" : "1530px"
      }
    },
  },
  plugins: [],
}

