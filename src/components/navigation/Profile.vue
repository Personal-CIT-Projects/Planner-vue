<template>
  <v-list>
    <v-list-item
      :prepend-avatar="avatar"
      :title="fullName"
      :subtitle="email"
    ></v-list-item>
  </v-list>
</template>

<style scoped>

</style>

<script lang="ts">
import {getNameFromUser, getUserInfo} from "@/services/auth.service";

export default {
  data: () => {
    return {fullName: "", email: "", avatar: "", isAuthenticated: false}
  },
  created() {
    setInterval(() => {
      const currentUser = getUserInfo()
      this.fullName = getNameFromUser(currentUser)
      this.email = currentUser?.username ?? ""
      this.avatar = currentUser?.avatar ?? ""
      this.isAuthenticated = currentUser !== null
    }, 1000)
  }
}
</script>
