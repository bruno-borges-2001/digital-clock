/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        digit: 'repeat(15, calc(100%/15))',
        colon: 'repeat(2, calc(100%/2))',
      },
      gridTemplateRows: {
        digit: 'repeat(30, calc(100%/30))',
      },
    },
  },
  plugins: [],
};
