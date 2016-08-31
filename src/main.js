import Vue from 'vue'
import VueRouter from 'vue-router'
import routeConfig from './route-config'

Vue.use(VueRouter)

const router = new VueRouter()
router.map(routeConfig)
const App = Vue.extend(require('./App.vue'))
router.start(App, '#app')

new Vue({
		el: "body",
		components:{app:App}
	})