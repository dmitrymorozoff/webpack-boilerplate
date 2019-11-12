const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const env = require("./env");
const webpack = require("webpack");

const prodEnv = "production";
const devEnv = "development";

const config = {
  mode: env.production ? prodEnv : devEnv,
  entry: "./client/src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve("./dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          { loader: "style-loader" },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
            },
          },
          {
            loader: "postcss-loader",
            options: {
              plugins: [autoprefixer()],
              sourceMap: true,
            },
          },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./client/src/index.html",
      minify: {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeEmptyAttributes: true,
        removeOptionalTags: true,
        useShortDoctype: true,
      },
    }),
    new webpack.DefinePlugin({
      __ENV__: env,
      "process.env.NODE_ENV": env.current,
    }),
  ],
  devServer: {
    port: 8080,
    host: "localhost",
    hot: true,
    inline: true,
    open: true,
    openPage: "",
  },
};

module.exports = config;
