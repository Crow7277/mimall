const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    lintOnSave: false,
    transpileDependencies: true,
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target: 'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '',
                },
            },
        },
    },
});
