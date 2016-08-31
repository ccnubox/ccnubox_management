import Content from './content/content.vue'

import Banner from './content/components/banner/Banner.vue'
import AddBanner from './content/components/banner/addbanner.vue'
import ShowBanner from './content/components/banner/showbanner.vue'
import DelBanner from './content/components/banner/delbanner.vue'

import Calendar from './content/components/calendar/Calendar.vue'
import ShowCal from './content/components/calendar/showcal.vue'
import UpdateCal from './content/components/calendar/updatecal.vue'

import Start from './content/components/start/Start.vue'
import ShowSta from './content/components/start/showstart.vue'
import UpdateSta from './content/components/start/updatestart.vue'

import Version from './content/components/version/Version.vue'
import latestVer from './content/components/version/latestver.vue'
import addVer from './content/components/version/addver.vue'
import appVer from './content/components/version/appver.vue'
import delVer from './content/components/version/delver.vue'

import Patch from './content/components/patch/Patch.vue'
import latestPat from './content/components/patch/latestpat.vue'
import addPatch from './content/components/patch/addpatch.vue'
import appPatch from './content/components/patch/apppatch.vue'
import delPatch from './content/components/patch/delpatch.vue'

import Product from './content/components/product/Product.vue'
import showprod from './content/components/product/showprod.vue'

import Login from './login.vue'

export default {
	'/':{
		component:Content,
		subRoutes:{
			'banner': {
				component: Banner,
					subRoutes: {
						'add':{
							component: AddBanner
						},
						'/':{
							component: ShowBanner
						},
						'delete':{
							component: DelBanner
						}
					}
			},
			'calendar': {
				component: Calendar,
					subRoutes: {
						'/': {
							component: ShowCal
						},
						'update': {
							component: UpdateCal
						}
					}
			},
			'start': {
				component: Start,
					subRoutes: {
						'/': {
							component: ShowSta
						},
						'update': {
							component: UpdateSta
						}
					}
			},
			'version':{
				component: Version,
					subRoutes: {
						'addver': {
							component: addVer
						},
						'/': {
							component: latestVer
						},
						'appver/:id':{
							name: 'version',
							component: appVer
						},
						'delver':{
							component: delVer
						}
					}
			},
			'patch':{
				component: Patch,
					subRoutes: {
						'addpatch': {
							component: addPatch
						},
						'/': {
							component: latestPat
						},
						'/apppatch/:id':{
							name: 'patch',
							component: appPatch
						},
						'delpatch':{
							component: delPatch
						}
					}
			},
			'product':{
				component: Product,
					subRoutes:{
						'/:id':{
							name:'product',
							component: showprod
						}
					}
			},
		}
	},
	'login':{
		component: Login
	}
}