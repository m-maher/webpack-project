const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackRTLPlugin = require('webpack-rtl-plugin')
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin');

module.exports = {
  entry : './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [ MiniCssExtractPlugin.loader,"css-loader", "sass-loader", {
          loader: 'postcss-loader',
          options: { plugins: () => require('autoprefixer') }
        }]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new WebpackRTLPlugin({
      filename: 'style.rtl.css'
    }),
    new UnminifiedWebpackPlugin()
  ]
}