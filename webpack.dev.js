"use strict";

const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

module.exports = merge (common, {
    mode: 'development',
    devtool: 'source-map', // See https://webpack.js.org/configuration/devtool/#root
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
});