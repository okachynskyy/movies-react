const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT,
    host: process.env.HOST,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: "style.css",
      disable: true
    })
  ],
  devServer: {
    hot: true
  }
});
