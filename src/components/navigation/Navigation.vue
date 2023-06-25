<script setup lang="ts">

import Items from "./Items.vue";
import Profile from "./Profile.vue";
</script>

<template>
  <v-navigation-drawer
    expand-on-hover
    permanent
    rail
  >
    <Profile />

    <v-divider></v-divider>

    <Items />
  </v-navigation-drawer>
</template>

<style scoped>

</style>
