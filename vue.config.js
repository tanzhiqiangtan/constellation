module.exports = {
    // publicPath:'/dist',
    devServer: {
        //设置webpack代理
        proxy: {
            '/api':{
                //请求地址
                target:'http://web.juhe.cn:8080/',
                //改变源
                changeOrigin:true,
                //是否开启websocket
                ws:true,
                //是否检查https
                secure:false,
                //路径重写 这个是干嘛的？
                pathRewrite: {
                    '^/api':''
                }
            }
        }
    }
}