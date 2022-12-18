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
  text-transform: none !important;
}

.title-text {
  font-size: 2rem;
  line-height: 2.5rem;
}

.normal-text {
  font-size: 1.2rem;
}

.v-btn {
  height: 3.6rem !important;
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

.card-active {
  border-bottom: 5px solid #70a43c !important;
}

.box-shadow {
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2)!important;
  -webkit-box-shadow: 0 3px 10px rgb(0 0 0 / 0.2)!important;
  -moz-box-shadow: 0 3px 10px rgb(0 0 0 / 0.2)!important;
}

.v-ripple__container {
    display:none !important;
}

.v-btn:before {
  background-color: transparent;
}
</style>
