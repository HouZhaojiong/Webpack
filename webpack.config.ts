import path from "path";
import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import HtmlWebpackPlugin from "html-webpack-plugin";

const devServer: DevServerConfiguration = {
  static: "./dist",
  open: true,
};

const config: Configuration = {
  mode: "development",
  entry: {
    index: "./src/index.ts",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", "..."],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  optimization: {
    runtimeChunk: "single",
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Yuyi",
    }),
  ],
  devServer,
};

export default config;
