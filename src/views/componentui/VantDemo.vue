<template>
  <div>
    <!-- <Button type='primary'>vant按钮</Button>
    <Checkbox>复选框</Checkbox> -->
    <van-button type="primary">默认按钮</van-button>
    <van-checkbox v-model="checked">复选框</van-checkbox>
    <van-switch v-model="checked" />
    <van-cell title="选择单个日期" :value="date" @click="show = true" />
    <van-calendar v-model="show" @confirm="onConfirm" />
  </div>
</template>

<script>
/* 在组件里按需引入 ,全局按需引入参考：https://blog.csdn.net/Usesworder/article/details/103824817/*/
/* import { Button, Checkbox } from 'vant'; */
export default {
  name: 'VantDemo',
  data() {
    return {
      date: '2020-07-04',
      show: false,
      checked: false
    }
  },
  components: {
    /* Button,
    Checkbox */
  },
  methods: {
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      this.show = false;
      this.date = this.formatDate(date);
    },
  }
}
</script>
<style lang='scss'  scoped>
</style>
