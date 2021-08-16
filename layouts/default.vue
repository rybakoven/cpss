<template>
  <v-app>
    <common-sidebar />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy;Cpss-admin</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false
    }
  }
}
</script>

<style scoped>
.cpss-loaded {
  color: green;
}
</style>
