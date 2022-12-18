<template>
  <v-app>
    <v-main class="accent">
      <NavBar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./core/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: "Poppins", "Roboto", sans-serif;
}

.v-btn {
  text-transform: none !important;
}
</style>
