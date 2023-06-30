<script setup lang="ts">

import router from "@/router";
</script>
<script lang="ts">
import isAuthenticated, {logout} from "@/services/auth.service";

export default {
  methods: {
    isAuthenticated: isAuthenticated,
    logout: logout
  }
}
</script>

<template>
  <v-list density="compact" nav>
    <v-list-item @click="router.push('/')" prepend-icon="mdi-folder" title="Home"></v-list-item>
    <div v-if="isAuthenticated()">
      <v-divider />
      <v-list-item @click="logout()" prepend-icon="mdi-logout" title="Logout"></v-list-item>
    </div>
  </v-list>
</template>

<style scoped>

</style>
