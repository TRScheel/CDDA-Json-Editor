const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var webpack = require('webpack')

module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './dist'
    },
    performance: {
        hints: 'warning'
    },
    devServer: {
      historyApiFallback: true,
      noInfo: true
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.runtime.esm.js'
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        PRODUCTION: JSON.stringify(false)
      })
    ],
    optimization: {
        minimize: false
    }
});