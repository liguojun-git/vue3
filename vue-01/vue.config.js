const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      "/api":{
        target:"http://192.168.2.15:8081/library",
        changeOrigin:true,
        pathRewrite:{
          "^/api":""
        }
      }
    }
    
  }
})
