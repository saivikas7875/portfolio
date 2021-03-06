const autoPrefixer = require('autoprefixer');
const lost = require('lost');
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

const config = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        library: 'portfolio',
        libraryTarget: 'umd',
        path: path.join(__dirname, '/public'),
        filename: `${pkg.name}.js`
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /test\/unit/ ],
                include: [/src/],
                loaders: ['babel', 'istanbul-instrumenter']
            },
            {
                test: /\.s?css$/,
                loaders: ['style', 'css', 'sass', 'postcss']
            },
            {
                test: /\.(ttf|eot|svg|woff)$/,
                loader: 'file'
            }
        ]
    },
    postcss: [
        autoPrefixer(
            {
                browsers: ['last 2 versions']
            }
        ),
        lost
    ],
    resolve: {
        extensions: [
            '',
            '.js'
        ],
        root: path.join(__dirname, 'node_modules')
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    devtool: 'eval-cheap-module-source-map',
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('development')
        })
    ],
    bail: true
};

module.exports = config;
