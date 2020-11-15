/* 
    webpack.config.js webpack的配置文件
    作用是指示webpack怎么干活，干什么活（当运行webpack指令时会加载里面的配置）

    所有的构建工具都是基于node.js平台运行的,模块化默认采用common.js
 */
// resolve用来凭借绝对路径
const { resolve } = require('path');
module.exports = {
    // webpack配置
    // 入口起点
    entry: './src/index.js',
    // 输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径(通常输入绝对路径，使用node中的path模块)
        // __dirname是node的变量，表示当前文件目录的绝对路径
        path: resolve(__dirname, 'build')
    },
    // loader配置
    module: {
        rules: [
            // 详细的loader配置
            // 注意！不同的文件必须配置不同的loader处理
            {
                // test表示匹配哪些文件
                test: /\.css$/,
                // use表示使用哪些loader进行处理
                use: [
                    // use数组中的loader执行顺序：从右到左，从下到上
                    // 创建style标签，将js中的样式资源插入进行，添加到head中生效
                    'style-loader',
                    // 将css文件以字符串的形式变成一个common.js的模块加载到js中
                    // 里面的内容是样式字符串
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 将less-loader编译成css文件，需要使用npm下载less和less-loader
                    'less-loader'
                ]
            }
        ]
    },
    // plugins插件配置
    plugins: [
        // 详细的插件配置
    ],
    // mode模式配置
    mode: 'development'
}