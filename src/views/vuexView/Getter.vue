<template>
    <div>
        <!-- store中的计算属性 -->
        <p v-for="(item, index) in filterList" :key='index'>
            {{item.name}}
        </p>
        <!-- 组件自己的计算属性 -->
        <p style="color: red" v-for="(item, index) in slefFilterList" :key='"abc"+ index'>
            {{item.name}}
        </p>
         <p>{{getterParams}}</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Getter',
    data() {
        return {
        }
    },
    computed: {
        slefFilterList: function() {
            return this.$store.getters.filterList
        },
        getterParams: function() {
            return this.$store.getters.reverseWord(12456789)
        },
        /* mapGetters 辅助函数仅仅是将 store 中的 getter 映射到局部计算属性： */
        /* 如果你想将一个 getter 属性另取一个名字，使用对象形式： */
        /* 扩展运算符，避免覆盖掉本页面的计算属性 */
        ...mapGetters(['filterList'])
    }
}
</script>