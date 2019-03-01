module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/vue-typescript-admin-template/' : '/',
  publicPath: process.env.NODE_ENV === 'production'
        ? 'sportbean'
        : 'sportbean',// 默认为dist
  baseUrl: "/sportbean/",
  pwa: {
    name: 'sportbean'
  },
  devServer: {
    proxy: {
        '/sportbean': {
            // target: 'http://localhost:9090/sportbean2',
            target: 'http://www.qutiyu.net:9090/sportbean2',
            secure: false,
            changeOrigin: true,
            pathRewrite: {
                '^/sportbean': ''
                }
            }
        },
        disableHostCheck: true
    }
}
