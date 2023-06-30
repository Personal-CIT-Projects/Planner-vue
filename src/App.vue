<template>
  <v-card>
    <v-layout>
      <Navigation />
      <v-main>
        <v-container>
          <router-view/>
        </v-container>
      </v-main>
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
import init from "@/config/axios.config";
import router from "./router";
import Navigation from "@/components/navigation/Navigation.vue";
import {refreshUserInfo} from "@/services/auth.service";

export default {
  components: {Navigation},
  methods: {
    router() {
      return router
    }
  },
  beforeCreate() {
    init()
  },
  created() {
    refreshUserInfo()
    setInterval(() => {
      refreshUserInfo()
    }, 10000)
  }
}
</script>
