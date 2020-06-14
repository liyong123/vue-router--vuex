/* axios统一配置封装 */
import axios from 'axios'
import qs from 'querystring'
import router from '../router'

/* 跳转登录页 */
const toLogin = () => {
    router.push({
        path: '/login'
    })
}

/* 异常处理 */
const errorHandle = (status, other) => {
    switch(status) {
        case 400:
            console.log('信息校验失败')
            break
        case 401:
            toLogin()
            console.log('认证失败')
            break
        case 403:
            toLogin()
            /* token过时了
            清除token */
            localStorage.removeItem('token')
            console.log('token校验失败')
            break
        case 404:
            console.log('请求的资源不存在')
            break
        /* 还有其他情况 ... */
        default:
            console.log(other)
            break
    }
}
/* 创建axios实例 */
const instance = axios.create({ timeout: 3000 })
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' //发送给后端的格式
/* instance.defaults.headers.common['Authorization'] = localStorage.getItem('token') */

/* axios请求的拦截，对请求对象转化 */
instance.interceptors.request.use(config => { //use接收两个函数
   console.log(config)
   /* 如果是post请求，则要对请求的data对象进行qs转化 */
   if (config.method === 'post') {
       config.data = qs.stringify(config.data)
   }
   return config
}, error => {
   return Promise.reject(error)
})

/* axios响应的拦截 */
instance.interceptors.response.use(res => {
   /* 请求成功 */
   if(res.status === 200) {
       return Promise.resolve(res)
   } else {
       return Promise.reject(res)
   }
}, error => {
   /* 请求失败 */
   const { response } = error
   if (response) {
      errorHandle(response.status, response.data.message)
      return Promise.reject(response)
   } else {
       console.log('net error')
   }
})

export default instance

