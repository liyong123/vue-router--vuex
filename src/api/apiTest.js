import axios from '../config/request'
const base = {
    /* baseUrl: 'http://localhost:3000', */ /* vue.config.js中没开代理 ，启动的服务是cross-domain中的server.js */
    baseUrl: '/api' /* vue.config.js中开代理 , 启动的服务是cross-domain中的serverProxy.js*/

}

const apiFunObj = {
    getDataTest() {
        return axios.get(base.baseUrl + '/getTest', { params: { userName: 'bluesli' } })
    },
    postTest(data) {
        return axios.post(base.baseUrl + '/postTest', data)
    },
    
}

export default {
    apiFunObj
}