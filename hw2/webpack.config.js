const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
  const isProduction = env.production === true

  return {
    context: path.join(__dirname, 'src'),
    entry: './index.js',
    mode: isProduction ? 'production' : 'development',
    devServer: {
      port: process.env.PORT,
      host: process.env.HOST,
      hot: true
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    devtool: isProduction ? 'none' : 'source-map',
    resolve: {
      extensions: ['.js', '.jsx']
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['env']
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
};
