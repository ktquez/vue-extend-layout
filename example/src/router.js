import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => System.import(/* webpackChunkName: "Home" */ '@/pages/Home'),
      meta: {
        announcer: 'Home page'
      }
    },
    {
      name: 'about',
      path: '/about',
      component: () => System.import(/*  webpackChunkName: "About" */ '@/pages/About'),
      meta: {
        layout: 'about',
        announcer: 'About page'
      }
    },
    {
      name: 'contact',
      path: '/contact',
      component: () => System.import(/*  webpackChunkName: "Contact" */ '@/pages/Contact'),
      meta: {
        layout: 'contact',
        announcer: 'Contact page'
      }
    }
  ]
})

export default router
