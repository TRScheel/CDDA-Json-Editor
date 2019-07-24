const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var webpack = require('webpack')

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    // TODO: Add performance hints later on when we attempt to lower the production size
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false)
      }),
      new webpack.LoaderOptionsPlugin({
        minimize: true
      })
    ],
    optimization: {
        minimize: true
    }
});