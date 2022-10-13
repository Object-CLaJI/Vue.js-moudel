<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      欢迎访问本网站该网站由一个标准的<br>
vue/2.0生成
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
		<router-link to="/guanyuwomeng">关于我们</router-link>
		<router-link to="/shouye">首页</router-link>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">关于我们</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">服务类目</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">企业文化</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">产品下载</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">渗透测试</a></li>
    </ul>
    <h3>友情链接</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
<!-- 	<router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #b30003;
}
</style>
