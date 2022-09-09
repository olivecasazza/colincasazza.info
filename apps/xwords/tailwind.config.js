const { join } = require('path');

module.exports = {
  variants: {},
  presets: [require('../../libs/theme/tailwind-workspace-preset')],
  content: [
    join(__dirname, './src/**/*.{js,vue,ts,tsx,html,css,scss}'),
    'libs/theme/src/css/**/*.*',
  ],
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
