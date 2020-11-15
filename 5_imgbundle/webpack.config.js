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
                test: /\.less$/,
                // 使用多个loader处理
                use: ['style-loader', 'css-loader', 'less-loader']
            },
            // 图片资源处理
            {
                // 无法处理html中的img图片
                test: /\.(jpg|png|gif)$/,
                // 使用单个loader处理
                // 使用时下载两个包：url-loader/file-loader
                loader: 'url-loader',
                options: {
                    // 图片大小小于8Kb将会被base64处理（将图片转化为base64编码字符串）
                    // 优点：减少请求数量（减轻服务器压力）
                    // 缺点：图片体积变大（文件请求速度变慢）
                    limit: 8*1024,
                    // 问题：url-loader默认使用es6模块化解析，而html-loader引入图片是commonjs
                    // 解析时会出现问题：[object module]
                    // 解决：关闭url-loader的es6模块化，使用commonjs解析
                    esModule: false,
                }
            },
            // 解决html中img标签引入图片的情况
            {
                test: /\.html$/,
                // 专门用于处理html中img文件引入问题的
                loader: 'html-loader'
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