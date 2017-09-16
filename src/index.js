import Wrapper from './Wrapper.vue'
import layouts from './layouts'
import { version } from '../package.json'

var installed = false

// Auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueExtendLayout);
}

export function VueExtendLayout (Vue, options = {}) {
  if (installed) return
  installed = true
  
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
    this.layoutRender(this.layoutCompile())
  },
  watch: {
    '$route' () {
      this.layoutRender(this.layoutCompile(), true)
    }
  },
  methods: {
    layoutCompile () {
      if (!Vue) return
      return Vue.compile(`<${(this.$route.meta.layout || 'default')} />`)
    },

    layoutRender (res, update) {
      this.$options.render = res.render
      this.$options.staticRenderFns = res.staticRenderFns
      if (update) this.$forceUpdate()
    }
  }
}

module.exports = {
  VueExtendLayout,
  layout,
  version
}
