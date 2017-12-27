const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
	entry: './src/index.js',	//entry point relative path
	output: {
		path: path.resolve(__dirname, 'dist'),	//requires absolute path, create a dist folder and save inside as bundle.js
		filename: 'bundle.js'	//you can name this anything
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				// use: ExtractTextPlugin.extract(['style-loader', 'css-loader', 'sass-loader']),		//these loaders are applied from right to left
				loader: ExtractTextPlugin.extract({
					loader: ['css-loader', 'sass-loader']
				}),
				test: /\.scss$/
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
	],
	watch: true
};

module.exports = config;	
