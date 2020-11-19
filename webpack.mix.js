const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

//paged css
mix.sass('resources/scss/main.scss', 'public/css');
mix.sass('resources/scss/error.scss', 'public/css');

//paged js
mix.js('resources/js/app.js', 'public/js');
mix.js('resources/js/home/index.js', 'public/js/home');

