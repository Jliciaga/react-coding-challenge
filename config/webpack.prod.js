const { merge } = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizePlugin = require("css-minimizer-webpack-plugin");
const common = require("./webpack.common");
const paths = require("./paths");

module.exports = merge(common, {
    mode: "production",
    devtool: false,
    output: {
        path: paths.build,
        publicPath: "/",
        filename: "js/[name].[contenthash].bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
    },
    module: {
        rules: [
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            sourceMap: false,
                            modules: true,
                        },
                    },
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        // Extract CSS into separate files.
        new MiniCssExtractPlugin({
            filename: "styles/[name].[contenthash].css",
            chunkFilename: "[id].css",
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [ new CssMinimizePlugin(), "..." ],
        // Once your build outputs multiple chunks, this option will ensure they share the webpack runtime
        // instead of having their own. This also helps with long-term caching, since the chunks will only
        // change when actual code changes, not the webpack runtime.
        runtimeChunk: {
            name: "runtime",
        },
    },
    performance: {
        hints: false,
        maxEntryPointSize: 512000,
        maxAssetSize: 512000,
    },
});
