const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshPWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const path = require('path');

const isDevelopment = process.env.NODE_ENV !== "production";

let mode = process.env.NODE_ENV || "development";

const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({template: "./src/index.html"}),
];

if (isDevelopment) {
  plugins.push(new ReactRefreshPWebpackPlugin());
}

module.exports = {
 mode: mode,

 output: {
  path: path.resolve(__dirname, 'dist'),
  assetModuleFilename: "images/[hash][ext][query]",
 },

 module: {
  rules: [
    {
      test: /\.(png|jpe?g|gif|svg|ico)$/,
      type: "asset"
    },
    {
      test: /\.(s[ac]|c)ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    },
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }
  ]
 },

 plugins: plugins,

 resolve: {
  extensions: [".js", ".jsx"],
 },

//  devtool: 'source-map',
 devServer: {
  hot: true,
  static: './dist'
 }
}