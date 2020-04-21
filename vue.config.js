module.exports = {
  transpileDependencies: ["vuetify"],

  // 開発中のサーバー設定
  devServer: {
    // ポートを80で起動
    port: 80,
  },

  // webpackの設定
  configureWebpack: {
    // Chrome or Firefoxでデバッグするための設定
    devtool: "source-map",
  },

  // ビルド時の出力ディレクトリ名を変更
  outputDir: "docs/",

  // 本webアプリのurl的なやつ
  publicPath: "./",

  // 画像ファイルなどにハッシュ値を付与しない
  filenameHashing: false,

  // pluginOptions: {
  //   cordovaPath: "src-cordova",
  // },
};
