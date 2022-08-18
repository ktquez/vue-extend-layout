<template>
  <div>
    <header>
      <h1 data-vel="header">{{ title }}</h1>
      <navigation />
    </header>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'pageLayout',
  components: { Navigation },

  data () {
    return {
      title: 'This layout is PAGE'
    }
  }
}
</script>
