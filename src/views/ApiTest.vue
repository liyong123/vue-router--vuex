<template>
    <div>
        <span>请求测试页面</span>
        <button @click="requestTest">点击我</button>
    </div>
</template>
<script>
import apiData from '../api/apiTest'
export default {
    name: 'ApiTest',
    async mounted() {
       const result = await apiData.apiFunObj.getDataTest()
       console.log('result1', result)
    },
    methods: {
        async requestTest() {
            const params = {
                name: 'bluesLi'
            }
            const result = await apiData.apiFunObj.postTest(params)
            console.log('result2:', result)
        }
    }
}
</script>