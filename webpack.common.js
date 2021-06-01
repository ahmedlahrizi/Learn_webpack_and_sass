"use strict";

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            template: './src/template.html',
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'style-loader',//3. Inject styles into DOM
                    'css-loader',  //2. Turns css into JS
                    'sass-loader'  //1. Turn sass into css
                ],
            }
        ]
    },
}