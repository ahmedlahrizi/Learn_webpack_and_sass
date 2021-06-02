"use strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './src/template.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: ''
                        },
                    },//3. Inject styles into DOM
                    'css-loader',  //2. Turns css into JS
                    'sass-loader',  //1. Turn sass into css
                    'postcss-loader',
                ],
            },
        ],
    },
}