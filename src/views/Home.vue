<template>
  <div class="home">
    <button class='button' @click="goEvent(1)">路由跳转path</button>
    <button class='button' @click="goEvent(2)">路由跳转name</button>
    <button class='button' @click="goEvent(3)">路由跳转params</button>
    <button class='button' @click="goEvent(4)">路由跳转query</button>
    <button class='button' @click="goEvent(5)">路由替换</button>
    <button class='button' @click="goEvent(6)">路由前进后退</button>
    <img alt="Vue logo" src="@/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'Home',
  data() {
    return {
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    goEvent(v) {
      if (v === 1) {
        this.$router.push({
          path: '/news'
        }, () => {
           //成功回调函数
        }, () => {
          /* 失败回调函数 */
        })
      } else if(v === 2) {
        this.$router.push({
          name: 'News'
        })
      } else if(v === 3) {
        this.$router.push({
          /* path 和 params 不可同时使用 */
          name: 'NewsDetail',
          params: {
            id: 456
          }
        })
      } else if(v === 4) {
        this.$router.push({
          path: '/news/123',
          query: {
            usename: 'xiaoming',
            password: '8888'
          }
        })
      } else if( v === 5) {
        this.$router.replace({
          path: '/news/123',
          query: {
            usename: 'xiaoming',
            password: '8888'
          }
        }, () => {
          // 回调函数
        }, () => {
          /* 失败回调函数 */
        })
      } else if( v ===6 ) {
        this.$router.go(1)
        this.$router.go(-1)
      }
    }
  }
}
</script>
<style lang='scss'  scoped>
    $width100: 100px;
    $padding10: 10px 20px;
    $default-size: 18px;
    @mixin flexBase(){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .home {
      @include flexBase();
      .button {
        background-color: pink;
        border-radius: 10px;
        border: none;
        font-size: $default-size;
        padding: $padding10;
        cursor: pointer;
        color: #fff;
        margin-bottom: 10px
      }
      img {
        width: $width100
      }
    }

</style>
