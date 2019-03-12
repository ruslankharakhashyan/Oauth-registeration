const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const devMode = process.env.npm_lifecycle_script.indexOf('development') !== -1;

module.exports = {
  devServer: {
    contentBase: '/',
    historyApiFallback: true,
    inline: true,
    port: 2222
  },
  entry: [
    './src/index.js',
    './src/scss/app.scss'
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        test: /\.svg$/i,
        rules: [
          {
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: 'assets/[name].[hash:12].[ext]'
                }
              }
            ],
            issuer: /\.scss$/i
          },
          {
            use: ['raw-loader'],
            issuer: /\.(html|jsx?)$/i
          }
        ]
      },
      {
        test: /\.scss|.css$/,
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|woff2|ttf|woff|eot?)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash:12].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
              interpolate: true
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin('public/dist'),
    new Dotenv(),
    new HTMLWebpackPlugin({
      filename: 'index.html',
      inject: 'body',
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules', './src/js']
  }
};
