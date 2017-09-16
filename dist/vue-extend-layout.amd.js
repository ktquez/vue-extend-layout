define(['exports'], function (exports) { 'use strict';

var Wrapper = { render: function render() {
    var _vm = this;var _h = _vm.$createElement;var _c = _vm._self._c || _h;return _c('router-view');
  }, staticRenderFns: [],
  name: 'VueExtendLayout'
};

/**
 * Retrieve context components to global register on Vue
 * @export
 * @param {String} dirname
 * @return {Array} With layout components
 */
function layouts(dirname) {
  var layouts = require.context('@/layouts', false, /^\.\/.*\.vue$/);
  return layouts.keys().map(layouts);
}

var version = "0.1.2";

var installed = false;

// Auto install
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueExtendLayout);
}

function VueExtendLayout(Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

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

var layout = {
  beforeCreate: function beforeCreate() {
    this.layoutRender(this.layoutCompile());
  },

  watch: {
    '$route': function $route() {
      this.layoutRender(this.layoutCompile(), true);
    }
  },
  methods: {
    layoutCompile: function layoutCompile() {
      if (!Vue) return;
      return Vue.compile('<' + (this.$route.meta.layout || 'default') + ' />');
    },
    layoutRender: function layoutRender(res, update) {
      this.$options.render = res.render;
      this.$options.staticRenderFns = res.staticRenderFns;
      if (update) this.$forceUpdate();
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

Object.defineProperty(exports, '__esModule', { value: true });

});
