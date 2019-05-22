const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    compress: true,
    port: 4000,
    historyApiFallback: true,
    open: true,
    overlay: true,
    quiet: true, // reduce some console clutter
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
}