const path = require('path');

module.exports = {
  entry: {
    'dist/apprun-leaflet': './src/apprun-leaflet.ts',
    'demo/app': './demo/main.ts'
  },
  output: {
    filename: '[name].js',
    library: 'apprun-leaflet',
    libraryTarget: 'umd',
    path: path.resolve(__dirname),
    globalObject: 'this'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  devServer: {
    open: true,
    static: path.join(__dirname),
  },
  devtool: 'source-map'
}