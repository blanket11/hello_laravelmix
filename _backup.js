let mix = require('laravel-mix');
mix
// javascript
.js('src/js/app.js', 'dist/assets/js/')
// Scss
.sass('src/scss/style.scss', 'dist/assets/css/',
  {
    sassOptions: {
      outputStyle: 'compressed'
    }
  }
).options(
  {
    postCss: [
      require('postcss-flexbugs-fixes')(),
      require('autoprefixer')(
        {
          grid: true
        }
      ),
    ],
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