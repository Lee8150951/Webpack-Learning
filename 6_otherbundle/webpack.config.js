const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build'),
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // 使用多个loader处理
                use: ['style-loader', 'css-loader']
            },
            // 如何打包别的资源(除了html、js、css以外的资源)
            {
                // 排除资源
                exclude: /\.(css|js|html)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: 'development'
}