import VueRouter from 'vue-router'
import shouye from '../components/shouye.vue'
import guanyuwomeng from '../components/guanyuwomeng.vue'
// Vue.use(VueRouter);
const router = new VueRouter({
	mode:"history",
	routes:[
		
		{
		path:'/shouye',
		name:'shouye',
		component:shouye	
		},
		{
			path:'/guanyuwomeng',
			name:'guanyuwomeng',
			component:guanyuwomeng
		}
	]	
})
// const router = new VueRouter({
// 	routes,
// 	mode:'history'
	
// })
export default router