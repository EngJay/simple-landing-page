const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Is the current build a development build
const CONTACT_EMAIL = process.env.EMAIL || 'contact@example.com';
const IS_DEV = process.env.NODE_ENV === 'dev';
const PALETTE = process.env.PALETTE || 'random';
const TITLE = process.env.TITLE || 'example.com';

const dirNode = 'node_modules';
const dirApp = path.join(__dirname, 'app');
const dirAssets = path.join(__dirname, 'assets');

const contactMail = Buffer.from(CONTACT_EMAIL).toString('base64');

/**
 * Webpack Configuration
 */
module.exports = {
  entry: {
    bundle: path.join(dirApp, 'index'),
  },
  output: {
    filename: IS_DEV ? '[name].js' : '[name].[fullhash].js', // Updated to use [fullhash]
    path: path.resolve(__dirname, 'dist'),
  },
  mode: IS_DEV ? 'development' : 'production',
  resolve: {
    modules: [dirNode, dirApp, dirAssets],
  },
  plugins: [
    new webpack.DefinePlugin({
      CONTACT_MAIL: JSON.stringify(contactMail),
      IS_DEV,
      PALETTE: JSON.stringify(PALETTE),
      TITLE: JSON.stringify(TITLE),
    }),

    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.ejs'),
      title: TITLE,
      minify: {
        collapseWhitespace: true,
      },
    }),

    new MiniCssExtractPlugin({
      filename: IS_DEV ? '[name].css' : '[name].[fullhash].css', // Updated to use [fullhash]
      chunkFilename: IS_DEV ? '[id].css' : '[id].[fullhash].css', // Updated to use [fullhash]
    }),

    new CleanWebpackPlugin(),
  ],
  module: {
    rules: [
      // BABEL
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules\/(?!(mail-redactor)\/).*/,
        options: {
          compact: true,
          presets: ['@babel/preset-env'],
        },
      },

      // STYLES
      {
        test: /\.css$/,
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
        ],
      },

      // CSS / SASS
      {
        test: /\.scss$/,
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: IS_DEV,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: IS_DEV,
              sassOptions: {
                // Removed `includePaths` as it's no longer valid
                // Adjust as needed based on the latest API
              },
            },
          },
        ],
      },
    ],
  },
};
