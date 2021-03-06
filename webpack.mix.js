const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
    .js('resources/assets/js/app.js',           'public/js')

    .sass('resources/assets/sass/app.scss',     'public/css')
    .sass('resources/assets/sass/Chart.scss',   'public/css')
    .sass('resources/assets/sass/PHPlot.scss',  'public/css')

    .copy('resources/assets/js/PHPlot.js',      'public/js')
    .copy('resources/assets/js/Dummy.js',       'public/js')
    .copy('resources/assets/js/Mainchart.js',   'public/js')
    .copy('resources/assets/js/GTrader.js',     'public/js')

    .copy('node_modules/nouislider/distribute/nouislider.min.js',   'public/js')
    .copy('node_modules/nouislider/distribute/nouislider.min.css',  'public/css')

    //.copy('node_modules/@danielfarrell/bootstrap-combobox/js/bootstrap-combobox.js',    'public/js')
    //.copy('node_modules/@danielfarrell/bootstrap-combobox/css/bootstrap-combobox.css',  'public/css')
    ;
