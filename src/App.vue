<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <!-- <Alert v-if="isShow" :title= 'title' :content= 'content' :cancelEvent= 'cancelEvent' :confirmEvent= 'confirmEvent'></Alert> -->
    <!-- <AlertSass v-if="isShow" :title= 'title' :content= 'content' :cancelEvent= 'cancelEvent' :confirmEvent= 'confirmEvent'></AlertSass> -->
  </div>
</template>
<script>
/* import Alert from './components/Alert' */ 
/* import AlertSass from './components/AlertSass' */
export default {
  name: 'app',
  data: () => {
    return {
      title: '跳转页面',
      content: '确定跳转到百度？',
      isShow: true,
    }
  },
  methods: {
    cancelEvent() {
      this.isShow = false
    },
    confirmEvent() {
      location.href = "http://www.baidu.com"
    }
  },
  components: {
    /* Alert, */
    /* AlertSass */
  }
}
</script>
<style lang='scss' scoped>
/* <style lang='less'> */
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
