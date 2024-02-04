/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mullish: ["Mulish", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        lightBlue: "#2b84ea",
        lightBlue300: "#4b94ed",
        lightBlue500: "#0b72e7",
        greenLight: "#61cea6",
        grayText: "#818597",
        lightGray: "#e2e2e2",
        grayBlue: "#344a6c",
        deepBlueHead: "#162f56",
        gray2: "#525a76",
      },
      dropShadow: {
        '3xl': ["15px 15px 15px rgba(0, 0, 0, 0.03)", "-10px -10px 10px rgba(0, 0, 0, 0.03)"],
        '4xl': ["15px 15px 15px rgba(0, 0, 0, 0.2)", "-15px -15px 15px rgba(0, 0, 0, 0.2)"]
      },
      backgroundPosition: {
        'left-4': "-500px 0px",
      },
      boxShadow: {
        custom: ["-1px 6px 6px 1px rgb(0 0 0 / 0.03), 6px -1px 6px 1px rgb(0 0 0 / 0.03)"],
      }
    },
  },
  plugins: [],
}

