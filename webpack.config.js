const HtmlWebPackPlugin = require('html-webpack-plugin');
const { BannerPlugin } = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const METADATA = 'Copyright Orsys 2020 new generation modern sites';

/** @type {import ('webpack').Configuration} */
const config = {
  devtool: 'false',
  entry: './src/js/main.js',
  plugins: [
    new HtmlWebPackPlugin({ template: './src/index.html' }),
    new BannerPlugin({
      banner: METADATA,
    }),
    new MiniCssExtractPlugin({
      filename: 'app.[hash].css',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          {
            loader: MiniCssExtractPlugin.loader,
          },
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        // make all files ending in .json5 use the `json5-loader`
        test: /\.json5$/,
        use: 'json5-loader',
        type: 'javascript/auto',
      },
    ],
  },
};

module.exports = config;
