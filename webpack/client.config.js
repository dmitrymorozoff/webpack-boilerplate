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
  entry: "./src/client/index",
  output: {
    filename: "bundle.[chunkhash].js",
    path: path.resolve("./dist"),
    publicPath: "",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: env.production
              ? MiniCssExtractPlugin.loader
              : "style-loader",
          },
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
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "assets/[name].[hash].[ext]",
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/client/index.html",
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
    new CopyWebpackPlugin([
      {
        from: "src/client/assets",
        to: "assets",
      },
    ]),
    new webpack.ProvidePlugin({
      React: "react",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.[chunkhash].css",
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
