const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js"
    },
    target: ['web', 'es5'],
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(sass|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: "babel-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html"
        }),
        new CleanWebpackPlugin(),
        new Dotenv(),
        new webpack.DefinePlugin({
            VERSION: JSON.stringify('5fa3b9'),
        }),
        new CopyPlugin({
            patterns: [
                { from: "./app/assets/", to: "./assets" },
            ],
        }),
    ],
    mode: "development",
}