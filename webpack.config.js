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
				test: /\.js$/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
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
      },
      {
        test: /\.glsl$/,
        use: 'webpack-glsl-loader'
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
		}])
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
