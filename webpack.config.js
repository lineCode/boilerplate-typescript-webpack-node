/* eslint-env node */
'use strict';
const {join} = require('path');
const {DefinePlugin, LoaderOptionsPlugin} = require('webpack');
const {CheckerPlugin} = require('awesome-typescript-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


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
	plugins: [
		new CheckerPlugin(),
		new DefinePlugin({
			'process.env.NODE_ENV': '"production"'
		}),
		new LoaderOptionsPlugin({
			minimize: true,
			options: {
				context: __dirname
			}
		}),
		new UglifyJsPlugin({
			sourceMap: true
		}),
		new CleanWebpackPlugin(['lib'], {
			root: __dirname,
			verbose: false
		})
	],
	module: {
		rules: [
			{
				enforce: 'pre',
				test: /\.js$/,
				use: 'source-map-loader'
			},
			{
				enforce: 'pre',
				test: /\.ts?$/,
				use: 'source-map-loader'
			},
			{
				test: /\.ts$/,
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
	},
	performance: {
		hints: false
	}
};
