const path = require('path')
const autoprefixer = require('autoprefixer')
const glob = require('glob')
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: glob.sync('./src/**.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  watch:true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|gif)(\?v=\d+\.\d+\.\d+)?$/,
        exclude: /node_modules/,
        use: [ 
          { loader: 'file-loader' }
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer(),
        ]
      }
    }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin()
  ]
}