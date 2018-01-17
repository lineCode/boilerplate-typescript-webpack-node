/* eslint-env node */
import {join} from 'path';
import {DefinePlugin, LoaderOptionsPlugin, Configuration, Plugin, Rule} from 'webpack';
import {CheckerPlugin} from 'awesome-typescript-loader';
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


export default function(): Configuration {
	//region Plugins
	const plugins: Plugin[] = [
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
	];
	//endregion

	//region Loaders
	const rules: Rule[] = [
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
	];
	//endregion

	return {
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
		plugins,
		module: {
			rules
		},
		performance: {
			hints: false
		}
	};
}
