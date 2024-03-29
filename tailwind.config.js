/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'home-background': "url('/polygon-scatter-haikei.svg')"
      },
      colors: {
        pastel: {
          white: '#EEE9DA',
          gray: '#BDCDD6',
          blue: {
            light: '#93BFCF',
            dark: '#6096B4',
            'dark-100': '#7895B2'
          },
          orange: '#FEBE8C',
          green: '#C8DBBE',
          pink: '#F7C8E0',
          red: '#B46060',
          brown: {
            light: '#9E7676',
            dark: '#594545'
          }
        }
      }
    },
  },
  plugins: [],
}
