<template>
  <div>
    <header>
      <h1 data-vel="header">This layout a OLD DEFAULT</h1>
      <navigation />
    </header>
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation'

export default {
  name: 'defaultLayout',
  components: { Navigation }
}
</script>
