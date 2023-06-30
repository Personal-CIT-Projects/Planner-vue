<template>
  <v-list>
    <v-list-item
      v-if="isAuthenticated"
      :prepend-avatar="avatar.length > 0 ? avatar : '/avatar.png'"
      :title="fullName"
      :subtitle="email"
    ></v-list-item>
    <v-list-item
      v-if="!isAuthenticated"
      prepend-icon="mdi-login"
      title="Login"
      @click="router.push('/Login')"
    ></v-list-item>
  </v-list>
</template>

<style scoped>

</style>

<script lang="ts">
import {getNameFromUser, getUserInfo} from "@/services/auth.service";
import router from "@/router";

export default {
  data: () => {
    return {fullName: "", email: "", avatar: "", isAuthenticated: false, router}
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
