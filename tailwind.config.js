/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        gray: '#242424',
        dark: '#000000',
        light: '#FFFFFF',
        yellow: '#FFBE42',
        lgray:'#3D3C3C',
        wordcolor: '#1F285B',
        readmore: '#52CFF2',
      }
    },
  },
  plugins: [],
}