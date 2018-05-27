<template>
  <div>
    <h1>{{ title }}</h1>
    <h2 data-vel="header-contact">Contact Page</h2>
    <router-link to="/about" title="Go to about page" aria-label="Go to about page">About</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Contact',
    beforeRouteEnter (to, from, next) {
      setTimeout(() => {
        next({
          title: 'Essa é minha página de contato'
        })
      }, 5000)
    },
    data () {
      return {
        title: ''
      }
    }
  }
</script>

<style>

</style>