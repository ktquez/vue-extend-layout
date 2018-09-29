<template>
  <div>
    <header>
      <h1 data-vel="header">This layout is PAGE</h1>
      <navigation />
    </header>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'pageLayout',
  components: { Navigation }
}
</script>
