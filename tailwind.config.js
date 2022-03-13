module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#fa5553",
      link: "#fa5553",
      white: "#FFF",
      black: "#000",
      customgray: "#e6e6e6"
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
