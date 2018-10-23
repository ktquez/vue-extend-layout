<template>
  <component :is="currentLayout"/>
</template>

<script>
export default {
  name: 'VueExtendLayout2',

  props: {
    layout: {
      type: String,
      default: 'default'
    },
    loading: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: 'layouts'
    }
  },

  data () {
    return {
      layoutName: 'default'
    }
  },

  watch: {
    '$route.meta.layout': {
      immediate: true,
      handler (newLayout) {
        if (!newLayout && !this.$route.name) { this.layoutName = this.loading; return }
        if (!newLayout) { this.layoutName = this.layout || 'default'; return }
        this.layoutName = newLayout
      }
    }
  },

  computed: {
    currentLayout () {
      if (!this.layoutName) return
      const ln = this.prefix + this.layoutName
      return () => import(/* webpackChunkName: "layout-[request]" */ `@/${this.path}/${ln}.vue`)
    }
  }
}
</script>
