const VueLoaderPlugin = require('vue-loader/lib/plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WriteFilePlugin = require('write-file-webpack-plugin')
const path = require('path')

const dist = path.join(__dirname, 'dist')
const src = path.join(__dirname, 'src')

module.exports = {
	entry: './src/index.js',
	output: {
		path: dist,
		filename: 'bundle.js'
	},
	mode: 'development',
	module : {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: {
					cacheBusting: true
				}
			},
			{
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: 'vue-style-loader', options: {
							singleton: true
						}
					},
					{loader: 'css-loader'}
				]
			},
			{
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
		]
	},
	resolve: {
		mainFiles: ['index.js', 'index.vue'],
		extensions: ['.wasm', '.mjs', '.js', '.json', '.vue'],
		alias: {
			'components': path.resolve(__dirname, 'src/components'),
			'containers': path.resolve(__dirname, 'src/containers'),
		}
	},
	stats: {colors: true},
	plugins: [
		new CopyWebpackPlugin([{
			from: './src/assets/', to: path.join(dist, 'assets'), force: true
		}]),
    new VueLoaderPlugin()
  ],
	devServer: {
		// Open the browser window, set to false if you are in a headless browser environment.
		host: '0.0.0.0',
		port: '3000',
		open: true,
		watchOptions: {
				ignored: /node_modules/
		},
		historyApiFallback: {
      index: 'index.html'
    },
		contentBase: dist,
		hot: true
	},
	devtool: 'source-map'
}
