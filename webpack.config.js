const path = require('path');
const TerserJSPlugin = require('terser-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: ['./src/index.js', './src/index.scss'],
    output: {
        filename: 'script.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss|css)$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'},
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
            }
        ]
    },
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                terserOptions: {
                    compress: {},
                    output: {
                        comments: 'some',
                    }
                },
                extractComments: false,
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            {
                from: './src/assets',
                to: 'assets'
            },
            {
                from: './src/.htaccess',
                to: ''
            }
        ]),
        new HtmlWebpackPlugin({
            hash: true,
            template: './src/index.html'
        })
    ]
};
