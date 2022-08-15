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
    },
    pathAlias: {
      type: String,
      default: '@'
    }
  },

  data () {
    return {
      layoutName: 'default'
    }
  },

  watch: {
    '$route': {
      immediate: true,
      handler (route) {
        const newLayout = route.meta.layout
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
      return () => import(/* webpackChunkName: "layout-[request]" */ `${this.pathAlias}/${this.path}/${ln}.vue`)
    }
  }
}
</script>
