const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const webpack = require('webpack');

module.exports=merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        //结合长期缓存，你可能需要使用这个插件去避免 公共chunk 改变。 
        //你也需要使用 records 去保持稳定的模块 id，
        // 例如，使用 NamedModulesPlugin 或 HashedModuleIdsPlugin。
        new webpack.NamedModulesPlugin()
    ]
    
});