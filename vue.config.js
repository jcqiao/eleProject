//会整合到webpack.config.js

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        
      }
    }
  },
  devServer:{
    open: true,
    host: 'localhost',
    port: 8080,
    https:false,
    hotOnly:false,
    proxy: {
      //配置跨域
      "/api": {
        target: "https://ele-interface.herokuapp.com/api/",
        ws: true,
        changOrigin:true,
        pathRewrite:{
          "^/api": ""
        }
      }
    }
  }
}