var path = require('path')
var webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname,'./src/main.js')
  ],
  output: {
  	path: path.resolve(__dirname, './build'),
    publicPath: 'http://localhost:8080/build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.html$/,
        loader: 'vue-html'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url',
        query: {
          limit: 10000,
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
      extensions: ['', '.js', '.scss'],
    },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
      new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
      // new ExtractTextPlugin('bundle.css')
  ]
}
