import Home from './components/Home.vue'

import Banner from './components/banner/Banner.vue'
import AddBanner from './components/banner/addbanner.vue'
import ShowBanner from './components/banner/showbanner.vue'
import DelBanner from './components/banner/delbanner.vue'

import Calendar from './components/calendar/Calendar.vue'
import ShowCal from './components/calendar/showcal.vue'
import UpdateCal from './components/calendar/updatecal.vue'

import Start from './components/start/Start.vue'
import ShowSta from './components/start/showstart.vue'
import UpdateSta from './components/start/updatestart.vue'

import Version from './components/version/Version.vue'
import addVer from './components/version/addver.vue'
import appVer from './components/version/appver.vue'

import Patch from './components/patch/Patch.vue'
import addPatch from './components/patch/addpatch.vue'
import appPatch from './components/patch/apppatch.vue'
import News from './components/News.vue'

export default {
	'home': {
		component: Home,
		// subRoutes: {
		// 	'news': {
		// 		component: News,
		// 		subRoutes: {
		// 			'detail/:id': {
		// 				name: 'detail',
		// 				component: NewsDetail
		// 			}
		// 		}
		// 	},
		// 	'message': {
		// 		component: Message
		// 	}
		// }
	},
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
					component: appVer
				},
				'appver/:id':{
					name: 'version',
					component: appVer
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
					component: appPatch
				},
				'/apppatch/:id':{
					component: appVer
				}
			}
	}
}