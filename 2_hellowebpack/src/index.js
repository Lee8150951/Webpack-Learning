// index.js：webpack的入口文件
/* 
    1.运行指令：
        开发环境：webpack ./src/index.js -o ./build/built.js --mode=development
            解释：webpack会以./src/index.js为入口文件开始打包，打包后输出到./build/built.js
            整体打包环境为开发环境
        生产环境：webpack ./src/index.js -o ./build/built.js --mode=production
            解释：webpack会以./src/index.js为入口文件开始打包，打包后输出到./build/built.js
            整体打包环境为生产环境
    2.结论：
        ①webpack可以打包js资源和json资源，不能处理css/img等资源
        ②生产环境和开发环境可以将ES6模块化编译成浏览器能识别的模块化
        ③生产环境比开发环境多一个压缩js代码
 */
import data from './data.json';
console.log(data);

import './index.css'

function add(x, y) {
    return x + y;
}
console.log(add(1, 3));