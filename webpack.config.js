const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: "/"
    },
    module: {
        rules: [
            {test: /\.jsx?$/, use: 'babel-loader', include: [/src/]},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, use: ['style-loader', 'css-loader']}
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [new HTMLWebpackPlugin({
        template: 'app/index.html'
    })]
};