const path = require('path')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WebpackRTLPlugin = require('webpack-rtl-plugin')

module.exports = {
  entry : './src/mine.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [ MiniCssExtractPlugin.loader, "css-loader", "sass-loader" ]
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
    })
  ]
}