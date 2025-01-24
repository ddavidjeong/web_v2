/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
     
      colors: {
        'navy': "#00274C",
        'yellow': "#FFCB05",
        'ceramic': "#FFFFF3",
        'snow': "F3F3E0",
        'arctic-blue': "CBDCEB",
        'navy': "133E87",
        'ice-blue':"608BC1"
      },
      fontFamily: {
        'standard': ['Standard', 'sans-serif'],
        'standard-bold': ['Standard-Bold', 'sans-serif'],
        'proxima-regular':['Proxima-Regular', 'sans-serif'],
        'proxima-bold-italic':['Proxima-Bold-Italic', 'sans-serif'],
        'proxima-bold': ['Proxima-Bold', 'sans-serif']
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide", "daisyui")],
  daisyui: {
    themes: ["nord", "fantasy" ]
  },
  darkMode: ['class', '[data-theme="nord"]']
};
