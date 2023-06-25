<script setup lang="ts">

import router from "@/router";
</script>

<template>
  <v-list density="compact" nav>
    <v-list-item @click="router.push('/')" prepend-icon="mdi-folder" title="Home"></v-list-item>
    <v-list-item @click="router.push('/Login')" prepend-icon="mdi-folder" title="Login"></v-list-item>
  </v-list>
</template>

<style scoped>

</style>
