"use strict";

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
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
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/ressource",
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: { publicPath: "" }
                }
                ],
            },
        ],
    },
}