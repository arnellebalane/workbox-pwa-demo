const path = require('path');
const htmlPlugin = require('html-webpack-plugin');
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');

module.exports = {
  entry: './www/index.js',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.[hash:6].js'
  },

  mode: 'development',
  devtool: false,

  plugins: [
    new htmlPlugin({
      template: './www/index.html'
    }),

    new GenerateSW({
      swDest: 'sw.js'
    })
  ]
};
