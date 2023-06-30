<script lang="ts">
import {containsCharRule, containsNumberRule, notEmptyRule, validEmailRule} from "@/util/string.util";
import isAuthenticated, {authenticate} from "@/services/auth.service";
import router from "@/router";

export default {
  data: () => {
    return {
      email: "",
      password: "",
      emailRules: [notEmptyRule, validEmailRule],
      passwordRules: [notEmptyRule, containsNumberRule, containsCharRule]
    }
  },
  methods: {
    submit: (email: string, password: string) => {
      authenticate(email, password)
      router.push("/")
    }
  },
  beforeCreate() {
    if (isAuthenticated()) {
      router.push("/")
    }
  }
}
</script>

<template>
  <v-sheet width="300" class="mx-auto">
    <h1>Login</h1>
    <v-form @submit.prevent>
      <v-text-field :model="email" label="Email" :rules="emailRules"/>
      <v-text-field :mode="password" label="Password" type="password" :rules="passwordRules"/>
      <v-btn type="submit" variant="tonal" block class="mt-2" @click="submit(email, password)">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<style scoped>

</style>
