<template>
  <div>
    <h2>About Page</h2>
    <router-link to="/contact" title="Go to contact page" aria-label="Go to contact page">
      Contact
    </router-link>

    <hr>

    <div>
      <h1>Workers</h1>
      <router-link :to="{ name: 'about.workers' }" title="Go to user" aria-label="Go to user">
        Quem são nossos Workers
      </router-link>
    </div>

    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>
