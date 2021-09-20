module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
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