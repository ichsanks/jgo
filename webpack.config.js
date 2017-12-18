var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'js/app.js'
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			},
			{
				test: /\.pug$/,
				use: 'pug-loader'
			}
		]
	},
	devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
	plugins: [
		new HtmlWebpackPlugin({
			inject: true,			
			template: './src/index.pug',
			filename: 'index.html'
		}),
		new HtmlWebpackPlugin({
			inject: true,			
			template: './src/login.pug',
			filename: 'login.html'
		}),
		new ExtractTextPlugin({
			filename: 'css/app.css',	
			disable: false,
			allChunks: true
		})
	]
}