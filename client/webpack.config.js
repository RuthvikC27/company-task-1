const HtmlWebpackPlugin = require('html-webpack-plugin')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-source-map',
  output: {
    filename: '[name].[contenthash].js'
  },
  devServer: {
    historyApiFallback: {
      index: '/'
    },
    inline: true,
    contentBase: './dist',
    port: 5000,
    proxy: {
      "/api/**": {
        target: 'http://localhost:5000',
        secure: false
      }
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|gif|png|svg)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    new CaseSensitivePathsPlugin()
  ]
}