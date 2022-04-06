import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'


Vue.use(VueRouter)

  const routes = [
	{
		path: '/',
		name: 'Layout',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'Home',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "login" */ '../views/Home')
			},
			{
				path: '/corporateInformation',
				name: 'CorporateInformation',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "corporateInformation" */ '../views/corporateInformation/index')
			},
			{
				path: '/corporateInformation/changePassword',
				name: 'ChangePassword',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "ChangePassword" */ '../views/corporateInformation/ChangePassword')
			},
			{
				path: '/corporateInformation/packagePurchase',
				name: 'PackagePurchase',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "PackagePurchase" */ '../views/corporateInformation/PackagePurchase')
			},
			{
				path: '/template',
				name: 'Template',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "PackagePurchase" */ '../views/template/index')
			},
			{
				path: '/pendingList',
				name: 'PendingList',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () => import(/* webpackChunkName: "PackagePurchase" */ '../views/pendingList/index')
			},
		]
	},
	{
		path: '/login',
		name: 'Login',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "login" */ '../views/login')
	}
]

const router = new VueRouter({
  routes
})

export default router
