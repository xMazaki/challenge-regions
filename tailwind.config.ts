/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brown': {
          DEFAULT: '#361a0c',
          light: '#A67C52',
        },
        'yellow': {
          400: '#f5bf07',
        },
        'pink': {
          500: '#FF1493',
        },
      },
      maxWidth: {
        '1400': '1400px',
      },
    },
  },
  plugins: [],
}