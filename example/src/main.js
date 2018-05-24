import Vue from 'vue'
import router from './router.js'
import { VueExtendLayout, layout } from '../vue-extend-layout'

Vue.use(VueExtendLayout, {
  loader: 'loader'
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  ...layout
})
