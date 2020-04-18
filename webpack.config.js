// var webpack = require("webpack");

// var HtmlWebpackPlugin = require("html-webpack-plugin");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    publicPath: "/",
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|j?g|svg|gif)?$/,
        use: "file-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".html", ".css"],
    alias: {
      "@": resolve("src"),
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
      favicon: "public/favicon.ico",
    }),
  ],
};
