const { join } = require('path');

module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': {},
    autoprefixer: {},
    tailwindcss: {
      config: join(__dirname, 'tailwind.config.js'),
    },
  },
};
