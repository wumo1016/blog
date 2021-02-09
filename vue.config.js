
function resolve(dir) {
  return require('path').join(__dirname, dir)
}
module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      // '^/sweet': {
      //   target: 'https://api.lovelive.tools/',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/sweet': ''
      //   }
      // },
    }
  },
  productionSourceMap: false,
  assetsDir: 'static',
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@a', resolve('src/api'))
      .set('@c', resolve('src/components'))
      .set('@f', resolve('src/filters'))
      .set('@p', resolve('src/public'))
      .set('@s', resolve('src/store'))
      .set('@sty', resolve('src/styles'))
      .set('@v', resolve('src/views'))
  },
  lintOnSave: false,
}
