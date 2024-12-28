/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
      colors: {
        navy: "#00274C",
        yellow: "#FFCB05",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide", "daisyui")],
  daisyui: {
    themes: ["nord", "fantasy" ]
  },
  darkMode: ['class', '[data-theme="nord"]']
};
