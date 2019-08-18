const path = require("path")
module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@' : path.resolve(__dirname, "src")
      }
    },
  }
}
