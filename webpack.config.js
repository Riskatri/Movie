// // var webpack = require("webpack");
// var path = require("path");
// // var HtmlWebpackPlugin = require("html-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
// module.exports = {
//   entry: "./src/index.js",
//   output: {
//     path: path.join(__dirname, "./dist"),
//     filename: "index_bundle.js",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js?/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /\.css$/,
//         loader: "css-loader",
//       },
//       {
//         test: /\.jsx$/,
//         loader: "react-hot!babel",
//       },
//       {
//         test: /\.json$/,
//         loader: "json-loader",
//       },
//       {
//         test: /\.(png|jpe?g|gif)$/i,
//         loader: "file-loader",
//         options: {
//           outputPath: (url, resourcePath, context) => {
//             // `resourcePath` is original absolute path to asset
//             // `context` is directory where stored asset (`rootContext`) or `context` option

//             // To get relative path you can use
//             // const relativePath = path.relative(context, resourcePath);

//             if (/my-custom-image\.png/.test(resourcePath)) {
//               return `other_output_path/${url}`;
//             }

//             if (/images/.test(context)) {
//               return `image_output_path/${url}`;
//             }

//             return `output_path/${url}`;
//           },
//         },
//       },
//     ],
//   },
//   resolve: {
//     extensions: [".js", ".jsx", ".scss", ".html", ".css"],
//     alias: {
//       "@": resolve("src"),
//     },
//   },
// };

const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");
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
