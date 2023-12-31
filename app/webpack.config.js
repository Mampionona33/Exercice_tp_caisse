path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const JsonMinimizerPlugin = require("json-minimizer-webpack-plugin");

module.exports = {
  entry: { app: ["./src/index.tsx"] },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/",
    clean: true,
    crossOriginLoading: "anonymous",
  },

  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },

  target: ["web", "es5"],

  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      // favicon: "./src/img/favicon.ico",
      title: "Exercice caisse",
      template: "./src/template/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].bundle.css",
      chunkFilename: "[id].css",
    }),
    new CopyPlugin({
      patterns: [{ from: "./src/ts/db/data.json", to: "./" }], //Copy data.json to dist
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS

          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|ico)$/i,
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]",
          publicPath: "public",
        },
      },
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              ["@babel/preset-typescript", { allowNamespaces: true }],
            ],
          },
        },
      },
    ],
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "all",
    },
  },
  stats: {
    // remove warning from bootsrap abs error in sass-loader
    warningsFilter: [/css-loader.*style\.scss/],
  },
};
