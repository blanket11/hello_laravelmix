let mix = require('laravel-mix');
require('laravel-mix-polyfill');
require('laravel-mix-ejs')

mix
.ejs('resources/views/**/*.ejs', 'public',{},{
  root: 'resources/views',
  base: 'resources/views',
  partials: 'resources/views/partials'
})
// [polyfill](https://laravel-mix.com/extensions/polyfill)
.polyfill({})

// javascript
.js('resources/js/app.js', 'public/assets/js/')

// Scss
.sass('resources/scss/style.scss', 'public/assets/css/')
.options({
    processCssUrls: false,
  }
)

// browserSync
// URL: https://browsersync.io/docs/options/
.browserSync(
  {
    files: 'public/**/*',
    server: 'public',
    proxy: false
  }
);