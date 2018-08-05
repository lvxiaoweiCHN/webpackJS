const webpack = require('webpack');
const path = require('path');
// 动态生成index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清空编译目录
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports={
    entry:{
        app: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].js'
    },
    optimization: {
        splitChunks: {
            chunks: 'initial', // 只对入口文件处理
            cacheGroups: {
                vendor: { // split `node_modules`目录下被打包的代码到 `page/vendor.js && .css` 没找到可打包文件的话，则没有。css需要依赖 `ExtractTextPlugin`
                    test: /node_modules\//,
                    name: 'page/vendor',
                    priority: 10,
                    enforce: true
                },
                commons: { // split `common`和`components`目录下被打包的代码到`page/commons.js && .css`
                    test: /common\/|components\//,
                    name: 'page/commons',
                    priority: 10,
                    enforce: true
                }
            }
        },
        runtimeChunk: {
            name: 'page/manifest'
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
          title: 'Production'
        }),
        //结合长期缓存，你可能需要使用这个插件去避免 公共chunk 改变。 你也需要使用 records 去保持稳定的模块 id，例如，使用 NamedModulesPlugin 或 HashedModuleIdsPlugin。
        new webpack.NamedModulesPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {  // 处理loader路径的问题
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
                // 压缩和优化你的图像。查看 image-webpack-loader 和 url-loader，
            },
            //file-loader 和 url-loader 可以接收并加载任何文件，然后将其输出到构建目录
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // 处理csv tsv格式的文件
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            // 处理XML
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
}