<template>
    <div>
        <h3>vuex:多组件共享数据。</h3>
        <p>点击数量：{{count}}</p>
        <button @click="addCount">添加点击数</button>
        <h3>vuex的方式：</h3>
        <p>点击数量：{{$store.state.number}}</p>
        <button @click="emitAddNum">添加点击数</button>
    </div>
</template>
<script>
export default {
    name: 'Count',
    data() {
        return {
            count: 1
        }
    },
    mounted() {
      /* 此时this中包含了$store */
      console.log(this)
    },
    methods: {
        addCount() {
            this.count++
        },
        emitAddNum() {
            /* 采用vuex可以在共享数据时，不混乱，
            可以随时看到是哪个action在修改数据 */
            this.$store.commit('addNum')
        }
    }
}
</script>