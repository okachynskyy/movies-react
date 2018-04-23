const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    port: process.env.PORT,
    host: process.env.HOST,
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
});
