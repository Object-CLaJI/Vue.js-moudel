<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your 平舆县玖袖网络科技有限公司 App"/>
<!-- 	<router-link to="/shouye">首页</router-link>
	<router-link to="/guanyuwomeng">关于我们</router-link>
	 -->
	 <router-view></router-view>
  </div>
</template>


<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
