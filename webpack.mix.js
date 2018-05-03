let mix = require('laravel-mix');
const path = require('path');
const webpack = require('webpack');

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

mix.js('resources/assets/js/app.js', 'public/js/app.js')
    .js('resources/assets/js/backoffice.js', 'public/js/backoffice.js')
    .js('resources/assets/js/backoffice/login.js', 'public/js/adminlogin.js')
    .sass('resources/assets/sass/backoffice/main.scss', 'public/css/backoffice/backoffice.css')
    .sass('resources/assets/sass/app.scss', 'public/css/app.css');


mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.modernizrrc.js$/,
                use: [ 'modernizr-loader' ]
            },
            {
                test: /\.modernizrrc(\.json)?$/,
                use: [ 'modernizr-loader', 'json-loader' ]
            }
        ]
    },
    resolve: {
        alias: {
            modernizr$: path.resolve(__dirname, '.modernizrrc')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "classie": "desandro-classie/classie.js",
        })
    ]
});
