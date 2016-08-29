const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
	devtool: 'cheap-source-map',
	entry: [
    	path.resolve(__dirname, './src/main.js'),
  	],
  	  output: {
	    path: path.join(__dirname, './build'),
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
			}
		]
	},
	plugins: [
	    new uglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    }),
    	new ExtractTextPlugin('bundle.css')
 	]
};
