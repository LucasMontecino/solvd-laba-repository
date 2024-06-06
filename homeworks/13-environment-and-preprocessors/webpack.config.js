const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

const rules = [
  {
    test: /\.scss$/,
    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
  },
];

const plugins = [
  new MiniCssExtractPlugin({
    filename: "styles.css",
  }),
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "index.html",
    minify: false,
  }),
];

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules,
  },
  plugins: plugins,
  devServer: {
    open: true,
    port: 3000,
    compress: true,
  },
  optimization: {
    minimizer: [
      new HtmlMinimizerPlugin({
        test: /\.html$/i,
        minimizerOptions: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        },
      }),
    ],
  },
};
