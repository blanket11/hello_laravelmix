let mix = require('laravel-mix');
require('laravel-mix-polyfill');
require('laravel-mix-ejs');
require('laravel-mix-eslint');
require('laravel-mix-stylelint');
require('laravel-mix-copy-watched');

const styleLintPlugin = require('stylelint-webpack-plugin');

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
.eslint()

// Scss
.sass('resources/scss/style.scss', 'public/assets/css/')
.options({
    processCssUrls: false,
  }
)
.webpackConfig({
  plugins: [
      new styleLintPlugin({
          files: ['resources/scss/**/*.scss'],
          configFile: path.join(__dirname, '../.stylelintrc.js'),
          syntax: 'scss'
      })
  ]
})

.copyWatched('resources/images/*', 'public/assets/images')

// browserSync
// URL: https://browsersync.io/docs/options/
.browserSync(
  {
    host: 'localhost',
    port: 3000,
    files: 'public/**/*',
    server: 'public',
    proxy: false
  }
);