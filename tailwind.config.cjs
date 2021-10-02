const colors = require('tailwindcss/colors');

const config = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: {
          DEFAULT: '#FCD3BC',
        },
        secondary: {
          DEFAULT: '#9BC4F1',
        },
        background: {
          DEFAULT: '#48426D',
          dark: '#373258',
        },
        dark: '#48426D',
        light: '#FCD3BC',
      },
    },
  },
  plugins: [],
};

module.exports = config;
