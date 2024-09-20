/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        "blueHover": "hsl(210, 78%, 56%)",
        "greenHover":"hsl(146, 68%, 55%)",
        "lightHover": "hsl(227, 47%, 86%)",
        "darkHover": " hsl(228, 28%, 30%)",
      }
    },
  },
  plugins: [],
}

