const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    plugins: [
      new webpack.DefinePlugin(envKeys),
      new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index.html"
      })
    ],
    devtool: 'cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
          loader: "babel-loader"
          }
        },
        {
          test: /\.html$/,
          use: [
            {
              loader: "html-loader"
            }
          ]
        },
        { test: /\.(scss|css)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'] 
        },
        {
          test: /\.(png|svg|jpg|gif|ico)$/,
          use: ['file-loader']
        },
        {
          test: [/\.eot$/, /\.ttf$/, /\.svg$/, /\.woff$/, /\.woff2$/],
          use: ['file-loader']
        }
      ]
    },
    devServer: {
      contentBase: './src',
      publicPath: '/',
      port: 5000,
      historyApiFallback: {
        index: '/index.html'
      }
    },
  }
};