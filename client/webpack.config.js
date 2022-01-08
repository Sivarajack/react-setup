const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  console.log(argv);
  return {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },

        {
          test: /\.(s(a|c)ss)$/,
          use: ["style-loader", "css-loader", "sass-loader"],
        },
        {
          test: /\.(woff|woff2|eot|ttf|svg|jpg|png)$/,
          use: {
            loader: "url-loader",
          },
        },
      ],
    },
    plugins: [
      new htmlWebpackPlugin({
        template: path.join(__dirname, "src", "index.html"),
      }),
    ],
  };
};
