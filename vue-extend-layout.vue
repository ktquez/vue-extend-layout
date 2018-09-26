<template>
  <component :is="currentLayout" />
</template>

<script>
export default {
  name: 'VueExtendLayout2',

  props: {
    layout: {
      type: String,
      default: 'default'
    },

    path: {
      type: String,
      default: 'layouts'
    }
  },

  computed: {
    currentLayout () {
      const layout = this.$route.meta.layout || this.layout
      return () => import(/* webpackChunkName: "layout-[request]" */ `@/${this.path}/${layout}.vue`)
    }
  }
}
</script>
