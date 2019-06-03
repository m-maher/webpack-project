const path = require('path');
const autoprefixer = require("autoprefixer");
var glob = require("glob")

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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
      }
    ]
  },
  // plugins: [
  //   new webpack.LoaderOptionsPlugin({
  //     options: {
  //       postcss: [
  //         autoprefixer(),
  //       ]
  //     }
  //   })
  // ],
  // optimization: {
  //   minimizer: [
  //     new UglifyJsPlugin()
  //   ]
  // } 
}