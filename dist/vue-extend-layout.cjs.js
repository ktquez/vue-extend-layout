'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Wrapper = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('router-view');
  }, staticRenderFns: [],
  name: 'VueExtendLayout'
};

/**
 * Retrieve context components to global register on Vue
 * @export
 * @return {Array} With layout components
 */
function layouts() {
  var layouts = require.context('@/layouts', false, /^\.\/.*\.vue$/);
  return layouts.keys().map(layouts);
}

var version = "0.1.4";

var installed = false;
var _Vue = {};

// Auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueExtendLayout);
}

/**
 * Install Plugin vue-extend-layout
 * 
 * @param {Vue} Vue 
 * @param {Object} [options={}] 
 */
function VueExtendLayout(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  _Vue = Vue;
  if (installed) return;
  installed = true;

  // Register component layout
  Vue.component('layout', Wrapper);

  // Register layouts
  layouts().forEach(function (c) {
    c = c.default || c;
    Vue.component(c.name, c);
  });
}

/**
 * Compile the layout
 *
 * @param {VueComponent} context Vue instance
 * @returns Compiled Component
 */
function layoutCompile(context) {
  return _Vue.compile('<' + (context.$route.meta.layout || 'default') + ' />');
}

/**
 * Render the layout
 *
 * @param {VueComponent} context Vue instance
 * @param {Object} res Compiled Component
 * @param {Boolean} update To force update component layout
 */
function layoutRender(context, res, update) {
  context.$options.render = res.render;
  context.$options.staticRenderFns = res.staticRenderFns;
  if (update) context.$forceUpdate();
}

/**
 * Mixed to Vue root instance
 */
var layout = {
  beforeCreate: function beforeCreate() {
    layoutRender(this, layoutCompile(this));
  },

  watch: {
    '$route': function $route() {
      layoutRender(this, layoutCompile(this), true);
    }
  }
};

module.exports = {
  VueExtendLayout: VueExtendLayout,
  layout: layout,
  version: version
};

exports.VueExtendLayout = VueExtendLayout;
exports.layout = layout;
