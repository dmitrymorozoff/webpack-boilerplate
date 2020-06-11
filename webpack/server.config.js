const path = require("path");
const nodeExternals = require("webpack-node-externals");

const merge = require("webpack-merge");
const baseConfig = require("./base.config");

const config = merge(baseConfig, {
    entry: "./src/server/index.tsx",
    target: "node",
    externals: [nodeExternals()],
    output: {
        filename: "server.js",
        path: path.resolve("./dist"),
        libraryTarget: "commonjs",
    },
    module: {
        rules: [
            {
                test: /\.(sa|sc|c)ss$/,
                use: "null-loader",
            },
        ],
    },
});

module.exports = config;
