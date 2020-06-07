<template>
    <div>
        <h1>newsDetail:{{$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
    name: 'newsDetail',
    data() {
        return {
        }
    },
    mounted() {
        console.log(this)
    },
    watch: {
        /* 路由监听 
           可以根据不同的路由参数，获取相应的页面数据
        */
        '$route': ((to, from) => {
           console.log({to, from})
        })
    }
}
</script>