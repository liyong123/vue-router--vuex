import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
/* 创建整个项目的数据仓库对象，将多组件公用的数据放置到此对象中 */
export default new Vuex.Store({
  // 类似于data
  state: {
    number: 1,
    age: 20,
    word: 'abcdefg',
    nameList: [
      { name: '张三', age: 19 },
      { name: '李四', age: 18 },
      { name: '王二', age: 21 },
      { name: '刘五', age: 20 },
  ]
  },
  /*如果有多个组件需要用到此属性，我们要么复制这个函数，
  或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。 
  Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。
  就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，
  且只有当它的依赖值发生了改变才会被重新计算。 */
  getters: {
    filterList: state => {
      return state.nameList.filter(item=> item.age%2 == 0)
    },
    reverseWord: state => (id = 123) => { //可以传参数
      return (id + state.word).split("").reverse().join("")
    },

  },
  // 类似于methods
  mutations: {
    addNum: state => {
      return {
        ...state,
        number: state.number++
      }
      /* state.number++ */
    },
    setNumber(state, v) {
      state.number = v
    }
  },
  // ajax 异步方法
  actions: {
  },
  // 模块
  modules: {
  }
})
