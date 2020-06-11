const path = require("path");
const env = require("./env");

const prodEnv = "production";
const devEnv = "development";

module.exports = {
    mode: env.production ? prodEnv : devEnv,
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
        ],
    },
    resolve: {
        extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
        modules: [path.resolve("./src/client"), "node_modules"],
    },
};
