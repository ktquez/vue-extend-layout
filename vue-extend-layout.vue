<template>
  <component :is="currentLayout" />
</template>

<script>
export default {
  name: 'VueExtendLayout2',

  props: {
    layout: { type: String },
    path: {
      type: String,
      default: 'layouts'
    }
  },

  data () {
    return {
      p_layout: null,
      moduleLayout: null,
      hasLoaded: false
    }
  },

  computed: {
    currentLayout () {
      if (this.hasLoaded) return this.moduleLayout
      if (this.isDefault) return
      const layout = this.p_layout || this.$route.meta.layout || 'default'
      this.hasLoaded = true
      this.moduleLayout = () => import(/* webpackChunkName: "layout-[request]" */ `@/${this.path}/${layout}.vue`)
      return this.moduleLayout
    },

    isDefault () {
      return !this.$route.meta.layout && !this.$route.name
    }
  },

  watch: {
    '$route' () {
      if (this.hasLoaded) return
      this.p_layout = this.$route.meta.layout
    }
  },

  created () {
    this.p_layout = this.layout
  }
}
</script>
