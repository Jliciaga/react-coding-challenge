const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PrettierPlugin = require("prettier-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const paths = require("./paths");

module.exports = {
    // Webpack entry point for building bundle.
    entry: [`${paths.src}/index.tsx`],
    // Webpack assets and bundles output.
    output: {
        path: paths.build,
        filename: "[name].bundle.js",
        publicPath: "/",
    },
    // Webpack building processes.
    plugins: [
        // Removes/Cleans build folders and unused assets when rebuilding.
        new CleanWebpackPlugin(),
        // Copies files from target to destination folder.
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: paths.public,
                    to: "assets",
                    globOptions: {
                        ignore: ["*.DS_STORE"],
                    },
                    noErrorOnMissing: true,
                },
            ],
        }),
        // Generates an HTML file from a template. 
        // Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
        new HtmlWebpackPlugin({
            title: "Movie App",
            favicon: "public/favicon.png",
            template:`${paths.public}/template.html`, 
            filename: "index.html",
        }),
        // ESlint config.
        new ESLintPlugin({
            files: [".", "src", "config"],
            formatter: "table",
        }),
        // Prettier config.
        new PrettierPlugin(),
    ],
    module: {
        rules: [
            // TypeScript files babel loader.
            {
                test: /\.(js|ts|tsx)$/,
                use: ["babel-loader"],
            },
            // Images - copy files to build folder.
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
            // Fonts and SVGs - inline files.
            {
                test: /\.(woff(2)?|eot|tff|otf|svg)$/,
                type: "asset/inline"
            },
        ],
    },
};
