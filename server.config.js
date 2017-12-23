/**
 * Created by eatong on 17-12-22.
 */
const path = require('path');

module.exports = {
  devtool: 'source',
  entry: './server/server.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname)
  },
  module: {
    noParse: /node_modules/,
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader']
    }]
  }

};
