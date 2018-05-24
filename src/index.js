import layouts from './layouts'
import { OPTIONS } from './constants'

let _Vue = {}
let _options = {}
let _hasLoaded = false

/**
 * Install Plugin vue-extend-layout
 *
 * @param {Vue} Vue
 * @param {Object} [options={}]
 */
export function VueExtendLayout (Vue, options = {}) {
  _Vue = Vue
  _options = {...OPTIONS, ...options}

  // Register layouts
  layouts().forEach(c => {
    c = c.default || c
    Vue.component(`${_options.prefix}-${c.name}`, c)
  })
}

/**
 * Compile the layout
 *
 * @returns Compiled Component
 */
function layoutCompile (layout) {
  return _Vue.compile(`<${_options.prefix}-${layout} />`)
}

/**
 * Render the layout
 *
 * @param {Object} res Compiled Component
 * @param {Boolean} update To force update component layout
 */
function layoutRender (res, update) {
  this.$options.render = res.render
  this.$options.staticRenderFns = res.staticRenderFns
  if (update) {
    this.$forceUpdate()
    _hasLoaded = true
  }
}

/**
 * Mixed to Vue root instance
 */
export const layout = {
  beforeCreate () {
    if (!_options.loader) return
    setTimeout(() => {
      layoutRender.call(this, layoutCompile(_options.loader), !_hasLoaded)
    }, 2000)
  },
  watch: {
    '$route' () {
      layoutRender.call(this, layoutCompile(this.$route.meta.layout || _options.default), true)
    }
  }
}

export default {
  VueExtendLayout,
  layout
}
