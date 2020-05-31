module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-px2rem')({
            remUnit:100, 
          })
        ]
      }
    }
  },
  // configureWebpack: {
  //   plugins: [
      
  //   ]
  // },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://m.you.163.com/',
        secure: false,
        changeOrigin: true,
        pathRewrite:{
          '^/api':''
      }
      }
    }
  }

}