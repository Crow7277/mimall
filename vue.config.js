const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy:{
            '/activity':{
                target:'https://www.imooc.com',
                changeOrigin:false
            }
        }
    },
});
