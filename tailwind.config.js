/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    extend: {
      fontFamily: {
        WorkSans: [ 'WorkSans', 'sans-serif'],
        Urbanist: ['Urbanist', 'sans-serif'],
        Roboto: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
