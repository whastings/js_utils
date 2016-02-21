module.exports = {
  entry: './lib/index.js',
  output: {
    filename: 'dist/index.js',
    library: 'js_utils',
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [
      {
        loader: 'babel',
        test: /\.js$/,
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  devtool: 'hidden-source-map'
};
