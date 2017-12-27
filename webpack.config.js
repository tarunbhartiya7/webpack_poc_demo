const path = require('path');

const config = {
	entry: './src/index.js',	//entry point relative path
	output: {
		path: path.resolve(__dirname, 'dist'),	//requires absolute path, create a dist folder and save inside as bundle.js
		filename: 'bundle.js'	//you can name this anything
	}
};

module.exports = config;