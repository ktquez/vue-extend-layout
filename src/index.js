import Wrapper from './Layout'
import layouts from './layouts'
import Vue from 'vue'

var installed = false

// automatic install
if (typeof Vue !== 'undefined') {
  // eslint-disable-next-line
  Vue.use(VuePickLayout)
}

export function VuePickLayout (Vue, options = {}) {
  if (installed) return
  installed = true

  // Register component layout
  Vue.component('layout', Wrapper)

  // Register layouts
  layouts().forEach(layout => {
    Vue.component(layout.default.name, layout.default)
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
  VuePickLayout,
  layout
}
