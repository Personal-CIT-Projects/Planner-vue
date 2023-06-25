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

export default {
  components: {Navigation},
  methods: {
    router() {
      return router
    }
  },
  beforeCreate() {
    init()
  }
}
</script>
