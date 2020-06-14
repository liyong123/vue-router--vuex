module.exports = {
    devServer: {
        port: 3080,
        /* 代理（中间人）, vue3.0没有vue.config.js */
        /* 浏览器访问3080的node服务器, 当访问以/api开头的接口时，node会指向3001后端服务器，所以node就是做了个中转。 */
        proxy: {
           "/api": {  /* 只要是api开头的接口都代理到3001 */
               target: 'http://localhost:3001',
               changeOrigin: true,
               ws: true,
               pathRewrite: {
                /* 把/api转成空字符串，所以http://localhost:3001/api/getTest就相当于http://localhost:3001/getTest */
                   '^/api': ''
               }
           }
        }
    }
}