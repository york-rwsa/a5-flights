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
      path: '/flightresults',
      name: 'flightresults',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "flightresults" */ './views/FlightResults.vue')
    },
    {
      path: '/carresults',
      name: 'carresults',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "carresults" */ './views/CarResults.vue')
    },
    {
      path: '/hotelresults',
      name: 'hotelresults',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "hotelresults" */ './views/HotelResults.vue')
    },
    {
      path: '/bookflight',
      name: 'bookflight',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "bookflight" */ './views/BookFlight.vue')
    },
    {
      path: '/bookpackage',
      name: 'bookpackage',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "bookpackage" */ './views/BookPackage.vue')
    }
  ]
})
