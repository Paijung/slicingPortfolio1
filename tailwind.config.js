/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"], // semua file html di root folder
  theme: {
    extend: {
      colors: {
        'purple': '#5E3BEE',
        'blacky': '#282938',
        'shade': '#F5FCFF',
        'purple': '#5E3BEE',
      },
      fontFamily: {
        'roboto':'roboto'
      }
    },
  },
  plugins: [],
}
