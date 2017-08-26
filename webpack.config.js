const path = require('path')
const webpack = require('webpack')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const HtmlWebpackPLugin = require('html-webpack-plugin')
const SvgSpritePlugin = require('svg-sprite-loader/plugin')
const OfflinePlugin = require('offline-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isDev = process.env.NODE_ENV !== 'production'

let plugins = [
  new webpack.EnvironmentPlugin({ NODE_ENV: 'development' }),
  new webpack.NamedModulesPlugin(),
  new webpack.optimize.ModuleConcatenationPlugin(),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'commons',
    minChunks: module => module.context && module.context.indexOf('node_modules') !== -1,
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'manifest',
    minChunks: Infinity,
  }),
  new FriendlyErrorsPlugin({
    compilationSuccessInfo: {
      messages: ['Ready on http://localhost:8080'],
    },
  }),
  new SvgSpritePlugin(),
]

if (isDev) {
  plugins = [
    ...plugins,
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPLugin({
      template: './index.html',
    }),
  ]
} else {
  plugins = [
    ...plugins,
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: true,
    }),
    new HtmlWebpackPLugin({
      template: './index.html',
      filename: '../index.html',
      minify: {
        collapseWhitespace: true,
        preserveLineBreaks: true,
      },
    }),
    new OfflinePlugin({
      version: '[hash]',
      AppCache: false,
      ServiceWorker: {
        navigateFallbackURL: '/',
        output: '../sw.js',
      },
    }),
    new BundleAnalyzerPlugin(),
  ]
}

module.exports = {
  entry: {
    app: [
      'react-hot-loader/patch',
      './client.js',
    ],
  },
  output: {
    path: isDev ? path.join(__dirname, 'public') : path.join(__dirname, 'public', 'dist'),
    filename: isDev ? '[name].js' : '[name].[chunkhash].js',
    publicPath: isDev ? '/' : '/dist/',
  },
  context: path.join(__dirname, 'src'),
  devtool: isDev ? 'cheap-module-inline-source-map' : 'source-map',
  performance: {
    hints: false,
  },
  stats: {
    children: false,
    chunks: false,
    chunkModules: false,
    chunkOrigins: false,
    modules: false,
    maxModules: 0,
  },
  devServer: {
    compress: true,
    contentBase: path.join(__dirname, 'public'),
    disableHostCheck: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    quiet: true,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.svg$/,
        loader: {
          loader: 'svg-sprite-loader',
          options: {
            symbolId: isDev ? '[name]' : '[name]-[hash:base64:4]',
          },
        },
      },
    ],
  },
}
