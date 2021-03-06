const webpack = require('webpack');
const pkg = require('./package');

const IS_PRODUCTION = process.env.NODE_ENV === 'production';

module.exports = {
  entry: `./src/${pkg.name}.js`,
  output: {
    path: __dirname + '/build',
    filename: `${pkg.name}.min.js`,
    library: 'THREE_ADDONS',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    }]
  },
  stats: {
    warnings: false
  }
};