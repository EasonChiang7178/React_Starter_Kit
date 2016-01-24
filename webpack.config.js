var path = require('path');

module.exports = {
  cache:      true,
  entry:      path.resolve(__dirname, './src/js/app.js'),
  output: {
    path:     path.resolve(__dirname, './dist/js'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test:     /\.jsx?$/,
        loader:   'babel',
        exclude:  /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
