<template>
  <div id="app">
    <Headerer></Headerer>
    <div id="nav">
      <router-link to="/goods">商品</router-link>
      <router-link to="/ratings">评论</router-link>
      <router-link to="/seller'">商家</router-link>
    </div>
    <router-view/>
  </div>
</template>


<script>
  import Headerer from './components/header/Header.vue'
  export default {
    name: "app",
    components:{
      Headerer
    }
  }
</script>

<style lang="stylus">
  @import "./assets/stylus/base.styl";
  @import "./assets/stylus/icon.styl";
  *{
    margin: 0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
