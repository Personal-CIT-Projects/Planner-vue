<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        expand-on-hover
        permanent
        rail
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
            :title="getName()"
            subtitle="sandra_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
          <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main></v-main>
    </v-layout>
  </v-card>
</template>

<style>
:root {
  overflow-y: hidden;
}

v-main {
  height: 100vh;
  overflow-y: auto;
}
</style>

<script>
import {getNameFromUser, getUserInfo} from "@/services/auth.service";
import init from "@/config/axios.config";

function getName() {
  const userInfo = getUserInfo()
  return userInfo !== null
    ? getNameFromUser(userInfo.user)
    : ''
}

export default {
  methods: {
    getName
  },
  beforeCreate() {
    init()
  }
}
</script>
