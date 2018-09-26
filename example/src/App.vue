<template>
  <div id="app">
    <vue-extend-layouts path="views/wrappers" />
  </div>
</template>

<script>
import VueExtendLayouts from '../vue-extend-layout.vue'

export default {
  name: 'App',
  components: { VueExtendLayouts }
}
</script>
