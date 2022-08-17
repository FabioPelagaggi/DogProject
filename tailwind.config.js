/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './src/components/**/*.tsx',
    './src/pages/**/*.tsx',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'DM Sans, sans-serif',
      },
      colors: {
        green: {
          50: '#F7F9F9',
          100: '#DCE9E2',
          200: '#00B37E',
          700: '#00453A',
        },
        gray: {
          500: '#495057',
          900: '#212529',
        },
      },
    },
  },
  plugins: [],
}
