'use strict';

let path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    page: ['./js/src/index.js','@babel/polyfill'],
    modules: ['./js/src/modules.js','@babel/polyfill']
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/js/dist/'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader?optional[]=runtime',
          options: {
            presets: [
                ["@babel/env", {
                "modules": false,
                targets: {
                  edge: "17",
                  firefox: "60",
                  chrome: "67",
                  safari: "11.1",
                  ie: "11"
                }
              }]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new UglifyJsPlugin()
 ],
 resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};  