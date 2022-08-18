<template>
  <div class="contact">
    <h2 data-vel="subheader">This is an contact page</h2>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    setTimeout(() => {
      next()
    }, 5000)
  }
}
</script>
