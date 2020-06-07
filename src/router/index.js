import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home' /* @相当于src */

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    /* route level code-splitting
    this generates a separate chunk (about.[hash].js) for this route
    which is lazy-loaded when the route is visited. */
    component: () => import(/* webpackChunkName: "about" */ '@/views/About')
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "news" */ '@/views/News')
  },
  /* 动态路由 start */
  {
    path: '/news/:id',
    name: 'NewsDetail',
    component: () => import(/* webpackChunkName: "newsDetail" */ '@/views/NewsDetail')
  },
  /* 动态路由 end */
  /* 嵌套路由 start */
  {
    path: '/goods',
    name: 'Goods',
    component: () => import(/* webpackChunkName: "goods" */ '@/views/goods/Goods'),
    children: [
      {
        path: 'shoes',
        name: 'Shoes',
        component: () => import(/* webpackChunkName: "shoes" */ '@/views/goods/Shoes')
      },
      {
        path: 'clothes',
        name: 'Clothes',
        component: () => import(/* webpackChunkName: "clothes" */ '@/views/goods/Clothes')
      }
    ]
  },
  /* 嵌套路由 end */
  {
    path: '/count',
    name: 'Count',
    component: () => import(/* webpackChunkName: "count" */ '@/views/vuexView/Count')
  },
  {
    path: '/stateInt',
    name: 'StateInt',
    component: () => import(/* webpackChunkName: "stateInt" */ '@/views/vuexView/StateInt')
  },
  {
    path: '/mapState',
    name: 'MapState',
    component: () => import(/* webpackChunkName: "mapState" */ '@/views/vuexView/MapState')
  },
  {
    path: '/mapState2',
    name: 'MapState2',
    component: () => import(/* webpackChunkName: "mapState2" */ '@/views/vuexView/MapState2')
  },
  {
    path: '/mapState3',
    name: 'MapState3',
    component: () => import(/* webpackChunkName: "mapState3" */ '@/views/vuexView/MapState3')
  },
  {
    path: '/getter',
    name: 'Getter',
    component: () => import(/* webpackChunkName: "getter" */ '@/views/vuexView/Getter')
  },
  {
    path: '/*',
    name: 'NotMatch',
    component: () => import(/* webpackChunkName: "notMatch" */ '@/views/NotMatch')
  }
]

const router = new VueRouter({
 /*  mode: 'history',  // 这种模式，后端需要做处理，创建项目时，history选择的是yes，如果选择no，路由带#，后端无需配置处理
  base: process.env.BASE_URL, */
  routes
})

export default router
