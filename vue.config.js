module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    host: '0.0.0.0',
    hotOnly:false,
    proxy: {
      '/app': {
        target: 'http://w7.khshop.online',
        changeOrigin: true,     
        secure: false,
        pathRewrite: { '^/app': '/app' }
      }
    }
  },
}
