const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./client/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    mode: 'development',
    devServer: {
        host: 'localhost',
        port: 8080,
        static: {
            // match the output path
            directory: path.resolve(__dirname, 'dist'), 
            // match the output 'publicPath'
            publicPath: '/',

        },

        client: {
            logging: 'info',
        },

        // enable HMR on the devServer
        hot: true,

        // fallback to root for other urls
        historyApiFallback: true,

        headers: { 'Access-Control-Allow-Origin': '*' },
        /**
         * proxy is required in order to make api calls to
         * express server while using hot-reload webpack server
         * routes api fetch requests from localhost:8080/api/* (webpack dev server)
         * to localhost:3000/api/* (where our Express server is running)
         */
        proxy: {
            '/api/**': {
                target: 'http://localhost:3000/',
                secure: false,
            },
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-transform-runtime",
                        ],
                    },
                },
            },
            {
                test: /\.(css|scss)$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|gif|jpg|jpeg|png)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "imgs",
                    },
                },
            },
            {
                test: /\.(mp4|mov|m4p|avi|webm|ogg|mpg|mp2)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name].[hash].[ext]",
                        outputPath: "videos",
                    },
                },
            },
        ],
    },
    resolve: {
        modules: ["client", "node_modules"],
        extensions: ["*", ".js", ".jsx", ".css", ".scss", ".mp4"],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: 'index.html'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
