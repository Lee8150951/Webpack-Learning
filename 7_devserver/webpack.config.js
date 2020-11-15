const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
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
    mode: 'development',
    // 开发服务器的devServer:用于自动化开发（自动编译，自动打开浏览器，自动刷新浏览器等等）
    // 指令：npx webpack-dev-server
    devServer: {
        // 运行项目目录
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩，代码体积更小，启动更快
        compress: true,
        // 端口号
        port: 3000,
        // 自动启动浏览器
        open: true
    }
}