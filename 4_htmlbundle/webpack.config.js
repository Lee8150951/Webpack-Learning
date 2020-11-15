/* 
    loader: 1.下载 2.使用（配置loader）
    plugin: 1.下载 2.引入 3.使用
 */
const { resolve } = require('path');

// 引入HTML打包插件
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'built.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        // html-webpack-plugin
        // 功能：默认会创建一个空的html，自动引入打包输出的所有资源（js/css）
        // 需求：需要一个有结构的html文件
        new HtmlWebpackPlugin({
            // 复制一个'./src/index.html'文件，并自动引入打包输出的所有资源
            // 注意不要手动引入资源
            template: './src/index.html'
        })
    ],
    mode: 'development'
}