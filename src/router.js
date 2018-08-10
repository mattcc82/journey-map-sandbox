import Vue from 'vue'
import VueRouter from 'vue-router'
import Full from './views/Full'
import Painpoints from './views/Painpoints'
import Takeaways from './views/Takeaways'
import _404 from './views/404.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
    order: 1,
    show: true,
    path: '/painpoints',
    name: 'CUSTOMER PAIN POINTS',
    component: Painpoints
  },
  {
    order: 2,
    show: true,
    path: '/takeaways',
    name: 'KEY TAKEAWAYS & ACTIVATIONS',
    component: Takeaways
  },
  {
    order: 0,
    show: true,
    path: '/',
    name: 'CHARGE-IT FULL CUSTOMER JOURNEY',
    component: Full
  },
  {
    order: 999,
    show: false,
    path: '*',
    name: '404',
    component: _404
  }]
})

export default router
