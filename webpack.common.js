const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/index.js",
    // createHomepage: "./src/createHomepage.js",
    // render: "./src/renderData",
    // createHourlyInfo: "./src/createHourlySection",
    // createDailyInfo: "./src/dailyForcastSection",

    // print: "./src/print.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean the dist folder before build
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.(mp4|webm)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "videos/",
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      title: "Yo! Weather App",
      favicon: "./src/img/Logo.png",
      inject: "body",
      meta: {
        viewport: "width=device-width, initial-scale=1.0",
        "og:title": "YoKizzy! Weather App",
        "og:description": "YoKizzy! Weather App",
        "og:image": "./images/Logo.png",
        "og:type": "website",
        "og:url": "",
        "twitter:card": "summary_large_image",
        "twitter:image": "./images/Logo.png",
        "twitter:title": "YoKizzy! Weather App",
        "twitter:description": "YoKizzy! Weather App",
      },
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
};
