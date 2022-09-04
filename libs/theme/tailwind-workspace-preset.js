const defaultTheme = require('tailwindcss/defaultTheme');
const themeColors = require('./src/lib/colors.cjs');

const fontFamily = defaultTheme.fontFamily;
fontFamily['sans'] = [
  'Inconsolata',
  'monospace',
  'Courier New',
  'Roboto',
  'system-ui',
];

module.exports = {
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily,
    extend: {
      colors: themeColors,
    },
  },
};
