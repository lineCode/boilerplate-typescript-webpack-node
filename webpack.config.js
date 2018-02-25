/* eslint-env node */
const {join} = require('path');
const {Configuration, Plugin, Rule} = require('webpack');
const {CheckerPlugin} = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');


module.exports = {
	target: 'node',
	devtool: 'source-map',
	entry: './src/script.ts',
	output: {
		filename: 'script.min.js',
		path: join(__dirname, 'lib'),
		publicPath: '/',
		crossOriginLoading: 'anonymous'
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	//region Plugins
	plugins: [
		new CheckerPlugin(),
		new CleanWebpackPlugin(['lib'], {
			root: __dirname,
			verbose: false
		})
	],
	//endregion
	//region Loaders
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.(ts|js)$/,
				use: 'source-map-loader'
			},
			{
				test: /\.(ts|js)$/,
				use: [
					{
						loader: 'awesome-typescript-loader',
						options: {
							transpileOnly: true
						}
					}
				]
			}
		]
	}
	//endregion
};
