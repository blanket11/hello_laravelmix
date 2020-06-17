let mix = require('laravel-mix');
require('laravel-mix-polyfill');
require('laravel-mix-ejs')

mix
.ejs('src/', 'dist/')
// polyfill
// https://laravel-mix.com/extensions/polyfill
// .polyfill({})
// javascript
.js('src/js/app.js', 'dist/assets/js/')
// Scss
.sass('src/scss/style.scss', 'dist/assets/css/')
.options(
  {
    processCssUrls: false,
  }
)

// browserSync
// URL: https://browsersync.io/docs/options/
.browserSync(
  {
    files: 'dist/**/*',
    server: 'dist',
    proxy: false
  }
);