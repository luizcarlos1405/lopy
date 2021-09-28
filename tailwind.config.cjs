const colors = require('tailwindcss/colors');

module.exports = {
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.svelte', './src/**/*.html'],
    options: {
      keyframes: true,
      // considers dynamic class bindings when purging unused classes
      // credit: https://github.com/matebek https://dev.to/matebek
      defaultExtractor: content => [
        ...(content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []),
        ...(content.match(/(?<=class:)[^=>\/\s]*/g) || []),
      ],
    },
  },
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
  variants: {
    extend: [],
  },
};
