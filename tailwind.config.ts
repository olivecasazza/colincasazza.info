export default {
  variants: {},
  presets: [require('./tailwind/tailwind-workspace-preset')],
  content: [
    'assets/**/*.{vue,js,ts,css}',
    'tailwind/**/*.{vue,js,ts,css}',
    'components/**/*.{vue,js,ts}',
    'layouts/**/*.vue',
    'pages/**/*.vue',
    'composables/**/*.{js,ts}',
    'plugins/**/*.{js,ts}',
    'utils/**/*.{js,ts}',
    'App.{js,ts,vue}',
    'app.{js,ts,vue}',
    'Error.{js,ts,vue}',
    'error.{js,ts,vue}',
    'app.config.{js,ts}'
  ],
  plugins: [
    require('postcss-import'),
    require('autoprefixer'),
    require('@tailwindcss/aspect-ratio')
  ]
}
