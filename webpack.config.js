const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = {
  entry: path.resolve(__dirname, 'web/themes/fsbier/index.js'),
  output: {
    path: path.resolve(__dirname, 'web/themes/fsbier/dist'),
    publicPath: '/themes/fsbier/dist/'
  },
  plugins: [
    new MiniCssExtractPlugin({}),
    new OptimizeCSSAssetsPlugin({})
  ],
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        "css-loader",
        "sass-loader"
      ],
    }]
  }
};
