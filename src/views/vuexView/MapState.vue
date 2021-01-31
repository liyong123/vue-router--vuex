<template>
    <!-- mapState辅助函数介绍 -->
    <div>
        <!-- 第一种映射方式：不能set，所以用事件触发，代替v-model双向绑定 -->
        <h3>第一种映射方式：</h3>
        <p>数量：{{number}}</p>
        <input type="text" :value="number" @input='changeEvent1'>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'MapState',
    data() {
        return {
        }
    },
    mounted() {
      /* 此时this中包含了$store */
      console.log(this)
    },
    methods: {
      changeEvent1(e) {
          /* 第一种映射方式,用事件触发setNumber */
          this.$store.commit('setNumber', e.target.value)
      }
    },
    /* 第一种映射方式,映射数据到computed，数组获取state */
    computed: mapState(['number'])
}
</script>