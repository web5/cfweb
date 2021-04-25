const webpackMerge = require("webpack-merge");
const path = require("path");

let configureWebpack = {
  resolve: {
    extensions: [".js", ".jsx", ".vue", ".ts", ".tsx"], // 补全扩展名
    alias: {
      vue$: "vue/dist/vue.js",
      "@": path.resolve(__dirname, "./src"),
    },
  },
};

configureWebpack = webpackMerge(configureWebpack, {
  plugins: [],
  performance: {
    maxEntrypointSize: 1024 * 1024,
    maxAssetSize: 1024 * 1024,
  },
});

const config = {
  lintOnSave: process.env.NODE_ENV !== "production",
  configureWebpack,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    host: "127.0.0.1",
    disableHostCheck: true,
    overlay: {
      warnings: false,
      errors: true,
    },
  },
};

module.exports = config;
