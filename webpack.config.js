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
       }
    ]
  }
};