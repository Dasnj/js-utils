const path = require('path')
const webpack = require('webpack')

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'jstool.min.js',
        library: 'jstool',
        libraryTarget: 'umd'
    },
    mode: 'production',  // development production
    module: {
        rules:[{
            test: /\.js$/,
            loader: 'babel-loader',
            include: '/src',
            exclude: /node_modules/
        }]
    },
    plugins: [
        //
    ]
}

module.exports = config
