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
      path: '/sign-in',
      name: 'Signin',
      component: () => import(/* webpackChunkName: "about" */ './views/Signin.vue')
    },
		{
      path: '/sign-up',
      name: 'Signup',
      component: () => import(/* webpackChunkName: "about" */ './views/Signup.vue')
    },
    {
      path: '/repas',
      name: 'Dish',
      beforeEnter : AuthGuard,
      component: () => import(/* webpackChunkName: "about" */ './components/Dish/Dish.vue')
    },
    {
      path: '/repas/nouveau',
      name: 'New Dish',
      beforeEnter : AuthGuard,
      component: () => import(/* webpackChunkName: "about" */ './components/Dish/AddDish.vue')
    },
    {
      path: '/secret-santa',
      name: 'SecretSanta',
      beforeEnter : AuthGuard,
      component: () => import(/* webpackChunkName: "about" */ './views/SecretSanta.vue')
    },
    {
      path: '/jeux-de-societe',
      name: 'Games',
      beforeEnter : AuthGuard,
      component: () => import(/* webpackChunkName: "about" */ './components/Game/Game.vue')
    }
  ]
})
