const path = require('path');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');

// const ETPConfig = new ExtractTextPlugin('style/main.css', { allChunks: true });

module.exports = {
    mode: 'development',
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js",
    },
    devtool: 'source-map',
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            query: {
                presets: ['react']
            },
            include: [
                path.resolve(__dirname, "src")
            ],
            exclude: [
                path.resolve(__dirname, "node_modules")
            ],
        }, {
            test: /\.scss$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader" 
            }, {
                loader: "sass-loader"
            }]
        }],
    },
}