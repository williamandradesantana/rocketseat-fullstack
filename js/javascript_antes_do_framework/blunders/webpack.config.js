const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  entry: path.resolve(
    __dirname,
    "configurando_webpack",
    "src",
    "js",
    "index.js"
  ),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",

  plugins: [new HtmlWebpackPlugin()],
  module: {
    rules: [{ test: /\.css$/i, use: ["style-loader", "css-loader"] }],
    exclude: "/node_modules",
  },
};
