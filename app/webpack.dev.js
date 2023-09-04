const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

common.plugins.push(new ReactRefreshWebpackPlugin());

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    allowedHosts: "all",
    host: "127.0.0.1",
    hot: true,
    port: 8081,
  },
});
