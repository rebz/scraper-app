import Vue from 'vue'
import Router from 'vue-router'

import DashboardRoutes from '@/views/dashboard/routes'
import SitesRoutes from '@/views/sites/routes'
import SettingsRoutes from '@/views/settings/routes'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	linkActiveClass: 'active',
	linkExactActiveClass: 'active-exact',
	scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
        return { x: 0, y: 0 }
    },
	routes: [
		...DashboardRoutes,
		...SitesRoutes,
		...SettingsRoutes
		// {
		//   path: '/',
		//   name: 'home',
		//   component: Home
		// },
		// {
		//   path: '/about',
		//   name: 'about',
		//   // route level code-splitting
		//   // this generates a separate chunk (about.[hash].js) for this route
		//   // which is lazy-loaded when the route is visited.
		//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		// }
	]
})
