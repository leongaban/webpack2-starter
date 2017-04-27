const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
	entry: './src/app.js',
	output: {
		path: 'dist',
		filename: 'app.bundle.js'
	},
	plugins: [new HtmlWebpackPlugin()]
}