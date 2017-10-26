"use strict";
var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");
var htmlWebPackPlugin=require('html-webpack-plugin');

var config = {
    entry: SRC_DIR + "/app/main.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/"
    },
    plugins: [
      new htmlWebPackPlugin({
          template:'./src/index.html',
          filename:'index.html',
          minify:{
            removeComments:true
          }
      })],
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            },
            {
                test: /\.*css$/,
                include: SRC_DIR,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg|gif|woff|woff2)$/,
                include: SRC_DIR,
                loader: 'url-loader?limit=819&name=images/[name].[ext]'
            },
            {
                test:/\.json$/,
                include: SRC_DIR,
                loader:'json-loader?name=JSON/[name].json'
            }
        ]
    }
};

module.exports = config;