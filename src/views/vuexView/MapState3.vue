<template>
    <!-- mapState辅助函数介绍 -->
    <div>
        <h3>第三种映射方式：</h3>
        <p>自身的年龄：{{oldSelf}}</p>
        <p>年龄：{{age}}</p>
        <p>年龄: {{oldAge}}</p>
        <p>数量：{{number}}</p>
        <input type="text" :value="number" @input='changeEvent1'>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'MapState3',
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
    /* 第三种映射方式：对象展开运算符，避免全部覆盖computed*/
    computed: {
        oldSelf: function(){
           return  this.old.split('').reverse().join('')
        },
        ...mapState({
            age: state => state.age, // 箭头函数，省略return
            number: 'number',
            oldAge: function(state) {
                return state.age + this.old //此处的this,就是代表vue的实例
            }
        })
    }
}
</script>