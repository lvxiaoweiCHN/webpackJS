const path = require('path');

module.exports = {
  mode: "production",
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
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