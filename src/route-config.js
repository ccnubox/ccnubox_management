import Content from './content/content.vue'

import Banner from './content/components/banner/Banner.vue'
import AddBanner from './content/components/banner/addbanner.vue'
import ShowBanner from './content/components/banner/showbanner.vue'
import DelBanner from './content/components/banner/delbanner.vue'

import BannerIos from './content/components/banner-ios/Banner.vue'
import AddBannerIos from './content/components/banner-ios/addbanner.vue'
import ShowBannerIos from './content/components/banner-ios/showbanner.vue'
import DelBannerIos from './content/components/banner-ios/delbanner.vue'

import Calendar from './content/components/calendar/Calendar.vue'
import ShowCal from './content/components/calendar/showcal.vue'
import UpdateCal from './content/components/calendar/updatecal.vue'

import CalendarIos from './content/components/calendar-ios/Calendar.vue'
import ShowCalIos from './content/components/calendar-ios/showcal.vue'
import UpdateCalIos from './content/components/calendar-ios/updatecal.vue'

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

import iosDevice from './content/components/ios/ios.vue'
import iosShow from './content/components/ios/showios.vue'
import iosRegister from './content/components/ios/register.vue'
import iosPush from './content/components/ios/push.vue'

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
			'banner-ios':{
				component:BannerIos,
					subRoutes:{
						'add':{
							component: AddBannerIos
						},
						'/':{
							component: ShowBannerIos
						},
						'delete':{
							component: DelBannerIos
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
			'calendar-ios':{
				component: CalendarIos,
					subRoutes:{
						'/': {
							component: ShowCalIos
						},
						'update': {
							component: UpdateCalIos
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
						'/latestver': {
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
			'ios':{
				component: iosDevice,
					subRoutes:{
						'/':{
							component: iosShow
						},
						'/register':{
							component:iosRegister
						},
						'/push':{
							component:iosPush
						}
					}
			}
		}
	},
	'login':{
		component: Login
	}
}