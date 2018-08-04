const path = require('path');

// 动态生成index.html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 清空编译目录
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  //告知 webpack-dev-server，在 localhost:8080 下建立服务，将 dist 目录下的文件，作为可访问文件。
  //webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。 webpack-dev-server 在内部使用了它
  //可以使用webpack-dev-middleware 配合 express server来达到webpack-dev-server的目的 
  devServer: {
    contentBase: './dist'
  },
  // 开发中使用的 source-map
  devtool: 'inline-source-map',
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
};