import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* 一次性导入 Vant */
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)
/* 一次性引入 ElementUI */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
/* 实例app对象中进行配置store对象 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
