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
                // target: 'http://mi.marsview.cc',
                changeOrigin: true,
                pathRewrite: {
                    '/api': '',
                },
            },
        },
    },
    // publicPath: '/app',
    // outputDir: 'dist',
    // indexPath: 'index2.html',
    productionSourceMap: false,
});
