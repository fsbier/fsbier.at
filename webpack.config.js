const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const devMode = process.env.NODE_ENV !== 'production'

module.exports = (env, argv) => {
  const devMode = argv.mode === 'development'

  var config = {
    devtool: 'cheap-module-source-map',
    entry: [
      path.resolve(__dirname, 'web/themes/fsbier/js/index.js'),
      path.resolve(__dirname, 'web/themes/fsbier/scss/index.scss'),
    ],
    output: {
      path: path.resolve(__dirname, 'web/themes/fsbier/dist'),
      publicPath: '/themes/fsbier/dist/'
    },
    plugins: [
      new MiniCssExtractPlugin({}),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { map: { inline: false, annotation: true, } }
      }),
      new CleanWebpackPlugin(['*'], {
        root: path.resolve(__dirname, 'web/themes/fsbier/dist')
      }),
    ],
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {sourceMap: true},
          },
          {
            loader: 'sass-loader',
            options: {sourceMap: true},
          },
        ],
      }]
    }
  };

  return config;
};
