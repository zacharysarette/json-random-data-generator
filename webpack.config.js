const path = require('path')

module.exports = ['source-map'].map((devtool) => ({
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'json-random-data-generator.js',
    library: 'jsonRandomDataGenerator',
    libraryTarget: 'umd'
  },
  devtool,
  externals: ['fs', 'chalk']
}))
