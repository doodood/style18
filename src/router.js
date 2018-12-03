import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AuthGuard from './auth-guard'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter : AuthGuard
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/sign-in',
      name: 'Signin',
      component: () => import(/* webpackChunkName: "about" */ './views/Signin.vue')
    },
		{
      path: '/sign-up',
      name: 'Signup',
      component: () => import(/* webpackChunkName: "about" */ './views/Signup.vue')
    }
  ]
})
