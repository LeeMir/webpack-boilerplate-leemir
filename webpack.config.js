const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack-Boilerplate",
      template: path.resolve(__dirname, "src", "app.html")
    })
  ],
  module: {
    rules: [{
      test: /\.js$/,
      excludes: /node_modules/,
      use: {
        loader: "babel-loader"
      }
    }, ],
  }
};