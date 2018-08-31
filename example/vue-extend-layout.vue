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
    }
  },

  computed: {
    currentLayout () {
      const layout = this.$route.meta.layout || this.layout
      return () => import(/* webpackChunkName: "layout-[request]" */ `@/layouts/${layout}.vue`)
    }
  }
}
</script>
