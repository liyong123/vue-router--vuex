<template>
    <!-- state介绍 -->
    <div>
        <p>年龄：{{age}}</p>
        <p>数量：{{number}}</p>
        <input type="text" v-model="number">
    </div>
</template>
<script>
export default {
    name: 'StateInt',
    data() {
        return {
        }
    },
     mounted() {
      /* 此时this中包含了$store */
      console.log(this)
    },
    /* state在组件的应用：借助计算属性 */
    /* 将想要用到的全局state数据，放到组件的computed内部使用,所以上面的age和number就可以简写，
    v-model的内容将其获取（get）和设置（set）分开来即可 */
    computed: {
       age: function() { // 此处不能用箭头函数，computed是对象，否则this是undefined。
           return this.$store.state.age
       },
       number: {
           get: function() {
               return this.$store.state.number
           },
           set: function(v) {
               return this.$store.commit('setNumber', v)
           }
       }
    }
}
</script>