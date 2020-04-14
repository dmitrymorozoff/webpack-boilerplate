const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const env = require("./env");
const webpack = require("webpack");

const prodEnv = "production";
const devEnv = "development";

const config = {
  mode: env.production ? prodEnv : devEnv,
  entry: "./src/server/index.tsx",
  target: "node",
  output: {
    filename: "server.js",
    path: path.resolve("./dist"),
    publicPath: "",
    libraryTarget: "commonjs",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
    ],
  },
};

module.exports = config;
