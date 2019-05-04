const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");



module.exports = {
	entry: {
		app: [
			"./src/ui-tests/index.js",
			"./src/ui-tests/index.css"
		]
	},
	resolve: {
		extensions: ['.js']
	},
	module: {
		rules: [{
				test: /\.js$/,
				exclude: /node_modules/,
				use: "babel-loader"
			},
			{
				test: /\.html$/,
				use: "html-loader"
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader"
				],
			},
			{
				test: /.(png|woff|woff2|eot|ttf|svg)(\?.*)?$/,
				use: {
					loader: "url-loader",
					options: {
						limit: 100000
					}
				}
			}
		]
    },
    mode: "development",
    output: {
        publicPath: "/",
        filename: "[name].[hash].js"
    },
    // devtool: "#eval",
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].[hash].css",
			chunkFilename: "[id].[hash].css"
		}),
		new HtmlWebpackPlugin({
			template: "./src/ui-tests/index.html"
		})
    ],
    devServer: {
        publicPath: "/",
        inline: true,
        contentBase: "/",
        disableHostCheck: true //TODO: Remove when bug is fixed! https://github.com/webpack/webpack-dev-server/issues/1604
    }
}
