let mix = require('laravel-mix');
require('laravel-mix-polyfill');
require('laravel-mix-ejs');
require('laravel-mix-eslint');
require('laravel-mix-stylelint');

const styleLintPlugin = require('stylelint-webpack-plugin');

mix
.ejs('src/hoge/views/**/*.ejs', 'dist/hoge',{},{
  root: 'src/hoge/views',
  base: 'src/hoge/views',
  partials: 'src/hoge/views/partials'
})
// [polyfill](https://laravel-mix.com/extensions/polyfill)
.polyfill({})

// javascript
.js('src/hoge/js/app.js', 'dist/hoge/assets/js/')
.eslint()

// Scss
.sass('src/hoge/scss/style.scss', 'dist/hoge/assets/css/')
.options({
    processCssUrls: false,
  }
)
.webpackConfig({
  plugins: [
      new styleLintPlugin({
          files: ['src/hoge/**/*.scss'],
          configFile: path.join(__dirname, '../.stylelintrc.js'),
          syntax: 'scss'
      })
  ]
})

// browserSync
// URL: https://browsersync.io/docs/options/
.browserSync(
  {
    files: 'dist/hoge/**/*',
    server: 'dist/hoge',
    proxy: false
  }
);
