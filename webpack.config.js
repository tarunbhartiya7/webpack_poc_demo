const path = require('path');

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
				use: ['style-loader', 'css-loader'],		//these loaders are applied from right to left
				test: /\.css$/
			}
		]
	}
};

module.exports = config;	
