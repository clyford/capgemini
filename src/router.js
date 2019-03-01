import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/propos',
      name: 'propos',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName:  "logo" */ './views/About.vue')
    },
    {
      path: '/evenements',
      name: 'evenements',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: logo" */ './views/Evenements.vue')
    },
    {
      path: '/projets',
      name: 'projets',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName:  "logo" */ './views/Projets.vue')
    },

    {
      path: '/inscrire',
      name: 'inscrire',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName:  "logo" */ './views/Sinscrire.vue')
    },

    {
      path: '/connecter',
      name: 'connecter',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName:  "logo" */ './views/Seconnecter.vue')
    },


    {
      path: '/employees',
      name: 'employees',
      component: () => import('./views/Employees.vue')
    },

    
    
    
  ]
})
