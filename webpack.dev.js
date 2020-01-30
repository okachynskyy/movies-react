const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const path = require('path');


module.exports = merge(common, {
  name: 'client',
  mode: 'development',
  devtool: 'source-map',
  // devServer: {
  //   port: process.env.PORT,
  //   host: process.env.HOST,
  //   hot: true,
  //   historyApiFallback: true
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: "style.css",
      disable: true
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '/js'
  }
});
