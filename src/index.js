import Wrapper from './Wrapper'
import layouts from './layouts'
import { version } from '../package.json'
import Vue from 'vue'

export function VueExtendLayout (Vue, options = {}) {
  // Register component layout
  Vue.component('layout', Wrapper)

  // Register layouts
  layouts().forEach(c => {
    c = c.default || c
    Vue.component(c.name, c)
  })
}

export const layout = {
  beforeCreate () {
    let res = Vue.compile(`<${(this.$route.meta.layout || 'default')} />`)
    this.$options.render = res.render
  },
  watch: {
    '$route' () {
      let res = Vue.compile(`<${(this.$route.meta.layout || 'default')} />`)
      this.$options.render = res.render
      this.$forceUpdate()
    }
  }
}

export default {
  VueExtendLayout,
  layout,
  version
}
