const autoPrefixer = require('autoprefixer');
const lost = require('lost');
const path = require('path');
const pkg = require('./package.json');
const webpack = require('webpack');

const config = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        libraryTarget: 'umd',
        path: path.join(__dirname, '/dist'),
        filename: `${pkg.name}.js`
    },
        externals: [
            {
              react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
              }
            },
            {
              'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
              }
            }
        ],
        module: {
            loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
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
              'process.env.NODE_ENV': JSON.stringify('production')
            })
        ],
      bail: true
};

module.exports = config;
