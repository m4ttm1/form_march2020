const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BannerPlugin } = require('webpack');

function configFactory(_, { mode }) {
  const plugins = [
    new BannerPlugin(`Copyright ${new Date().getFullYear()} Orsys`),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ];

  if (mode === 'production') {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'app.[hash].min.css',
      }),
    );
  }

  /** @type {import('webpack').Configuration} */
  const config = {
    devtool: mode !== 'production' ? 'source-map' : false,
    entry: './src/ts/main.ts',
    output: {
      filename: mode !== 'production' ? 'app.js' : 'app.[hash].min.js',
    },
    plugins,
    resolve: {
      extensions: ['.js', '.json', '.ts'],
    },
    module: {
      rules: [
        {
          test: /\.json5$/,
          use: 'json5-loader',
        },
        {
          test: /\.ts$/,
          use: 'ts-loader',
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            mode !== 'production' ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            'css-loader',
            // Compiles Sass to CSS
            'sass-loader',
          ],
        },
      ],
    },
  };

  return config;
}

module.exports = configFactory;

// Exercice 1
// Utiliser json5-loader pour permettre de charger des fichiers
// au format .json5
// https://webpack.js.org/loaders/json5-loader/

// Exercice 2
// Utiliser banner-plugin pour afficher dans une "bannière" un
// copyright "Copyright 2020 Nous"
// en haut de chaque fichier buildé
// https://webpack.js.org/plugins/banner-plugin/$
// tester avec : npm run build:dev

// Exercice 3
// Utiliser mini-css-extract-plugin pour extraire les fichiers css
// dans un fichier externe et les charger via une balise link
// https://webpack.js.org/plugins/mini-css-extract-plugin/
// tester avec : npm run build:dev
