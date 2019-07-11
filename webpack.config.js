const path = require('path')
const webpack = require('webpack')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'js-utils.min.js'
    },
    mode: 'production',
    module: {
        rules:[{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        //
    ]
}

module.exports = config
