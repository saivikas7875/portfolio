const autoPrefixer = require('autoprefixer');
const lost = require('lost');
const path = require('path');
const webpack = require('webpack');

const config = {
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:5555/__webpack_hmr',
        path.join(__dirname, '../src/index.js')
    ],
    output: {
        path: path.join(__dirname, '../output/server-dist'),
        filename: 'server.js',
        publicPath: '/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot', 'babel'
                ]
            },
            {
                test: /\.s?css$/,
                loaders: [
                    'style',
                    'css',
                    'sass',
                    'postcss'
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff)$/,
                loader: 'file'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    postcss() {

        return [
            autoPrefixer,
            lost
        ];

    },
    resolve: {
        extensions: [
            '',
            '.js'
        ],
        root: path.join(__dirname, '../node_modules'),
        fallback: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        root: path.join(__dirname, '../node_modules'),
        fallback: path.join(__dirname, 'node_modules')
    },
    devtool: 'eval-cheap-module-source-map',
    bail: true
};

module.exports = config;
