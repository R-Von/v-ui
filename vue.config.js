module.exports = {
    // 选项...
    publicPath:"./",
    css: {
        loaderOptions: {
            // 给 sass-loader 传递选项
            sass: {
            // @/ 是 src/ 的别名
                data: `@import "~@/assets/styles/reset.scss";`
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js' 
            }
        }
    }
}