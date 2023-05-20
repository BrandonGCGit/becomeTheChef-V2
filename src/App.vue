<script>

export default {
  name: 'App',
}
</script>

<template>
  <main>
    <router-view name="navbar"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </main>
</template>

<style scoped>
</style>
