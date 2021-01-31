<template>
    <!-- mapState辅助函数介绍 -->
    <div>
        <h3>第二种映射方式：</h3>
        <p>年龄：{{age}}</p>
        <p>年龄: {{oldAge}}</p>
        <p>数量：{{number}}</p>
        <input type="text" :value="number" @input='changeEvent1'>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'MapState2',
    data() {
        return {
            old: ' years old'
        }
    },
    mounted() {
      /* 此时this中包含了$store */
      console.log(this)
    },
    methods: {
      changeEvent1(e) {
          this.$store.commit('setNumber', e.target.value)
      }
    },
    /* 第二种映射方式：对象获取state */
    computed: mapState({
        age: state => state.age, // 箭头函数，省略return
        number: 'number',
        oldAge: function(state) { // 此处必须使用常规函数
            return state.age + this.old //state中的age和当前的old合成，此处的this,就是代表vue的实例
        }
    })
}
</script>