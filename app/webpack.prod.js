const { merge } = require("webpack-merge");
const common = require("./webpack.config");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  optimization: {
    minimizer: [new TerserPlugin({})],
  },
});
