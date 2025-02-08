/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#00274C",
        yellow: "#FFCB05",
        ceramic: "#FFFFF3",
        "s-p-1": "rgb(30, 32, 30)",
        "s-p-2":"rgb(40, 41, 40)",
        "s-p-3":"rgb(60, 61, 55)",
        "s-a-1":"rgb(236, 223, 204)",
        "s-a-2":"rgb(250, 245, 240",

        "f-primary-1": "rgb(18, 53, 36)",
        "f-primary-2": "rgb(62, 123, 39)",
        "f-primary-3": "rgb(133, 169, 71)",
        "f-primary-4": "rgb(114, 151, 98)",
        "f-secondary-1": "rgb(231, 240, 220)",
        

        "f-alt-1": "rgb(239, 227, 194)",
        "f-alt-2": "rgb(236, 223, 204)",
        "f-alt-3": "rgb(244, 237, 226)",
      },
      fontFamily: {
        standard: ["Standard", "sans-serif"],
        "standard-bold": ["Standard-Bold", "sans-serif"],
        "proxima-regular": [
          "Proxima-Regular",
          "sans-serif",
        ],
        "proxima-bold-italic": [
          "Proxima-Bold-Italic",
          "sans-serif",
        ],
        "proxima-bold": ["Proxima-Bold", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide", "daisyui")],
  daisyui: {
    themes: ["nord", "fantasy"],
  },
  darkMode: ["class", '[data-theme="nord"]'],
};
