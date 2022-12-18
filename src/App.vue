<template>
  <v-app>
    <v-main>
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

.title-text {
  font-size: 2rem;
}

.normal-text {
  font-size: 1.2rem;
}

.v-btn {
  height: 3.6rem!important;
}

.border-4 {
  border-radius: 1rem;
}

.col {
  padding: 1.5rem;
}

.full-height {
  height: 100vh;
}
</style>
