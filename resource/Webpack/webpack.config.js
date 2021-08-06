const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        // JavaScript 执行入口文件
        index: './src/index.js'
    },
    output: {
        // 把输出文件都放到 dist 目录下
        path: path.join(__dirname, 'dist'),
        // 把所有依赖的模块合并输出到一个 bundle.js 文件
        filename: '[name].bundle.js'
    },
    mode: 'production',
    module: {
        rules: [
            {
                // 使用正则匹配要用该 loader 转化的 css 文件
                // minimize 的作用就是告诉 css-loader 要开启 css 压缩
                test: /\.css$/,
                use: ['style-loader', 'css-loader'], // 简写 querystring
                // use: ExtractTextPlugin.extract(['css-loader'])
                // ['style-loader', { // object
                //     loader: 'css-loader',
                    // options: { minimize: true } // minimize 好像不能用了
                // }]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(ttf)$/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin,
        new HtmlWebpackPlugin({
            title: 'Output Management'
        })
        // new ExtractTextPlugin('main.css')
    ]
}
