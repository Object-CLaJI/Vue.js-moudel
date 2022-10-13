import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import router from './router';
import ElemntUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);
Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
  router:router 
  }).$mount('#app')
