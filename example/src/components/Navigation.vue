<template>
  <nav id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ path: '/', query: { plan: 'content'} }">Home with query param</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link>
  </nav>
</template>
