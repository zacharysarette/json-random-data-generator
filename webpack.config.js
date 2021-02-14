const path = require('path')

module.exports = ['source-map'].map((devtool) => ({
  mode: 'production',
  entry: './src/index.js',
  output: {
    globalObject: 'this',
    path: path.resolve(__dirname, 'dist'),
    filename: 'json-random-data-generator.js',
    library: 'jsonRandomDataGenerator',
    libraryTarget: 'umd'
  },
  devtool
}))
